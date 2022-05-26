/*
  Code By Jack
*/

var char = {
  name: "",
  health: 0,
  level: 0,
  quest2: false,
  noSound: false
};

var dataTable = {
  c2: false,
  r2: false
};

var startText = [
  "Why do I write games on this?",
  "Do a pullup...",
  "SATQTSTC was pretty fire!"
];



onEvent("Start", "click", function() {
  
  if (dataTable.c2) {
    
    if (char.quest2) {
      
      doFade("GameSelect");
      
    } else {
      
      doFade("StoryStart");
      
    }
    
  }
  
});

onEvent("Settings", "click", function() {
  
  if (dataTable.c2) {
    
    doFade("SettingsMenu"); 
    
  }
  
});

onEvent("Back", "click", function() {
  
  doFade("Index");
  
});

onEvent("NoSound", "click", function() {
  
  if (char.noSound) {
    
    char.noSound = false;
    
    setText("NoSound", "Sound On");
    
  } else {
    
    char.noSound = true;
    
    setText("NoSound", "No Sound");
    
  }
  
});

onEvent("DeleteData", "click", function() {
  
  if (dataTable.r2) {
    
    resetData();
    
    setTimeout(onAppStart, 250);
    
  } else {
    
    dataTable.r2 = true;
    
    setText("DeleteData", "Are you sure?");
    
    setProperty("DeleteData", "background-color", "green");
    
  }
  
});



function onAppStart() {
  
  setScreen("StartCredits");
  
  createRandom();
  
  setTimeout(startStuff, 1000);
  
  function startStuff() {
    
    doFade("Index");
  
    setTimeout(startStuff2, 1000);
    
  }
  
  function startStuff2() {
    
    setProperty("two", "text-color", rgb(255, 255, 255, 0));
  
    setTimeout(startFade, 1000);
    
  }
  
  function startFade() {
    
    var i = 0;
  
    // Run this loop every 10 frames
    timedLoop(10, function() {
    
      i += 0.01;
    
      if (i > 1) {
      
        stopTimedLoop();
        
        dataTable.c2 = true;
      
      } else {
      
        setProperty("two", "text-color", rgb(225, 225, 225, i));
      
      }
    
    });
    
  }
}

function doFade(newScreen) {
  
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
      
      setScreen(newScreen);
      
    } else {
      
      setProperty("NEWFADE", "background-color", rgb(0, 0, 0, i));
      
    }
    
  });
  
}

function resetData() {
  
  char.name = "";
  char.health = 0;
  char.level = 0;
  char.quest2 = false;
  char.noSound = false;
  
  dataTable.c2 = false;
  dataTable.r2 = false;
  
}

function createRandom() {
  
  var i = randomNumber(1, 10);
  
  if (i == 1) {
    
    setText("StartLabel1")
    
  }
  
}



onAppStart();
