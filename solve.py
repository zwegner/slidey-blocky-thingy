import array
import copy
import random
import sys
import time

# RKISS algorithm
def gen_rand_64(n):
    def rol(x, y):
        return (x << y) | (x >> 64 - y)
    def int64(x):
        return x & (1 << 64) - 1

    rand_state = [0x8C84A911159F4017, 0x062C0B602809C02E, 0xA48B831518DEA5D7,
            0x55AB3636D17F3AD3]
    for i in range(n):
        [a, b, c, d] = rand_state
        e = a - rol(b, 7)
        a = b ^ rol(c, 13)
        b = c + rol(d, 37)
        c = d + e
        d = e + a
        rand_state = [int64(a), int64(b), int64(c), int64(d)]
        yield int64(d)

ZOBRIST = list(gen_rand_64(16*16*64))
HASH_SIZE = 16 * (1 << 20)
HASH_MASK = HASH_SIZE - 1
assert HASH_SIZE & HASH_MASK == 0
HASH_TABLE = array.array('L', (0 for i in range(HASH_SIZE)))

def hash_entry_decode(entry):
    key = entry & 0xFFFFFFFF
    depth = entry >> 32 & 0xFF
    score = entry >> 40 & 0xFF
    from_x = entry >> 48 & 0xF
    from_y = entry >> 52 & 0xF
    to_x = entry >> 56 & 0xF
    to_y = entry >> 60 & 0xF
    return (key, depth, score, from_x, from_y, to_x, to_y)

def hash_entry_encode(key, depth, score, from_x, from_y, to_x, to_y, self):
    assert 0 < key <= 0xFFFFFFFF
    assert 0 < depth <= 255, str(depth)
    assert 0 <= score <= 255, str(score)
    assert 0 <= from_x < 16 and 0 <= from_y < 16 and 0 <= to_x < 16 and 0 <= to_y < 16, '%s %s %s %s\n%s' % (from_x, from_y, to_x, to_y)
    return (key | depth << 32 | score << 40 | from_x << 48 | from_y << 52 |
            to_x << 56 | to_y << 60)

class Piece:
    __slots__ = ['x', 'y', 'dx', 'dy']
    def __init__(self, x, y, dx, dy):
        self.x = x
        self.y = y
        self.dx = dx
        self.dy = dy
        assert (dx == 1 or dy == 1) and (dx > 1 or dy > 1)

class Move:
    __slots__ = ['index', 'dx', 'dy']
    def __init__(self, index, dx, dy):
        self.index = index
        self.dx = dx
        self.dy = dy

