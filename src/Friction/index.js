// __proto__

var settings = {
  username: "",
  role: 0,
  extra: "",
  pfp: "",
  room: 0,
  name: "",
  des: ""
};
var baseURL = getAttribute("divApplab", "baseURI");
var url = baseURL;

onEvent("Login", "click", function() {
  login();
});
onEvent("SignUp", "click", function() {
  setScreen("Sign");
});
onEvent("DoIt", "click", function() {
  signUp();
});
onEvent("Enter", "click", function() {
  if (settings.room != 0) {
    setText("Name", settings.name);
    setText("LittleLabel", settings.des);
    setScreen("Chat");
    readRecords("Chat", {}, function(rec) {
    
    if (settings.room != 11) {
      
      for (var i = 0; i < rec.length; i++) {
      
        if (rec[i].room == settings.room) {
        
          setText("Chatting", rec[i].message + " " + "\n" + getText("Chatting"));
        
        }
      
      }
      
    } else {
     
      for (var x = 0; x < rec.length; x++) {
        
        if (rec[x].room != settings.room) {
          
          setText("Chatting", rec[x].message + " " + "\n" + getText("Chatting"));
          
        }
          
      }  
      
    }
    
  });
  }
});
onEvent("Quit", "click", function() {
  setText("Chatting", "");
  color();
  setScreen("Rooms");
});
onEvent("Send", "click", function() {
  
  var input = getText("Message");
  
  input = input.replace(/motherfuck/gi, "**********");
  input = input.replace(/fuck/gi, "****");
  input = input.replace(/shit/gi, "****");
  input = input.replace(/bitch/gi, "*****");
  input = input.replace(/bich/gi, "****");
  input = input.replace(/cunt/gi, "****");
  input = input.replace(/dick/gi, "****");
  input = input.replace(/pussy/gi, "*****");
  input = input.replace(/nigga/gi, "*****");
  input = input.replace(/nigger/gi, "******");
  input = input.replace(/\bkkk\b/gi, "***");
  input = input.replace(/piss/gi, "****");
  input = input.replace(/vagina/gi, "******");
  input = input.replace(/penis/gi, "*****");
  input = input.replace(/pussies/gi, "*******");
  input = input.replace(/titties/gi, "*******");
  input = input.replace(/titty/gi, "*****");
  input = input.replace(/cock/gi, "****");
  input = input.replace(/hitler/gi, "******");
  input = input.replace(/asshole/gi, "*******");
  input = input.replace(/dumbass/gi, "*******");
  input = input.replace(/\bcum\b/gi, "***");
  input = input.replace(/wtf/gi, "***");
  input = input.replace(/slut/gi, "****");
  input = input.replace(/hoe/gi, "***");
  input = input.replace(/\btf\b/gi, "**");
  input = input.replace(/balls/gi, "*****");
  input = input.replace(/whore/gi, "*****");
  input = input.replace(/horny/gi, "*****");
  input = input.replace(/hump/gi, "****");
  input = input.replace(/dookie/gi, "******");
  input = input.replace(/deepthroat/gi, "**********");
  input = input.replace(/\bass\b/gi, "***");
  input = input.replace(/\bsex\b/gi, "***");
  input = input.replace(/\bhentai\b/gi, "******");
  input = input.replace(/\bniglet\b/gi, "******");
  input = input.replace(/\bfurgot\b/gi, "******");
  input = input.replace(/\bfaggot\b/gi, "******");
  
  createRecord("Chat", {message: settings.extra + " " + settings.username + ": " + input, user: getUserId(), room: settings.room}, function() {
    
    setText("Message", "");
    
    hideElement("Send");
    
    setTimeout(showed, 750);
    
  });
  
});

