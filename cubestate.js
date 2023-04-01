import { randInt } from 'three/src/math/MathUtils';
import { solveXCenterStickers } from './solveCenterPieces';
import { solveEdgeStickers } from './solveEdgePieces';
import { solveAllCenterStickers } from './solveAllCenterPieces';

// ------------------------------- Util Functions -------------------------------

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function zip() {
    var args = [].slice.call(arguments);
    var longest = args.reduce(function (a, b) {
        return a.length > b.length ? a : b
    }, []);

    return longest.map(function (_, i) {
        return args.map(function (array) { return array[i] })
    });
}

function mirrorKeyToValue(obj) {
    var mirror = {};
    for (var key in obj) {
        mirror[obj[key]] = key;
    }
    return mirror;
}

export function cycle_decomposition(decomp) {
    var els = Object.keys(decomp);
    var cycles = [];
    while (els.length > 0) {
        let start = els.pop();
        let next_el = decomp[start];
        let cycle = [start];
        while (next_el != start) {
            let remove_el = els.indexOf(next_el);
            els.splice(remove_el, 1);
            cycle.push(next_el);
            next_el = decomp[next_el];
        }
        cycles.push(cycle);
    }

    return cycles;
}

export function parity(move) {
    let decomp = cycle_decomposition(move);
    let parities = 0;
    decomp.forEach(element => {
        parities += (element.length - 1);
    })
    return parities % 2;
}

class Permutation {
    constructor(perm_dict) {
        this.perm = perm_dict;

        // if(set(this.perm.keys()) != set(this.perm.values())){

        // if(!eqSet(this.perm.keys(), this.perm.values())){
        //     console.log("Bad Permutation.");
        // }
    }

    mult(p2) {
        var new_perm = {}

        for (var key in this.perm) {
            new_perm[key] = p2.perm[this.perm[key]]
        }


        return new Permutation(new_perm);
    }

    cycle_decomposition() {
        console.log("cycle decomposition");
        // console.log(this.perm)
        var els = Object.keys(this.perm);
        var cycles = [];
        while (els.length > 0) {
            let start = els.pop();
            let next_el = this.perm[start];
            let cycle = [start];
            while (next_el != start) {
                let remove_el = els.indexOf(next_el);
                els.splice(remove_el, 1);
                cycle.push(next_el);
                next_el = this.perm[next_el];
            }
            cycles.push(cycle);
        }
        return cycles;
    }

    parity() {
        let decomp = this.cycle_decomposition();
        let parities = 0;
        decomp.forEach(element => {
            parities += (element.length - 1);
        }
        )
        console.log(parities)
        return parities % 2;
    }

}

class CubeState {
    constructor(position) {
        this.position = position;
        const p = new Map();
        const turns = ["U", "F", "R", "B", "L", "D"];

        for (let f in turns) {
            for (let i in range(1, position * position)) {
                // if (i == 0) {
                //     continue;
                // }
                let nameTurn = turns[f] + i.toString();
                p[nameTurn] = nameTurn
            }
        }

        this.perm = new Permutation(p);



    }

    apply_state(cs) {
        this.perm = this.perm.mult(cs.perm)
    }

}

var global_moves = {}
var moves; //Contains the cubestate of current moves

