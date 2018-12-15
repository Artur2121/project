var LivingCreature = require("./mayr-class.js");


module.exports = class Grass extends LivingCreature {


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