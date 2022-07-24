var gameWorld = {
  y1: 0,
  gravity: false
};

function draw() {
  
  gameWorld.gravity = true;

  if (gameWorld.gravity == true) {
    
    if (gameWorld.y1 < 400) {
      
      gameWorld.y1 += 1;
    
      console.log(gameWorld.y1); 
      
    } else {
      
      
      
    }
    
  } else {
    

    
  }
  
}
