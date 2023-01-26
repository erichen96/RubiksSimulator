
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
            for (let i in range(1, position*position)) {
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

generateCubeState(4);

export function generateCubeState(cubeSize){
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


    baseMoves.forEach((element,  index) => {
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

    function faceRow(face, cubeSize){
        var rowArray = [];
        for(var i = 0; i < cubeSize; i++){
            var array = [];
            for(var j = 0; j < cubeSize; j++){
                array.push(face + (i*cubeSize + j))
            }
            rowArray.push(array)
        }
    
        return rowArray;
    }
    
    function faceColumn(face, cubeSize){
        var columnArray = []
        for(var i = 0; i < cubeSize; i++){
            var array = [];
            for(var j = 0; j < cubeSize; j++){
                array.push(face + (j*cubeSize + i))
            }
            columnArray.push(array)
        }
    
        return columnArray;
    }
    
    function mapTwo(map, initial, final){
        initial.forEach((element, index) => {
            map.perm.perm[element] = final[index]
    
        })
        return map
    }
    
    function generateRotationF(n){
        for(var k = 1; k <= n; k++){
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
    
    function generateRotationU(n){
        for(var k = 1; k <= n; k++){
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
    
    function generateRotationR(n){
        for(var k = 1; k <= n; k++){
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
    
    function generateRotationL(n){
        for(var k = 1; k <= n; k++){
            var map = new CubeState(n);
            map = mapTwo(map, faceFc[k - 1], faceDc[k - 1])
            map = mapTwo(map, faceDc[k - 1], [...faceBc[n-k]].reverse())
            map = mapTwo(map, [...faceBc[n-k]].reverse(), faceUc[k - 1])
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
    
    function generateRotationB(n){
        for(var k = 1; k <= n; k++){
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
    
    function generateRotationD(n){
        for(var k = 1; k <= n; k++){
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
    
    function generateFaceRotation(face, cubeSize){
        let Row = faceRow(face, cubeSize)
        let Column = faceColumn(face, cubeSize)
    
        const map = new CubeState(cubeSize);
    
        for(var i = 0; i < cubeSize; i++){
            for(var j = 0; j < cubeSize; j++){
                map.perm.perm[(Row[i][j])] = Column[cubeSize - 1 - i][j]
            }
        }
    
        map.apply_state(global_moves["1" + face])
    
        global_moves[face] = map
        global_moves["1" + face] = map
    
    }
    
    function generateLastFaceRotation(frontFace, cubeSize, index){
        let face = baseMoveOpposingSide[index];
        let Row = faceRow(face, cubeSize);
        let Column = faceColumn(face, cubeSize)
    
        const map = new CubeState(cubeSize);
    
        for(var i = 0; i < cubeSize; i++){
            for(var j = 0; j < cubeSize; j++){
                map.perm.perm[Column[cubeSize - 1 - i][j]] = Row[i][j]
            }
        }
    
        map.apply_state(global_moves[cubeSize + frontFace])
        global_moves[cubeSize + frontFace] = map
    
    }
}

export function generateMovesPlacement(inputString, cubeSize){
    const stringArray = inputString.split(" ");
    var moves = new CubeState(cubeSize);

    for(var i = 0; i < stringArray.length; i++){
        moves.apply_state(global_moves[stringArray[i]])
    }

    console.log(moves.perm.perm)

    return moves.perm.perm;
}

// generateMovesPlacement("U U U U F F F F")
// generateMovesPlacement("3R U 3R' 2U 3R U' 3R' 2U'")




// Old version for reference, only for 3x3
// var cyclesU = [["U1", "U3", "U9", "U7"],
// ["U2", "U6", "U8", "U4"],
// ["F1", "L1", "B1", "R1"],
// ["F2", "L2", "B2", "R2"],
// ["F3", "L3", "B3", "R3"]]

// var cyclesD = [["D1", "D3", "D9", "D7"],
// ["D2", "D6", "D8", "D4"],
// ["F7", "R7", "B7", "L7"],
// ["F8", "R8", "B8", "L8"],
// ["F9", "R9", "B9", "L9"]]
// var cyclesR = [["R1", "R3", "R9", "R7"],
// ["R2", "R6", "R8", "R4"],
// ["U3", "B7", "D3", "F3"],
// ["U6", "B4", "D6", "F6"],
// ["U9", "B1", "D9", "F9"]]
// var cyclesF = [["F1", "F3", "F9", "F7"],
// ["F2", "F6", "F8", "F4"],
// ["U7", "R1", "D3", "L9"],
// ["U8", "R4", "D2", "L6"],
// ["U9", "R7", "D1", "L3"]]
// var cyclesL = [["L1", "L3", "L9", "L7"],
// ["L2", "L6", "L8", "L4"],
// ["U1", "F1", "D1", "B9"],
// ["U4", "F4", "D4", "B6"],
// ["U7", "F7", "D7", "B3"]]
// var cyclesB = [["B1", "B3", "B9", "B7"],
// ["B2", "B6", "B8", "B4"],
// ["U1", "L7", "D9", "R3"],
// ["U2", "L4", "D8", "R6"],
// ["U3", "L1", "D7", "R9"]]

// var permU = new CubeState(4)
// var permD = new CubeState(4)
// var permL = new CubeState(4)
// var permR = new CubeState(4)
// var permF = new CubeState(4)
// var permB = new CubeState(4)


// var base_perms = [permU, permD, permL, permR, permF, permB]
// var base_cycles = [cyclesU, cyclesD, cyclesL, cyclesR, cyclesF, cyclesB]
// var base_perms_cycles = zip(base_perms, base_cycles)

// var [U, D, L, R, F, B] = base_perms_cycles;

// base_perms_cycles.forEach((rotation) => {
//     rotation[1].forEach((element) => {
//         element.slice(1).concat(element.slice(0, 1)).forEach((key, index) => {
//             rotation[0].perm.perm[element[index]] = key
//         })
//     })
// })

// global_moves = {}
// global_moves["U"] = U[0]
// global_moves["D"] = D[0]
// global_moves["L"] = L[0]
// global_moves["R"] = R[0]
// global_moves["F"] = F[0]
// global_moves["B"] = B[0]

// baseMoves.forEach(move => {
//     var double = new CubeState(4);
//     double.apply_state(global_moves[move]);
//     double.apply_state(global_moves[move]);
//     var triple = new CubeState(4);
//     triple.apply_state(global_moves[move]);
//     triple.apply_state(global_moves[move]);
//     triple.apply_state(global_moves[move]);
//     global_moves[move + "2"] = double
//     global_moves[move + "3"] = triple
// })