// Generate the all move sets for a cubeSize
export function generateCubeState(cubeSize) {
    var faceUr = faceRow("U", cubeSize)
    var faceUc = faceColumn("U", cubeSize)

    var faceRr = faceRow("R", cubeSize)
    var faceRc = faceColumn("R", cubeSize)

    var faceDr = faceRow("D", cubeSize)
    var faceDc = faceColumn("D", cubeSize)

    var faceLr = faceRow("L", cubeSize)
    var faceLc = faceColumn("L", cubeSize)

    var faceFr = faceRow("F", cubeSize)
    var faceFc = faceColumn("F", cubeSize)

    var faceBr = faceRow("B", cubeSize)
    var faceBc = faceColumn("B", cubeSize)

    global_moves = {}

    let baseMoves = ["U", "F", "R", "B", "L", "D"];


    generateRotationF(cubeSize);
    generateRotationU(cubeSize);
    generateRotationR(cubeSize);
    generateRotationL(cubeSize);
    generateRotationB(cubeSize);
    generateRotationD(cubeSize);


    baseMoves.forEach((element) => {
        generateFaceRotation(String(element), cubeSize)
    })

    baseMoves.forEach(move => {
        var double = new CubeState(cubeSize);
        double.apply_state(global_moves[move]);
        double.apply_state(global_moves[move]);
        var triple = new CubeState(cubeSize);
        triple.apply_state(global_moves[move]);
        triple.apply_state(global_moves[move]);
        triple.apply_state(global_moves[move]);

        global_moves[move + "2"] = double
        global_moves[move + "3"] = triple
        global_moves[move + "'"] = triple

    })

    console.log(global_moves)

    function faceRow(face, cubeSize) {
        var rowArray = [];
        for (var i = 0; i < cubeSize; i++) {
            var array = [];
            for (var j = 0; j < cubeSize; j++) {
                array.push(face + (i * cubeSize + j))
            }
            rowArray.push(array)
        }

        return rowArray;
    }

    function faceColumn(face, cubeSize) {
        var columnArray = []
        for (var i = 0; i < cubeSize; i++) {
            var array = [];
            for (var j = 0; j < cubeSize; j++) {
                array.push(face + (j * cubeSize + i))
            }
            columnArray.push(array)
        }

        return columnArray;
    }

    function mapTwo(map, initial, final) {
        initial.forEach((element, index) => {
            map.perm.perm[element] = final[index]

        })
        return map
    }

    function generateRotationF(n) {
        for (var k = 1; k <= Math.floor(n/2); k++) {
            var map = new CubeState(n);
            map = mapTwo(map, faceUr[n - k], faceRc[k - 1])
            map = mapTwo(map, faceRc[k - 1], [...faceDr[k - 1]].reverse())
            map = mapTwo(map, [...faceDr[k - 1]].reverse(), [...faceLc[n - k]].reverse())
            map = mapTwo(map, [...faceLc[n - k]].reverse(), faceUr[n - k])
            global_moves[k + "F"] = map

            var double = new CubeState(n);
            double.apply_state(global_moves[k + "F"]);
            double.apply_state(global_moves[k + "F"]);

            var triple = new CubeState(n);
            triple.apply_state(global_moves[k + "F"]);
            triple.apply_state(global_moves[k + "F"]);
            triple.apply_state(global_moves[k + "F"]);

            global_moves[k + "F" + "2"] = double
            global_moves[k + "F" + "3"] = triple
            global_moves[k + "F" + "'"] = triple
        }

    }

    function generateRotationU(n) {
        for (var k = 1; k <= Math.floor(n/2); k++) {
            var map = new CubeState(n);
            map = mapTwo(map, faceFr[k - 1], faceLr[k - 1])
            map = mapTwo(map, faceLr[k - 1], faceBr[k - 1])
            map = mapTwo(map, faceBr[k - 1], faceRr[k - 1])
            map = mapTwo(map, faceRr[k - 1], faceFr[k - 1])
            global_moves[k + "U"] = map

            var double = new CubeState(n);
            double.apply_state(global_moves[k + "U"]);
            double.apply_state(global_moves[k + "U"]);

            var triple = new CubeState(n);
            triple.apply_state(global_moves[k + "U"]);
            triple.apply_state(global_moves[k + "U"]);
            triple.apply_state(global_moves[k + "U"]);

            global_moves[k + "U" + "2"] = double
            global_moves[k + "U" + "3"] = triple
            global_moves[k + "U" + "'"] = triple
        }
    }

    function generateRotationR(n) {
        for (var k = 1; k <= Math.floor(n/2); k++) {
            var map = new CubeState(n);
            map = mapTwo(map, faceFc[n - k], faceUc[n - k])
            map = mapTwo(map, faceUc[n - k], [...faceBc[k - 1]].reverse())
            map = mapTwo(map, [...faceBc[k - 1]].reverse(), faceDc[n - k])
            map = mapTwo(map, faceDc[n - k], faceFc[n - k])
            global_moves[k + "R"] = map

            var double = new CubeState(n);
            double.apply_state(global_moves[k + "R"]);
            double.apply_state(global_moves[k + "R"]);

            var triple = new CubeState(n);
            triple.apply_state(global_moves[k + "R"]);
            triple.apply_state(global_moves[k + "R"]);
            triple.apply_state(global_moves[k + "R"]);

            global_moves[k + "R" + "2"] = double
            global_moves[k + "R" + "3"] = triple
            global_moves[k + "R" + "'"] = triple
        }
    }

    function generateRotationL(n) {
        for (var k = 1; k <= Math.floor(n/2); k++) {
            var map = new CubeState(n);
            map = mapTwo(map, faceFc[k - 1], faceDc[k - 1])
            map = mapTwo(map, faceDc[k - 1], [...faceBc[n - k]].reverse())
            map = mapTwo(map, [...faceBc[n - k]].reverse(), faceUc[k - 1])
            map = mapTwo(map, faceUc[k - 1], faceFc[k - 1])
            global_moves[k + "L"] = map

            var double = new CubeState(n);
            double.apply_state(global_moves[k + "L"]);
            double.apply_state(global_moves[k + "L"]);

            var triple = new CubeState(n);
            triple.apply_state(global_moves[k + "L"]);
            triple.apply_state(global_moves[k + "L"]);
            triple.apply_state(global_moves[k + "L"]);

            global_moves[k + "L" + "2"] = double
            global_moves[k + "L" + "3"] = triple
            global_moves[k + "L" + "'"] = triple
        }
    }

    function generateRotationB(n) {
        for (var k = 1; k <= Math.floor(n/2); k++) {
            var map = new CubeState(n);
            map = mapTwo(map, faceUr[k - 1], [...faceLc[k - 1]].reverse())
            map = mapTwo(map, [...faceLc[k - 1]].reverse(), [...faceDr[n - k]].reverse())
            map = mapTwo(map, [...faceDr[n - k]].reverse(), faceRc[n - k])
            map = mapTwo(map, faceRc[n - k], faceUr[k - 1])
            global_moves[k + "B"] = map

            var double = new CubeState(n);
            double.apply_state(global_moves[k + "B"]);
            double.apply_state(global_moves[k + "B"]);

            var triple = new CubeState(n);
            triple.apply_state(global_moves[k + "B"]);
            triple.apply_state(global_moves[k + "B"]);
            triple.apply_state(global_moves[k + "B"]);

            global_moves[k + "B" + "2"] = double
            global_moves[k + "B" + "3"] = triple
            global_moves[k + "B" + "'"] = triple

        }
    }

    function generateRotationD(n) {
        for (var k = 1; k <= Math.floor(n/2); k++) {
            var map = new CubeState(n);
            map = mapTwo(map, faceFr[n - k], faceRr[n - k])
            map = mapTwo(map, faceRr[n - k], faceBr[n - k])
            map = mapTwo(map, faceBr[n - k], faceLr[n - k])
            map = mapTwo(map, faceLr[n - k], faceFr[n - k])
            global_moves[k + "D"] = map

            var double = new CubeState(n);
            double.apply_state(global_moves[k + "D"]);
            double.apply_state(global_moves[k + "D"]);

            var triple = new CubeState(n);
            triple.apply_state(global_moves[k + "D"]);
            triple.apply_state(global_moves[k + "D"]);
            triple.apply_state(global_moves[k + "D"]);

            global_moves[k + "D" + "2"] = double
            global_moves[k + "D" + "3"] = triple
            global_moves[k + "D" + "'"] = triple
        }
    }

    function generateFaceRotation(face, cubeSize) {
        let Row = faceRow(face, cubeSize)
        let Column = faceColumn(face, cubeSize)

        const map = new CubeState(cubeSize);

        for (var i = 0; i < cubeSize; i++) {
            for (var j = 0; j < cubeSize; j++) {
                map.perm.perm[(Row[i][j])] = Column[cubeSize - 1 - i][j]
            }
        }

        map.apply_state(global_moves["1" + face])

        global_moves[face] = map
        global_moves["1" + face] = map

        const double = new CubeState(cubeSize);
        double.apply_state(global_moves["1" + face])
        double.apply_state(global_moves["1" + face])
        global_moves["1" + face + "2"] = double;

        const triple = new CubeState(cubeSize);
        triple.apply_state(global_moves["1" + face])
        triple.apply_state(global_moves["1" + face])
        triple.apply_state(global_moves["1" + face])
        global_moves["1" + face + "3"] = triple;
        global_moves["1" + face + "'"] = triple;

    }

}

