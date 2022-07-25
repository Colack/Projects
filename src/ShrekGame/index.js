var playerX = 100;
var playerY = 150;

onAppStart();

onEvent("screen1", "keydown", function(event) {
  
  if (playerX < 0) {
    
    if (event.key == "Right") {
      
      playerX += 10;
      
    } else if (event.key == "Down") {
      
      playerY += 10;
      
    }
    
  } else if (playerY < 0) {
    
    if (event.key == "Left") {
      
      playerX -= 10;
      
    } else if (event.key == "Down") {
      
      playerY += 10;
      
    } else if (event.key == "Right") {
      
      playerX += 10;
      
    }
    
  } else if (playerY > 450) {
    
    
    if (event.key == "Left") {
      
      playerX -= 10;
      
    } else if (event.key == "Up") {
      
      playerY -= 10;
      
    } else if (event.key == "Right") {
      
      playerX += 10;
      
    }
    
  } else if (playerX < 320) {
    
    
    
  }
  
  if (event.key == "Up") {
    
    playerY -= 10;
    
    setPosition("Player", playerX, playerY, 100, 100);
    
  } else if (event.key == "Left") {
    
    playerX -= 10;
    
    setPosition("Player", playerX, playerY, 100, 100);
    
  } else if (event.key == "Right") {
    
    playerX += 10;
    
    setPosition("Player", playerX, playerY, 100, 100);
    
  } else if (event.key == "Down") {
    
    playerY += 10;
    
    setPosition("Player", playerX, playerY, 100, 100);
    
  } else if (event.key == "Space") {
    
    playSound("sound://category_bell/bells_win.mp3");
    
  }
  
});

function onAppStart() {
  
  setPosition("Player", playerX, playerY, 100, 100);
  
  setProperty("Player", "image", "New-Piskel.png");
  
}
