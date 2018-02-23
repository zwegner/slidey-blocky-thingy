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
    {"moves": 18, "board": "388899 366..7 3++..7 2211.7 .B..55 .BAA44"},
    {"moves": 20, "board": ".1.66. .1.992 .1++42 77.542 A..588 A..333"},
    {"moves": 17, "board": "...811 33.827 ++..27 BBBAA7 599666 5...44"},
    {"moves": 17, "board": "...1BB .661.. .3++9. .34298 .342A8 7755A8"},
    {"moves": 21, "board": "77944. ..9655 ++96.2 .111.2 ....33 .888.."},
    {"moves": 19, "board": "55886B .99.6B ++E16. D2E177 D2CCAA .4433."},
    {"moves": 16, "board": ".AA.11 442..3 862++3 865573 869C7. ..9CBB"},
    {"moves": 20, "board": "..6744 ..6733 .++7.. 889925 ..AA25 .11BB."},
    {"moves": 16, "board": "AA366. .43888 54++92 541192 7...9B 7....B"},
    {"moves": 20, "board": ".5.111 25.883 25.++3 .66673 44A.7. ..A999"},
    {"moves": 19, "board": "CC5558 BB9.48 ++9.47 ..3667 ..32AA .112.."},
    {"moves": 21, "board": "4AAA.. 4..255 7++2.. 7166.9 B1.889 B33..9"},
    {"moves": 23, "board": "...155 .A.122 .A++84 .66684 ..3774 ..399."},
    {"moves": 16, "board": "44113A .5593A .++93. ..8677 ..8622 ......"},
    {"moves": 16, "board": "..6663 9944.3 ++2..5 A.27.5 A187.5 .187BB"},
    {"moves": 16, "board": "2AA4.. 2.14.6 ++1..6 591333 59778. .BB.8."},
    {"moves": 16, "board": "..422. 8841B. A++1B. A77199 66CC.D .5533D"},
    {"moves": 18, "board": "99BB75 C11175 C8.++5 D8.33. D4AA22 .466EE"},
    {"moves": 18, "board": "..59BB 2259.1 ++5..1 .488AA .43336 .777.6"},
    {"moves": 16, "board": "..6664 ..3BB4 ++3.C8 755.C8 7AA118 ..2299"},
    {"moves": 16, "board": "..1... ..16.. ++7689 2.7389 24438. ..555."},
    {"moves": 16, "board": "155589 122.89 .B.++6 .B.4A6 .3.4A6 .3.477"},
    {"moves": 19, "board": "CC555A 77BB1A .++.1D 336..D 8.622D 844999"},
    {"moves": 18, "board": "...AA. 98BB5. 98++5. 67225. 67.411 .334.."},
    {"moves": 20, "board": ".7CC.A .7222A ++.438 99.438 1.6555 1.6BBB"},
    {"moves": 18, "board": "3..55. 3BBAA4 ++1..4 881.6C .7226C .7999C"},
    {"moves": 16, "board": "..55BB ..9928 ..++28 .44AA8 ...611 77.633"},
    {"moves": 16, "board": "AA8.99 338.64 B.++64 BCC224 DDD1.. 77.155"},
    {"moves": 21, "board": "52BBCC 5288A. 4++DA. 4.6D77 ..6339 ..11.9"},
    {"moves": 16, "board": "44AA.. 33995. ++.157 B661.7 B.2887 CC2..."},
    {"moves": 16, "board": "1222BB 1.3CC. ++34.. .88477 ..AAA9 6655.9"},
    {"moves": 16, "board": "..1333 771.48 .++.48 995558 ..222. ..66AA"},
    {"moves": 18, "board": "7.44.. 755311 ++C3.9 B.CAA9 B.22.6 888..6"},
    {"moves": 19, "board": "6C..AA 6C7778 ++4.28 ..412B 95D1.B 95D133"},
    {"moves": 18, "board": "BCC453 B.8453 ++8..3 .61122 .6AA7. .99.7."},
    {"moves": 20, "board": "....11 A..844 A++8.. A2.8BB .23396 775596"},
    {"moves": 18, "board": "....33 5..266 5++2.. 87.211 87.BB9 .AA449"},
    {"moves": 17, "board": ".55523 ..4.23 ++4.21 .....1 .79991 .76688"},
    {"moves": 16, "board": "A7766. AB3335 .B++95 118.92 D.8CC2 D.4442"},
    {"moves": 18, "board": "55111C 88444C 7A++32 7AB.32 ..B.66 ....99"},
    {"moves": 19, "board": "667111 997.AA .8++.5 .84445 .BB3.5 .223CC"},
    {"moves": 17, "board": "66611. A44459 A.++59 288359 2..3BB 7773.."},
    {"moves": 18, "board": ".22217 .49917 B4.++7 B33355 ...866 ...8AA"},
    {"moves": 17, "board": "2..... 24448A ++6.8A ..655A 336799 1117.."},
    {"moves": 17, "board": "2..... 27711. ++63.. ..63.8 4443.8 .555.."},
    {"moves": 19, "board": "114... B54.9A B5++9A 86.33A 86.722 .6.7.."},
    {"moves": 21, "board": "55.B2A 1..B2A 13++2. .34... 934.77 98866."},
    {"moves": 16, "board": "224A.. ..4ABB 3++.7. 31557. .1.699 .886.."},
    {"moves": 16, "board": "B55AA. B1118. ++C28. 33C299 .44667 .....7"},
    {"moves": 25, "board": ".4475B ...75B .A++5. .A1C33 8.1C66 82299."},
    {"moves": 28, "board": "..BB8. 222785 .++715 43371C 4.6AAC ..6999"},
    {"moves": 23, "board": "..2888 772.1. 9++.1. 9.3655 ..36.. 4446.."},
    {"moves": 23, "board": ".9AA66 .92277 ++8..C BB84.C 3114.5 3.DD.5"},
    {"moves": 23, "board": "9.774. 9.6.4A ++61.A 3331.B 88855B ..222."},
    {"moves": 21, "board": ".5BB22 753331 75++.1 7448.1 ..6899 AA6..."},
    {"moves": 27, "board": "BAA7.. B.C766 .1C++D .1.99D 333.84 552284"},
    {"moves": 22, "board": ".AA5.. .C.544 9C++17 922.17 3DD.18 366BB8"},
    {"moves": 21, "board": "8BBBAA 8722.6 .7++.6 .11556 ...933 .449.."},
    {"moves": 22, "board": ".77B.. .5.B88 95++16 944.16 A33.1D ACC22D"},
    {"moves": 21, "board": ".3...B .3444B ++9.A5 1192A5 7.8266 7.8..."},
    {"moves": 23, "board": ".88..6 .33326 1++.2A 1...2A 1.4555 774.99"},
    {"moves": 21, "board": "..9.33 ..9222 .++1.. .AA177 555668 .BB448"},
    {"moves": 23, "board": ".BAA55 .B22CE ++4.CE 664338 7DD1.8 7991.."},
    {"moves": 26, "board": ".CC66. ..4779 ++4..9 5.4AA2 5BB1.2 .33188"},
    {"moves": 23, "board": "....AA 444556 ++7..6 8.7139 822139 ......"},
    {"moves": 21, "board": "66B993 C.B443 C++2.. 77.2AA 55888. 111..."},
    {"moves": 25, "board": "..AA77 1..299 1++2.5 .666.5 883..5 ..3444"},
    {"moves": 21, "board": "..3.44 ..3888 9++6.. 91A622 91A557 .1...7"},
    {"moves": 22, "board": "..B466 7.B481 7.++81 7...55 22AAA3 999..3"},
    {"moves": 24, "board": "A.B.CC A.B677 ++461D 334.1D .85559 .822.9"},
    {"moves": 21, "board": "6663.A 1..38A 1.++85 7.9985 7.2..5 7.2444"},
    {"moves": 21, "board": "....77 44555B A.++8B A33182 A.9182 ..9166"},
    {"moves": 22, "board": "..CDAA 44CD96 7.++96 7.5511 222EE3 BBB883"},
    {"moves": 21, "board": "2....8 2337C8 ++57CA 115..A .9BBDD .94466"},
    {"moves": 21, "board": ".882.. .3.255 .3.++6 944.B6 9CCCBA .1177A"},
    {"moves": 22, "board": ".3.55. A3.BB9 A3++29 .11429 ...477 .8866."},
    {"moves": 21, "board": ".4.775 .4...5 1++2.6 1992.6 ..A3.6 ..A388"},
    {"moves": 24, "board": "2224.. 7..499 7.++.8 1166.8 B55AAA B...33"},
    {"moves": 23, "board": ".AA7.. .4.766 .4++.1 22C3.1 B.C399 B55588"},
    {"moves": 27, "board": "6.55.. 6.AA97 ++1.97 331..B 222CCB 8844.."},
    {"moves": 25, "board": "222AA8 555498 ++149B 3.166B 3...CC .77..."},
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

    updateRecords() {
        if (!this.isWon())
            throw 'bad update';
        var moves = this.state.moves.length;

        // XXX meh, grab the initial position string, so the records aren't sensitive to the
        // ordering of puzzles. This logic is duplicated, gross.
        var posStr = this.props.posStr;
        if (this.props.puzzleNumber !== null)
            posStr = PUZZLES[this.props.puzzleNumber].board;
        if (posStr) {
            var records = JSON.parse(localStorage.getItem('puzzle-records') || '{}');
            if (records[posStr] === undefined || records[posStr] > moves) {
                records[posStr] = moves;
                localStorage.setItem('puzzle-records', JSON.stringify(records));
            }
        }
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
            if (dx || dy) {
                this.doMove(new Move({index: this.state.draggingIndex, dx: dx, dy: dy}), null);
                // Check for winning states and update local storage to reflect the possible
                // new record. We do this in dragEnd since it's the only place where a "real"
                // move is made (i.e. not retracing history).
                if (this.isWon())
                    this.updateRecords();
            }
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
        var records = JSON.parse(localStorage.getItem('puzzle-records') || '{}');
        return <div style={{ height: '100%' }}>
                <div>Select a puzzley buzzo!</div>
                <div style={{ paddingTop: '10px' }}/>
                <div className="list-holder">
                    <table><tbody>
                        { PUZZLES.map((p, i) => <tr key={i} onClick={() => this.props.selectPuzzle(i)}>
                                <td style={{ textAlign: 'left' }}>
                                    <div><strong>Puzzle { i + 1 }</strong></div>
                                    <div>{ p.moves } moves</div>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    { records && records[p.board] !== undefined ? 
                                            'Your best: ' + records[p.board] : ''}
                                </td>
                            </tr>) }
                    </tbody></table>
                </div>
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
                    fontFamily: 'Helvetica',
                    height: '100%',
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
