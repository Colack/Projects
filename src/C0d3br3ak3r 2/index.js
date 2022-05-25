/*
  Code By Jack
*/

var char = {
  name: "",
  health: "",
  level: "",
  quest2: false,
  noSound: false
};

var dataTable = {
  c2: false
};

onEvent("Start", "click", function() {
  
  
  
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
    
    setText("NoSound", "Sound");
    
  } else {
    
    char.noSound = true;
    
    setText("NoSound", "No Sound");
    
  }
  
});

function onAppStart() {
  
  setScreen("Index");
  
  setProperty("two", "text-color", rgb(255, 255, 255, 0));
  
  setTimeout(startFade, 1000);
  
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

onAppStart();
