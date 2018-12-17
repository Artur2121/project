//import { Socket } from "dgram";
var socket = io();

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

class LivingCreature {
    constructor(x, y, index){
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.index = index;
        this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
  
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }   
        }
        return found;
    }
  }

class Grass extends LivingCreature {


    bazmanal() {
      this.multiply++;
      var arr = this.yntrelVandak(0);
      var norVandak = arr[Math.floor(Math.random() * arr.length)];
      //console.log(norVandak);
      if (this.multiply >= 3 && norVandak) {
        var norXot = new Grass(norVandak[0], norVandak[1]);
        grassArr.push(norXot);
        matrix[norVandak[1]][norVandak[0]] = 1;
        this.multiply = 0;
      }
    }
  
  }

  class Xotaker extends LivingCreature{
    constructor(x, y, index) {
      super(x, y, index);
      this.energy = 5;
      this.directions = [];
      
    }
  
    stanalNorKordinatner() {
      this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
      ];
    }
    yntrelVandak(ch) {
      this.stanalNorKordinatner();
      return super.yntrelVandak(ch);
    }
    sharjvel() {
      this.stanalNorKordinatner();
      var arr = this.yntrelVandak(0);
      var norvandak = arr[Math.floor(Math.random() * arr.length)];
      if (norvandak) {
        matrix[this.y][this.x] = 0;
        matrix[norvandak[1]][norvandak[0]] = 2;
        this.x = norvandak[0];
        this.y = norvandak[1];
        this.energy--;
      }
    }
    eat() {
      this.stanalNorKordinatner();
      var arr = this.yntrelVandak(1);
      var norvandak = arr[Math.floor(Math.random() * arr.length)];
  
      if (norvandak) {
  
        matrix[this.y][this.x] = 0;
        matrix[norvandak[1]][norvandak[0]] = 2;
        this.x = norvandak[0];
        this.y = norvandak[1];
        this.energy++;
        for (var c in grassArr) {
          if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
            grassArr.splice(c, 1);
            break;
          }
        }
      }
      else {
        this.sharjvel();
      }
    }
  
    bazmanal() {
      this.energy = 6;
      var norVandak = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
      if (norVandak) {
        var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
        xotakerner.push(norXotaker);
        matrix[norVandak[1]][norVandak[0]] = 2;
      }
    }
    mahanal(i) {
      matrix[this.y][this.x] = 0;
      xotakerner.splice(i, 1);
      //console.log(xotakerner.length)
    }
  
  }

  class Gishatich extends LivingCreature{
    constructor(x, y, index) {
      super(x, y, index)
      this.energy = 5;
      this.directions = [];
      this.index = 3;
    }
  
    stanalNorKordinatner() {
      this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
      ];
    }
    yntrelVandak(ch) {
      this.stanalNorKordinatner();
      return super.yntrelVandak(ch);
    }
    sharjvel() {
      this.stanalNorKordinatner();
      var datarkvandakner = this.yntrelVandak(0);
      var norvandak = datarkvandakner[Math.floor(Math.random() * datarkvandakner.length)];
      if (norvandak) {
        matrix[this.y][this.x] = 0;
        matrix[norvandak[1]][norvandak[0]] = 3;
        this.x = norvandak[0];
        this.y = norvandak[1];
        this.energy--;
      }
    }
    eat() {
      this.stanalNorKordinatner();
      var datarkvandakner = this.yntrelVandak(2);
      var norvandak = datarkvandakner[Math.floor(Math.random() * datarkvandakner.length)];
      if (norvandak) {
        matrix[this.y][this.x] = 0;
        matrix[norvandak[1]][norvandak[0]] = 3;
        this.x = norvandak[0];
        this.y = norvandak[1];
        this.energy++;
        for (var c in xotakerner) {
          
          if (xotakerner[c].x == this.x && xotakerner[c].y == this.y) {
            xotakerner.splice(c, 1);
            break;
          }
        }
      }
      else {
        this.sharjvel();
      }
    }
  
    bazmanal() {
      this.energy = 10;
      var norVandak = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
      if (norVandak) {
        var  gishatich = new Gishatich(norVandak[0], norVandak[1]);
        gishatichner.push(gishatich);
        matrix[norVandak[1]][norVandak[0]] = 3;
      }
    }
    mahanal() {
        matrix[this.y][this.x] = 0;
        gishatichner.splice(i, 1);
      
    }
  
  }

  class Aryuc extends LivingCreature{
    constructor(x, y, index) {
      super(x, y, index)
      this.energy = 10;
      this.directions = [];
      this.index = 4;
      
    }
  
    stanalNorKordinatner() {
      this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
      ];
    }
    yntrelVandak(ch) {
      this.stanalNorKordinatner()
      return super.yntrelVandak(ch);
    }
    sharjvel() {
      this.stanalNorKordinatner();
      var datarkvandakner = this.yntrelVandak(0);
      var norvandak = datarkvandakner[Math.floor(Math.random() * datarkvandakner.length)];
      if (norvandak) {
        matrix[this.y][this.x] = 0;
        matrix[norvandak[1]][norvandak[0]] = 4;
        this.x = norvandak[0];
        this.y = norvandak[1];
        this.energy--;
      }
    }
    eat() {
      this.stanalNorKordinatner();
      var datarkvandakner = this.yntrelVandak(3);
      var norvandak = datarkvandakner[Math.floor(Math.random() * datarkvandakner.length)];
  
      if (norvandak) {
  
        matrix[this.y][this.x] = 0;
        matrix[norvandak[1]][norvandak[0]] = 4;
        this.x = norvandak[0];
        this.y = norvandak[1];
        this.energy++;
        for (var c in gishatichner) {
          if (gishatichner[c].x == this.x && gishatichner[c].y == this.y) {
            gishatichner.splice(c, 1);
            break;
          }
        }
      }
      else {
        this.sharjvel();
      }
    }
  
     bazmanal() {
      this.energy = 6;
       var norVandak = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
      if (norVandak) {
        var norXotaker = new Aryuc(norVandak[0], norVandak[1]);
        aryucner.push(norXotaker);
         matrix[norVandak[1]][norVandak[0]] = 2;
       }
     }
     mahanal(i) {
       matrix[this.y][this.x] = 0;
       aryucner.splice(i, 1);
       console.log(aryucner.length)
   }
  
  }

  class Pat {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.energy = 5;
      this.directions = [];
      this.index = 5;
      
    }
  
    stanalNorKordinatner() {
      this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
      ];
    }
    yntrelVandak(ch) {
      this.stanalNorKordinatner()
      var found = [];
      for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
          if (matrix[y][x] == ch) {
            found.push(this.directions[i]);
          }
        }
      }
      return found;
    }
  
  
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
function onClick() {
    var data = 15;
    socket.emit('send', (data) => {
        console.log(data); // data will be 'woot'
    });
      
}
//socket.on("matrix",draw);