//Explanation of game: Collect stars with yellow character by using mouse keys, finishing level 5 completes the game. Green enemy tracks your position and will pursue you, red enemies are blind. this is simplified enemy behaviour with respect to the original pacman is not intended as a clone

//Sometimes the yellow ball is a bit glitchy, will address that shortly

//Alan Murphy 12/9/17, all code my own

//p5js https://p5js.org/
//Game inspired by Toru Iwatani and classic video game 'Pac-Man'

//music - 'daft punk - harder better faster stronger' remixed by https://www.youtube.com/channel/UCn4HDI02U4f3VEsghRX7dRw

var grid;
var pac;
var ene1;
var ene2;
var ene3;
var ene4;
var ene5;
var xcheckbool = false;
var xcheckbool2 = false;
var xcheckbool3 = false;
var xcheckbool4 = false;
var xcheckbool5 = false;
var IJ1Arr = [];
var IJ1Arr2 = [];
var IJ1Arr3 = [];
var IJ1Arr4 = [];
var IJ1Arr5 = [];
var score = 0;
var lives = 4;
var level = 1;
var stars = 0;

function preload() {
    theme = loadSound('theme.mp3');
}

function setup() {
    createCanvas(750,690);
    background(200);
    theme.play();
    grid = make2DArray(25,23);
    pac = new pacman();
    ene1 = new enemy();
    ene2 = new enemy2();
    ene3 = new enemy3();
    ene4 = new enemy4();
    ene5 = new enemy5();
    
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            grid[i][j] = new cell(i,j);
        }
    }
}

