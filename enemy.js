function enemy() {
    this.s = 15;
    this.originX = 330;
    this.originY = 450;
    this.xdir = 3;
    this.ydir = 0;
    this.move = true;
    this.left = false;
    this.right = true;
    this.up = false;
    this.down = false;
    this.static = false;
    
    this.show = function() {
        noStroke();
        fill(203,32,39);
        ellipseMode(RADIUS);
        ellipse(this.originX,this.originY,this.s,this.s);
        
        if(this.move){
        this.originX += this.xdir;
        this.originY += this.ydir;
        }
    }
    
    this.detectPac = function(){
        if(dist(this.originX,this.originY,pac.originX,pac.originY) < 25){
       lives -=1;
//            stars = 0;
        xcheckbool = false;
        xcheckbool2 = false;
        xcheckbool3 = false;
        xcheckbool4 = false;
        xcheckbool5 = false;
    IJ1Arr = [];
    IJ1Arr2 = [];
    IJ1Arr3 = [];        
    IJ1Arr4 = [];        
    IJ1Arr5 = [];        
            
//    for(var i=0; i<25; i++){
//        for(var j=0; j<23; j++){
//            grid[i][j] = new cell(i,j);
//        }
//    }
            
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            grid[i][j].show();
        }
    }
    
//    for(var i=0; i<25; i++){
//        for(var j=0; j<23; j++){
//            if(i > 0 && j > 0){
//                if(grid[i][j-1].block === true || grid[i-1][j-1].block === true ||  grid[i-1][j].block === true){
//                    grid[i][j].star = false;
//                }
//            } 
//        }
//    }           
                
    pac.s = 15;
    pac.originX = 60;
    pac.originY = 60;
    pac.xdir = 3;
    pac.ydir = 0;
    pac.move = true;
    pac.left = false;
    pac.right = true;
    pac.up = true;
    pac.down = false; 
    pac.rightNeighbourBlock = false;
    pac.leftNeighbourBlock = false;
    pac.upNeighbourBlock = false;
    pac.downNeighbourBlock = false; 
        
    ene1.s = 15;
    ene1.originX = 330;
    ene1.originY = 450;
    ene1.xdir = 3;
    ene1.ydir = 0;
    ene1.move = true;
    ene1.left = false;
    ene1.right = true;
    ene1.up = false;
    ene1.down = false;
    ene1.static = false;
        
    ene2.s = 15;
    ene2.originX = 360;
    ene2.originY = 450;
    ene2.xdir = -3;
    ene2.ydir = 0;
    ene2.move = true;
    ene2.left = true;
    ene2.right = false;
    ene2.up = false;
    ene2.down = false;
    ene2.static = false;
        
    ene3.s = 15;
    ene3.originX = 390;
    ene3.originY = 450;
    ene3.xdir = 3;
    ene3.ydir = 0;
    ene3.move = true;
    ene3.left = false;
    ene3.right = true;
    ene3.up = false;
    ene3.down = false;
    ene3.static = false;        
        
    ene4.s = 15;
    ene4.originX = 390;
    ene4.originY = 450;
    ene4.xdir = 3;
    ene4.ydir = 0;
    ene4.move = true;
    ene4.left = false;
    ene4.right = true;
    ene4.up = false;
    ene4.down = false;
    ene4.static = false; 
            
    ene5.s = 15;
    ene5.originX = 390;
    ene5.originY = 450;
    ene5.xdir = 3;
    ene5.ydir = 0;
    ene5.move = true;
    ene5.left = false;
    ene5.right = true;
    ene5.up = false;
    ene5.down = false;
    ene5.static = false;             
      }  
    }
}



