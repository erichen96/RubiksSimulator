import Cube from 'cubejs'

// Create a new solved cube instance, from cubejs
const cube = new Cube();

// Precalculation step for kociemba two-phase algorithm 
Cube.initSolver()

export function userInputToCube(string){
    var cube = Cube.fromString(string);
    let solution = cube.solve();
    console.log(solution);
    return solution;
}
