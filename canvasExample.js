solved3x3 = "UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB"


color = ({
    "U": "#f0e442",
    "D": "#ffffff",
    "L": "#cc79a7",
    "R": "#d55e00",
    "F": "#56b4e9",
    "B": "#009e73"
})

// color = ({
//     "U": "white", "D": "yellow", "L": "orange", "R": "red", "F": "#00aa00", "B": "blue", "X": "darkgray",
//   // more colors for step 8
//     "o": "#fdfdc6", "x": "blueviolet", "y": "magenta"
// })

var canvas = document.getElementById("canvas");
var ctx = c.getContext("2d");

function make2DRepresentation(cube){
    const sc = 50;
    // const canvas = DOM.canvas(13 * sc, 10 * sc);
    // const ctx = canvas.getContext('2d');

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // scaleCanvas(canvas, ctx)
    ctx.translate(sc/2, sc/2)

function draw(idx, r, c) {
    console.log("Update Drawing")
    for(let i = r; i <= r + 2; i++){
        for(let j = c; j <= c + 2; j++){
            ctx.fillStyle = color[cube[idx++]];
            ctx.fillRect(sc * j, sc * i, sc, sc);
            ctx.linewidth = 2
            ctx.strokeRect(sc * j, sc * i, sc, sc)
        }
    }
}

draw( 0, 0, 3) // U
draw( 9, 3, 6) // R
draw(18, 3, 3) // F
draw(27, 6, 3) // D
draw(36, 3, 0) // L
draw(45, 3, 9) // B

return canvas

}

make2DRepresentation(solved3x3)