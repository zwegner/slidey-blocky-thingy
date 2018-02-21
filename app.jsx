var BOX_WIDTH = 50;

var PUZZLES = [
    {"moves": 11, "board": "...... .755AA 87++19 833219 BB62.9 ..6244"},
    {"moves": 11, "board": "....3. ..7738 ..++38 .6611. ...255 ...244"},
    {"moves": 11, "board": "....66 .99884 ..++.4 111..4 .27333 .27555"},
    {"moves": 11, "board": "...544 .775.. ++AB9. 66AB9. .88112 .33..2"},
    {"moves": 11, "board": "...777 33...A 84++BA 8422B. 6991B. 6CC155"},
    {"moves": 11, "board": "..4722 99475B 3++A5B 3..A.8 .11..8 ..66.."},
    {"moves": 11, "board": ".1664. 91.B4. 9++B.. 8.3577 8.35AA .225.."},
    {"moves": 11, "board": ".21188 .277.. .2++.A 5543.A 9.43.B 9.66.B"},
    {"moves": 11, "board": ".22... ..16A5 ++16A5 8.4.A. 894... 897733"},
    {"moves": 11, "board": ".72288 .733.B .7++.B 166CC9 1.5559 1AAA44"},
    {"moves": 11, "board": "3..88B 3DD.7B A5++7B A5..11 6499CC 64..22"},
    {"moves": 11, "board": "4..... 499555 4++6.. 2226.. 3311.8 ...778"},
    {"moves": 11, "board": "677733 6122DD 61++49 ..8.49 BB8.4A .CC55A"},
    {"moves": 11, "board": "A77766 A.9333 ++94.5 .224.5 .188.. .1..BB"},
    {"moves": 11, "board": "D777BB D.A333 81A++4 81A5.4 81.5C9 2266C9"},
    {"moves": 12, "board": "..21AA 332146 C8++46 C8999. 77.... BB555."},
    {"moves": 12, "board": "..94CC 2294A. 8++3A5 8773B5 ..DDB1 .66EE1"},
    {"moves": 12, "board": "..AABB ..11CC ++5.82 665.82 .97773 .944.3"},
    {"moves": 12, "board": "..B3CC 99B3.6 82++76 825571 AA...1 .444.1"},
    {"moves": 12, "board": "..CC77 999..A 5++41A 5..41B 23..1B 238866"},
    {"moves": 12, "board": ".1.772 .155.2 .++..2 8..344 8.6399 8.6AAA"},
    {"moves": 12, "board": ".74488 .799.6 B++2.6 B..2DD 51C233 51CAAA"},
    {"moves": 12, "board": ".89995 .822.5 ++B..7 AAB..7 3.4411 366..."},
    {"moves": 12, "board": "22255. 4...6. 4++A6. 119A.. ..9A88 .77733"},
    {"moves": 12, "board": "35DD99 356687 35++87 AB444. AB1.2. CC1.2."},
    {"moves": 12, "board": "666..4 333774 ++..94 81119. 8..2.. 8..255"},
    {"moves": 12, "board": "A55588 A66BB1 A2++91 .2.491 ...477 ...333"},
    {"moves": 12, "board": "AAA..B 77244B ++2.8B 511.8. 5C338. 5C6699"},
    {"moves": 13, "board": "..88A9 .22.A9 16++A9 16.577 C335.. C44BB."},
    {"moves": 13, "board": ".66557 22..97 ++.39. 4A.311 4ABBDD 488CCC"},
    {"moves": 13, "board": "8..999 8.3322 ++76.. ..76.. 44551A ....1A"},
    {"moves": 13, "board": "C9995D C.225D B++831 B66831 .7.EE1 .744AA"},
    {"moves": 14, "board": ".22... 4.DAA7 4.D++7 11D337 8699BB 8655CC"},
    {"moves": 14, "board": ".3..96 .34496 ++.2.. 7772.. 1..255 1..888"},
    {"moves": 14, "board": ".A77.B 5A333B 5++.8B 922.8. 9.6411 ..64.."},
    {"moves": 15, "board": ".....8 3..6.8 3++6.8 399744 .1.722 .155.."},
    {"moves": 15, "board": "114..B 63422B 63++75 998C75 AA8C.5 ..8CDD"},
    {"moves": 16, "board": ".55722 ...739 ..++39 668839 ..1AAA ..1.44"},
    {"moves": 16, "board": "22..58 .97758 .9++5A 3334.A C..466 C.BB11"},
    {"moves": 16, "board": "557BB8 .47668 D4++.8 DE..CC 1EAA33 122999"},
    {"moves": 16, "board": "618844 61..55 69++CB .922CB .9733D EE7AAD"},
    {"moves": 17, "board": "5..888 5AAA24 ++..24 116CC4 9.63BB 9773.."},
    {"moves": 18, "board": ".9966. EE288D ++241D 33341D C.BB77 CAAA55"},
    {"moves": 20, "board": ".9.366 .9.341 8B++41 8B554. ..C777 AAC.22"},
    {"moves": 21, "board": "992254 ...854 1++8.4 1.A666 ..A.7. .3337."},
    {"moves": 22, "board": "777.A3 ....A3 ++84.3 9984.. 511666 5..222"},
    {"moves": 22, "board": "777.A3 ....A3 ++84.3 9984.. 511666 5..222"},
];

