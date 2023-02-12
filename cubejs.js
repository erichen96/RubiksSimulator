import Cube from 'cubejs'
// const Cube = require('cubejs');

// Create a new solved cube instance, from cubejs
const cube = new Cube();

// Precalculation step for kociemba two-phase algorithm 
Cube.initSolver()

// Odd cube size
// 
// Even cube size
// Center/Edge pieces assumed to be correct pieces, may provide unsolvable state
export function userInputToCube(string){
    var cube = Cube.fromString(string);
    let solution = cube.solve();
    console.log(solution);
    return solution;
}
