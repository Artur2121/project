var grassArr = [];
var c = 0;
var side = 30;
var matrix = [
    // [1, 0, 1, 0, 1],
    // [1, 0, 0, 0, 0],
    // [0, 1, 0, 1, 0],
    // [0, 0, 1, 0, 0],
    // [1, 1, 0, 0, 0],
    // [1, 1, 0, 0, 0],
    // [1, 1, 0, 0, 2]
];
var gishatichner = []

var xotakerner = []

var aryucner = []
var pater = []

var g = 20

for (var y = 0; y < g; y++) {
    matrix.push([])
    for (var x = 0; x < g; x++) {
        matrix[y].push(0)
    }
}


for (var i = 0; i < 250; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 1
}

for (var i = 0; i < 50; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 2
}
for (var i = 0; i < 15; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 3
}
for (var i = 0; i < 4; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 4
}
for (var i = 0; i < 8; i++) {
    
    var c = [5, 6, 7, 8, 9, 10, 11, 12]
    var a = c[i]//c[i] //Math.floor(Math.random()*g)
    var b = 5//c[i] //Math.floor(Math.random()*g)
    console.log(i,a,b);
    matrix[a][b] = 5
    matrix[b][a] = 5
    var b = 12
    matrix[a][b] = 5
    matrix[b][a] = 5
}



function setup() {

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                xotakerner.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gishatichner.push(new Gishatich(x, y))

            } else if (matrix[y][x] == 4) {
                aryucner.push(new Aryuc(x, y))

            } else if (matrix[y][x] == 5) {
                pater.push(new Pat(x, y))

            }
        }
    }

}

function draw() {
    for (var y = 0; y < matrix.length; y++) {

        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#FF8C00");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#000");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    // for(var i in xotakerner){
    //   xotakerner[i].sharjvel();
    // }
    for (var i in gishatichner) {
        gishatichner[i].eat();
    }
    for (var i in aryucner) {
        aryucner[i].eat();
    }
    for (var i in gishatichner) {
        if (gishatichner[i].energy >= 18) {
            gishatichner[i].bazmanal()
        }
        else if (gishatichner[i].energy <= 0) {
            gishatichner[i].mahanal(i)
        }
    }
    for (var i in xotakerner) {
        xotakerner[i].eat();

    }
    for (var i in xotakerner) {
        if (xotakerner[i].energy >= 10) {
            xotakerner[i].bazmanal();
        }
        else if (xotakerner[i].energy <= 0) {

            xotakerner[i].mahanal(i);
        }
    }
}