class Piece {
    constructor(props) {
        this.isMain = props.isMain;
        this.x = props.x;
        this.y = props.y;
        this.dx = props.dx;
        this.dy = props.dy;
    }
}

class Move {
    constructor(props) {
        this.index = props.index;
        this.dx = props.dx;
        this.dy = props.dy;
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        var pieces, size;
        var posStr = props.posStr;
        if (props.puzzleNumber !== null)
            posStr = PUZZLES[props.puzzleNumber].board;
        if (posStr) {
            var pieceBounds = {};
            var lines = posStr.replace(/ /g, '\n').split('\n');
            size = lines.length;
            for (var y in lines) {
                y = y|0;
                var line = lines[y];
                for (var x in line) {
                    x = x|0;
                    var c = line[x];
                    if (c == '.')
                        continue;
                    if (pieceBounds[c] === undefined)
                        pieceBounds[c] = [x, y, x, y];
                    else {
                        var [ox, oy, _, _] = pieceBounds[c];
                        pieceBounds[c] = [ox, oy, x, y];
                    }
                }
            }
            pieces = [];
            for (var piece in pieceBounds) {
                var [x1, y1, x2, y2] = pieceBounds[piece];
                pieces.push(new Piece({isMain: piece == '+',
                    x: x1, y: y1, dx: x2 - x1 + 1, dy: y2 - y1 + 1}));
            }
        } else {
            size = props.size;
            pieces = props.pieces;
        }

        // Create a [y][x] -> piece index mapping
        var board = [];
        for (var y = 0; y < size; y++) {
            var row = [];
            for (var x = 0; x < size; x++)
                row.push(-1);
            board.push(row);
        }
        for (var index in pieces) {
            piece = pieces[index];
            this.place(board, piece, index|0);
        }

        this.drag = this.drag.bind(this);
        this.dragEnd = this.dragEnd.bind(this);

        this.state = {
            // Board state stuff
            size: size,
            pieces: pieces,
            board: board,
            moves: [],
            futureMoves: [],

            // Dragging stuff
            draggingIndex: null,
            dragStartX: null,
            dragStartY: null,
            offsetX: null,
            offsetY: null,
            // For velocity calculations
            dragLastX: null,
        };
    }

    place(board, piece, index) {
        for (var x = piece.x; x < piece.x + piece.dx; x++)
            for (var y = piece.y; y < piece.y + piece.dy; y++)
                board[y][x] = index;
    }

    // Make a move. Sentinel value of null goes forward or backwards in history, depending on 'reverse'
    doMove(move, reverse) {
        var moves = this.state.moves;
        var futureMoves = this.state.futureMoves;
        if (move !== null) {
            moves.push(move);
            futureMoves = [];
        } else {
            if (reverse) {
                move = moves.pop();
                futureMoves.push(move);
            } else {
                move = futureMoves.pop();
                moves.push(move);
            }
        }

        var piece = this.state.pieces[move.index];
        // Remove old piece
        this.place(this.state.board, piece, -1)
        // Move piece position
        var dx = move.dx, dy = move.dy;
        if (reverse)
            dx = -dx, dy = -dy;
        piece.x += dx;
        piece.y += dy;
        // Place new piece
        this.place(this.state.board, piece, move.index)

        this.setState({board: this.state.board, pieces: this.state.pieces,
            moves: moves, futureMoves: futureMoves});
    }