export function generateRandomMoves(cubeSize){
    let randomArray = [];
    console.log(global_moves)
    for(let i = 0; i < (3 * (cubeSize * cubeSize)); i++){
        let j = randInt(1, Object.keys(global_moves).length - 1);
        randomArray.push(Object.keys(global_moves)[j])
    }
    
    return randomArray.join(' ');
}
// Apply given set of moves onto the cube
export function generateMovesPlacement(inputString, cubeSize) {
    inputString = inputString.replace(/[\r\n]/g, " ");
    console.log(inputString)
    const stringArray = inputString.split(" ");
    moves = new CubeState(cubeSize);

    for (var i = 0; i < stringArray.length; i++) {
        moves.apply_state(global_moves[stringArray[i]])
    }
    console.log(moves.perm.perm);
    // displayCubeState(moves.perm.perm)
    return moves;
}

export function applyState(string, cubeSize) {
    const stringArray = string.split(" ");
    for (var i = 0; i < stringArray.length; i++) {
        moves.apply_state(global_moves[stringArray[i]])
    }

    return moves;
}

export function generateKociembaStateToString(inputString, cubeSize) {
    let moves = generateMovesPlacement(inputString, cubeSize)
    let turns = ["U", "R", "F", "D", "L", "B"];
    let KociembaString = '';
    let m = Math.floor(cubeSize / 2);

    let mirror = mirrorKeyToValue(moves.perm.perm);
    if (cubeSize % 2 == 1) {
        for (let f in turns) {
            KociembaString +=
                mirror[turns[f] + 0] + mirror[turns[f] + m] + mirror[turns[f] + (2 * m)] +
                mirror[turns[f] + (m * cubeSize)] + mirror[turns[f] + ((m * cubeSize) + m)] + mirror[turns[f] + (m * cubeSize + (2 * m))] +
                mirror[turns[f] + (cubeSize * m * 2)] + mirror[turns[f] + ((cubeSize * m * 2) + m)] + mirror[turns[f] + ((2 * (m * cubeSize)) + (2 * m))]
        }
        KociembaString = KociembaString.replace(/[0-9]/g, '')
        // ExplanationTextArea.val("Parity of Corner and Center Edges: [" + sticker2piece(moves, cubeSize) + "] [Solved Corner/ Edges, Kociemba]");
    } else {
        for (let f in turns) {
            KociembaString +=
                mirror[turns[f] + 0] + turns[f] + mirror[turns[f] + (cubeSize - 1)] +
                turns[f] + turns[f] + turns[f] +
                mirror[turns[f] + (cubeSize * (cubeSize - 1))] + turns[f] + mirror[turns[f] + ((cubeSize * cubeSize) - 1)];
        }
        KociembaString = KociembaString.replace(/[0-9]/g, '')

        // If parity of even cube == 0, swap F1 and R1 to make odd parity
        if (parity(getCornerPieces(moves, cubeSize)) == 1) {
            KociembaString = KociembaString.substring(0, 10) + "F" + KociembaString.substring(11, 19) + "R" + KociembaString.substring(20);
            // ExplanationTextArea.val("Parity of Corner and Center Edges: [" + sticker2piece(moves, cubeSize) + "] [Swapped F1 and R1 in 3x3 for Kociemba][Solve Corner/ Edges with Kociemba]");

        } else {
            // ExplanationTextArea.val("Parity of Corner and Center Edges: [" + sticker2piece(moves, cubeSize) + "] [Generated 3x3 from corner stickers for Kociemba][Solve Corner/ Edges with Kociemba]");
        }

    }
    
    // console.log(sticker2piece(moves, cubeSize))
    return [KociembaString, sticker2piece(moves, cubeSize)];
    // return KociembaString;
}

