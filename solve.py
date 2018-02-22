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
    from_xy = entry >> 48 & 0xFF
    to_xy = entry >> 56 & 0xFF
    return (key, depth, score, from_xy, to_xy)

def hash_entry_encode(key, depth, score, from_xy, to_xy, self):
    assert 0 < key <= 0xFFFFFFFF
    assert 0 < depth <= 255, str(depth)
    assert 0 <= score <= 255, str(score)
    assert 0 <= from_xy < 256 and 0 <= to_xy < 256, '%s %s\n%s' % (from_xy, to_xy)
    return (key | depth << 32 | score << 40 | from_xy << 48 | to_xy << 56)

SIZE_X = SIZE_Y = PIECE_MASK = TOP_MASK = BOTTOM_MASK = LEFT_MASK = RIGHT_MASK = DIR_INFO = None

# Kinda hacky, initialize some globals based on the board size
def init_globals(size_x, size_y):
    global SIZE_X, SIZE_Y, PIECE_MASK, TOP_MASK, BOTTOM_MASK, LEFT_MASK, RIGHT_MASK, DIR_INFO

    SIZE_X, SIZE_Y = size_x, size_y

    PIECE_MASK = [
        [sum(bitmask(y, 0) for y in range(size)) for size in range(4)],
        [sum(bitmask(0, x) for x in range(size)) for size in range(4)]
    ]

    TOP_MASK    = sum(bitmask(0, x) for x in range(SIZE_X))
    BOTTOM_MASK = sum(bitmask(SIZE_Y - 1, x) for x in range(SIZE_X))
    LEFT_MASK   = sum(bitmask(y, 0) for y in range(SIZE_Y))
    RIGHT_MASK  = sum(bitmask(y, SIZE_X - 1) for y in range(SIZE_Y))

    # Move generation info. (stride, positive boundary mask, negative boundary mask) for
    # vertical and horizontal directions
    DIR_INFO = [
        [SIZE_X, BOTTOM_MASK, TOP_MASK],
        [1, RIGHT_MASK, LEFT_MASK]
    ]

def compose(y, x):
    return y * SIZE_X + x

def decompose(xy):
    return divmod(xy, SIZE_X)

def bitmask(y, x):
    return 1 << compose(y, x)

class Piece:
    __slots__ = ['xy', 'hori', 'size']
    def __init__(self, xy, hori, size):
        self.xy = xy
        self.hori = hori
        self.size = size
    def mask(self):
        return PIECE_MASK[self.hori][self.size] << self.xy

class Move:
    __slots__ = ['index', 'dxy']
    def __init__(self, index, dxy):
        self.index = index
        self.dxy = dxy