    isWon() {
        for (var piece of this.state.pieces)
            if (piece.isMain)
                return piece.x + piece.dx >= this.state.size;
        throw 'What?';
    }

    getPieceBounds(piece) {
        var minX = 0, maxX = 0, minY = 0, maxY = 0;
        if (piece.dx > 1) {
            // Left
            for (var x = piece.x - 1; x >= 0 && this.state.board[piece.y][x] == -1; x--)
                minX--;
            // Right
            for (var x = piece.x + piece.dx; x < this.state.size && this.state.board[piece.y][x] == -1; x++)
                maxX++;
            // Check for moving the main piece out of bounds for the winning move
            //if (piece.isMain && x == this.state.size)
            //    maxX++;
        } else {
            // Up
            for (var y = piece.y - 1; y >= 0 && this.state.board[y][piece.x] == -1; y--)
                minY--;
            // Down
            for (var y = piece.y + piece.dy; y < this.state.size && this.state.board[y][piece.x] == -1; y++)
                maxY++;
        }
        return [minX * BOX_WIDTH, maxX * BOX_WIDTH, minY * BOX_WIDTH, maxY * BOX_WIDTH];
    }

    dragStart(index, e) {
        if (e.button !== 0)
            return;
        this.setState({dragStartX: e.pageX, dragStartY: e.pageY, draggingIndex: index});
        e.stopPropagation();
        e.preventDefault();
    }

    drag(e) {
        if (this.state.draggingIndex === null)
            return;
        this.setState({
            offsetX: e.pageX - this.state.dragStartX,
            offsetY: e.pageY - this.state.dragStartY
        });
        e.stopPropagation();
        e.preventDefault();
    }

    dragEnd(e) {
        if (this.state.draggingIndex !== null) {
            var piece = this.state.pieces[this.state.draggingIndex];
            var [minX, maxX, minY, maxY] = this.getPieceBounds(piece);
            var dx = 0, dy = 0;
            if (this.state.offsetX !== null)
                dx = Math.min(maxX, Math.max(minX, this.state.offsetX));
            if (this.state.offsetY !== null)
                dy = Math.min(maxY, Math.max(minY, this.state.offsetY));
            dx = Math.round(dx / BOX_WIDTH);
            dy = Math.round(dy / BOX_WIDTH);
            if (dx || dy)
                this.doMove(new Move({index: this.state.draggingIndex, dx: dx, dy: dy}), null);
        }
        this.setState({offsetX: null, offsetY: null, draggingIndex: null});
        e.stopPropagation();
        e.preventDefault();
    }

