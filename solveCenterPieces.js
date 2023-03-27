import { getTCenterPieces, getXCenterPieces, applyState, cycle_decomposition } from "./cubestate.js";
import { appendInformation } from "./main.js";
import { generate3Cycles } from "./solveEdgePieces.js";

//Fetch Center Comm Solutions
// let t_comms = new Map();

// const t_comms_url = new URL(var, import.meta.url).href
// await fetch(t_comms_url)
//     .then((response) => response.text())
//     .then(textString => {
//         const tcomms = textString.split(/\r?\n/);

//         for (let i in tcomms) {
//             let array = tcomms[i].split(" ");
//             t_comms.set((array.slice(0, 3).join(' ')), (array.slice(3, array.length).join(' ')))
//         }
//     })
let x_comms = new Map();
const x_comms_url = new URL('/resources/comm-xcenters.txt', import.meta.url).href
await fetch(x_comms_url)
    .then((response) => response.text())
    .then(textString => {
        const xcomms = textString.split(/\r?\n/);

        for (let i in xcomms) {
            let array = xcomms[i].split(" ");
            x_comms.set((array.slice(0, 3).join(' ')), (array.slice(3, array.length).join(' ')))
        }
    })

// export function solveTCenterSticker(moves, cubeSize){
//     let solution = [];

//     //There are n/2 - 1 T stickers per cube
//     for(let slice = 1; slice <= Math.floor(cubeSize/2) - 1; slice++){
//         let a = Math.floor(cubeSize/2) + (cubeSize * slice);
//         let b = ((Math.ceil(cubeSize/2) * cubeSize) - 1) - slice;
//         let c = (Math.floor(cubeSize/2) * cubeSize) + slice;
//         let d = (((cubeSize * cubeSize) - Math.ceil(cubeSize/2)) - (cubeSize * slice))

//         var mapObj = { [a]: "a", [b]: "b", [c]: "c", [d]: "d" };
//         var re = new RegExp("(" + Object.keys(mapObj).join("|") + ")\\b", "gi");
        
//         ////////
//         // Place Setup/ Solve inital piece
//         ////////

//         let tMoves = getTCenterPieces(cubeSize, slice, moves);
//         let cycles = cycle_decomposition(tMoves);

//         // let answer = generate3Cycles(cycles, slice, cubeSize);



//     }
// }

export function solveXCenterStickers(moves, cubeSize){
    let solution = [];

    for(let slice = 1; slice < Math.floor(cubeSize/2); slice++){
        let a = ((cubeSize + 1) * slice)
        let b = ((cubeSize - 1) * (slice + 1))
        let c = (((cubeSize - 1) * cubeSize) - (slice * (cubeSize - 1)))
        let d = (((cubeSize * cubeSize) - 1) - (slice * (cubeSize + 1)))

        var mapObj = { [a]: "a", [b]: "b", [c]: "c", [d]: "d" };
        var re = new RegExp("(" + Object.keys(mapObj).join("|") + ")\\b", "gi"); // Word boundary at end to match only entire numbers

        if(moves.perm.perm['U' + d] != ('U' + d)){
            if(moves.perm.perm['U' + d] == ('D' + a)){
                let fixUd = "Ud Db " + moves.perm.perm['D' + a].replace(re, function (matched){
                    return mapObj[matched];
                })

                let fixMoveSet = x_comms.get(fixUd).replace(/n/g, slice + 1)
                applyState(fixMoveSet, cubeSize);
                appendInformation(fixMoveSet, "[Solve Ud] [" + fixUd + "] ");
            } else {
                //Apply Ud Da Dest[Ud]
                let fixUd = "Ud Da " + moves.perm.perm['U' + d].replace(re, function (matched){
                    return mapObj[matched];
                })

                let fixMoveSet = x_comms.get(fixUd).replace(/n/g, slice + 1);
                applyState(fixMoveSet, cubeSize);
                appendInformation(fixMoveSet, "[Solve Ud] [" + fixUd + "] ");
            }
        }

        let xCenterStickers = getXCenterPieces(cubeSize, slice, moves);
        let cycles = cycle_decomposition(xCenterStickers);

        for(let cycle in cycles){
            cycles[cycle].forEach((element, index) => {
                cycles[cycle][index] = (element.replace(re, function (matched){
                    return mapObj[matched];
                }))
            })
        }

        let answer = generate3Cycles(cycles, "Ud");
        answer.forEach((element, index) => {
            solution.push([answer[index], x_comms.get(element).replace(/n/g, slice + 1)])
        });
    }

    return solution;

}