function draw() {
    
    if(level === 6){
        noLoop();
        alert('Congratulations, you did it! You beat the last level!');
    }
    
    if(lives === 0){
        noLoop();
        alert('Game Over! Your score is '+score+' on level '+level);
    }
    
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            grid[i][j].show();
        }
    }
    
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            if(i > 0 && j > 0){
                if(grid[i][j-1].block === true || grid[i-1][j-1].block === true ||  grid[i-1][j].block === true){
                    grid[i][j].star = false;
                }
            } 
        }
    }
    
    pac.show();
    ene1.show();
    ene1.detectPac();
    ene2.show();
    ene2.detectPac();
    ene3.show();
    ene3.detectPac();
    
    if(level >= 2){
    ene4.show();
    ene4.detectPac();
    }
    
    if(level === 5){
    ene5.show();
    ene5.detectPac();
    }
    
    if(stars === 206){
        stars = 0;
        level++;

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
            
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            grid[i][j] = new cell(i,j);
        }
    }
            
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            grid[i][j].show();
        }
    }
    
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            if(i > 0 && j > 0){
                if(grid[i][j-1].block === true || grid[i-1][j-1].block === true ||  grid[i-1][j].block === true){
                    grid[i][j].star = false;
                }
            } 
        }
    }           
                
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
    
    
    for(var i=0; i<25; i++){
        for(var j=0; j<23; j++){
            grid[i][j].barrier(pac.originX,pac.originY);
            grid[i][j].eBarrier(ene1.originX,ene1.originY);
            grid[i][j].eBarrier2(ene2.originX,ene2.originY);
            grid[i][j].eBarrier3(ene3.originX,ene3.originY);
            grid[i][j].eBarrier4(ene4.originX,ene4.originY);
            grid[i][j].eBarrier5(ene5.originX,ene5.originY);
            grid[i][j].checkRightNeighbour(pac.originX,pac.originY);
            grid[i][j].checkLeftNeighbour(pac.originX,pac.originY);
            grid[i][j].checkUpNeighbour(pac.originX,pac.originY);
            grid[i][j].checkDownNeighbour(pac.originX,pac.originY);
            grid[i][j].clearStar();
            grid[i][j].fillIJ1Arr(ene1.originX,ene1.originY);
            grid[i][j].fillIJ1Arr2(ene2.originX,ene2.originY);
            grid[i][j].fillIJ1Arr3(ene3.originX,ene3.originY);
            grid[i][j].fillIJ1Arr4(ene4.originX,ene4.originY);
            grid[i][j].fillIJ1Arr5(ene5.originX,ene5.originY);
        }
    }

    
    if(!xcheckBool){
    
    if(grid[(IJ1Arr[0])][(IJ1Arr[1]-1)].block === false &&                
               grid[(IJ1Arr[4])][(IJ1Arr[5]-1)].block === false &&
               grid[(IJ1Arr[4]+1)][(IJ1Arr[5])].block === true &&
               grid[(IJ1Arr[6]+1)][(IJ1Arr[7])].block === true &&
               grid[(IJ1Arr[6])][(IJ1Arr[7]+1)].block === true &&
               grid[(IJ1Arr[2]-1)][(IJ1Arr[3])].block === false &&
               grid[(IJ1Arr[0]-1)][(IJ1Arr[1])].block === false){
                // -L
                if(random(1) < 0.5){
                    ene1.right = false;
                    ene1.down = false;
                    ene1.up = false;
                    ene1.left = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = -3;
                    ene1.ydir = 0;                     
                } else {
                    ene1.right = false;
                    ene1.down = false;
                    ene1.left = false;
                    ene1.up = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = -3;                    
                }
                
        } else if(grid[(IJ1Arr[0])][(IJ1Arr[1]-1)].block === false &&                
               grid[(IJ1Arr[4])][(IJ1Arr[5]-1)].block === false &&
               grid[(IJ1Arr[4]+1)][(IJ1Arr[5])].block === false &&
               grid[(IJ1Arr[6]+1)][(IJ1Arr[7])].block === false &&
               grid[(IJ1Arr[2])][(IJ1Arr[3]+1)].block === true &&
               grid[(IJ1Arr[2]-1)][(IJ1Arr[3])].block === true &&
               grid[(IJ1Arr[0]-1)][(IJ1Arr[1])].block === true){
                 //L
                if(random(1) < 0.5){
                    ene1.left = false;
                    ene1.down = false;
                    ene1.up = false;
                    ene1.right = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 3;
                    ene1.ydir = 0;                     
                } else {
                    ene1.left = false;
                    ene1.down = false;
                    ene1.right = false;
                    ene1.up = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = -3;                    
                } 
            
        } else if(grid[(IJ1Arr[4])][(IJ1Arr[5]-1)].block === true &&
               grid[(IJ1Arr[4]+1)][(IJ1Arr[5])].block === true &&
               grid[(IJ1Arr[6]+1)][(IJ1Arr[7])].block === true &&
               grid[(IJ1Arr[6])][(IJ1Arr[7]+1)].block === false &&
               grid[(IJ1Arr[2])][(IJ1Arr[3]+1)].block === false){
                // -L U
                if(random(1) < 0.5){
                    ene1.up = false;
                    ene1.right = false;
                    ene1.down = false;
                    ene1.left = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = -3;
                    ene1.ydir = 0;                     
                } else {
                    ene1.up = false;
                    ene1.right = false;
                    ene1.left = false;
                    ene1.down = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = 3;                    
                }                
            
        } else if(grid[(IJ1Arr[0])][(IJ1Arr[1]-1)].block === true &&                
               grid[(IJ1Arr[4]+1)][(IJ1Arr[5])].block === false &&
               grid[(IJ1Arr[6]+1)][(IJ1Arr[7])].block === false &&
               grid[(IJ1Arr[6])][(IJ1Arr[7]+1)].block === false &&
               grid[(IJ1Arr[2])][(IJ1Arr[3]+1)].block === false &&
               grid[(IJ1Arr[2]-1)][(IJ1Arr[3])].block === true &&
               grid[(IJ1Arr[0]-1)][(IJ1Arr[1])].block === true){
                // L U
                if(random(1) < 0.5){
                    ene1.up = false;
                    ene1.left = false;
                    ene1.down = false;
                    ene1.right = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 3;
                    ene1.ydir = 0;                     
                } else {
                    ene1.up = false;
                    ene1.left = false;
                    ene1.right = false;
                    ene1.down = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = 3;                    
                }
            
        } else if(grid[(IJ1Arr[0])][(IJ1Arr[1]-1)].block === false &&                
               grid[(IJ1Arr[4])][(IJ1Arr[5]-1)].block === false &&
               grid[(IJ1Arr[4]+1)][(IJ1Arr[5])].block === false &&
               grid[(IJ1Arr[6]+1)][(IJ1Arr[7])].block === false &&
               grid[(IJ1Arr[6])][(IJ1Arr[7]+1)].block === false &&
               grid[(IJ1Arr[2])][(IJ1Arr[3]+1)].block === false &&
               grid[(IJ1Arr[2]-1)][(IJ1Arr[3])].block === true &&
               grid[(IJ1Arr[0]-1)][(IJ1Arr[1])].block === true){
                // : o 
                if(random(1) < 0.3){
                    ene1.left = false;
                    ene1.right = false;
                    ene1.down = false;
                    ene1.up = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = -3;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene1.left = false;
                    ene1.right = false;
                    ene1.up = false;
                    ene1.down = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = 3;                    
                }  else {
                    ene1.up = false;
                    ene1.down = false;
                    ene1.left = false;
                    ene1.right = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 3;
                    ene1.ydir = 0;
                } 
            
        } else if(grid[(IJ1Arr[0])][(IJ1Arr[1]-1)].block === false &&                
               grid[(IJ1Arr[4])][(IJ1Arr[5]-1)].block === false &&
               grid[(IJ1Arr[4]+1)][(IJ1Arr[5])].block === true &&
               grid[(IJ1Arr[6]+1)][(IJ1Arr[7])].block === true &&
               grid[(IJ1Arr[6])][(IJ1Arr[7]+1)].block === false &&
               grid[(IJ1Arr[2])][(IJ1Arr[3]+1)].block === false &&
               grid[(IJ1Arr[2]-1)][(IJ1Arr[3])].block === false &&
               grid[(IJ1Arr[0]-1)][(IJ1Arr[1])].block === false){
                //  o : 
                if(random(1) < 0.3){
                    ene1.right = false;
                    ene1.left = false;
                    ene1.down = false;
                    ene1.up = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = -3;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene1.right = false;
                    ene1.left = false;
                    ene1.up = false;
                    ene1.down = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = 3;                    
                }  else {
                    ene1.right = false;
                    ene1.up = false;
                    ene1.down = false;
                    ene1.left = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = -3;
                    ene1.ydir = 0;
                } 
            
        } else if(grid[(IJ1Arr[0])][(IJ1Arr[1]-1)].block === true &&                
               grid[(IJ1Arr[4])][(IJ1Arr[5]-1)].block === true &&
               grid[(IJ1Arr[4]+1)][(IJ1Arr[5])].block === false &&
               grid[(IJ1Arr[6]+1)][(IJ1Arr[7])].block === false &&
               grid[(IJ1Arr[6])][(IJ1Arr[7]+1)].block === false &&
               grid[(IJ1Arr[2])][(IJ1Arr[3]+1)].block === false &&
               grid[(IJ1Arr[2]-1)][(IJ1Arr[3])].block === false &&
               grid[(IJ1Arr[0]-1)][(IJ1Arr[1])].block === false){
                //  ^^ 
                if(random(1) < 0.3){
                    ene1.up = false;
                    ene1.down = false;
                    ene1.right = false;
                    ene1.left = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = -3;
                    ene1.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene1.down = false;
                    ene1.up = false;
                    ene1.left = false;
                    ene1.right = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 3;
                    ene1.ydir = 0;                    
                }  else {
                    ene1.up = false;
                    ene1.left = false;
                    ene1.right = false;
                    ene1.down = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = 3;
                } 
            
        } else if(grid[(IJ1Arr[0])][(IJ1Arr[1]-1)].block === false &&                
               grid[(IJ1Arr[4])][(IJ1Arr[5]-1)].block === false &&
               grid[(IJ1Arr[4]+1)][(IJ1Arr[5])].block === false &&
               grid[(IJ1Arr[6]+1)][(IJ1Arr[7])].block === false &&
               grid[(IJ1Arr[6])][(IJ1Arr[7]+1)].block === true &&
               grid[(IJ1Arr[2])][(IJ1Arr[3]+1)].block === true &&
               grid[(IJ1Arr[2]-1)][(IJ1Arr[3])].block === false &&
               grid[(IJ1Arr[0]-1)][(IJ1Arr[1])].block === false){
                //  __ 
                if(random(1) < 0.3){
                    ene1.down = false;
                    ene1.right = false;
                    ene1.up = false;
                    ene1.left = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = -3;
                    ene1.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene1.down = false;
                    ene1.up = false;
                    ene1.left = false;
                    ene1.right = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 3;
                    ene1.ydir = 0;                    
                }  else {
                    ene1.down = false;
                    ene1.left = false;
                    ene1.right = false;
                    ene1.up = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = -3;
                } 
            
        } else if(grid[(IJ1Arr[4])][(IJ1Arr[5]-1)].block === true &&
               grid[(IJ1Arr[4]+1)][(IJ1Arr[5])].block === false &&
               grid[(IJ1Arr[6]+1)][(IJ1Arr[7])].block === false &&
               grid[(IJ1Arr[6])][(IJ1Arr[7]+1)].block === false &&
               grid[(IJ1Arr[2])][(IJ1Arr[3]+1)].block === false &&
               grid[(IJ1Arr[2]-1)][(IJ1Arr[3])].block === false &&
               grid[(IJ1Arr[0]-1)][(IJ1Arr[1])].block === false){
                //  -^ 
                if(random(1) < 0.3){
                    ene1.up = false;
                    ene1.down = false;
                    ene1.right = false;
                    ene1.left = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = -3;
                    ene1.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene1.up = false;
                    ene1.down = false;
                    ene1.left = false;
                    ene1.right = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 3;
                    ene1.ydir = 0;                    
                }  else {
                    ene1.up = false;
                    ene1.left = false;
                    ene1.right = false;
                    ene1.down = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = 3;
                } 
            
        } else if(grid[(IJ1Arr[0])][(IJ1Arr[1]-1)].block === true &&                
               grid[(IJ1Arr[4]+1)][(IJ1Arr[5])].block === false &&
               grid[(IJ1Arr[6]+1)][(IJ1Arr[7])].block === false &&
               grid[(IJ1Arr[6])][(IJ1Arr[7]+1)].block === false &&
               grid[(IJ1Arr[2])][(IJ1Arr[3]+1)].block === false &&
               grid[(IJ1Arr[2]-1)][(IJ1Arr[3])].block === false &&
               grid[(IJ1Arr[0]-1)][(IJ1Arr[1])].block === false){
                //  ^- 
                if(random(1) < 0.3){
                    ene1.up = false;
                    ene1.down = false;
                    ene1.right = false;
                    ene1.left = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = -3;
                    ene1.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene1.up = false;
                    ene1.down = false;
                    ene1.left = false;
                    ene1.right = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 3;
                    ene1.ydir = 0;                    
                }  else {
                    ene1.up = false;
                    ene1.left = false;
                    ene1.right = false;
                    ene1.down = true;
                    ene1.move = true;
                    ene1.static = false;
                    ene1.xdir = 0;
                    ene1.ydir = 3;
                } 
            
        }
    }
    
    if(!xcheckBool2){
    
    if(grid[(IJ1Arr2[0])][(IJ1Arr2[1]-1)].block === false &&                
               grid[(IJ1Arr2[4])][(IJ1Arr2[5]-1)].block === false &&
               grid[(IJ1Arr2[4]+1)][(IJ1Arr2[5])].block === true &&
               grid[(IJ1Arr2[6]+1)][(IJ1Arr2[7])].block === true &&
               grid[(IJ1Arr2[6])][(IJ1Arr2[7]+1)].block === true &&
               grid[(IJ1Arr2[2]-1)][(IJ1Arr2[3])].block === false &&
               grid[(IJ1Arr2[0]-1)][(IJ1Arr2[1])].block === false){
                // -L
                if(random(1) < 0.5){
                    ene2.right = false;
                    ene2.down = false;
                    ene2.up = false;
                    ene2.left = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = -3;
                    ene2.ydir = 0;                     
                } else {
                    ene2.right = false;
                    ene2.down = false;
                    ene2.left = false;
                    ene2.up = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = -3;                    
                }
                
        } else if(grid[(IJ1Arr2[0])][(IJ1Arr2[1]-1)].block === false &&                
               grid[(IJ1Arr2[4])][(IJ1Arr2[5]-1)].block === false &&
               grid[(IJ1Arr2[4]+1)][(IJ1Arr2[5])].block === false &&
               grid[(IJ1Arr2[6]+1)][(IJ1Arr2[7])].block === false &&
               grid[(IJ1Arr2[2])][(IJ1Arr2[3]+1)].block === true &&
               grid[(IJ1Arr2[2]-1)][(IJ1Arr2[3])].block === true &&
               grid[(IJ1Arr2[0]-1)][(IJ1Arr2[1])].block === true){
                 //L
                if(random(1) < 0.5){
                    ene2.left = false;
                    ene2.down = false;
                    ene2.up = false;
                    ene2.right = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 3;
                    ene2.ydir = 0;                     
                } else {
                    ene2.left = false;
                    ene2.down = false;
                    ene2.right = false;
                    ene2.up = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = -3;                    
                } 
            
        } else if(grid[(IJ1Arr2[4])][(IJ1Arr2[5]-1)].block === true &&
               grid[(IJ1Arr2[4]+1)][(IJ1Arr2[5])].block === true &&
               grid[(IJ1Arr2[6]+1)][(IJ1Arr2[7])].block === true &&
               grid[(IJ1Arr2[6])][(IJ1Arr2[7]+1)].block === false &&
               grid[(IJ1Arr2[2])][(IJ1Arr2[3]+1)].block === false){
                // -L U
                if(random(1) < 0.5){
                    ene2.up = false;
                    ene2.right = false;
                    ene2.down = false;
                    ene2.left = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = -3;
                    ene2.ydir = 0;                     
                } else {
                    ene2.up = false;
                    ene2.right = false;
                    ene2.left = false;
                    ene2.down = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = 3;                    
                }                
            
        } else if(grid[(IJ1Arr2[0])][(IJ1Arr2[1]-1)].block === true &&                
               grid[(IJ1Arr2[4]+1)][(IJ1Arr2[5])].block === false &&
               grid[(IJ1Arr2[6]+1)][(IJ1Arr2[7])].block === false &&
               grid[(IJ1Arr2[6])][(IJ1Arr2[7]+1)].block === false &&
               grid[(IJ1Arr2[2])][(IJ1Arr2[3]+1)].block === false &&
               grid[(IJ1Arr2[2]-1)][(IJ1Arr2[3])].block === true &&
               grid[(IJ1Arr2[0]-1)][(IJ1Arr2[1])].block === true){
                // L U
                if(random(1) < 0.5){
                    ene2.up = false;
                    ene2.left = false;
                    ene2.down = false;
                    ene2.right = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 3;
                    ene2.ydir = 0;                     
                } else {
                    ene2.up = false;
                    ene2.left = false;
                    ene2.right = false;
                    ene2.down = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = 3;                    
                }
            
        } else if(grid[(IJ1Arr2[0])][(IJ1Arr2[1]-1)].block === false &&                
               grid[(IJ1Arr2[4])][(IJ1Arr2[5]-1)].block === false &&
               grid[(IJ1Arr2[4]+1)][(IJ1Arr2[5])].block === false &&
               grid[(IJ1Arr2[6]+1)][(IJ1Arr2[7])].block === false &&
               grid[(IJ1Arr2[6])][(IJ1Arr2[7]+1)].block === false &&
               grid[(IJ1Arr2[2])][(IJ1Arr2[3]+1)].block === false &&
               grid[(IJ1Arr2[2]-1)][(IJ1Arr2[3])].block === true &&
               grid[(IJ1Arr2[0]-1)][(IJ1Arr2[1])].block === true){
                // : o 
                if(random(1) < 0.3){
                    ene2.left = false;
                    ene2.right = false;
                    ene2.down = false;
                    ene2.up = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = -3;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene2.left = false;
                    ene2.right = false;
                    ene2.up = false;
                    ene2.down = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = 3;                    
                }  else {
                    ene2.up = false;
                    ene2.down = false;
                    ene2.left = false;
                    ene2.right = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 3;
                    ene2.ydir = 0;
                } 
            
        } else if(grid[(IJ1Arr2[0])][(IJ1Arr2[1]-1)].block === false &&                
               grid[(IJ1Arr2[4])][(IJ1Arr2[5]-1)].block === false &&
               grid[(IJ1Arr2[4]+1)][(IJ1Arr2[5])].block === true &&
               grid[(IJ1Arr2[6]+1)][(IJ1Arr2[7])].block === true &&
               grid[(IJ1Arr2[6])][(IJ1Arr2[7]+1)].block === false &&
               grid[(IJ1Arr2[2])][(IJ1Arr2[3]+1)].block === false &&
               grid[(IJ1Arr2[2]-1)][(IJ1Arr2[3])].block === false &&
               grid[(IJ1Arr2[0]-1)][(IJ1Arr2[1])].block === false){
                //  o : 
                if(random(1) < 0.3){
                    ene2.right = false;
                    ene2.left = false;
                    ene2.down = false;
                    ene2.up = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = -3;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene2.right = false;
                    ene2.left = false;
                    ene2.up = false;
                    ene2.down = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = 3;                    
                }  else {
                    ene2.right = false;
                    ene2.up = false;
                    ene2.down = false;
                    ene2.left = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = -3;
                    ene2.ydir = 0;
                } 
            
        } else if(grid[(IJ1Arr2[0])][(IJ1Arr2[1]-1)].block === true &&                
               grid[(IJ1Arr2[4])][(IJ1Arr2[5]-1)].block === true &&
               grid[(IJ1Arr2[4]+1)][(IJ1Arr2[5])].block === false &&
               grid[(IJ1Arr2[6]+1)][(IJ1Arr2[7])].block === false &&
               grid[(IJ1Arr2[6])][(IJ1Arr2[7]+1)].block === false &&
               grid[(IJ1Arr2[2])][(IJ1Arr2[3]+1)].block === false &&
               grid[(IJ1Arr2[2]-1)][(IJ1Arr2[3])].block === false &&
               grid[(IJ1Arr2[0]-1)][(IJ1Arr2[1])].block === false){
                //  ^^ 
                if(random(1) < 0.3){
                    ene2.up = false;
                    ene2.down = false;
                    ene2.right = false;
                    ene2.left = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = -3;
                    ene2.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene2.down = false;
                    ene2.up = false;
                    ene2.left = false;
                    ene2.right = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 3;
                    ene2.ydir = 0;                    
                }  else {
                    ene2.up = false;
                    ene2.left = false;
                    ene2.right = false;
                    ene2.down = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = 3;
                } 
            
        } else if(grid[(IJ1Arr2[0])][(IJ1Arr2[1]-1)].block === false &&                
               grid[(IJ1Arr2[4])][(IJ1Arr2[5]-1)].block === false &&
               grid[(IJ1Arr2[4]+1)][(IJ1Arr2[5])].block === false &&
               grid[(IJ1Arr2[6]+1)][(IJ1Arr2[7])].block === false &&
               grid[(IJ1Arr2[6])][(IJ1Arr2[7]+1)].block === true &&
               grid[(IJ1Arr2[2])][(IJ1Arr2[3]+1)].block === true &&
               grid[(IJ1Arr2[2]-1)][(IJ1Arr2[3])].block === false &&
               grid[(IJ1Arr2[0]-1)][(IJ1Arr2[1])].block === false){
                //  __ 
                if(random(1) < 0.3){
                    ene2.down = false;
                    ene2.right = false;
                    ene2.up = false;
                    ene2.left = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = -3;
                    ene2.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene2.down = false;
                    ene2.up = false;
                    ene2.left = false;
                    ene2.right = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 3;
                    ene2.ydir = 0;                    
                }  else {
                    ene2.down = false;
                    ene2.left = false;
                    ene2.right = false;
                    ene2.up = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = -3;
                } 
            
        } else if(grid[(IJ1Arr2[4])][(IJ1Arr2[5]-1)].block === true &&
               grid[(IJ1Arr2[4]+1)][(IJ1Arr2[5])].block === false &&
               grid[(IJ1Arr2[6]+1)][(IJ1Arr2[7])].block === false &&
               grid[(IJ1Arr2[6])][(IJ1Arr2[7]+1)].block === false &&
               grid[(IJ1Arr2[2])][(IJ1Arr2[3]+1)].block === false &&
               grid[(IJ1Arr2[2]-1)][(IJ1Arr2[3])].block === false &&
               grid[(IJ1Arr2[0]-1)][(IJ1Arr2[1])].block === false){
                //  -^ 
                if(random(1) < 0.3){
                    ene2.up = false;
                    ene2.down = false;
                    ene2.right = false;
                    ene2.left = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = -3;
                    ene2.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene2.up = false;
                    ene2.down = false;
                    ene2.left = false;
                    ene2.right = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 3;
                    ene2.ydir = 0;                    
                }  else {
                    ene2.up = false;
                    ene2.left = false;
                    ene2.right = false;
                    ene2.down = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = 3;
                } 
            
        } else if(grid[(IJ1Arr2[0])][(IJ1Arr2[1]-1)].block === true &&                
               grid[(IJ1Arr2[4]+1)][(IJ1Arr2[5])].block === false &&
               grid[(IJ1Arr2[6]+1)][(IJ1Arr2[7])].block === false &&
               grid[(IJ1Arr2[6])][(IJ1Arr2[7]+1)].block === false &&
               grid[(IJ1Arr2[2])][(IJ1Arr2[3]+1)].block === false &&
               grid[(IJ1Arr2[2]-1)][(IJ1Arr2[3])].block === false &&
               grid[(IJ1Arr2[0]-1)][(IJ1Arr2[1])].block === false){
                //  ^- 
                if(random(1) < 0.3){
                    ene2.up = false;
                    ene2.down = false;
                    ene2.right = false;
                    ene2.left = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = -3;
                    ene2.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene2.up = false;
                    ene2.down = false;
                    ene2.left = false;
                    ene2.right = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 3;
                    ene2.ydir = 0;                    
                }  else {
                    ene2.up = false;
                    ene2.left = false;
                    ene2.right = false;
                    ene2.down = true;
                    ene2.move = true;
                    ene2.static = false;
                    ene2.xdir = 0;
                    ene2.ydir = 3;
                } 
            
        }
    }
    
    if(!xcheckBool3){
    
    if(grid[(IJ1Arr3[0])][(IJ1Arr3[1]-1)].block === false &&                
               grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].block === false &&
               grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].block === true &&
               grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].block === true &&
               grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].block === true &&
               grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].block === false &&
               grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].block === false){
                // -L
        
            var left = dist(grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].x,grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].y,pac.originX,pac.originY);
                            
            var up = dist(grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].x,grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].y,pac.originX,pac.originY);
                                                                                    
            if (left < up){
                    ene3.right = false;
                    ene3.down = false;
                    ene3.up = false;
                    ene3.left = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = -3;
                    ene3.ydir = 0;
                } else {
                    ene3.right = false;
                    ene3.down = false;
                    ene3.left = false;
                    ene3.up = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = -3;            
                }
        } else if(grid[(IJ1Arr3[0])][(IJ1Arr3[1]-1)].block === false &&                
               grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].block === false &&
               grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].block === false &&
               grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].block === false &&
               grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].block === true &&
               grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].block === true &&
               grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].block === true){
                 //L
            
                var right = dist(grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].x,grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].y,pac.originX,pac.originY);
            
                var up = dist(grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].x,grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].y,pac.originX,pac.originY);
            
                if(up < right){
                    ene3.left = false;
                    ene3.down = false;
                    ene3.right = false;
                    ene3.up = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = -3;
                } else {
                    ene3.left = false;
                    ene3.down = false;
                    ene3.up = false;
                    ene3.right = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 3;
                    ene3.ydir = 0;                    
                }
            
        } else if(grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].block === true &&
               grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].block === true &&
               grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].block === true &&
               grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].block === false &&
               grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].block === false){
                // -L U
            
            var left = dist(grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].x,grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].y,pac.originX,pac.originY);
            
            var down = dist(grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].x,grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].y,pac.originX,pac.originY);
            
            if(down < left){
                    ene3.up = false;
                    ene3.right = false;
                    ene3.left = false;
                    ene3.down = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = 3;
            } else {
                    ene3.up = false;
                    ene3.right = false;
                    ene3.down = false;
                    ene3.left = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = -3;
                    ene3.ydir = 0;                
            }              
            
        } else if(grid[(IJ1Arr3[0])][(IJ1Arr3[1]-1)].block === true &&                
               grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].block === false &&
               grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].block === false &&
               grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].block === false &&
               grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].block === false &&
               grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].block === true &&
               grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].block === true){
                // L U
            
                var right = dist(grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].x,grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].y,pac.originX,pac.originY);
            
                var down = dist(grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].x,grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].y,pac.originX,pac.originY);
            
            
                if(down < right){
                    ene3.up = false;
                    ene3.left = false;
                    ene3.right = false;
                    ene3.down = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = 3;                    
                } else {
                    ene3.up = false;
                    ene3.left = false;
                    ene3.down = false;
                    ene3.right = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 3;
                    ene3.ydir = 0;                    
                }
            
        } else if(grid[(IJ1Arr3[0])][(IJ1Arr3[1]-1)].block === false &&                
               grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].block === false &&
               grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].block === false &&
               grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].block === false &&
               grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].block === false &&
               grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].block === false &&
               grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].block === true &&
               grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].block === true){
                // : o 
            
            
                var up = dist(grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].x,grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].y,pac.originX,pac.originY);
            
                var down = dist(grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].x,grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].y,pac.originX,pac.originY);
            
                var right = dist(grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].x,grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].y,pac.originX,pac.originY);
            
                if(up < down && up < right){
                    ene3.left = false;
                    ene3.right = false;
                    ene3.down = false;
                    ene3.up = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = -3;                    
                } else if(down < up && down < right){
                    ene3.left = false;
                    ene3.right = false;
                    ene3.up = false;
                    ene3.down = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = 3;                    
                } else {
                    ene3.up = false;
                    ene3.down = false;
                    ene3.left = false;
                    ene3.right = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 3;
                    ene3.ydir = 0;                    
                } 
            
        } else if(grid[(IJ1Arr3[0])][(IJ1Arr3[1]-1)].block === false &&                
               grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].block === false &&
               grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].block === true &&
               grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].block === true &&
               grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].block === false &&
               grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].block === false &&
               grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].block === false &&
               grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].block === false){
                //  o : 
            
            
                var up = dist(grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].x,grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].y,pac.originX,pac.originY);
            
                var down = dist(grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].x,grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].y,pac.originX,pac.originY);
            
                var left = dist(grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].x,grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].y,pac.originX,pac.originY);
            
                
                if(up < down && up < left){
                    ene3.right = false;
                    ene3.left = false;
                    ene3.down = false;
                    ene3.up = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = -3;                    
                } else if(down < up && down < left){
                    ene3.right = false;
                    ene3.left = false;
                    ene3.up = false;
                    ene3.down = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = 3;                    
                } else {
                    ene3.right = false;
                    ene3.up = false;
                    ene3.down = false;
                    ene3.left = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = -3;
                    ene3.ydir = 0;                    
                }
            
        } else if(grid[(IJ1Arr3[0])][(IJ1Arr3[1]-1)].block === true &&                
               grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].block === true &&
               grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].block === false &&
               grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].block === false &&
               grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].block === false &&
               grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].block === false &&
               grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].block === false &&
               grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].block === false){
                //  ^^ 
            
            
            
                if(random(1) < 0.3){
                    ene3.up = false;
                    ene3.down = false;
                    ene3.right = false;
                    ene3.left = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = -3;
                    ene3.ydir = 0;                    
                } else if(random(1) > 0.3 && random(1) < 0.6){
                    ene3.up = false;
                    ene3.left = false;
                    ene3.right = false;
                    ene3.down = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = 3;                   
                } else {
                    ene3.down = false;
                    ene3.up = false;
                    ene3.left = false;
                    ene3.right = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 3;
                    ene3.ydir = 0;                    
                }
            
        } else if(grid[(IJ1Arr3[0])][(IJ1Arr3[1]-1)].block === false &&                
               grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].block === false &&
               grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].block === false &&
               grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].block === false &&
               grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].block === true &&
               grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].block === true &&
               grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].block === false &&
               grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].block === false){
                //  __ 
            
            
            var left = dist(grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].x,grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].y,pac.originX,pac.originY);
            
            var right = dist(grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].x,grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].y,pac.originX,pac.originY);
            
            var up = dist(grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].x,grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].y,pac.originX,pac.originY);
            
            if(up < right && up < left){
                    ene3.down = false;
                    ene3.left = false;
                    ene3.right = false;
                    ene3.up = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = -3;                
            } else if(right < up && right < left){
                    ene3.down = false;
                    ene3.up = false;
                    ene3.left = false;
                    ene3.right = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 3;
                    ene3.ydir = 0;                
            } else {
                    ene3.down = false;
                    ene3.right = false;
                    ene3.up = false;
                    ene3.left = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = -3;
                    ene3.ydir = 0;                
            }
            
        } else if(grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].block === true &&
               grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].block === false &&
               grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].block === false &&
               grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].block === false &&
               grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].block === false &&
               grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].block === false &&
               grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].block === false){
                //  -^ 
            
            var left = dist(grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].x,grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].y,pac.originX,pac.originY);
            
            var right = dist(grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].x,grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].y,pac.originX,pac.originY);
            
            var down = dist(grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].x,grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].y,pac.originX,pac.originY);
            
            if(down < right && down < left){
                    ene3.up = false;
                    ene3.left = false;
                    ene3.right = false;
                    ene3.down = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = 3;                
            } else if(right < down && right < left){
                    ene3.up = false;
                    ene3.down = false;
                    ene3.left = false;
                    ene3.right = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 3;
                    ene3.ydir = 0;                
            } else {
                    ene3.up = false;
                    ene3.down = false;
                    ene3.right = false;
                    ene3.left = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = -3;
                    ene3.ydir = 0;                
            } 
            
        } else if(grid[(IJ1Arr3[0])][(IJ1Arr3[1]-1)].block === true &&                
               grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].block === false &&
               grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].block === false &&
               grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].block === false &&
               grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].block === false &&
               grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].block === false &&
               grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].block === false){
                //  ^- 
            
            var left = dist(grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].x,grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].y,pac.originX,pac.originY);
            
            var right = dist(grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].x,grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].y,pac.originX,pac.originY);
            
            var down = dist(grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].x,grid[(IJ1Arr3[2])][(IJ1Arr3[3]+1)].y,pac.originX,pac.originY);
            
            if(down < right && down < left){
                    ene3.up = false;
                    ene3.left = false;
                    ene3.right = false;
                    ene3.down = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = 3;                
            } else if(right < down && right < left){
                    ene3.up = false;
                    ene3.down = false;
                    ene3.left = false;
                    ene3.right = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 3;
                    ene3.ydir = 0;                
            } else {
                    ene3.up = false;
                    ene3.down = false;
                    ene3.right = false;
                    ene3.left = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = -3;
                    ene3.ydir = 0;                 
            }
        } else if(grid[(IJ1Arr3[0])][(IJ1Arr3[1]-1)].block === false &&                
               grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].block === false &&
               grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].block === false &&
               grid[(IJ1Arr3[6]+1)][(IJ1Arr3[7])].block === false &&
               grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].block === false &&
               grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].block === false &&
               grid[(IJ1Arr3[0]-1)][(IJ1Arr3[1])].block === false){
                // -L
            
            var down = dist(grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].x,grid[(IJ1Arr3[6])][(IJ1Arr3[7]+1)].y,pac.originX,pac.originY);
            
            var left = dist(grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].x,grid[(IJ1Arr3[2]-1)][(IJ1Arr3[3])].y,pac.originX,pac.originY);
            
            var right = dist(grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].x,grid[(IJ1Arr3[4]+1)][(IJ1Arr3[5])].y,pac.originX,pac.originY);
            
            var up = dist(grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].x,grid[(IJ1Arr3[4])][(IJ1Arr3[5]-1)].y,pac.originX,pac.originY);
            
            if(up < right && up < left && up < down){
                    ene3.right = false;
                    ene3.down = false;
                    ene3.left = false;
                    ene3.up = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = -3;                
            } else if(right < up && right < left && right < down){
                    ene3.right = false;
                    ene3.down = false;
                    ene3.left = false;
                    ene3.right = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 3;
                    ene3.ydir = 0;                
            } else if(left < down && left < right && left < up){
                    ene3.right = false;
                    ene3.down = false;
                    ene3.up = false;
                    ene3.left = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = -3;
                    ene3.ydir = 0;                
            } else {
                    ene3.right = false;
                    ene3.down = false;
                    ene3.left = false;
                    ene3.down = true;
                    ene3.move = true;
                    ene3.static = false;
                    ene3.xdir = 0;
                    ene3.ydir = 3;                
            }
        }
 
    }
    
