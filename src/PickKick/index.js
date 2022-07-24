// PickKick //




// Jonathan //

onEvent("Play", "click", function( ) {
  
  setScreen("controls");
  
});

onEvent("Settings", "click", function( ) {
  
  setScreen("settings");
  
});

onEvent("back", "click", function( ) {
  
  setScreen("Index");
  
});

onEvent("back2", "click", function( ) {
  
  setScreen("Index");
  
});



// Code By Jack //

playSound("nfl.mp3", true);

var allowtoss = false;

var thrown = false;

var plays = 0;

var soundOn = true;

setProperty("NoSound", "background-color", "green");

hideElement("Thrown");
hideElement("Throw");
hideElement("Enemy");
hideElement("Ball");

onEvent("Continue", "click", function() {
  
  stopSound("nfl.mp3");
  
  setScreen("Game");
  
  allowtoss = true;
   
  setTimeout(toss, 2000);
  
});

onEvent("Throw", "click", function( ) {
  
  if (allowtoss == true) {
    
    showElement("Thrown");
    hideElement("Throw");
    
    thrown = true;
    
    send();
    
  }
  
});

onEvent("Back", "click", function( ) {
  
  setScreen("Index");
  
  plays = 0;
  
  thrown = false;
  
});

onEvent("NoSound", "click", function( ) {
  
  if (soundOn == true) {
    
    setProperty("NoSound", "background-color", "red");
    
    soundOn = false;
    
    soundCheck();
    
  } else {
    
    setProperty("NoSound", "background-color", "green");
    
    soundOn = true;
    
    soundCheck();
    
  }
  
});

onEvent("Credits", "click", function( ) {
  
  setScreen("CreditsScreen");
  
});



function toss() {
  
  if (allowtoss == true) {
    
    showElement("Throw");
    
  }
  
}

function send() {
  
  if (thrown == true) {
    
    showElement("Ball");
    hideElement("Character");
    hideElement("Thrown");
    hideElement("Throw");
    hideElement("Enemy");
    
    playSound("hurricane.mp3");
    
    setProperty("Background", "image", "New-Piskel-(1).gif");
    
    setTimeout(feedback, 3000);
    
    
    
  } else {
    
    console.log("Error");
    
  }
   
}

function feedback() {
  
  setProperty("Background", "image", "New-Piskel-(2).png");
  
  if (thrown == true) {
    
    var random = randomNumber(1, 3);
    
    if (random == 1) {
      
      showElement("Enemy");
    
      plays = plays + 1;
    
      setTimeout(scoreCheck, 2000);
      
      console.log("Catch!");
      
    } else if (random == 2) {
      
      hideElement("Enemy");
      
      plays = plays - 1;
      
      setTimeout(scoreCheck, 2000);
      
      console.log("Miss!");
      
    } else if (random == 3) {
      
      showElement("Enemy");
      
      plays = plays + 3;
      
      setTimeout(scoreCheck, 2000);
      
      console.log("Touchdown!");
      
    }

    console.log("Completed Round " + plays);
    
  }
  
}

function scoreCheck() {
  
  if (plays <= 50) {
    
    // Game Finished //
    
    setScreen("Finished");
    
  } else if (plays <= 10) {
    
    // Round 1 Complete //
    // Start Round 2 //
    
    
    
  } else if (plays <= 20) {
    
    // Round 2 Complete //
    // Start Round 3 //
    
  } else if (plays <= 30) {
    
    // Round 3 Complete //
    // Start Round 4 //
    
  } else if (plays <= 40) {
    
    // Round 4 Complete //
    // Start Final Round //
    
  } else {
    
    hideElement("Ball");
    hideElement("Enemy");
    showElement("Character");
    
    thrown = false;
    
    showElement("Throw");
    
  }
  
  
}

function soundCheck() {
  
  if (soundOn == true) {
    
    playSound("nfl.mp3");
    
  } else {
    
    stopSound("nfl.mp3");
    
  }
   
}
