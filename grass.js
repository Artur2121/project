var LivingCreature = require("./mayr-class.js");


module.exports = class Grass extends LivingCreature {


  bazmanal() {
    this.multiply++;
    var norVandak = random
    (this.yntrelVandak(0));
    //console.log(norVandak);
    if (this.multiply >= 3 && norVandak) {
      var norXot = new Grass(norVandak[0], norVandak[1]);
      grassArr.push(norXot);
      matrix[norVandak[1]][norVandak[0]] = 1;
      this.multiply = 0;
    }
  }

}