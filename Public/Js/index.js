// drawing variables
let canvas;
let ctx;

// Game Variables

let gameLoop;
let player;

//input variables (movement)
let upKey;
let rightKey;
let downKey;
let leftKey;

// //Runs once page loads
window.onload = function () {
  //give it a variable
  canvas = document.getElementById("overworld-canvas");
  ctx = canvas.getContext("2d");

  // ctx will be like the brush to draw on the canvas
  ctx.fillStyle = "white";
  // x, y, width, height
  ctx.fillRect(0, 0, 1280, 720);

  // ------ Player Load -------
  player = new Player(100, 100);

  // game loop
  ///    1000 = 1s  30 is the number its printing like framerates
  gameLoop = setInterval(step, 1000 / 30);

  /// SETUP INPUTS

  setupInputs();
};

function step() {
  // console.log("step")
  player.step();

  //draw everything
  draw();
}

function draw() {
  //clear the canvas
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 1280, 720);

  //player drawn
  player.draw();
}

// Giving WASD / Arrow Movement inputs
function setupInputs() {
  document.addEventListener("keydown", function(event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = true;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = true;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      downKey = true;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      rightKey = true;
    }
  });
  document.addEventListener("keyup", function(event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = false;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = false;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      downKey = false;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      rightKey = false;
    }
  });
}