class Board:
    def __init__(self, size, pieces):
        init_globals(size, size)
        self.pieces = pieces
        self.init_state()

    def init_state(self):
        self.hash_key = 0
        self.state = 0
        for i, p in enumerate(self.pieces):
            self.place(p, i)

    def coord_list(self):
        return [p.xy for p in self.pieces]

    def init_from_coord_list(self, cl):
        for p, c in zip(self.pieces, cl):
            p.xy = c
        self.init_state()

    def verify_state(self):
        old_key = self.hash_key
        old_state = self.state
        self.init_state()
        if self.state != old_state:
            assert False
        if self.hash_key != old_key:
            print(old_key, self.hash_key)
            assert False

    def get_state_array(self):
        # Assemble an array of all piece indices. We only construct this manually in
        # some cases that don't need to be fast, so it's not worth updating incrementally.
        state = [[-1] * SIZE_X for i in range(SIZE_Y)]
        for index, piece in enumerate(self.pieces):
            for i in range(piece.size):
                xy = piece.xy + (i if piece.hori else i * SIZE_X)
                y, x = decompose(xy)
                state[y][x] = index
        return state

    def board_str(self, sep='\n'):
        state = self.get_state_array()
        return sep.join(''.join(('%X' % s) if s > 0 else '+' if s == 0 else '.' for s in row)
            for row in state)

    def print(self):
        print(self.board_str())

    def place(self, piece, index):
        self.hash_key ^= ZOBRIST[index << 8 | piece.xy]
        self.state ^= piece.mask()

    def gen_moves(self):
        for i, p in enumerate(self.pieces):
            init_mask = p.mask()
            state = self.state ^ init_mask
            stride, boundary_pos, boundary_neg = DIR_INFO[p.hori]

            # Generate in the positive direction
            boundary_pos |= state >> stride
            mask = init_mask
            dxy = 0
            while not boundary_pos & mask:
                mask <<= stride
                dxy += stride
                yield Move(i, dxy)

            # Generate in the negative direction
            boundary_neg |= state << stride
            mask = init_mask
            dxy = 0
            while not boundary_neg & mask:
                mask >>= stride
                dxy -= stride
                yield Move(i, dxy)

    def is_won(self):
        # Kinda hacky?
        return bool(self.pieces[0].mask() & RIGHT_MASK)

    def make_move(self, move, reverse=False):
        # XXX check validity
        piece = self.pieces[move.index]
        self.place(piece, move.index)
        piece.xy += -move.dxy if reverse else move.dxy
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
            (entry_key, entry_depth, entry_score, _, _) = hash_entry_decode(entry)
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
                xy1 = p.xy
                xy2 = xy1 + best_move.dxy
            else:
                xy1 = xy2 = 0
            HASH_TABLE[hash_index] = hash_entry_encode(hash_key_verify, depth, best_score,
                    xy1, xy2, self)

        return best_score

    def iterate(self):
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
                (key, depth, score, from_xy, to_xy) = hash_entry_decode(entry)
                if key != hash_key_verify:
                    break
                # Decode move
                state = self.get_state_array()
                fy, fx = decompose(from_xy)
                index = state[fy][fx]
                assert index >= 0
                piece = self.pieces[index]
                assert piece.xy == from_xy
                move = Move(index, to_xy - from_xy)
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
    main_y = 2
    board = Board(size, [Piece(main_y * size + x, 1, 2)])

    # Uniform random between 8-18 pieces, placed greedily, with early exit if we can't find
    # a place for a piece
    for p in range(random.randint(8, 16)):
        horizontal = random.randint(0, 1)
        # 80% chance of 2x1, otherwise 3x1
        piece_size = 3 if random.random() > .8 else 2
        # Random starting coordinate
        start_points = [[major, minor] for major in range(size - piece_size + 1)
                for minor in range(size)]

        # Kinda hacky: no other horizontal pieces on the same row as the main piece
        if horizontal:
            start_points = [[x, y] for [x, y] in start_points if y != main_y]

        random.shuffle(start_points)
        for [major, minor] in start_points:
            for offset in range(piece_size):
                if horizontal:
                    mask = bitmask(minor, major + offset)
                else:
                    mask = bitmask(major + offset, minor)
                if board.state & mask:
                    break
            else:
                # Nothing in the way, we can place the piece
                if horizontal:
                    xy = compose(minor, major)
                else:
                    xy = compose(major, minor)
                piece = Piece(xy, horizontal, piece_size)
                # Kinda hacky, reaching into Board's internals
                board.place(piece, len(board.pieces))
                board.pieces.append(piece)
                break
        else:
            break
    return board

def generate_puzzle(board=None, threshold=None):
    if not board:
        board = random_board()

        with open('current-puzzle.txt', 'w') as f:
            f.write(board.board_str())

    # Minimum score for "interesting" puzzles
    threshold = threshold or 240

    # Clear hash--hash keys are only valid for a given board configuration
    for i in range(len(HASH_TABLE)):
        HASH_TABLE[i] = 0
    depth, score = board.iterate()
    if not score:
        return None

    # Now walk around the board making moves to extend the solution. At this point
    # all moves should change the solution length by at most 1.
    candidates = [board.coord_list()]
    candidate = copy.deepcopy(board)
    for target_score in range(score, 0, -1):
        if target_score < threshold:
            print('Target %s: %s candidates' % (target_score, len(candidates)))
        next_candidates = []
        for candidate_p in candidates:
            candidate.init_from_coord_list(candidate_p)
            for move in candidate.gen_moves():
                candidate.make_move(move)
                move_depth, move_score = candidate.iterate()
                assert abs(move_score - target_score) <= 1, 'wacky score: %s %s' % (target_score, move_score)

                # Lower score, we found a harder problem. Add it to the next candidates set
                if move_score < target_score:
                    next_candidates.append(candidate.coord_list())

                candidate.make_move(move, reverse=True)

        # We searched through all problems with a given solution length. Check if there are any
        # longer problems for the next iteration, if not, break.
        if next_candidates:
            candidates = next_candidates
        else:
            break

    assert candidates
    candidate_p = candidates.pop()
    candidate.init_from_coord_list(candidate_p)
    if target_score < threshold:
        print('final puzzle, %s moves:' % (255 - target_score))
        candidate.print()
        with open('puzzles.txt', 'at') as f:
            f.write('{"moves": %s, "board": "%s"},\n' % (255 - target_score, candidate.board_str(sep=' ')))

    return candidate

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

    size = len(lines)
    pieces = []
    for x1, y1, x2, y2 in piece_bounds:
        assert (x1 == x2) ^ (y1 == y2)
        if x2 != x1:
            hori = 1
            p_size = x2 - x1 + 1
        else:
            hori = 0
            p_size = y2 - y1 + 1
        pieces.append(Piece(y1 * size + x1, hori, p_size))
    return Board(size, pieces)

if len(sys.argv) > 1 and sys.argv[1] == '-c':
    with open('current-puzzle.txt') as f:
        board = parse(f.read())
    generate_puzzle(board=board, threshold=255)
else:
    random.seed()
    while True:
        generate_puzzle()