if(!xcheckBool4){
    
    if(grid[(IJ1Arr4[0])][(IJ1Arr4[1]-1)].block === false &&                
               grid[(IJ1Arr4[4])][(IJ1Arr4[5]-1)].block === false &&
               grid[(IJ1Arr4[4]+1)][(IJ1Arr4[5])].block === true &&
               grid[(IJ1Arr4[6]+1)][(IJ1Arr4[7])].block === true &&
               grid[(IJ1Arr4[6])][(IJ1Arr4[7]+1)].block === true &&
               grid[(IJ1Arr4[2]-1)][(IJ1Arr4[3])].block === false &&
               grid[(IJ1Arr4[0]-1)][(IJ1Arr4[1])].block === false){
                // -L
                if(random(1) < 0.5){
                    ene4.right = false;
                    ene4.down = false;
                    ene4.up = false;
                    ene4.left = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = -3;
                    ene4.ydir = 0;                     
                } else {
                    ene4.right = false;
                    ene4.down = false;
                    ene4.left = false;
                    ene4.up = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = -3;                    
                }
                
        } else if(grid[(IJ1Arr4[0])][(IJ1Arr4[1]-1)].block === false &&                
               grid[(IJ1Arr4[4])][(IJ1Arr4[5]-1)].block === false &&
               grid[(IJ1Arr4[4]+1)][(IJ1Arr4[5])].block === false &&
               grid[(IJ1Arr4[6]+1)][(IJ1Arr4[7])].block === false &&
               grid[(IJ1Arr4[2])][(IJ1Arr4[3]+1)].block === true &&
               grid[(IJ1Arr4[2]-1)][(IJ1Arr4[3])].block === true &&
               grid[(IJ1Arr4[0]-1)][(IJ1Arr4[1])].block === true){
                 //L
                if(random(1) < 0.5){
                    ene4.left = false;
                    ene4.down = false;
                    ene4.up = false;
                    ene4.right = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 3;
                    ene4.ydir = 0;                     
                } else {
                    ene4.left = false;
                    ene4.down = false;
                    ene4.right = false;
                    ene4.up = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = -3;                    
                } 
            
        } else if(grid[(IJ1Arr4[4])][(IJ1Arr4[5]-1)].block === true &&
               grid[(IJ1Arr4[4]+1)][(IJ1Arr4[5])].block === true &&
               grid[(IJ1Arr4[6]+1)][(IJ1Arr4[7])].block === true &&
               grid[(IJ1Arr4[6])][(IJ1Arr4[7]+1)].block === false &&
               grid[(IJ1Arr4[2])][(IJ1Arr4[3]+1)].block === false){
                // -L U
                if(random(1) < 0.5){
                    ene4.up = false;
                    ene4.right = false;
                    ene4.down = false;
                    ene4.left = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = -3;
                    ene4.ydir = 0;                     
                } else {
                    ene4.up = false;
                    ene4.right = false;
                    ene4.left = false;
                    ene4.down = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = 3;                    
                }                
            
        } else if(grid[(IJ1Arr4[0])][(IJ1Arr4[1]-1)].block === true &&                
               grid[(IJ1Arr4[4]+1)][(IJ1Arr4[5])].block === false &&
               grid[(IJ1Arr4[6]+1)][(IJ1Arr4[7])].block === false &&
               grid[(IJ1Arr4[6])][(IJ1Arr4[7]+1)].block === false &&
               grid[(IJ1Arr4[2])][(IJ1Arr4[3]+1)].block === false &&
               grid[(IJ1Arr4[2]-1)][(IJ1Arr4[3])].block === true &&
               grid[(IJ1Arr4[0]-1)][(IJ1Arr4[1])].block === true){
                // L U
                if(random(1) < 0.5){
                    ene4.up = false;
                    ene4.left = false;
                    ene4.down = false;
                    ene4.right = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 3;
                    ene4.ydir = 0;                     
                } else {
                    ene4.up = false;
                    ene4.left = false;
                    ene4.right = false;
                    ene4.down = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = 3;                    
                }
            
        } else if(grid[(IJ1Arr4[0])][(IJ1Arr4[1]-1)].block === false &&                
               grid[(IJ1Arr4[4])][(IJ1Arr4[5]-1)].block === false &&
               grid[(IJ1Arr4[4]+1)][(IJ1Arr4[5])].block === false &&
               grid[(IJ1Arr4[6]+1)][(IJ1Arr4[7])].block === false &&
               grid[(IJ1Arr4[6])][(IJ1Arr4[7]+1)].block === false &&
               grid[(IJ1Arr4[2])][(IJ1Arr4[3]+1)].block === false &&
               grid[(IJ1Arr4[2]-1)][(IJ1Arr4[3])].block === true &&
               grid[(IJ1Arr4[0]-1)][(IJ1Arr4[1])].block === true){
                // : o 
                if(random(1) < 0.3){
                    ene4.left = false;
                    ene4.right = false;
                    ene4.down = false;
                    ene4.up = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = -3;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene4.left = false;
                    ene4.right = false;
                    ene4.up = false;
                    ene4.down = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = 3;                    
                }  else {
                    ene4.up = false;
                    ene4.down = false;
                    ene4.left = false;
                    ene4.right = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 3;
                    ene4.ydir = 0;
                } 
            
        } else if(grid[(IJ1Arr4[0])][(IJ1Arr4[1]-1)].block === false &&                
               grid[(IJ1Arr4[4])][(IJ1Arr4[5]-1)].block === false &&
               grid[(IJ1Arr4[4]+1)][(IJ1Arr4[5])].block === true &&
               grid[(IJ1Arr4[6]+1)][(IJ1Arr4[7])].block === true &&
               grid[(IJ1Arr4[6])][(IJ1Arr4[7]+1)].block === false &&
               grid[(IJ1Arr4[2])][(IJ1Arr4[3]+1)].block === false &&
               grid[(IJ1Arr4[2]-1)][(IJ1Arr4[3])].block === false &&
               grid[(IJ1Arr4[0]-1)][(IJ1Arr4[1])].block === false){
                //  o : 
                if(random(1) < 0.3){
                    ene4.right = false;
                    ene4.left = false;
                    ene4.down = false;
                    ene4.up = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = -3;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene4.right = false;
                    ene4.left = false;
                    ene4.up = false;
                    ene4.down = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = 3;                    
                }  else {
                    ene4.right = false;
                    ene4.up = false;
                    ene4.down = false;
                    ene4.left = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = -3;
                    ene4.ydir = 0;
                } 
            
        } else if(grid[(IJ1Arr4[0])][(IJ1Arr4[1]-1)].block === true &&                
               grid[(IJ1Arr4[4])][(IJ1Arr4[5]-1)].block === true &&
               grid[(IJ1Arr4[4]+1)][(IJ1Arr4[5])].block === false &&
               grid[(IJ1Arr4[6]+1)][(IJ1Arr4[7])].block === false &&
               grid[(IJ1Arr4[6])][(IJ1Arr4[7]+1)].block === false &&
               grid[(IJ1Arr4[2])][(IJ1Arr4[3]+1)].block === false &&
               grid[(IJ1Arr4[2]-1)][(IJ1Arr4[3])].block === false &&
               grid[(IJ1Arr4[0]-1)][(IJ1Arr4[1])].block === false){
                //  ^^ 
                if(random(1) < 0.3){
                    ene4.up = false;
                    ene4.down = false;
                    ene4.right = false;
                    ene4.left = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = -3;
                    ene4.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene4.down = false;
                    ene4.up = false;
                    ene4.left = false;
                    ene4.right = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 3;
                    ene4.ydir = 0;                    
                }  else {
                    ene4.up = false;
                    ene4.left = false;
                    ene4.right = false;
                    ene4.down = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = 3;
                } 
            
        } else if(grid[(IJ1Arr4[0])][(IJ1Arr4[1]-1)].block === false &&                
               grid[(IJ1Arr4[4])][(IJ1Arr4[5]-1)].block === false &&
               grid[(IJ1Arr4[4]+1)][(IJ1Arr4[5])].block === false &&
               grid[(IJ1Arr4[6]+1)][(IJ1Arr4[7])].block === false &&
               grid[(IJ1Arr4[6])][(IJ1Arr4[7]+1)].block === true &&
               grid[(IJ1Arr4[2])][(IJ1Arr4[3]+1)].block === true &&
               grid[(IJ1Arr4[2]-1)][(IJ1Arr4[3])].block === false &&
               grid[(IJ1Arr4[0]-1)][(IJ1Arr4[1])].block === false){
                //  __ 
                if(random(1) < 0.3){
                    ene4.down = false;
                    ene4.right = false;
                    ene4.up = false;
                    ene4.left = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = -3;
                    ene4.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene4.down = false;
                    ene4.up = false;
                    ene4.left = false;
                    ene4.right = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 3;
                    ene4.ydir = 0;                    
                }  else {
                    ene4.down = false;
                    ene4.left = false;
                    ene4.right = false;
                    ene4.up = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = -3;
                } 
            
        } else if(grid[(IJ1Arr4[4])][(IJ1Arr4[5]-1)].block === true &&
               grid[(IJ1Arr4[4]+1)][(IJ1Arr4[5])].block === false &&
               grid[(IJ1Arr4[6]+1)][(IJ1Arr4[7])].block === false &&
               grid[(IJ1Arr4[6])][(IJ1Arr4[7]+1)].block === false &&
               grid[(IJ1Arr4[2])][(IJ1Arr4[3]+1)].block === false &&
               grid[(IJ1Arr4[2]-1)][(IJ1Arr4[3])].block === false &&
               grid[(IJ1Arr4[0]-1)][(IJ1Arr4[1])].block === false){
                //  -^ 
                if(random(1) < 0.3){
                    ene4.up = false;
                    ene4.down = false;
                    ene4.right = false;
                    ene4.left = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = -3;
                    ene4.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene4.up = false;
                    ene4.down = false;
                    ene4.left = false;
                    ene4.right = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 3;
                    ene4.ydir = 0;                    
                }  else {
                    ene4.up = false;
                    ene4.left = false;
                    ene4.right = false;
                    ene4.down = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = 3;
                } 
            
        } else if(grid[(IJ1Arr4[0])][(IJ1Arr4[1]-1)].block === true &&                
               grid[(IJ1Arr4[4]+1)][(IJ1Arr4[5])].block === false &&
               grid[(IJ1Arr4[6]+1)][(IJ1Arr4[7])].block === false &&
               grid[(IJ1Arr4[6])][(IJ1Arr4[7]+1)].block === false &&
               grid[(IJ1Arr4[2])][(IJ1Arr4[3]+1)].block === false &&
               grid[(IJ1Arr4[2]-1)][(IJ1Arr4[3])].block === false &&
               grid[(IJ1Arr4[0]-1)][(IJ1Arr4[1])].block === false){
                //  ^- 
                if(random(1) < 0.3){
                    ene4.up = false;
                    ene4.down = false;
                    ene4.right = false;
                    ene4.left = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = -3;
                    ene4.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene4.up = false;
                    ene4.down = false;
                    ene4.left = false;
                    ene4.right = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 3;
                    ene4.ydir = 0;                    
                }  else {
                    ene4.up = false;
                    ene4.left = false;
                    ene4.right = false;
                    ene4.down = true;
                    ene4.move = true;
                    ene4.static = false;
                    ene4.xdir = 0;
                    ene4.ydir = 3;
                } 
            
        }
    
        if(!xcheckbool5){
    
        if(grid[(IJ1Arr5[0])][(IJ1Arr5[1]-1)].block === false &&                
               grid[(IJ1Arr5[4])][(IJ1Arr5[5]-1)].block === false &&
               grid[(IJ1Arr5[4]+1)][(IJ1Arr5[5])].block === true &&
               grid[(IJ1Arr5[6]+1)][(IJ1Arr5[7])].block === true &&
               grid[(IJ1Arr5[6])][(IJ1Arr5[7]+1)].block === true &&
               grid[(IJ1Arr5[2]-1)][(IJ1Arr5[3])].block === false &&
               grid[(IJ1Arr5[0]-1)][(IJ1Arr5[1])].block === false){
                // -L
                if(random(1) < 0.5){
                    ene5.right = false;
                    ene5.down = false;
                    ene5.up = false;
                    ene5.left = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = -3;
                    ene5.ydir = 0;                     
                } else {
                    ene5.right = false;
                    ene5.down = false;
                    ene5.left = false;
                    ene5.up = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = -3;                    
                }
                
        } else if(grid[(IJ1Arr5[0])][(IJ1Arr5[1]-1)].block === false &&                
               grid[(IJ1Arr5[4])][(IJ1Arr5[5]-1)].block === false &&
               grid[(IJ1Arr5[4]+1)][(IJ1Arr5[5])].block === false &&
               grid[(IJ1Arr5[6]+1)][(IJ1Arr5[7])].block === false &&
               grid[(IJ1Arr5[2])][(IJ1Arr5[3]+1)].block === true &&
               grid[(IJ1Arr5[2]-1)][(IJ1Arr5[3])].block === true &&
               grid[(IJ1Arr5[0]-1)][(IJ1Arr5[1])].block === true){
                 //L
                if(random(1) < 0.5){
                    ene5.left = false;
                    ene5.down = false;
                    ene5.up = false;
                    ene5.right = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 3;
                    ene5.ydir = 0;                     
                } else {
                    ene5.left = false;
                    ene5.down = false;
                    ene5.right = false;
                    ene5.up = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = -3;                    
                } 
            
        } else if(grid[(IJ1Arr5[4])][(IJ1Arr5[5]-1)].block === true &&
               grid[(IJ1Arr5[4]+1)][(IJ1Arr5[5])].block === true &&
               grid[(IJ1Arr5[6]+1)][(IJ1Arr5[7])].block === true &&
               grid[(IJ1Arr5[6])][(IJ1Arr5[7]+1)].block === false &&
               grid[(IJ1Arr5[2])][(IJ1Arr5[3]+1)].block === false){
                // -L U
                if(random(1) < 0.5){
                    ene5.up = false;
                    ene5.right = false;
                    ene5.down = false;
                    ene5.left = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = -3;
                    ene5.ydir = 0;                     
                } else {
                    ene5.up = false;
                    ene5.right = false;
                    ene5.left = false;
                    ene5.down = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = 3;                    
                }                
            
        } else if(grid[(IJ1Arr5[0])][(IJ1Arr5[1]-1)].block === true &&                
               grid[(IJ1Arr5[4]+1)][(IJ1Arr5[5])].block === false &&
               grid[(IJ1Arr5[6]+1)][(IJ1Arr5[7])].block === false &&
               grid[(IJ1Arr5[6])][(IJ1Arr5[7]+1)].block === false &&
               grid[(IJ1Arr5[2])][(IJ1Arr5[3]+1)].block === false &&
               grid[(IJ1Arr5[2]-1)][(IJ1Arr5[3])].block === true &&
               grid[(IJ1Arr5[0]-1)][(IJ1Arr5[1])].block === true){
                // L U
                if(random(1) < 0.5){
                    ene5.up = false;
                    ene5.left = false;
                    ene5.down = false;
                    ene5.right = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 3;
                    ene5.ydir = 0;                     
                } else {
                    ene5.up = false;
                    ene5.left = false;
                    ene5.right = false;
                    ene5.down = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = 3;                    
                }
            
        } else if(grid[(IJ1Arr5[0])][(IJ1Arr5[1]-1)].block === false &&                
               grid[(IJ1Arr5[4])][(IJ1Arr5[5]-1)].block === false &&
               grid[(IJ1Arr5[4]+1)][(IJ1Arr5[5])].block === false &&
               grid[(IJ1Arr5[6]+1)][(IJ1Arr5[7])].block === false &&
               grid[(IJ1Arr5[6])][(IJ1Arr5[7]+1)].block === false &&
               grid[(IJ1Arr5[2])][(IJ1Arr5[3]+1)].block === false &&
               grid[(IJ1Arr5[2]-1)][(IJ1Arr5[3])].block === true &&
               grid[(IJ1Arr5[0]-1)][(IJ1Arr5[1])].block === true){
                // : o 
                if(random(1) < 0.3){
                    ene5.left = false;
                    ene5.right = false;
                    ene5.down = false;
                    ene5.up = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = -3;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene5.left = false;
                    ene5.right = false;
                    ene5.up = false;
                    ene5.down = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = 3;                    
                }  else {
                    ene5.up = false;
                    ene5.down = false;
                    ene5.left = false;
                    ene5.right = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 3;
                    ene5.ydir = 0;
                } 
            
        } else if(grid[(IJ1Arr5[0])][(IJ1Arr5[1]-1)].block === false &&                
               grid[(IJ1Arr5[4])][(IJ1Arr5[5]-1)].block === false &&
               grid[(IJ1Arr5[4]+1)][(IJ1Arr5[5])].block === true &&
               grid[(IJ1Arr5[6]+1)][(IJ1Arr5[7])].block === true &&
               grid[(IJ1Arr5[6])][(IJ1Arr5[7]+1)].block === false &&
               grid[(IJ1Arr5[2])][(IJ1Arr5[3]+1)].block === false &&
               grid[(IJ1Arr5[2]-1)][(IJ1Arr5[3])].block === false &&
               grid[(IJ1Arr5[0]-1)][(IJ1Arr5[1])].block === false){
                //  o : 
                if(random(1) < 0.3){
                    ene5.right = false;
                    ene5.left = false;
                    ene5.down = false;
                    ene5.up = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = -3;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene5.right = false;
                    ene5.left = false;
                    ene5.up = false;
                    ene5.down = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = 3;                    
                }  else {
                    ene5.right = false;
                    ene5.up = false;
                    ene5.down = false;
                    ene5.left = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = -3;
                    ene5.ydir = 0;
                } 
            
        } else if(grid[(IJ1Arr5[0])][(IJ1Arr5[1]-1)].block === true &&                
               grid[(IJ1Arr5[4])][(IJ1Arr5[5]-1)].block === true &&
               grid[(IJ1Arr5[4]+1)][(IJ1Arr5[5])].block === false &&
               grid[(IJ1Arr5[6]+1)][(IJ1Arr5[7])].block === false &&
               grid[(IJ1Arr5[6])][(IJ1Arr5[7]+1)].block === false &&
               grid[(IJ1Arr5[2])][(IJ1Arr5[3]+1)].block === false &&
               grid[(IJ1Arr5[2]-1)][(IJ1Arr5[3])].block === false &&
               grid[(IJ1Arr5[0]-1)][(IJ1Arr5[1])].block === false){
                //  ^^ 
                if(random(1) < 0.3){
                    ene5.up = false;
                    ene5.down = false;
                    ene5.right = false;
                    ene5.left = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = -3;
                    ene5.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene5.down = false;
                    ene5.up = false;
                    ene5.left = false;
                    ene5.right = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 3;
                    ene5.ydir = 0;                    
                }  else {
                    ene5.up = false;
                    ene5.left = false;
                    ene5.right = false;
                    ene5.down = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = 3;
                } 
            
        } else if(grid[(IJ1Arr5[0])][(IJ1Arr5[1]-1)].block === false &&                
               grid[(IJ1Arr5[4])][(IJ1Arr5[5]-1)].block === false &&
               grid[(IJ1Arr5[4]+1)][(IJ1Arr5[5])].block === false &&
               grid[(IJ1Arr5[6]+1)][(IJ1Arr5[7])].block === false &&
               grid[(IJ1Arr5[6])][(IJ1Arr5[7]+1)].block === true &&
               grid[(IJ1Arr5[2])][(IJ1Arr5[3]+1)].block === true &&
               grid[(IJ1Arr5[2]-1)][(IJ1Arr5[3])].block === false &&
               grid[(IJ1Arr5[0]-1)][(IJ1Arr5[1])].block === false){
                //  __ 
                if(random(1) < 0.3){
                    ene5.down = false;
                    ene5.right = false;
                    ene5.up = false;
                    ene5.left = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = -3;
                    ene5.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene5.down = false;
                    ene5.up = false;
                    ene5.left = false;
                    ene5.right = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 3;
                    ene5.ydir = 0;                    
                }  else {
                    ene5.down = false;
                    ene5.left = false;
                    ene5.right = false;
                    ene5.up = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = -3;
                } 
            
        } else if(grid[(IJ1Arr5[4])][(IJ1Arr5[5]-1)].block === true &&
               grid[(IJ1Arr5[4]+1)][(IJ1Arr5[5])].block === false &&
               grid[(IJ1Arr5[6]+1)][(IJ1Arr5[7])].block === false &&
               grid[(IJ1Arr5[6])][(IJ1Arr5[7]+1)].block === false &&
               grid[(IJ1Arr5[2])][(IJ1Arr5[3]+1)].block === false &&
               grid[(IJ1Arr5[2]-1)][(IJ1Arr5[3])].block === false &&
               grid[(IJ1Arr5[0]-1)][(IJ1Arr5[1])].block === false){
                //  -^ 
                if(random(1) < 0.3){
                    ene5.up = false;
                    ene5.down = false;
                    ene5.right = false;
                    ene5.left = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = -3;
                    ene5.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene5.up = false;
                    ene5.down = false;
                    ene5.left = false;
                    ene5.right = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 3;
                    ene5.ydir = 0;                    
                }  else {
                    ene5.up = false;
                    ene5.left = false;
                    ene5.right = false;
                    ene5.down = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = 3;
                } 
            
        } else if(grid[(IJ1Arr5[0])][(IJ1Arr5[1]-1)].block === true &&                
               grid[(IJ1Arr5[4]+1)][(IJ1Arr5[5])].block === false &&
               grid[(IJ1Arr5[6]+1)][(IJ1Arr5[7])].block === false &&
               grid[(IJ1Arr5[6])][(IJ1Arr5[7]+1)].block === false &&
               grid[(IJ1Arr5[2])][(IJ1Arr5[3]+1)].block === false &&
               grid[(IJ1Arr5[2]-1)][(IJ1Arr5[3])].block === false &&
               grid[(IJ1Arr5[0]-1)][(IJ1Arr5[1])].block === false){
                //  ^- 
                if(random(1) < 0.3){
                    ene5.up = false;
                    ene5.down = false;
                    ene5.right = false;
                    ene5.left = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = -3;
                    ene5.ydir = 0;                     
                } else if(random(1) > 0.3 && random(1) < 0.6) {
                    ene5.up = false;
                    ene5.down = false;
                    ene5.left = false;
                    ene5.right = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 3;
                    ene5.ydir = 0;                    
                }  else {
                    ene5.up = false;
                    ene5.left = false;
                    ene5.right = false;
                    ene5.down = true;
                    ene5.move = true;
                    ene5.static = false;
                    ene5.xdir = 0;
                    ene5.ydir = 3;
                } 
            
        }
    }   
    }
    
 
    
    IJ1Arr = [];
    IJ1Arr2 = [];
    IJ1Arr3 = [];
    IJ1Arr4 = [];
    IJ1Arr5 = [];

}

