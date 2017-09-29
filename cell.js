function cell(iindex,jindex) {
    this.i = iindex;
    this.j = jindex;
    this.s = 30;
    this.block = false;
    this.star = true;
    this.x = this.s*this.i;
    this.y = this.s*this.j;
    
    if(this.i == 12 && this.j == 1 || this.i == 12 && this.j == 2
            || this.i == 12 && this.j == 6
            || this.i == 12 && this.j == 5
            || this.i == 12 && this.j == 7
            || this.i == 12 && this.j == 8
            || this.i == 12 && this.j == 9
            || this.i == 12 && this.j == 10
            || this.i == 11 && this.j == 7
            || this.i == 10 && this.j == 7
            || this.i == 20 && this.j == 7
            || this.i == 13 && this.j == 7
            || this.i == 14 && this.j == 7
           
            || this.i == 9 && this.j == 3
            || this.i == 8 && this.j == 3
            || this.i == 7 && this.j == 3
            || this.i == 9 && this.j == 4
            || this.i == 8 && this.j == 4
            || this.i == 7 && this.j == 4           
           
            || this.i == 15 && this.j == 4
            || this.i == 16 && this.j == 4
            || this.i == 17 && this.j == 4
            || this.i == 15 && this.j == 3
            || this.i == 16 && this.j == 3
            || this.i == 17 && this.j == 3
           
            || this.i == 4 && this.j == 4           
            || this.i == 3 && this.j == 4           
            || this.i == 4 && this.j == 3           
            || this.i == 3 && this.j == 3 
           
            || this.i == 20 && this.j == 4           
            || this.i == 21 && this.j == 4           
            || this.i == 20 && this.j == 3           
            || this.i == 21 && this.j == 3
           
            || this.i == 3 && this.j == 7 
            || this.i == 4 && this.j == 7 
            || this.i == 20 && this.j == 7 
            || this.i == 21 && this.j == 7 
           
            || this.i == 7 && this.j == 7
            || this.i == 7 && this.j == 8
            || this.i == 7 && this.j == 9
            || this.i == 7 && this.j == 10
            || this.i == 8 && this.j == 10
            || this.i == 9 && this.j == 10
           
            || this.i == 17 && this.j == 7
            || this.i == 17 && this.j == 8
            || this.i == 17 && this.j == 9
            || this.i == 17 && this.j == 10
            || this.i == 16 && this.j == 10
            || this.i == 15 && this.j == 10
           
            || this.i == 9 && this.j == 19
            || this.i == 8 && this.j == 19
            || this.i == 7 && this.j == 19
            || this.i == 7 && this.j == 18
            || this.i == 7 && this.j == 17
            || this.i == 7 && this.j == 16

            || this.i == 15 && this.j == 19
            || this.i == 16 && this.j == 19
            || this.i == 17 && this.j == 19
            || this.i == 17 && this.j == 18
            || this.i == 17 && this.j == 17
            || this.i == 17 && this.j == 16
           
            || this.i == 20 && this.j == 19       
            || this.i == 21 && this.j == 19    
           
            || this.i == 4 && this.j == 19       
            || this.i == 3 && this.j == 19
                      
            || this.i == 1 && this.j == 10
            || this.i == 23 && this.j == 10
           
            || this.i == 3 && this.j == 13           
            || this.i == 4 && this.j == 10           
            || this.i == 4 && this.j == 11           
            || this.i == 4 && this.j == 12           
            || this.i == 4 && this.j == 13
           
            || this.i == 20 && this.j == 13           
            || this.i == 21 && this.j == 13           
            || this.i == 20 && this.j == 12           
            || this.i == 20 && this.j == 11           
            || this.i == 20 && this.j == 10 
           
           
            || this.i == 12 && this.j == 19           
            || this.i == 12 && this.j == 18           
            || this.i == 12 && this.j == 17           
            || this.i == 12 && this.j == 16           
            || this.i == 13 && this.j == 16           
            || this.i == 14 && this.j == 16           
//            || this.i == 14 && this.j == 15           
//            || this.i == 14 && this.j == 14           
            || this.i == 14 && this.j == 13           
            || this.i == 15 && this.j == 13           
            || this.i == 16 && this.j == 13           
            || this.i == 17 && this.j == 13           
            || this.i == 11 && this.j == 16           
            || this.i == 10 && this.j == 16           
//            || this.i == 10 && this.j == 15           
//            || this.i == 10 && this.j == 14           
            || this.i == 10 && this.j == 13           
            || this.i == 9 && this.j == 13           
            || this.i == 8 && this.j == 13
            || this.i == 7 && this.j == 13
       
            || this.i == 11 && this.j == 13
            || this.i == 12 && this.j == 13
            || this.i == 13 && this.j == 13
           
            || this.i == 1 && this.j == 16           
            || this.i == 2 && this.j == 16           
            || this.i == 3 && this.j == 16           
            || this.i == 4 && this.j == 16
           
            || this.i == 23 && this.j == 16           
            || this.i == 22 && this.j == 16           
            || this.i == 21 && this.j == 16           
            || this.i == 20 && this.j == 16
       
            || this.i === 0
            || this.i === 24
            || this.j === 0
            || this.j === 22
            
            ){
            this.block = true;
            this.star = false;
        }
    

    
    this.show = function() {
        fill(0);
        noStroke();
        rect(this.s*this.i, this.s*this.j,this.s,this.s);
        
        if(this.block){
            if(level == 1){
            fill(1,26,116);
            } else if(level == 2){
                fill(129,39,14);
            } else if(level == 3){
                fill(37,65,7);
            } else if(level == 4){
                fill(106,0,116);
            } else if(level == 5){
                fill(129,100,13);
            }
            rect(this.s*this.i, this.s*this.j,this.s,this.s);
        }
        
        else if(this.star){            
            fill(235,238,0);
            rect((this.s*this.i)-1, (this.s*this.j)-1,this.s*0.1,this.s*0.1);
        }
    }
    
    this.barrier = function(x,y) {
       if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
           if(pac.right){
               if(grid[this.i+1][this.j].block === true){
                    pac.move = false;
               }
           }
           else if(pac.left){
               if(grid[this.i-1][this.j].block === true){
                    pac.move = false;                   
               }               
           }
           else if(pac.up){
               if(grid[this.i][this.j-1].block === true){
                    pac.move = false;                  
               }
           }
           else if(pac.down){
               if(grid[this.i][this.j+1].block === true){
                    pac.move = false;                 
               }               
           }                          
       }
}

    this.eBarrier = function(x,y) {
       if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
           if(ene1.right){
               if(grid[this.i+1][this.j].block === true){
                    ene1.move = false;
                    ene1.static = true;
               }
           }
           else if(ene1.left){
               if(grid[this.i-1][this.j].block === true){
                    ene1.move = false;
                    ene1.static = true;
               }               
           }
           else if(ene1.up){
               if(grid[this.i][this.j-1].block === true){
                    ene1.move = false;
                    ene1.static = true;
               }
           }
           else if(ene1.down){
               if(grid[this.i][this.j+1].block === true){
                    ene1.move = false;
                    ene1.static = true;
               }               
           }                          
       }
} 
    
    this.eBarrier2 = function(x,y) {
       if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
           if(ene2.right){
               if(grid[this.i+1][this.j].block === true){
                    ene2.move = false;
                    ene2.static = true;
               }
           }
           else if(ene2.left){
               if(grid[this.i-1][this.j].block === true){
                    ene2.move = false;
                    ene2.static = true;
               }               
           }
           else if(ene2.up){
               if(grid[this.i][this.j-1].block === true){
                    ene2.move = false;
                    ene2.static = true;
               }
           }
           else if(ene2.down){
               if(grid[this.i][this.j+1].block === true){
                    ene2.move = false;
                    ene2.static = true;
               }               
           }                          
       }
}
    
    this.eBarrier3 = function(x,y) {
       if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
           if(ene3.right){
               if(grid[this.i+1][this.j].block === true){
                    ene3.move = false;
                    ene3.static = true;
               }
           }
           else if(ene3.left){
               if(grid[this.i-1][this.j].block === true){
                    ene3.move = false;
                    ene3.static = true;
               }               
           }
           else if(ene3.up){
               if(grid[this.i][this.j-1].block === true){
                    ene3.move = false;
                    ene3.static = true;
               }
           }
           else if(ene3.down){
               if(grid[this.i][this.j+1].block === true){
                    ene3.move = false;
                    ene3.static = true;
               }               
           }                          
       }
}     
    
    this.eBarrier4 = function(x,y) {
       if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
           if(ene4.right){
               if(grid[this.i+1][this.j].block === true){
                    ene4.move = false;
                    ene4.static = true;
               }
           }
           else if(ene4.left){
               if(grid[this.i-1][this.j].block === true){
                    ene4.move = false;
                    ene4.static = true;
               }               
           }
           else if(ene4.up){
               if(grid[this.i][this.j-1].block === true){
                    ene4.move = false;
                    ene4.static = true;
               }
           }
           else if(ene4.down){
               if(grid[this.i][this.j+1].block === true){
                    ene4.move = false;
                    ene4.static = true;
               }               
           }                          
       }
}     
    
    this.eBarrier5 = function(x,y) {
       if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
           if(ene5.right){
               if(grid[this.i+1][this.j].block === true){
                    ene5.move = false;
                    ene5.static = true;
               }
           }
           else if(ene5.left){
               if(grid[this.i-1][this.j].block === true){
                    ene5.move = false;
                    ene5.static = true;
               }               
           }
           else if(ene5.up){
               if(grid[this.i][this.j-1].block === true){
                    ene5.move = false;
                    ene5.static = true;
               }
           }
           else if(ene5.down){
               if(grid[this.i][this.j+1].block === true){
                    ene5.move = false;
                    ene5.static = true;
               }               
           }                          
       }
}     
    
    this.checkRightNeighbour = function(x,y){
        if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
            if(grid[this.i+1][this.j].block || grid[this.i+1][this.j].block){
                pac.rightNeighbourBlock = true;
            } else {
                pac.rightNeighbourBlock = false;
            }
        }        
    }     
    
    this.checkLeftNeighbour = function(x,y){
        if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
            if(grid[this.i-1][this.j].block || grid[this.i-1][this.j].block){
                pac.leftNeighbourBlock = true;
            } else {
                pac.leftNeighbourBlock = false;
            }
        }        
    } 
    
    
    this.checkUpNeighbour = function(x,y){
        if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
            if(grid[this.i][this.j-1].block || grid[this.i][this.j-1].block){
                pac.upNeighbourBlock = true;
            } else {
                pac.upNeighbourBlock = false;
            }
        }        
    } 
    
    
    
    this.checkDownNeighbour = function(x,y){
        if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
            if(grid[this.i][this.j+1].block || grid[this.i][this.j+1].block){
                pac.downNeighbourBlock = true;
            } else {
                pac.downNeighbourBlock = false;
            }
        }        
    }         
    
    this.fillIJ1Arr = function(x,y) {
        if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
            IJ1Arr.push(this.i);
            IJ1Arr.push(this.j);
            
            if(IJ1Arr.length < 5){
                xcheckBool = true;
            } else {
                xcheckBool = false;
            }            
        }
    } 
    
    this.fillIJ1Arr2 = function(x,y) {
        if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
            IJ1Arr2.push(this.i);
            IJ1Arr2.push(this.j);
            
            if(IJ1Arr2.length < 5){
                xcheckBool2 = true;
            } else {
                xcheckBool2 = false;
            }            
        }
    } 
    
    this.fillIJ1Arr3 = function(x,y) {
        if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
            IJ1Arr3.push(this.i);
            IJ1Arr3.push(this.j);
            
            if(IJ1Arr3.length < 5){
                xcheckBool3 = true;
            } else {
                xcheckBool3 = false;
            }            
        }
    }
    
    this.fillIJ1Arr4 = function(x,y) {
        if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
            IJ1Arr4.push(this.i);
            IJ1Arr4.push(this.j);
            
            if(IJ1Arr4.length < 5){
                xcheckBool4 = true;
            } else {
                xcheckBool4 = false;
            }            
        }
    }
    
    this.fillIJ1Arr5 = function(x,y) {
        if(x >= this.x && x <= this.x + 30 && y >= this.y && y <= this.y + 30){
            IJ1Arr5.push(this.i);
            IJ1Arr5.push(this.j);
            
            if(IJ1Arr5.length < 5){
                xcheckBool5 = true;
            } else {
                xcheckBool5 = false;
            }            
        }
    }    
    
    this.clearStar = function() {
        if(dist(this.x+15,this.y+15,pac.originX+15,pac.originY+15) < 15){
            if(this.star){
                this.star = false;
                score+=10;
                stars++;
            }            
        }
    }
}