function enemy2() {
    this.s = 15;
    this.originX = 360;
    this.originY = 450;
    this.xdir = -3;
    this.ydir = 0;
    this.move = true;
    this.left = true;
    this.right = false;
    this.up = false;
    this.down = false;
    this.static = false; 
    
    this.show = function() {
        noStroke();
        fill(203,32,39);
        ellipseMode(RADIUS);
        ellipse(this.originX,this.originY,this.s,this.s);
        
        if(this.move){
        this.originX += this.xdir;
        this.originY += this.ydir;
        }
    }
    
    this.detectPac = function(){
        if(dist(this.originX,this.originY,pac.originX,pac.originY) < 25){
       lives -=1;
//            stars = 0;
        xcheckbool = false;
        xcheckbool2 = false;
        xcheckbool3 = false;
        xcheckbool4 = false;
        xcheckbool5 = false;
    IJ1Arr = [];
    IJ1Arr2 = [];
    IJ1Arr3 = [];        
    IJ1Arr4 = [];        
    IJ1Arr5 = [];        
            
//    for(var i=0; i<25; i++){
//        for(var j=0; j<23; j++){
//            grid[i][j] = new cell(i,j);
//        }
//    }
//            
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            grid[i][j].show();
        }
    }
    
//    for(var i=0; i<25; i++){
//        for(var j=0; j<23; j++){
//            if(i > 0 && j > 0){
//                if(grid[i][j-1].block === true || grid[i-1][j-1].block === true ||  grid[i-1][j].block === true){
//                    grid[i][j].star = false;
//                }
//            } 
//        }
//    }           
                
    pac.s = 15;
    pac.originX = 60;
    pac.originY = 60;
    pac.xdir = 3;
    pac.ydir = 0;
    pac.move = true;
    pac.left = false;
    pac.right = true;
    pac.up = true;
    pac.down = false; 
    pac.rightNeighbourBlock = false;
    pac.leftNeighbourBlock = false;
    pac.upNeighbourBlock = false;
    pac.downNeighbourBlock = false; 
        
    ene1.s = 15;
    ene1.originX = 330;
    ene1.originY = 450;
    ene1.xdir = 3;
    ene1.ydir = 0;
    ene1.move = true;
    ene1.left = false;
    ene1.right = true;
    ene1.up = false;
    ene1.down = false;
    ene1.static = false;
        
    ene2.s = 15;
    ene2.originX = 360;
    ene2.originY = 450;
    ene2.xdir = -3;
    ene2.ydir = 0;
    ene2.move = true;
    ene2.left = true;
    ene2.right = false;
    ene2.up = false;
    ene2.down = false;
    ene2.static = false;
        
    ene3.s = 15;
    ene3.originX = 390;
    ene3.originY = 450;
    ene3.xdir = 3;
    ene3.ydir = 0;
    ene3.move = true;
    ene3.left = false;
    ene3.right = true;
    ene3.up = false;
    ene3.down = false;
    ene3.static = false; 
            
    ene4.s = 15;
    ene4.originX = 390;
    ene4.originY = 450;
    ene4.xdir = 3;
    ene4.ydir = 0;
    ene4.move = true;
    ene4.left = false;
    ene4.right = true;
    ene4.up = false;
    ene4.down = false;
    ene4.static = false; 
            
    ene5.s = 15;
    ene5.originX = 390;
    ene5.originY = 450;
    ene5.xdir = 3;
    ene5.ydir = 0;
    ene5.move = true;
    ene5.left = false;
    ene5.right = true;
    ene5.up = false;
    ene5.down = false;
    ene5.static = false;             
        }
      }  
    }



