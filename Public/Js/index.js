let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.body.style.zoom = "250%";
let fps = 60;
let worldTiles = new Image();
worldTiles.src = "/assets/tiles-overworld.png";
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let player = new Image();
player.src = "/assets/hero.png";
let animationCounter = 0;
let currentAnimation = 0;
let animationSpeed = 10;
let lastButtonPressed = "up";
let playerY = 135;
let playerX = 116;
let heartspawn = false;
let heartImg = new Image();
heartImg.src = "/assets/heart.png";
let heart = {
	x: 0,
	y: 0
};



heartImg.onload = function() {
	heartspawn = true
};

function loadHearts() {
	if (backgroundReady) {
		context.drawImage(backgroundImg, 0, 0);
	}

	if (heartspawn) {
		context.drawImage(heartImg, heart.x, 
			heart.y);
	}
}


function keyDownHandler(e) {
  if (e.keyCode == 37 || e.keyCode === 65) {
    leftPressed = true;
    lastButtonPressed = "left";
  } else if (e.keyCode === 68 || e.keyCode == 39) {
    rightPressed = true;
    lastButtonPressed = "right";
  } else if (e.keyCode === 87 || e.keyCode == 38) {
    upPressed = true;
    lastButtonPressed = "up";
  } else if (e.keyCode === 83 || e.keyCode == 40) {
    downPressed = true;
    lastButtonPressed = "down";
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 37 || e.keyCode === 65) {
    leftPressed = false;
  } else if (e.keyCode === 68 || e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode === 87 || e.keyCode == 38) {
    upPressed = false;
  } else if (e.keyCode === 83 || e.keyCode == 40) {
    downPressed = false;
  }
}

function drawplayer() {
  let speed = 2;
  animationCounter++;

  if (leftPressed && !collision(playerX - speed, playerY, Overworld)) {
    playerX -= speed;
    if (currentAnimation == 0) {
      ctx.drawImage(player, 0, 1, 17, 32, playerX, playerY, 17, 32);
    } else if (currentAnimation == 1) {
      ctx.drawImage(player, 0, 6, 17, 32, playerX, playerY, 17, 32);
    }
    if (animationCounter >= 4) {
      currentAnimation++;
      animationCounter = 0;
      if (currentAnimation > 1) {
        currentAnimation = 0;
      }
    }
  } else if (rightPressed & !collision(playerX + speed, playerY, Overworld)) {
    playerX += speed;
    if (currentAnimation == 0) {
      ctx.drawImage(player, 0, 1, 16, 31, playerX, playerY, 16, 31);
    } else if (currentAnimation == 1) {
      ctx.drawImage(player, 0, 6, 16, 31, playerX, playerY, 16, 31);
    }
    if (animationCounter >= 4) {
      currentAnimation++;
      animationCounter = 0;
      if (currentAnimation > 1) {
        currentAnimation = 0;
      }
    }
  } else if (upPressed & !collision(playerX, playerY - speed, Overworld)) {
    playerY -= speed;
    if (currentAnimation == 0) {
      ctx.drawImage(player, 0, 1, 16, 31, playerX, playerY, 16, 31);
    } else if (currentAnimation == 1) {
      ctx.drawImage(player, 0, 6, 16, 31, playerX, playerY, 16, 31);
    }
    if (animationCounter >= 4) {
      currentAnimation++;
      animationCounter = 0;
      if (currentAnimation > 1) {
        currentAnimation = 0;
      }
    }
  } else if (downPressed & !collision(playerX, playerY + speed, Overworld)) {
    playerY += speed;
    if (currentAnimation == 0) {
      ctx.drawImage(player, 0, 1, 16, 31, playerX, playerY, 16, 31);
    } else if (currentAnimation == 1) {
      ctx.drawImage(player, 0, 6, 16, 31, playerX, playerY, 16, 31);
    }
    if (animationCounter >= 4) {
      currentAnimation++;
      animationCounter = 0;
      if (currentAnimation > 1) {
        currentAnimation = 0;
      }
    }
  } else {
    if (lastButtonPressed == "down") {
      ctx.drawImage(player, 0, 0, 16, 31, playerX, playerY, 16, 31);
    }
    if (lastButtonPressed == "up") {
      ctx.drawImage(player, 0, 0, 16, 31, playerX, playerY, 16, 31);
    }
    if (lastButtonPressed == "left") {
      ctx.drawImage(player, 0, 0, 16, 30, playerX, playerY, 16, 31);
    }
    if (lastButtonPressed == "right") {
      ctx.drawImage(player, 0, 0, 16, 31, playerX, playerY, 16, 31);
    }
  }
}

function draw() {
  setTimeout(function () {
    requestAnimationFrame(draw);
    ctx.fillStyle = "rgb(20,20,20)";
    ctx.fillRect(0, 0, 256, 240);
    ///all code goes here
    drawMap(Overworld);
    drawplayer();
	loadHearts();
  }, 1000 / fps);
}
draw();
