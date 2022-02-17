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
        if (!downKey && !upKey || downKey && upKey) {
            // Slowdown
            this.yspeed *= this.friction;
        } else if (upKey) {
            // Move Up
            this.yspeed --;
        } else if (downKey) {
            // Move Down
            this.yspeed ++;
        }
        //vertical movement

        //correct speed
        if (this.xspeed > this.maxSpeed) {
            this.xspeed = this.maxSpeed;
        } else if ( this.xspeed < -this.maxSpeed) {
            this.xspeed = -this.maxSpeed
        }
        if (this.yspeed > this.maxSpeed) {
            this.yspeed = this.maxSpeed;
        } else if ( this.yspeed < -this.maxSpeed) {
            this.yspeed = -this.maxSpeed
        }
        if (this.xspeed > 0) {
            this.xspeed = Math.floor(this.xspeed);
        } else {
            this.xspeed = Math.ceil(this.xspeed)
        }
        if (this.yspeed > 0) {
            this.yspeed = Math.floor(this.yspeed);
        } else {
            this.yspeed = Math.ceil(this.yspeed)
        }
        // Horizontal Collision Rectangle
        let horizontalRect = {
            x: this.x + this.xspeed, 
            y: this.y, 
            width: this.width, 
            height: this.height
        }

        // Vertical Collision Rectangle
        let verticalRect = {
            x: this.x,
            y: this.y + this.yspeed,
            width: this.width,
            height: this.height
        }

        //check for intersection
        for ( let i = 0; i < borders.length; i++) {
            let borderRect = {
                x: borders[i].x, 
                y: borders[i].y, 
                width: borders[i].width,
                height: borders[i].height
            }
            if (checkIntersection(horizontalRect, borderRect)) {
                while (checkIntersection(horizontalRect, borderRect)) {
                    horizontalRect.x = Math.sign(this.xspeed);
                }
                // this.x = horizontalRect.x;
                this.xspeed = 0;
            }
            if (checkIntersection(verticalRect, borderRect)) {
                while (checkIntersection(verticalRect, borderRect)) {
                    verticalRect.y = Math.sign(this.yspeed);
                }
                // this.y = verticalRect.y;
                this.yspeed = 0;
            }
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