function enemy3() {
    this.s = 15;
    this.originX = 390;
    this.originY = 450;
    this.xdir = 3;
    this.ydir = 0;
    this.move = true;
    this.left = false;
    this.right = true;
    this.up = false;
    this.down = false;
    this.static = false; 
    
    this.show = function() {
        noStroke();
        fill(0,187,51);    
        ellipseMode(RADIUS);
        ellipse(this.originX,this.originY,this.s,this.s);
        
        if(this.move){
        this.originX += this.xdir;
        this.originY += this.ydir;
        }
    }
    
    this.detectPac = function(){
        if(dist(this.originX,this.originY,pac.originX,pac.originY) < 25){
       lives -=1;
//            stars = 0;
        xcheckbool = false;
        xcheckbool2 = false;
        xcheckbool3 = false;
        xcheckbool4 = false;
        xcheckbool5 = false;
    IJ1Arr = [];
    IJ1Arr2 = [];
    IJ1Arr3 = [];        
    IJ1Arr4 = [];        
    IJ1Arr5 = [];        
            
//    for(var i=0; i<25; i++){
//        for(var j=0; j<23; j++){
//            grid[i][j] = new cell(i,j);
//        }
//    }
            
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            grid[i][j].show();
        }
    }
    
//    for(var i=0; i<25; i++){
//        for(var j=0; j<23; j++){
//            if(i > 0 && j > 0){
//                if(grid[i][j-1].block === true || grid[i-1][j-1].block === true ||  grid[i-1][j].block === true){
//                    grid[i][j].star = false;
//                }
//            } 
//        }
//    }           
                
    pac.s = 15;
    pac.originX = 60;
    pac.originY = 60;
    pac.xdir = 3;
    pac.ydir = 0;
    pac.move = true;
    pac.left = false;
    pac.right = true;
    pac.up = true;
    pac.down = false; 
    pac.rightNeighbourBlock = false;
    pac.leftNeighbourBlock = false;
    pac.upNeighbourBlock = false;
    pac.downNeighbourBlock = false; 
        
    ene1.s = 15;
    ene1.originX = 330;
    ene1.originY = 450;
    ene1.xdir = 3;
    ene1.ydir = 0;
    ene1.move = true;
    ene1.left = false;
    ene1.right = true;
    ene1.up = false;
    ene1.down = false;
    ene1.static = false;
        
    ene2.s = 15;
    ene2.originX = 360;
    ene2.originY = 450;
    ene2.xdir = -3;
    ene2.ydir = 0;
    ene2.move = true;
    ene2.left = true;
    ene2.right = false;
    ene2.up = false;
    ene2.down = false;
    ene2.static = false;
        
    ene3.s = 15;
    ene3.originX = 390;
    ene3.originY = 450;
    ene3.xdir = 3;
    ene3.ydir = 0;
    ene3.move = true;
    ene3.left = false;
    ene3.right = true;
    ene3.up = false;
    ene3.down = false;
    ene3.static = false;   
            
    ene4.s = 15;
    ene4.originX = 390;
    ene4.originY = 450;
    ene4.xdir = 3;
    ene4.ydir = 0;
    ene4.move = true;
    ene4.left = false;
    ene4.right = true;
    ene4.up = false;
    ene4.down = false;
    ene4.static = false; 
            
    ene5.s = 15;
    ene5.originX = 390;
    ene5.originY = 450;
    ene5.xdir = 3;
    ene5.ydir = 0;
    ene5.move = true;
    ene5.left = false;
    ene5.right = true;
    ene5.up = false;
    ene5.down = false;
    ene5.static = false;             
        
      }  
    }
}

function enemy4() {
    this.s = 15;
    this.originX = 240;
    this.originY = 450;
    this.xdir = 3;
    this.ydir = 0;
    this.move = true;
    this.left = false;
    this.right = true;
    this.up = false;
    this.down = false;
    this.static = false;
    
    this.show = function() {
        noStroke();
        fill(203,32,39);
        ellipseMode(RADIUS);
        ellipse(this.originX,this.originY,this.s,this.s);
        
        if(this.move){
        this.originX += this.xdir;
        this.originY += this.ydir;
        }
    }
    
    this.detectPac = function(){
        if(dist(this.originX,this.originY,pac.originX,pac.originY) < 25){
       lives -=1;
//            stars = 0;
        xcheckbool = false;
        xcheckbool2 = false;
        xcheckbool3 = false;
        xcheckbool4 = false;
        xcheckbool5 = false;
    IJ1Arr = [];
    IJ1Arr2 = [];
    IJ1Arr3 = [];        
    IJ1Arr4 = [];        
    IJ1Arr5 = [];        
            
//    for(var i=0; i<25; i++){
//        for(var j=0; j<23; j++){
//            grid[i][j] = new cell(i,j);
//        }
//    }
            
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            grid[i][j].show();
        }
    }
    
//    for(var i=0; i<25; i++){
//        for(var j=0; j<23; j++){
//            if(i > 0 && j > 0){
//                if(grid[i][j-1].block === true || grid[i-1][j-1].block === true ||  grid[i-1][j].block === true){
//                    grid[i][j].star = false;
//                }
//            } 
//        }
//    }           
                
    pac.s = 15;
    pac.originX = 60;
    pac.originY = 60;
    pac.xdir = 3;
    pac.ydir = 0;
    pac.move = true;
    pac.left = false;
    pac.right = true;
    pac.up = true;
    pac.down = false; 
    pac.rightNeighbourBlock = false;
    pac.leftNeighbourBlock = false;
    pac.upNeighbourBlock = false;
    pac.downNeighbourBlock = false; 
        
    ene1.s = 15;
    ene1.originX = 330;
    ene1.originY = 450;
    ene1.xdir = 3;
    ene1.ydir = 0;
    ene1.move = true;
    ene1.left = false;
    ene1.right = true;
    ene1.up = false;
    ene1.down = false;
    ene1.static = false;
        
    ene2.s = 15;
    ene2.originX = 360;
    ene2.originY = 450;
    ene2.xdir = -3;
    ene2.ydir = 0;
    ene2.move = true;
    ene2.left = true;
    ene2.right = false;
    ene2.up = false;
    ene2.down = false;
    ene2.static = false;
        
    ene3.s = 15;
    ene3.originX = 390;
    ene3.originY = 450;
    ene3.xdir = 3;
    ene3.ydir = 0;
    ene3.move = true;
    ene3.left = false;
    ene3.right = true;
    ene3.up = false;
    ene3.down = false;
    ene3.static = false;    
            
    ene4.s = 15;
    ene4.originX = 390;
    ene4.originY = 450;
    ene4.xdir = 3;
    ene4.ydir = 0;
    ene4.move = true;
    ene4.left = false;
    ene4.right = true;
    ene4.up = false;
    ene4.down = false;
    ene4.static = false; 
            
    ene5.s = 15;
    ene5.originX = 390;
    ene5.originY = 450;
    ene5.xdir = 3;
    ene5.ydir = 0;
    ene5.move = true;
    ene5.left = false;
    ene5.right = true;
    ene5.up = false;
    ene5.down = false;
    ene5.static = false;                             
      }  
    }
}

