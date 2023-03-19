import { getInnerSlicePiece, cycle_decomposition, applyState } from './cubestate.js';
import { appendInformation } from './main.js';

//Fetch Edge Comm Solutions
let edge_comms = new Map();
const edgecomms_url = new URL('/resources/edge-comms.txt', import.meta.url).href
await fetch(edgecomms_url) // fetch text file
    .then((response) => response.text())
    .then(textString => {
        const edgecomms = textString.split(/\r?\n/);

        for (let i in edgecomms) {
            let array = edgecomms[i].split(" ");
            edge_comms.set((array.slice(0, 3).join(' ')), (array.slice(3, array.length).join(' ')))
        }
    })

// Solve edge pieces by solving piece "Da", then cycle decomposition on hashmap to generate3Cycles
// When inputting to apply moves, let n = slice + 1 
export function solveEdgeStickers(moves, cubeSize) {
    // console.log("Hashmap of Corners")
    // console.log(moves);

    let solution = [];

    for (let slice = 1; slice < Math.floor(cubeSize / 2); slice++) {

        //Solve for Da
        let a = cubeSize - 1 - slice;
        let b = cubeSize * slice;
        let c = (cubeSize * cubeSize - 1) - (cubeSize * slice);
        let d = (cubeSize * (cubeSize - 1) + slice);
        //compute property names for each slice position
        var mapObj = { [a]: "a", [b]: "b", [c]: "c", [d]: "d" };
        var re = new RegExp("(" + Object.keys(mapObj).join("|") + ")\\b", "gi"); // Word boundary at end to match only entire numbers

        if (moves.perm.perm['D' + (cubeSize - 1 - slice)] != ('D' + (cubeSize - 1 - slice))) {
            if (moves.perm.perm['D' + (cubeSize - 1 - slice)] == ("U" + (cubeSize - 1 - slice))) {
                //Apply Da Ub Dest[Da]
                let fixDa = "Da Ub " + moves.perm.perm['D' + (cubeSize - 1 - slice)].replace(re, function (matched) {
                    return mapObj[matched]
                })

                let fixMoveSet = edge_comms.get(fixDa).replace(/n/g, slice + 1)
                applyState(fixMoveSet, cubeSize);
                appendInformation(fixMoveSet, "[Solve Da] [" + fixDa + "] ")
            } else {
                //Apply Da Ua Dest[Da]
                let fixDa = "Da Ua " + moves.perm.perm['D' + (cubeSize - 1 - slice)].replace(re, function (matched) {
                    return mapObj[matched]
                })

                let fixMoveSet = edge_comms.get(fixDa).replace(/n/g, slice + 1)
                applyState(fixMoveSet, cubeSize);
                appendInformation(fixMoveSet, "[Solve Da] [" + fixDa + "] ")
            }
        }

        //Solve remaining Edge Pieces
        let innerMoves = getInnerSlicePiece(cubeSize, slice, moves);
        // console.log("Hashmap of Corners")
        // console.log(innerMoves);

        let cycles = cycle_decomposition(innerMoves);
        // console.log("Cycle Decomposition")
        // console.log(cycles)

        let answer = generate3Cycles(cycles, slice, cubeSize);

        answer.forEach((element, index) => {
            solution.push([answer[index], edge_comms.get(element).replace(/n/g, slice + 1)])
        });

        console.log("Edge Solutions")
        console.log(solution)

        return solution
    }
}

function generate3Cycles(cycles, slice, cubeSize) {

    let misplacedStickerCycles = [];

    let a = cubeSize - 1 - slice;
    let b = cubeSize * slice;
    let c = (cubeSize * cubeSize - 1) - (cubeSize * slice);
    let d = (cubeSize * (cubeSize - 1) + slice);

    //compute property names for each slice position
    var mapObj = { [a]: "a", [b]: "b", [c]: "c", [d]: "d" };
    var re = new RegExp("(" + Object.keys(mapObj).join("|") + ")\\b", "gi"); // Word boundary at end to match only entire numbers

    for (let i in cycles) {
        if (cycles[i].length > 1) {
            misplacedStickerCycles.push(cycles[i])
        }
    }
    // console.log("Cycles Greater than 1")
    // console.log(misplacedStickerCycles)

    let individualStickers = []

    for (let cycle in misplacedStickerCycles) {
        for (let innercycle in misplacedStickerCycles[cycle]) {
            let cycle1 = misplacedStickerCycles[cycle][innercycle].replace(re, function (matched) {
                return mapObj[matched];
            });
            individualStickers.push(["Da", cycle1])
        }
        let cycle1 = misplacedStickerCycles[cycle][0].replace(re, function (matched) {
            return mapObj[matched];
        });
        individualStickers.push(["Da", cycle1])
    }

    // console.log("Individual Out of Place Stickers")
    // console.log(individualStickers)

    let pairs = [];
    for (let i = 0; i < individualStickers.length; i += 2) {
        pairs.push(individualStickers[i], individualStickers[i + 1]);
    }

    // console.log("Pairs")
    // console.log(pairs)

    let threeCycles = []
    for (let i = 0; i <= pairs.length - 1; i += 2) {
        let hash = {}
        let hash2 = {}

        hash[pairs[i][0]] = pairs[i][1]
        hash[pairs[i][1]] = pairs[i][0]

        hash2[pairs[i + 1][0]] = pairs[i + 1][1]
        hash2[pairs[i + 1][1]] = pairs[i + 1][0]

        for (var key in hash2) {
            if (!((key) in hash)) {
                hash[key] = hash2[key]
            } else {
                hash[hash[key]] = hash2[[key]]
            }
        }

        threeCycles.push(hash);
    }

    let solution = [];
    for (let i = threeCycles.length - 1; i >= 0; i--) {
        let moveset = Object.values(threeCycles[i]).reverse().join(' ')
        solution.push(moveset)
    }

    return solution;
}