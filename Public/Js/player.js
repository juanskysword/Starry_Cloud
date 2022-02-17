//player Movement and placement
function Player(x, y) {
  this.x = x;
  this.y = y;
  //horizontal speed
  this.xspeed = 0; 
  // vertical speed up and down
  this.yspeed= 0; 
   // smooth transiction for when the player stops (Higher slows them down slower / Lower makes them stop instally)
  this.friction = 0.6;
  this.maxSpeed = 10;
  this.width = 25;
  this.height = 25;
  this.active = true;

  this.step = function () {
      //Movement
    if (this.active) {
        //horizontal movement
        if (!leftKey && !rightKey || leftKey && rightKey) {
            // Slowdown
            this.xspeed *= this.friction;
        } else if (rightKey) {
            // Move Right
            this.xspeed ++;
        } else if (leftKey) {
            // Move Left
            this.xspeed --;
        }
        //vertical movement
    if (upKey && !downKey)
        //correct speed
        if (this.xspeed > this.maxSpeed) {
            this.xspeed = this.maxSpeed;
        } else if ( this.xspeed < -this.maxSpeed) {
            this.xspeed = -this.maxSpeed
        }

        this.x += this.xspeed;
        this.y += this.yspeed;
    }
  };
  this.draw = function () {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}
