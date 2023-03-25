import { getTCenterPieces, getXCenterPieces, applyState, cycle_decomposition } from "./cubestate.js";
import { appendInformation } from "./main.js";

//Fetch Center Comm Solutions
// let t_comms = new Map();
// let x_comms = new Map();

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

// const x_comms_url = new URL(var, import.meta.url).href
// await fetch(x_comms_url)
//     .then((response) => response.text())
//     .then(textString => {
//         const xcomms = textString.split(/\r?\n/);

//         for (let i in xcomms) {
//             let array = xcomms[i].split(" ");
//             x_comms.set((array.slice(0, 3).join(' ')), (array.slice(3, array.length).join(' ')))
//         }
//     })


export function solveTCenterSticker(moves, cubeSize){
    let solution = [];

    //There are n/2 - 1 T stickers per cube
    for(let slice = 1; slice <= Math.floor(cubeSize/2) - 1; slice++){
        let a = Math.floor(cubeSize/2) + (cubeSize * slice);
        let b = ((Math.ceil(cubeSize/2) * cubeSize) - 1) - slice;
        let c = (Math.floor(cubeSize/2) * cubeSize) + slice;
        let d = (((cubeSize * cubeSize) - Math.ceil(cubeSize/2)) - (cubeSize * slice))

        var mapObj = { [a]: "a", [b]: "b", [c]: "c", [d]: "d" };
        var re = new RegExp("(" + Object.keys(mapObj).join("|") + ")\\b", "gi");
        
        ////////
        // Place Setup/ Solve inital piece
        ////////

        let tMoves = getTCenterPieces(cubeSize, slice, moves);
        let cycles = cycle_decomposition(tMoves);

        // let answer = generate3Cycles(cycles, slice, cubeSize);



    }
}