onEvent("General", "click", function() {
  settings.room = 1;
  settings.name = "General";
  settings.des = "General Chat";
  color();
});
onEvent("Off-Topic", "click", function() {
  settings.room = 2;
  settings.name = "Off-Topic";
  settings.des = "Everything Off-Topic";
  color();
});
onEvent("Gaming", "click", function() {
  settings.room = 3;
  settings.name = "Gaming";
  settings.des = "Video Games related chat.";
  color();
});
onEvent("CodeOrg", "click", function() {
  settings.room = 4;
  settings.name = "Code.org";
  settings.des = "Code.org projects and topics.";
  color();
});
onEvent("QA", "click", function() {
  settings.room = 5;
  settings.name = "Q&A";
  settings.des = "Questions and Answers.";
  color();
});
onEvent("Bonus", "click", function() {
  settings.room = 6;
  settings.name = "Bonus";
  settings.des = "Bonus chat for Bonus Members.";
  color();
});
onEvent("Memes", "click", function() {
  settings.room = 7;
  settings.name = "Memes";
  settings.des = "Funny Haha Memes";
  color();
});
onEvent("Promote", "click", function() {
  settings.room = 8;
  settings.name = "Promotion";
  settings.des = "Promote yourself here.";
  color();
});
onEvent("ChatChat", "click", function() {
  settings.room = 9;
  settings.name = "ChatChat";
  settings.des = "ChatChatChatChatChat";
  color();
});
onEvent("Admin", "click", function() {
  settings.room = 10;
  settings.name = "Admins";
  settings.des = "Admins and Mods Talk.";
  color();
});
onEvent("Global", "click", function() {
  settings.room = 11;
  settings.name = "Global";
  settings.des = "See all messages!";
  color();
});

onRecordEvent("Users", function() {
  
  readRecords("Users", {userId: getUserId()}, function(rec) {
    if (rec[0].banned) {
      setScreen("Banned");
    }
  });
  
});
onRecordEvent("Chat", function() {
  
  setText("Chatting", "");
  
  readRecords("Chat", {}, function(rec) {
    
    if (settings.room == 11) {
      
      for (var i = 0; i < rec.length; i++) {
        
        if (rec[i].room != 10) {
          
          setText("Chatting", rec[i].message + " " + "\n" + getText("Chatting"));
          
        } 
        
      }
      
    } else {
      
      for (var x = 0; x < rec.length; x++) {
      
        if (rec[x].room == settings.room) {
        
          setText("Chatting", rec[x].message + " " + "\n" + getText("Chatting"));
        
        }
      
      }
      
    }
    
  });
  
});

