
// console.log(cubeSize)
// Check if unique values are identical
// const eqSet = (xs, ys) =>
//     xs.size === ys.size &&
//     [...xs].every((x) => ys.has(x));


// function range(a,b){
//     let arr = [];
//     for(a; a<= b; a++){
//         arr.push(a)
//     }
//     return arr;
// }

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
    let baseMoveOpposingSide = ["D", "B", "L", "F", "R", "U"]


    generateRotationF(cubeSize);
    generateRotationU(cubeSize);
    generateRotationR(cubeSize);
    generateRotationL(cubeSize);
    generateRotationB(cubeSize);
    generateRotationD(cubeSize);


    baseMoves.forEach((element, index) => {
        generateFaceRotation(String(element), cubeSize)
        generateLastFaceRotation(element, cubeSize, index)
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
        for (var k = 1; k <= n; k++) {
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
        for (var k = 1; k <= n; k++) {
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
        for (var k = 1; k <= n; k++) {
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
        for (var k = 1; k <= n; k++) {
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
        for (var k = 1; k <= n; k++) {
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
        for (var k = 1; k <= n; k++) {
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

    }

    function generateLastFaceRotation(frontFace, cubeSize, index) {
        let face = baseMoveOpposingSide[index];
        let Row = faceRow(face, cubeSize);
        let Column = faceColumn(face, cubeSize)

        const map = new CubeState(cubeSize);

        for (var i = 0; i < cubeSize; i++) {
            for (var j = 0; j < cubeSize; j++) {
                map.perm.perm[Column[cubeSize - 1 - i][j]] = Row[i][j]
            }
        }

        map.apply_state(global_moves[cubeSize + frontFace])
        global_moves[cubeSize + frontFace] = map

    }
}

export function generateMovesPlacement(inputString, cubeSize) {
    const stringArray = inputString.split(" ");
    moves = new CubeState(cubeSize);

    for (var i = 0; i < stringArray.length; i++) {
        moves.apply_state(global_moves[stringArray[i]])
    }

    console.log(moves.perm.perm)

    return moves.perm.perm;
}

export function applyState(string, cubeSize){
    const stringArray = string.split(" ");
    console.log(stringArray)
    console.log(moves.perm.perm)
    for (var i = 0; i < stringArray.length; i++) {
        moves.apply_state(global_moves[stringArray[i]])
    }
    console.log('-----')
    console.log(moves.perm.perm);

    return moves.perm.perm;
}

export function generateKociembaStateToString(inputString, cubeSize) {
    //Parse InputString to remove all moves that are for inner slices, remaining slices/ turns will be a set of moves used by cube.js
    // To generate a cube.js cube object which can then be solved.
    // 
    //General State
    // m = n/2
    // 
    // 0, m , 2m
    // mn, mn + m, mn+2m
    // 2mn, 2mn+m , 2mn+2m
    let moves = generateMovesPlacement(inputString, cubeSize)
    let turns = ["U", "R", "F", "D", "L", "B"];
    let KociembaString = '';
    let m = Math.floor(cubeSize / 2);

    moves = mirrorKeyToValue(moves);
    console.log(moves)
    for (let f in turns){
        KociembaString += 
        moves[turns[f] + 0] + moves[turns[f] + m] + moves[turns[f] + (2*m)] + 
        moves[turns[f] + (m * cubeSize)] + moves[turns[f] + ((m * cubeSize) + m)] + moves[turns[f] + (m * cubeSize + (2 * m))] +
        moves[turns[f] + (cubeSize * m * 2)] + moves[turns[f] + ((cubeSize * m * 2) + m) ] + moves[turns[f] + ((2 * (m * cubeSize)) + (2 * m))]
    }

    KociembaString = KociembaString.replace(/[0-9]/g,'')
    console.log(KociembaString)

    return KociembaString;
}

function mirrorKeyToValue(obj){
    var mirror = {};
    for(var key in obj){
        mirror[obj[key]] = key;
    }
    return mirror;
}