export function adjustInnerSlices(cubeSize, slice) {
    if (parity(getInnerSlicePiece(cubeSize, slice, moves)) == 1) {
        return [slice + 1 + "R", parity(getInnerSlicePiece(cubeSize, slice, moves))];
    }

    return [0, parity(getInnerSlicePiece(cubeSize, slice, moves))];
}

// Corner & Center Edges Functions
function getCornerPieces(moves, cubeSize) {
    let corner = moves.perm.perm;
    let cornerStickers = [];
    let turns = ["U", "R", "F", "D", "L", "B"];
    // 0, n - 1, n(n-1), (n*n) - 1
    for (let f in turns) {
        cornerStickers[turns[f] + 0] = corner[turns[f] + 0];
        cornerStickers[turns[f] + (cubeSize - 1)] = corner[turns[f] + (cubeSize - 1)];
        cornerStickers[turns[f] + (cubeSize * (cubeSize - 1))] = corner[turns[f] + (cubeSize * (cubeSize - 1))];
        cornerStickers[turns[f] + ((cubeSize * cubeSize) - 1)] = corner[turns[f] + ((cubeSize * cubeSize) - 1)];
    }

    return cornerStickers;
}

function sticker2piece(move, cubeSize) {
    let s2p = [];
    s2p["U" + 0] = "UBL";
    s2p["L" + 0] = "UBL";
    s2p["B" + (cubeSize - 1)] = "UBL";

    s2p["U" + (cubeSize - 1)] = "URB";
    s2p["R" + (cubeSize - 1)] = "URB";
    s2p["B" + 0] = "URB";

    s2p["U" + ((cubeSize - 1) * cubeSize)] = "ULF";
    s2p["L" + (cubeSize - 1)] = "ULF";
    s2p["F" + 0] = "ULF";

    s2p["U" + ((cubeSize * cubeSize) - 1)] = "UFR";
    s2p["F" + (cubeSize - 1)] = "UFR";
    s2p["R" + 0] = "UFR";

    s2p["D" + 0] = "DFL";
    s2p["L" + ((cubeSize * cubeSize) - 1)] = "DFL";
    s2p["F" + ((cubeSize - 1) * cubeSize)] = "DFL";

    s2p["D" + (cubeSize - 1)] = "DRF";
    s2p["F" + ((cubeSize * cubeSize) - 1)] = "DRF";
    s2p["R" + ((cubeSize - 1) * cubeSize)] = "DRF";

    s2p["D" + ((cubeSize - 1) * cubeSize)] = "DLB";
    s2p["B" + ((cubeSize * cubeSize) - 1)] = "DLB";
    s2p["L" + ((cubeSize - 1) * cubeSize)] = "DLB";

    s2p["D" + ((cubeSize * cubeSize) - 1)] = "DBR";
    s2p["R" + ((cubeSize * cubeSize) - 1)] = "DBR";
    s2p["B" + ((cubeSize - 1) * cubeSize)] = "DBR";

    let moved = [];

    for (let i in s2p) {
        moved[i] = s2p[move.perm.perm[i]];
    }

    let viewUandD = [];
    viewUandD["UBL"] = "U" + 0;
    viewUandD["URB"] = "U" + (cubeSize - 1);
    viewUandD["ULF"] = "U" + ((cubeSize - 1) * cubeSize);
    viewUandD["UFR"] = "U" + ((cubeSize * cubeSize) - 1);
    viewUandD["DFL"] = "D" + 0;
    viewUandD["DRF"] = "D" + (cubeSize - 1);
    viewUandD["DLB"] = "D" + ((cubeSize - 1) * cubeSize);
    viewUandD["DBR"] = "D" + ((cubeSize * cubeSize) - 1);

    let result = [];
    for (let i in viewUandD) {
        result[i] = moved[viewUandD[i]];
    }

    return parity(result);
}

