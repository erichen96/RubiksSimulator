import { applyState, cycle_decomposition, getNMCenterPieces } from "./cubestate.js";
import { appendInformation } from "./main.js";
import { generate3Cycles } from "./solveEdgePieces.js";


let x_comms = new Map();
const x_comms_url = new URL('/resources/comms-universal.txt', import.meta.url).href
await fetch(x_comms_url)
    .then((response) => response.text())
    .then(textString => {
        const xcomms = textString.split(/\r?\n/);

        for (let i in xcomms) {
            let array = xcomms[i].split(" ");
            x_comms.set((array.slice(0, 3).join(' ')), (array.slice(3, array.length).join(' ')))
        }
    })

export function solveAllCenterStickers(moves, cubeSize) {
    let solution = [];

    for (let m = 1; m < Math.ceil(cubeSize / 2); m++) {
        for (let n = 1; n < Math.floor(cubeSize / 2); n++) {
            // console.log("Piece " + m + ", " + n)
            let a = ((cubeSize + m) + (cubeSize * (n - 1)));
            let b = (((cubeSize * (m + 1)) - 1) - n);
            let c = (((cubeSize - (m + 1)) * cubeSize) + n);
            let d = ((((cubeSize * cubeSize) - 1) - (cubeSize * n)) - m);

            var mapObj = { [a]: "a", [b]: "b", [c]: "c", [d]: "d" };
            var re = new RegExp("(" + Object.keys(mapObj).join("|") + ")\\b", "gi"); // Word boundary at end to match only entire numbers
            // console.log(mapObj)
            if (moves.perm.perm['U' + d] != ('U' + d)) {
                if (moves.perm.perm['U' + d] == ('D' + a)) {
                    let fixUd = "Ud Db Da"
                    let adjustNM = x_comms.get(fixUd).replace(/m/g, m + 1).replace(/n/g, (n + 1))
                    applyState(adjustNM, cubeSize);
                    appendInformation( 1, adjustNM, "[Solve Ud] at Position [" + (m + 1) + "]" + "[" + (n + 1) + "] <br>" + fixUd);

                } else {
                    //Apply Ud Da Dest[Ud]
                    let fixUd = "Ud Da " + moves.perm.perm['U' + d].replace(re, function (matched) {
                        return mapObj[matched];
                    })

                    let adjustNM = x_comms.get(fixUd).replace(/m/g, m + 1).replace(/n/g, (n + 1))
                    applyState(adjustNM, cubeSize);
                    appendInformation( 1, adjustNM, "[Solve Ud] at Position [" + (m + 1) + "]" + "[" + (n + 1) + "] <br>" + fixUd);
                }
            }

            let xCenterStickers = getNMCenterPieces(cubeSize, m, n, moves);
            let cycles = cycle_decomposition(xCenterStickers);

            for (let cycle in cycles) {
                cycles[cycle].forEach((element, index) => {
                    cycles[cycle][index] = (element.replace(re, function (matched) {
                        return mapObj[matched];
                    }))
                })
            }

            let answer = generate3Cycles(cycles, "Ud")
            // console.log(answer)
            answer.forEach((element, index) => {
                let x = x_comms.get(element).replace(/m/g, (m + 1)).replace(/n/g, (n + 1))
                solution.push([answer[index], x])
            });
        }
    }
    return solution;
}
