function pacman() {
    this.s = 15;
    this.originX = 60;
    this.originY = 60;
    this.xdir = 3;
    this.ydir = 0;
    this.move = true;
    this.left = false;
    this.right = true;
    this.up = true;
    this.down = false; 
    this.rightNeighbourBlock = false;
    this.leftNeighbourBlock = false;
    this.upNeighbourBlock = false;
    this.downNeighbourBlock = false;
    
    this.show = function() {
        fill(235,238,0);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(this.originX,this.originY,this.s,this.s);
        
        if(this.move){
        this.originX += this.xdir;
        this.originY += this.ydir;           
        }
    }
}