// Inner Slice Functions
export function getInnerSlicePiece(cubeSize, slice, moves) {
    let sliceStickers = [];
    let turns = ["U", "R", "F", "D", "L", "B"];

    let movesPerm = moves.perm.perm;
    for (let f in turns) {
        sliceStickers[turns[f] + ((cubeSize - 1 - slice))] = movesPerm[turns[f] + ((cubeSize - 1 - slice))];
        sliceStickers[turns[f] + (cubeSize * slice)] = movesPerm[turns[f] + (cubeSize * slice)];
        sliceStickers[turns[f] + ((cubeSize * cubeSize - 1) - (cubeSize * slice))] = movesPerm[turns[f] + ((cubeSize * cubeSize - 1) - (cubeSize * slice))];
        sliceStickers[turns[f] + ((cubeSize * (cubeSize - 1) + slice))] = movesPerm[turns[f] + ((cubeSize * (cubeSize - 1) + slice))];
    }
    return sliceStickers;

}

// Functions for Visuals
// (Move to main.js and export to here?)
function displayCubeState(cubeState) {
    // document.getElementById("offcanvas-cubeState-String").innerHTML = "";
    for (let i in cubeState) {
        // document.getElementById("offcanvas-cubeState-String").innerHTML += "<li> " + i + " <span>&#8594;</span> " + cubeState[i]+ " </li>";
    }
}

