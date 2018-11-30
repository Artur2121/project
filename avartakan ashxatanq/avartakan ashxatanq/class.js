
class Grass {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.multiply = 25;
    // this.index=index
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
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

        if (matrix[y][x] == ch) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }
  bazmanal() {
    this.multiply++;
    var norVandak = random(this.yntrelVandak(0));
    //console.log(norVandak);
    if (this.multiply >= 10 && norVandak) {
      var norXot = new Grass(norVandak[0], norVandak[1]);
      grassArr.push(norXot);
      matrix[norVandak[1]][norVandak[0]] = 1;
      this.multiply = 0;
    }
  }

}
class Xotaker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 5;
    this.directions = [];
    this.index = 2;
    
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
  sharjvel() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(0);
    var norvandak = random(datarkvandakner);
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
    var datarkvandakner = this.yntrelVandak(1);
    var norvandak = random(datarkvandakner);

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
    var norVandak = random(this.yntrelVandak(0));
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

class Gishatich {
  constructor(x, y) {
    this.x = x;
    this.y = y;
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
  sharjvel() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(0);
    var norvandak = random(datarkvandakner);
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
    var norvandak = random(datarkvandakner);
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
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak) {
      var  gishatich = new Gishatich(norVandak[0], norVandak[1]);
      gishatichner.push(gishatich);
      matrix[norVandak[1]][norVandak[0]] = 3;
    }
  }
  mahanal() {
    // matrix[this.y][this.x] = 0;
    //gishatichner.splice(i, 1);
    // this.stanalNorKordinatner();
    // var datarkvandakner = this.yntrelVandak(2);
    // var norvandak = random(datarkvandakner);
    //   if (norvandak) {
    //     matrix[this.y][this.x] = 0;
    //     matrix[norvandak[1]][norvandak[0]] = 3;
    //     this.x = norvandak[0];
    //     this.y = norvandak[1];
    //     this.energy++;
    //     for (var i in gishatichner) {
    //       // console.log(gishatichner)
    //       if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
    //         gishatichner.splice(i, 1);
    //         break;
    //       }
    //     }
    //   }
    //   else {
    //     this.sharjvel();
    //   }
    
  }

}
class Aryuc {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 5;
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
  sharjvel() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(0);
    var norvandak = random(datarkvandakner);
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
    var norvandak = random(datarkvandakner);

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
     var norVandak = random(this.yntrelVandak(0));
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