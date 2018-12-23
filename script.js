//import { Socket } from "dgram";
var socket = io();
weather = "Garun";
var c = 0;
var side = 30;

var g = 20
socket.on("weather", function (data) {
  weather = data
});
var gameRunning = 1;
function startGame () {
  if(gameRunning === 0) {
    gameRunning = 1;
  } else {
    gameRunning = 0;
  }
  socket.emit("start", gameRunning)
}


var gishatic = document.getElementById("gishatic");
var xotaker = document.getElementById("xotaker");
var xot = document.getElementById("xot");
socket.on("stats", function (data) {
  // gishatic = data
  // console.log(data);
  if(data.type === "gishatic") {
    gishatic.innerHTML="Gitshatich:" + data.count;
  }
  if(data.type === "xotaker") {
    xotaker.innerHTML="Xotaker:" + data.count;
  }
  if(data.type === "xot") {
    xot.innerHTML="xot:" + data.count;
  }
});



function setup() {

  frameRate(5);
  createCanvas(g * side, g * side);
  background('#acacac');

}

function drawMatrix(matrix) {
  for (var y = 0; y < matrix.length; y++) {
// console.log(weather)
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1 && weather == "Garun") {
        fill("#6D9E6F");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 1 && weather == "Amar") {
        fill("#0DFF07");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 1 && weather == "Ashun") {
        fill("#FFDA00");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 1 && weather == "Dzmer") {
        fill("#D4FFFC");
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


}
function onClick() {
  var data = 15;
  socket.emit('send', (data) => {
    console.log(data); // data will be 'woot'
  });

}
socket.on("matrix",drawMatrix);