export function generateEdgeSolution(cubeSize) {
    let solution = solveEdgeStickers(moves, parseInt(cubeSize));
    return solution;
}

export function generateXCenterSolution(cubeSize){
    let solution = solveXCenterStickers(moves, parseInt(cubeSize));
    return solution
}

export function getXCenterPieces(cubeSize, slice, moves){
    let xCenterStickers = [];
    let turns = ["U", "R", "F", "D", "L", "B"];
    let movesPerm = moves.perm.perm;
    for(let f in turns){
        xCenterStickers[turns[f] + ((cubeSize + 1) * slice)] = movesPerm[turns[f] + (((cubeSize + 1) * slice))];
        xCenterStickers[turns[f] + ((cubeSize - 1) * (slice + 1))] = movesPerm[turns[f] + ((cubeSize - 1) * (slice + 1))];
        xCenterStickers[turns[f] + (((cubeSize - 1) * cubeSize) - (slice * (cubeSize - 1)))] = movesPerm[turns[f] + (((cubeSize - 1) * cubeSize) - (slice * (cubeSize - 1)))]
        xCenterStickers[turns[f] + (((cubeSize * cubeSize) - 1) - (slice * (cubeSize + 1)))] = movesPerm[turns[f] + (((cubeSize * cubeSize) - 1) - (slice * (cubeSize + 1)))];
    }
    return xCenterStickers;
}

export function getTCenterPieces(cubeSize, slice, moves){
    let tCenterStickers = [];
    let turns = ["U", "R", "F", "D", "L", "B"];
    let movesPerm = moves.perm.perm;
    for(let f in turns){
        tCenterStickers[turns[f] + ((Math.floor(cubeSize/2) + (cubeSize * slice)))] = movesPerm[turns[f] + ((Math.floor(cubeSize/2) + (cubeSize * slice)))]; //A
        tCenterStickers[turns[f] + (((Math.ceil(cubeSize/2) * cubeSize) - 1) - slice)] = movesPerm[turns[f] + (((Math.ceil(cubeSize/2) * cubeSize) - 1) - slice)]; //B
        tCenterStickers[turns[f] + ((Math.floor(cubeSize/2) * cubeSize) + slice)] = movesPerm[turns[f] + ((Math.floor(cubeSize/2) * cubeSize) + slice)]; //C
        tCenterStickers[turns[f] + (((cubeSize * cubeSize) - Math.ceil(cubeSize/2)) - (cubeSize * slice))] = movesPerm[turns[f] + (((cubeSize * cubeSize) - Math.ceil(cubeSize/2)) - (cubeSize * slice))]; //D
    }

    return tCenterStickers;
}

export function getNMCenterPieces(cubeSize, m, n, moves){
    let nmCenterStickers = [];
    let turns = ["U", "R", "F", "D", "L", "B"];
    console.log(((cubeSize + n) + (cubeSize * (m - 1))))
    console.log(((cubeSize * (n + 1)) - 1) - m)
    console.log((((cubeSize - (n + 1)) * cubeSize) + m))
    console.log(((((cubeSize * cubeSize) - 1) - (cubeSize * m)) - n))
    let movesPerm = moves.perm.perm;
    for(let f in turns){
        nmCenterStickers[turns[f] + ((cubeSize + n) + (cubeSize * (m - 1)))] = movesPerm[turns[f] + ((cubeSize + n) + (cubeSize * (m - 1)))];
        nmCenterStickers[turns[f] + (((cubeSize * (n + 1)) - 1) - m)] = movesPerm[turns[f] + (((cubeSize * (n + 1)) - 1) - m)];
        nmCenterStickers[turns[f] + (((cubeSize - (n + 1)) * cubeSize) + m)] = movesPerm[turns[f] + (((cubeSize - (n + 1)) * cubeSize) + m)];
        nmCenterStickers[turns[f] + ((((cubeSize * cubeSize) - 1) - (cubeSize * m)) - n)] = movesPerm[turns[f] + ((((cubeSize * cubeSize) - 1) - (cubeSize * m)) - n)];

    }

    return nmCenterStickers;
}

export function generateNMCenterSolution(cubeSize){
    let solution = solveAllCenterStickers(moves, parseInt(cubeSize));
    return solution;
}