function make2DArray(col, row) {
    var arr = new Array(col);
    for(var i=0; i<arr.length; i++){
        arr[i] = new Array(row);
    }
    return arr;
}

function keyPressed() {
    if(keyCode == RIGHT_ARROW && pac.right !== true && pac.rightNeighbourBlock === false){
        pac.move = true;    
        pac.right = true;
        pac.left = false;
        pac.up = false;
        pac.down = false;
        pac.xdir = 3;
        pac.ydir = 0;
    }
    else if(keyCode == LEFT_ARROW && pac.left !== true && pac.leftNeighbourBlock === false){
        pac.move = true;
        pac.right = false;
        pac.left = true;
        pac.up = false;
        pac.down = false;
        pac.xdir = -3;
        pac.ydir = 0;        
    }
    
    else if(keyCode == UP_ARROW && pac.up !== true && pac.upNeighbourBlock === false){
        pac.move = true;
        pac.right = false;
        pac.left = false;
        pac.up = true;
        pac.down = false;        
        pac.xdir = 0;
        pac.ydir = -3;        
    }  
    
    else if(keyCode == DOWN_ARROW && pac.down !== true && pac.downNeighbourBlock === false){
        pac.move = true;
        pac.right = false;
        pac.left = false;
        pac.up = false;
        pac.down = true;        
        pac.xdir = 0;
        pac.ydir = 3;
    }    
}