function enemy5() {
    this.s = 15;
    this.originX = 270;
    this.originY = 450;
    this.xdir = 3;
    this.ydir = 0;
    this.move = true;
    this.left = false;
    this.right = true;
    this.up = false;
    this.down = false;
    this.static = false;
    
    this.show = function() {
        noStroke();
        fill(203,32,39);
        ellipseMode(RADIUS);
        ellipse(this.originX,this.originY,this.s,this.s);
        
        if(this.move){
        this.originX += this.xdir;
        this.originY += this.ydir;
        }
    }
    
    this.detectPac = function(){
        if(dist(this.originX,this.originY,pac.originX,pac.originY) < 25){
       lives -=1;
//            stars = 0;
        xcheckbool = false;
        xcheckbool2 = false;
        xcheckbool3 = false;
        xcheckbool4 = false;
        xcheckbool5 = false;
    IJ1Arr = [];
    IJ1Arr2 = [];
    IJ1Arr3 = [];        
    IJ1Arr4 = [];        
    IJ1Arr5 = [];        
            
//    for(var i=0; i<25; i++){
//        for(var j=0; j<23; j++){
//            grid[i][j] = new cell(i,j);
//        }
//    }
            
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            grid[i][j].show();
        }
    }
    
//    for(var i=0; i<25; i++){
//        for(var j=0; j<23; j++){
//            if(i > 0 && j > 0){
//                if(grid[i][j-1].block === true || grid[i-1][j-1].block === true ||  grid[i-1][j].block === true){
//                    grid[i][j].star = false;
//                }
//            } 
//        }
//    }           
                
    pac.s = 15;
    pac.originX = 60;
    pac.originY = 60;
    pac.xdir = 3;
    pac.ydir = 0;
    pac.move = true;
    pac.left = false;
    pac.right = true;
    pac.up = true;
    pac.down = false; 
    pac.rightNeighbourBlock = false;
    pac.leftNeighbourBlock = false;
    pac.upNeighbourBlock = false;
    pac.downNeighbourBlock = false; 
        
    ene1.s = 15;
    ene1.originX = 330;
    ene1.originY = 450;
    ene1.xdir = 3;
    ene1.ydir = 0;
    ene1.move = true;
    ene1.left = false;
    ene1.right = true;
    ene1.up = false;
    ene1.down = false;
    ene1.static = false;
        
    ene2.s = 15;
    ene2.originX = 360;
    ene2.originY = 450;
    ene2.xdir = -3;
    ene2.ydir = 0;
    ene2.move = true;
    ene2.left = true;
    ene2.right = false;
    ene2.up = false;
    ene2.down = false;
    ene2.static = false;
        
    ene3.s = 15;
    ene3.originX = 390;
    ene3.originY = 450;
    ene3.xdir = 3;
    ene3.ydir = 0;
    ene3.move = true;
    ene3.left = false;
    ene3.right = true;
    ene3.up = false;
    ene3.down = false;
    ene3.static = false;    
            
    ene4.s = 15;
    ene4.originX = 390;
    ene4.originY = 450;
    ene4.xdir = 3;
    ene4.ydir = 0;
    ene4.move = true;
    ene4.left = false;
    ene4.right = true;
    ene4.up = false;
    ene4.down = false;
    ene4.static = false; 
            
    ene5.s = 15;
    ene5.originX = 390;
    ene5.originY = 450;
    ene5.xdir = 3;
    ene5.ydir = 0;
    ene5.move = true;
    ene5.left = false;
    ene5.right = true;
    ene5.up = false;
    ene5.down = false;
    ene5.static = false;                             
      }  
    }
}