function start() {
  hideElement("Bonus");
  hideElement("Memes");
  hideElement("Promote");
  hideElement("ChatChat");
  hideElement("Admin");
  setScreen("Accounts");
}
function login() {
  
  showElement("Loading");
  
  readRecords("Users", {userId: getUserId()}, function(rec) {
    
    if (rec.length > 0) {
      
      if (rec[0].banned) {
        
        setScreen("Banned");
        
      } else {
        
        settings.username = rec[0].username;
        settings.role = rec[0].role;
        settings.pfp = rec[0].pfp;
        
        if (settings.role == 1) {
          showElement("Bonus");
          showElement("Memes");
          showElement("Promote");
        } else if (settings.role == 2) {
          showElement("Bonus");
          showElement("Memes");
          showElement("Promote");
          showElement("ChatChat");
          showElement("Admin");
        }
        
        hideElement("Loading");
        setScreen("Rooms");
        
      }
      
    } else {
      hideElement("Loading");
    }
    
  });
  
}
function signUp() {
  showElement("S");
  var input = getText("Username");
  input = input.replace(/motherfuck/gi, "**********");
  input = input.replace(/fuck/gi, "****");
  input = input.replace(/shit/gi, "****");
  input = input.replace(/bitch/gi, "*****");
  input = input.replace(/bich/gi, "****");
  input = input.replace(/cunt/gi, "****");
  input = input.replace(/dick/gi, "****");
  input = input.replace(/pussy/gi, "*****");
  input = input.replace(/nigga/gi, "*****");
  input = input.replace(/nigger/gi, "******");
  input = input.replace(/\bkkk\b/gi, "***");
  input = input.replace(/piss/gi, "****");
  input = input.replace(/vagina/gi, "******");
  input = input.replace(/penis/gi, "*****");
  input = input.replace(/pussies/gi, "*******");
  input = input.replace(/titties/gi, "*******");
  input = input.replace(/titty/gi, "*****");
  input = input.replace(/cock/gi, "****");
  input = input.replace(/hitler/gi, "******");
  input = input.replace(/asshole/gi, "*******");
  input = input.replace(/dumbass/gi, "*******");
  input = input.replace(/\bcum\b/gi, "***");
  input = input.replace(/wtf/gi, "***");
  input = input.replace(/slut/gi, "****");
  input = input.replace(/hoe/gi, "***");
  input = input.replace(/\btf\b/gi, "**");
  input = input.replace(/balls/gi, "*****");
  input = input.replace(/whore/gi, "*****");
  input = input.replace(/horny/gi, "*****");
  input = input.replace(/hump/gi, "****");
  input = input.replace(/dookie/gi, "******");
  input = input.replace(/deepthroat/gi, "**********");
  input = input.replace(/\bass\b/gi, "***");
  input = input.replace(/\bsex\b/gi, "***");
  input = input.replace(/\bhentai\b/gi, "******");
  input = input.replace(/\bniglet\b/gi, "******");
  input = input.replace(/\bfurgot\b/gi, "******");
  input = input.replace(/\bfaggot\b/gi, "******");
  if (input.length < 4) {
    
    setText("UsernameInput", "Username is too short!");
    
    setTimeout(clearUsernameInput, 500);
    
  } else if (input.length > 32) {
    
    setText("UsernameInput", "Username is too long!");
    
    setTimeout(clearUsernameInput, 500);
    
  } else if (input.includes(" ")) {
    
    setText("UsernameInput", "Username cannot have spaces!");
    
    setTimeout(clearUsernameInput, 500);
    
  } else {
    
    readRecords("Users", {username: input.substring(0, 32)}, function(rec) {
      
      if (rec.length > 0) {
        
        setText("UsernameInput", "You cannot have more than 1 account!");
            
        setTimeout(clearUsernameInput, 500);
        
      } else {
        
        settings.username = input;
        settings.role = 0;
        settings.pfp = getText("ProfilePicture");
        
        createRecord("Users", {userId: getUserId(), username: input, role: settings.role, banned: false, pfp: settings.pfp}, function() {

          hideElement("S");
          
          setScreen("Accounts");
          
        });
        
      }
      
    });
    
  }
}
function clearUsernameInput() {
  setText("Username", "");
  hideElement("S");
}
function color() {
  setProperty("General", "background-color", rgb(53, 59, 81));
  setProperty("Off-Topic", "background-color", rgb(53, 59, 81));
  setProperty("Gaming", "background-color", rgb(53, 59, 81));
  setProperty("CodeOrg", "background-color", rgb(53, 59, 81));
  setProperty("QA", "background-color", rgb(53, 59, 81));
  setProperty("Bonus", "background-color", rgb(53, 59, 81));
  setProperty("Memes", "background-color", rgb(53, 59, 81));
  setProperty("Promote", "background-color", rgb(53, 59, 81));
  setProperty("ChatChat", "background-color", rgb(53, 59, 81));
  setProperty("Admin", "background-color", rgb(53, 59, 81));
  setProperty("Global", "background-color", rgb(53, 59, 81));
  if (settings.room == 1) {
    setProperty("General", "background-color", "#4b5471");
  } else if (settings.room == 2) {
    setProperty("Off-Topic", "background-color", "#4b5471");
  } else if (settings.room == 3) {
    setProperty("Gaming", "background-color", "#4b5471");
  } else if (settings.room == 4) {
    setProperty("CodeOrg", "background-color", "#4b5471");
  } else if (settings.room == 5) {
    setProperty("QA", "background-color", "#4b5471");
  } else if (settings.room == 6) {
    setProperty("Bonus", "background-color", "#4b5471");
  } else if (settings.room == 7) {
    setProperty("Memes", "background-color", "#4b5471");
  } else if (settings.room == 8) {
    setProperty("Promote", "background-color", "#4b5471");
  } else if (settings.room == 9) {
    setProperty("ChatChat", "background-color", "#4b5471");
  } else if (settings.room == 10) {
    setProperty("Admin", "background-color", "#4b5471");
  } else if (settings.room == 0) {
    
  } else if (settings.room == 11) {
    setProperty("Global", "background-color", "#4b5471");
  }
}
function showed() {
  showElement("Send");
}

start();
