// Code By Jack //



var userData = {
  username: ""
};
var e;



login();



onEvent("Sign", "click", function() {
  
  signUp();
  
});

onEvent("World", "click", function(event) {
  
  setPosition("MyPlayer", event.x - 50, event.y - 50);
  
  setPosition("MyName", event.x - 40, event.y - 60);
  
  readRecords("World", {userid: getUserId()}, function(rec) {
    
    updateRecord("World", {id: rec[0].id, userid: getUserId(), X: event.x, Y: event.y, name: rec[0].name}, function() {
      
      
      
    });
    
  });
  
});

onRecordEvent("World", function() {
  
  readRecords("World", {userid: getUserId()}, function(rec) {
    
    if (rec[0].userid == getUserId()) {
      
      
      
    } else {
      
      setPosition("Player"+rec[0].id, rec[0].X, rec[0].Y);
      setPosition("Text"+rec[0].id, rec[0].X + 10, rec[0].Y - 10);
      
    }
    
  });
  
});



function worldBuild() {
  
  setScreen("World");
  
  textLabel("MyName", userData.username);
  
  image("MyPlayer", "icon://fa-male");
  
  setPosition("MyPlayer", 100, 100, 100, 100);
  
  setPosition("MyName", 100 + 10, 100 - 10);
  
  readRecords("World", {userid: getUserId()}, function(rec) {
    
    if (rec.length > 0) {
      
      var myX = rec[0].X;
      var myY = rec[0].Y;
      
      setPosition("MyPlayer", myX, myY);
      
      setPosition("MyName", myX + 10, myY - 10);
      
      checkForPlayers();
      
    } else {
      
      readRecords("Users", {userid: getUserId()}, function(rec) {
        
        createRecord("World", {userid: getUserId(), X: getXPosition("MyPlayer"), Y: getYPosition("MyPlayer"), username: rec[0].username}, function() {


        
        });
        
      });
      
    }
    
  });
  
}
 
function login() {
  
  readRecords("Users", {userid: getUserId()}, function (rec) {
    
    if (rec.length > 0) {
      
      userData.username = rec[0].username;
      
      worldBuild();
      
    } else {
      
      setScreen("SignUp");
      
    }
    
  });
  
}

function signUp() {
  
  if (getText("UsernameInput").length < 4) {
    
    
    
  } else if (getText("UsernameInput").length > 32) {
    
    
    
  } else {
    
    readRecords("Users", {username: getText("UsernameInput").substring(0, 32)}, function (rec) {
      
      if (rec.length > 0) {
        
        
        
      } else {
        
        userData.username = getText("UsernameInput");
        
        createRecord("Users", {userid: getUserId(), username: getText("UsernameInput").substring(0, 32)}, function () {
          
          worldBuild();
          
        });
        
      }
      
    });
    
  }
   
}

function checkForPlayers() {
  
  readRecords("World", {}, function(rec) {
    
    for (var i = 0; i < rec.length; i++) {
      
      e = e + 1;
      
      if (rec[i].userid == getUserId()) {
        
        
        
      } else {
      
        image("Player" + rec[i].id, "icon://fa-male");
      
        textLabel("Text" + rec[i].id, rec[i].username);
        
        setPosition("Player"+rec[i].id, 100, 100, 100, 100);
        
        setPosition("Text"+rec[i].id, 100 + 10, 100 - 10);
        
      }
  
    }
    
  });
  
}
