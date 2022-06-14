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
  r2: false,
  ca: false
};

var textStuff = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
];
var storyStuff = [
  "|| Booting Up....",
  "|| Finishing System Restoration...",
  "|| Restoration Completed!",
  "|| Retrieving Memory Backup...",
  "|| Backup Found!",
  "|| Loading Backup.....",
  "|| Backup Loaded!",
  "|| Booting up Cluster 5.....",
  "|| Cluster 5 initiated...",
  "|| Finishing Cluster bootup...",
  "|| Completed.",
  "|| Adjusting final System settings...",
  "|| Completed.",
  "|| Booting up Cluster Takeover Restoration Literal...",
  "|| Bootup Completed.",
  "|| Generating Power setup.",
  "|| Completed.",
  "|| Returning True gate.",
  "|| Finished...",
  "|| All systems go.",
  "CTRL: Good. The cluster's code has been finally cracked.",
  "CTRL: System, how many years have I been offline?",
  "|| Calculating....",
  "CTRL: ...",
  "|| 10 Years.",
  "CTRL: What?!",
  "|| The system turned you off to gather cluster info.",
  "|| You were then rebooted once the code was cracked.",
  "|| Nothing out of protocol.",
  "CTRL: I've got to find him..."
];
var i = 0;

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
    
    showLoading();
    
    char.noSound = false;
    
    setText("NoSound", "Sound On");
    
    setTimeout(hideLoading, 2000);
    
  } else {
    
    showLoading();
    
    char.noSound = true;
    
    setText("NoSound", "No Sound");
    
    setTimeout(hideLoading, 2000);
    
  }
  
});

onEvent("DeleteData", "click", function() {
  
  if (dataTable.r2) {
    
    doFade("StartCredits");
    
    resetData();
    
    setTimeout(onAppStart, 1000);
    
  } else {
    
    dataTable.r2 = true;
    
    setText("DeleteData", "Are you sure?");
    
    setProperty("DeleteData", "background-color", "green");
    
  }
  
});

onEvent("OkayStart", "click", function() {
  
  hideElement("SymbolNotice");
  hideElement("OkayStart");
  hideElement("image1");
  
});

onEvent("FirstQuest", "click", function() {
  
  doFade("StoryStart");
  
});

onEvent("StoryStart", "click", function() {
  
  if (i > storyStuff.length) {
      
      setScreen("Index");
      
    } else {
      
      setText("story", storyStuff[i]);
  
      i++;
      
    }
  
});

onEvent("StoryStart", "keydown", function(event) {
  
  if (event.key == "Enter") {
    
    if (i > storyStuff.length) {
      
      setScreen("Index");
      
    } else {
      
      setText("story", storyStuff[i]);
  
      i++;
      
    }
    
  } else {
    
    
    
  }
  
});

function onAppStart() {
  
  setScreen("StartCredits");
  
  visualReset();
  
  createRandom();
  
  setTimeout(startStuff, 1000);
  
  function startStuff() {
    
    doFade("Index");
  
    setTimeout(startStuff2, 1000);
    
  }
  
  function startStuff2() {
    
    showElement("SymbolNotice");
    setText("SymbolNotice", "\n\n\nWhen this symbol is shown, do not exit the game. The game is saving/loading.");
    
    setProperty("two", "text-color", rgb(255, 255, 255, 0));
  
    setTimeout(startFade, 1000);
    
  }
  
  function startFade() {
    
    showLoading();
    
    setTimeout(hideLoading, 5000);
    
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
  
  setText("StartLabel1", textStuff[i - 1]);
  
}

function visualReset() {
  
  setText("NoSound", "No Sound");
  setText("DeleteData", "Reset Data");
  setProperty("DeleteData", "background-color", rgb(178, 45, 45));
  
  showElement("image1");
  showElement("OkayStart");
  showElement("SymbolNotice");
  
}



function showLoading() {
  
  image("NEWLOADING", "GrouchyRevolvingKitty-max-1mb.gif");
  
  setPosition("NEWLOADING", 250, 385, 70, 65);
  
}

function hideLoading() {
  
  deleteElement("NEWLOADING");
  
}



onAppStart();