class Board:
    __slots__ = ['size_x', 'size_y', 'pieces', 'state', 'hash_key']
    def __init__(self, size, pieces):
        self.size_x = self.size_y = size
        self.pieces = pieces
        self.init_state()

    def init_state(self):
        self.hash_key = 0
        self.state = [[-1] * self.size_x for i in range(self.size_y)]
        for i, p in enumerate(self.pieces):
            self.place(p, i)

    def verify_state(self):
        old_key = self.hash_key
        old_state = self.state
        self.init_state()
        if self.state is old_state or self.state != old_state:
            print('%s\nnew\n%s' % (self.board_str(state=old_state), self.board_str()))
            assert False
        if self.hash_key != old_key:
            print(old_key, self.hash_key)
            assert False

    def board_str(self, state=None, sep='\n'):
        state = state or self.state
        return sep.join(''.join(('%X' % s) if s > 0 else '+' if s == 0 else '.' for s in row)
            for row in state)

    def print(self):
        print(self.board_str())

    def place(self, piece, index, remove=False):
        self.hash_key ^= ZOBRIST[index << 8 | piece.x << 4 | piece.y]
        if remove:
            index = -1
        for x in range(piece.x, piece.x + piece.dx):
            for y in range(piece.y, piece.y + piece.dy):
                self.state[y][x] = index

    def gen_moves(self):
        for i, p in enumerate(self.pieces):
            # Generate in x direction
            if p.dx > 1:
                for ddx, bx in [[1, p.x + p.dx - 1], [-1, p.x]]:
                    dx = ddx
                    while (0 <= bx + dx < self.size_x and
                            self.state[p.y][bx + dx] == -1):
                        yield Move(i, dx, 0)
                        dx += ddx
            # Generate in y direction
            elif p.dy > 1:
                for ddy, by in [[1, p.y + p.dy - 1], [-1, p.y]]:
                    dy = ddy
                    while (0 <= by + dy < self.size_y and
                            self.state[by + dy][p.x] == -1):
                        yield Move(i, 0, dy)
                        dy += ddy

    def is_won(self):
        # Kinda hacky?
        first = self.pieces[0]
        return first.x + first.dx == self.size_x

    def make_move(self, move, reverse=False):
        # XXX check validity
        piece = self.pieces[move.index]
        self.place(piece, move.index, remove=True)
        flip = -1 if reverse else 1
        piece.x += move.dx * flip
        piece.y += move.dy * flip
        self.place(piece, move.index)

    def search(self, depth):
        if self.is_won():
            return 255
        if depth == 0:
            # XXX return heuristic score
            return 0

        # Hash lookup
        hash_index = self.hash_key & HASH_MASK
        hash_key_verify = self.hash_key >> 32
        entry = HASH_TABLE[hash_index]
        if entry:
            (entry_key, entry_depth, entry_score, _, _, _, _) = hash_entry_decode(entry)
            if entry_key == hash_key_verify and entry_depth >= depth:
                return entry_score

        best_score = 0
        best_move = None
        for m in self.gen_moves():
            self.make_move(m)
            move_score = self.search(depth - 1)
            if move_score > best_score:
                best_score = move_score
                best_move = m
            self.make_move(m, reverse=True)

        # Adjust scores so that solutions further away have a lower score.
        # We give a 1-point penalty for every move. We do this here, giving scores
        # relative to this node in the tree, rather than keeping track of how deep
        # the search is so that the hash table doesn't depend on where the search started
        if best_score > 1:
            best_score -= 1

        # Hash store
        # Simple replacement policy: choose highest depth, newest on ties
        replace = True
        if entry:
            if entry_score == 0:
                replace = entry_depth <= depth
            else:
                replace = entry_score <= best_score

        if replace:
            if best_move:
                p = self.pieces[best_move.index]
                x1, y1 = p.x, p.y
                x2, y2 = x1 + best_move.dx, y1 + best_move.dy
            else:
                x1, y1, x2, y2 = 0, 0, 0, 0
            HASH_TABLE[hash_index] = hash_entry_encode(hash_key_verify, depth, best_score,
                    x1, y1, x2, y2, self)

        return best_score

    def iterate(self):
        start = time.time()
        for depth in range(60):
            score = self.search(depth)
            # Search until our depth is sufficient to ensure a minimal solution.
            # Due to interactions with hashing and moving around during the puzzle generation
            # search, a move can be part of a suboptimal solution, but still lead to a higher score
            # because it gives a hash hit for a position that was searched deeper than the best move.
            # In this case, the best move will always have a score of 0 (meaning no solution);
            # searching to a given depth ensures that all move paths have been searched at least
            # that deeply, and any solution that is that long (or shorter) will be found. By
            # waiting until the number of moves is as long as the depth, we ensure we found
            # the best solution.
            if 255 - score <= depth:
                break
        return depth, score

    def get_winning_sequence_from_hash(self):
        moves = []
        while True:
            hash_index = self.hash_key & HASH_MASK
            hash_key_verify = self.hash_key >> 32
            entry = HASH_TABLE[hash_index]
            if entry:
                (key, depth, score, from_x, from_y, to_x, to_y) = hash_entry_decode(entry)
                if key != hash_key_verify:
                    break
                # Decode move
                index = self.state[from_y][from_x]
                assert index >= 0
                piece = self.pieces[index]
                assert piece.x == from_x and piece.y == from_y
                move = Move(index, to_x - from_x, to_y - from_y)
                self.make_move(move)
                moves.append(move)
            else:
                break
        # Go back to the root position
        for move in reversed(moves):
            self.make_move(move, reverse=True)
        return moves

