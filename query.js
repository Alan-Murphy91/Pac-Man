$(document).ready(function(){
    
    setInterval(function(){
    $('.levell').html('Level' + '<br/><br/>' + level); 
    $('.scoree').html('Score' + '<br/><br/>' + score); 
    $('.livess').html('Lives' + '<br/><br/>' + lives);     
    }, 1);
    
});