// Storing them in this. x, y  will make it not to conflict with player this. x y

function Border (x, y, width, height, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;

    //Styles will be drawn with context
    this.draw = function(){
        if (this.type === 1) {
            ctx.fillStyle = "yellow";
        } else if (this.type === 2) {
            ctx.fillStyle = "green";
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}