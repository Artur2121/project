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