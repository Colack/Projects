/*
  Dirty Deed
    A Video Game by Colack
*/

/*
  The Following Code is Licensed under the 2022 MIT License
  
  You can find all of the Code for this game at
  https://www.github.com/Colack/DirtyDeed
*/

// To-Do
/*
  = Top
  Movement Recognization
  Enemie Spawns
  Level Completed Signs
  Level Start Signs
  Pause Menu
  Back to Main Menu
  Buttons Working
  Random Boss Battles
  Powerups 
  3~5 Different Types of Weapons
  Shooting Code
  Facing Code
  
  = Low
  Settings Menu 
  Game Settings
  Graphics Settings
  Face Changes
  Face Reverse Change
  Face Menu
  Main Menu Fade
  
  = No
  Better Menu Buttons
  Better Fade Transitions
  Discord Button
  Credits
  Code Organization
  Added MIT License inside Code
  Bells and Whistles
  Easter Eggs
*/

/////////////////
/// Variables ///
/////////////////

// Settings for Positioning, Current Powerup, etc.
var settings = {
  positioning: {
    // Default Speed Value is [1,1].
    // This should be defaulted in the case of an error or a situation
    // This is set in the starting statement.
    speedX: 1,
    speedY: 1,
  },
  notInMenu: false,
  level: 0,
  enemies: 0,
  required: 0
};

// Activates face changing
var face = false;

var position = {
  // Default Positioning values.
  // These will be changed throughout level usage.
  x: 0,
  y: 220,
  facing: ""
};

var powerPosition = {
  x: 0,
  y: 0,
  available: false
};

/////////////////
///   Events  ///
/////////////////

onEvent("index", "keyup", function(event) {
  var eventX = event.key;
  switch (eventX) {
    case "Up":
      
      break;
    case "esc":
      break;
  }
});

onEvent("play", "click", function() {
  
  stopSound("Title-Theme.mp3");
  
  playSound("8-Bit-SFX_Explosion-1.mp3");
  
  setScreen("index");
  settings.notInMenu = true;
  
});

onEvent("Settings", "click", function() {
  
  
  
});

onEvent("Leader", "click", function() {
  
  
  
});

/////////////////
/// Functions ///
/////////////////

function start() {
  setScreen("logo");
  setTimeout(doFade, 250);
  settings.positioning.speedX = 20;
  settings.positioning.speedY = 20;
  setProperty("Sprite", "image", "New-Piskel-(9).png");
  setPosition("Sprite", 0, 220);
}

function levelChange() {
  settings.level++;
  settings.enemies = 0;
  settings.required = settings.required * 2;
}

function changeFace(type) {
  switch (type) {
    case "complete":
      break;
    case "bored":
      break;
    case "damage":
      break;
    case "still":
      break;
    case "powerup":
      break;
    case "secret":
      break;
    case "dirtydeed":
      break;
  }
}

function doFade() {
  
  textInput("NEWFADE", "");
  
  setPosition("NEWFADE", 0, 0, 320, 450);
  
  setProperty("NEWFADE", "border-color", rgb(0,0,0,0));
  setProperty("NEWFADE", "background-color", rgb(0,0,0,0));
  setProperty("NEWFADE", "text-color", rgb(0,0,0,0));
  
  var i = 0;
  
  timedLoop(10, function() {
    
    i += 0.01;
    
    if (i > 1) {
      
      stopTimedLoop();
      
      deleteElement("NEWFADE");
      
      doReverseFade();
      
    } else {
      
      setProperty("NEWFADE", "background-color", rgb(0, 0, 0, i));
      
    }
    
  });
  
}

function doReverseFade() {
  
  setScreen("menu");
  
  playSound("Title-Theme.mp3", true);
  
  textInput("NEWFADE", "");
  
  setPosition("NEWFADE", 0, 0, 320, 450);
  
  setProperty("NEWFADE", "border-color", rgb(0,0,0,1));
  setProperty("NEWFADE", "background-color", rgb(0,0,0,1));
  setProperty("NEWFADE", "text-color", rgb(0,0,0,1));
  
  var i = 1;
  
  timedLoop(10, function() {
    
    i -= 0.01;
    
    if (i < 0) {
      
      stopTimedLoop();
      
      deleteElement("NEWFADE");
      
    } else {
      
      setProperty("NEWFADE", "background-color", rgb(0, 0, 0, i));
      
    }
    
  });
  
}

start();