def random_board():
    # Always 6x6 for now
    size = 6
    # Start with a winning position--we're working backwards to the longest puzzle,
    # so we want to make sure that it's both solveable and that we don't get stuck in a local maximum
    x = 4
    board = Board(size, [Piece(x, 2, 2, 1)])

    # Uniform random between 8-18 pieces, placed greedily, with early exit if we can't find
    # a place for a piece
    for p in range(random.randint(8, 16)):
        horizontal = bool(random.randint(0, 1))
        # 80% chance of 2x1, otherwise 3x1
        piece_size = 3 if random.random() > .8 else 2
        # Random starting coordinate
        start_points = [[major, minor] for major in range(size - piece_size + 1)
                for minor in range(size)]

        # Kinda hacky: no other horizontal pieces on the same row as the main piece
        if horizontal:
            start_points = [[x, y] for [x, y] in start_points if y != board.pieces[0].y]

        random.shuffle(start_points)
        for [major, minor] in start_points:
            for offset in range(piece_size):
                if horizontal:
                    space = board.state[minor][major + offset]
                else:
                    space = board.state[major + offset][minor]
                if space != -1:
                    break
            else:
                # Nothing in the way, we can place the piece
                if horizontal:
                    piece = Piece(major, minor, piece_size, 1)
                else:
                    piece = Piece(minor, major, 1, piece_size)
                # Kinda hacky, reaching into Board's internals
                board.place(piece, len(board.pieces))
                board.pieces.append(piece)
                break
        else:
            break
    return board

def generate_puzzle():
    board = random_board()

    # Minimum score for "interesting" puzzles
    THRESHOLD = 240

    # Clear hash--hash keys are only valid for a given board configuration
    for i in range(len(HASH_TABLE)):
        HASH_TABLE[i] = 0
    depth, score = board.iterate()
    if not score:
        return None

    # Now walk around the board making moves to extend the solution. At this point
    # all moves should change the solution length by at most 1.
    candidates = [board]
    for target_score in range(score, 0, -1):
        if target_score < THRESHOLD:
            print('Target %s: %s candidates' % (target_score, len(candidates)))
        next_candidates = []
        for candidate in candidates:
            for move in candidate.gen_moves():
                candidate.make_move(move)
                move_depth, move_score = candidate.iterate()
                assert abs(move_score - target_score) <= 1, 'wacky score: %s %s' % (target_score, move_score)

                # Lower score, we found a harder problem. Add it to the next candidates set
                if move_score < target_score:
                    next_candidates.append(copy.deepcopy(candidate))

                candidate.make_move(move, reverse=True)

        # We searched through all problems with a given solution length. Check if there are any
        # longer problems for the next iteration, if not, break.
        if next_candidates:
            candidates = next_candidates
        else:
            break

    assert candidates
    board = candidates.pop()
    if target_score < THRESHOLD:
        print('final puzzle, %s moves:' % (255 - target_score))
        board.print()
        with open('puzzles.txt', 'at') as f:
            f.write('{"moves": %s, "board": "%s"},\n' % (255 - target_score, board.board_str(sep=' ')))

    return board

def parse(string):
    lines = string.splitlines()
    assert lines and all(len(line) == len(lines) for line in lines)
    piece_bounds = {}
    for y, line in enumerate(lines):
        for x, c in enumerate(line):
            if c != '.':
                if c not in piece_bounds:
                    piece_bounds[c] = (x, y, x, y)
                else:
                    ox, oy, _, _ = piece_bounds[c]
                    piece_bounds[c] = (ox, oy, x, y)

    # Hacky sorting
    piece_bounds = [piece_bounds.pop('+')] + [v for k, v in sorted(piece_bounds.items())]
    pieces = []
    for x1, y1, x2, y2 in piece_bounds:
        pieces.append(Piece(x1, y1, x2 - x1 + 1, y2 - y1 + 1))
    return Board(len(lines), pieces)

random.seed()
while True:
    generate_puzzle()