    componentWillMount() {
        // Make the mouse move/mouse up event handlers global, since we want to know whenever these
        // things happen, no matter where the mouse is
        document.addEventListener('mousemove', this.drag);
        document.addEventListener('mouseup', this.dragEnd);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.drag);
        document.removeEventListener('mouseup', this.dragEnd);
    }

    render() {
        return <div>
                <div>Move those blocky bubbos all around until you can shimmy that greenish doodleydoo off to the right!</div>
                <div>Tall tippies can only move verticalicularly! Fat flerbies can only move horizontimontally!</div>
                <div style={{ paddingTop: '10px' }}/>

                <div>
                    <input type='button' disabled={ this.props.puzzleNumber == 0 }
                        onClick={ (e) => this.props.selectPuzzle(this.props.puzzleNumber - 1) }
                        className='button smallButton' value='&#x25C0;'/>
                    <div style={{ display: 'inline', width: '80px' }}>
                        Puzzle {this.props.puzzleNumber + 1}
                    </div>
                    <input type='button' disabled={ this.props.puzzleNumber == PUZZLES.length - 1 }
                        onClick={ (e) => this.props.selectPuzzle(this.props.puzzleNumber + 1) }
                        className='button smallButton' value='&#x25B6;'/>
                    <input type='button' onClick={ (e) => this.props.selectPuzzle(null) }
                        className='button smallButton' value='List'/>
                </div>

                <div style={{ paddingTop: '10px' }}/>

                <div style={{
                    backgroundColor: '#666',
                    height: this.state.size * BOX_WIDTH,
                    width: this.state.size * BOX_WIDTH,
                    margin: 'auto',
                    borderWidth: '5px',
                    borderStyle: 'inset',
                    borderRadius: '5px',
                }} >
                { this.state.pieces.map((piece, index) => {
                        var color = piece.isMain ? '#099' : '#999';
                        var x = piece.x * BOX_WIDTH, y = piece.y * BOX_WIDTH;
                        var isWon = piece.isMain && this.isWon();
                        if (index === this.state.draggingIndex) {
                            var [minX, maxX, minY, maxY] = this.getPieceBounds(piece);
                            if (this.state.offsetX !== null)
                                x += Math.min(maxX, Math.max(minX, this.state.offsetX));
                            if (this.state.offsetY !== null)
                                y += Math.min(maxY, Math.max(minY, this.state.offsetY));
                        }
                        return <div 
                                key={index}

                                onMouseDown={ (e) => this.dragStart(index, e) }

                                style={{
                                    marginTop: y,
                                    marginLeft: isWon ? x + 2 * BOX_WIDTH : x,
                                    transform: isWon ? 'translate(400px, 1000px) rotate(540deg)' : '',
                                    height: piece.dy * BOX_WIDTH,
                                    width: piece.dx * BOX_WIDTH,
                                    // Animate movements, but only pieces that aren't currently being dragged
                                    transition: index !== this.state.draggingIndex ? 
                                        isWon ? 'transform 1000ms ease-in 250ms, margin ease-in 250ms' : 'margin 250ms' : '',
                                    position: 'absolute'}}>
                                <div style={{
                                    color: color,
                                    backgroundColor: color,
                                    position: 'absolute',
                                    top: '0px', bottom: '0px', left: '0px', right: '0px',
                                    margin: '1px',
                                    borderWidth: '4px',
                                    borderStyle: 'outset',
                                    borderRadius: '4px',
                                    zIndex: 10,
                                }}/>
                                <div style={{
                                    position: 'absolute',
                                    top: '0px', bottom: '0px', left: '0px', right: '0px',
                                    margin: '1px',
                                    borderRadius: '4px',
                                    boxShadow: '2px 2px 1px black',
                                    zIndex: 5,
                                }}/>
                            </div>;
                    }) }
                </div>
                <div>
                    <div style={{ display: 'inline' }}>
                    <input type='button' disabled={ this.state.moves.length == 0 }
                        onClick={ (e) => this.doMove(null, true) }
                        className='button bigButton' value='&#x25C0;'/>
                    </div>
                    <div style={{ display: 'inline' }}>
                    <input type='button' disabled={ this.state.futureMoves.length == 0 }
                        onClick={ (e) => this.doMove(null, false) }
                        className='button bigButton' value='&#x25B6;'/>
                    </div>
                    <div style={{ display: 'inline', fontSize: '12', width: '80px' }}>
                        Moves: { this.state.moves.length }
                        { this.props.puzzleNumber !== null ? '/' + PUZZLES[this.props.puzzleNumber].moves : ''}
                    </div>
                </div>
            </div>;
    }
}

class PuzzleList extends React.Component {
    render() {
        return <div>
                <div>Select a puzzley buzzo!</div>
                <div style={{ paddingTop: '10px' }}/>
                <ul>
                    { PUZZLES.map((p, i) => <li key={i} onClick={() => this.props.selectPuzzle(i)}>
                            <div><strong>Puzzle {i + 1}</strong></div>
                            <div>{ p.moves} moves</div>
                        </li>) }
                </ul>
            </div>;
    }
}

class Base extends React.Component {
    constructor(props) {
        super(props);
        this.selectPuzzle = this.selectPuzzle.bind(this);
        this.state = {currentPuzzle: null};
    }
    selectPuzzle(i) {
        this.setState({currentPuzzle: i});
    }
    render() {
        return <div style={{
                backgroundColor: '#888',
                height: '100%', 
                width: '100%', }}>
                <div style={{ paddingTop: '20px',
                    textAlign: 'center',
                    fontFamily: 'Helvetica' 
                    }}>
                    <h1 style={{ textShadow: '2px 2px 2px #CCC' }}>Slidey Blocky Thingy</h1>
                    { this.state.currentPuzzle !== null ?
                        <Board key={this.state.currentPuzzle} puzzleNumber={this.state.currentPuzzle}
                            selectPuzzle={this.selectPuzzle} />
                        : <PuzzleList selectPuzzle={this.selectPuzzle}/> }
                </div>
            </div>;
    }
}
