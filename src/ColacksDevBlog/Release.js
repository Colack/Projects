// Code By Jack //



var userSettings = {
  defaultRole: "User", 
  username: "", 
  role: "", 
  banned: false,
  tester: false,
  admin: false,
  logged: false
};

var appSettings = {
  main: false,
  devMode: false,
  urlActive: false,
  currentUrl: "",
  chatMuted: false
};

forkFunction();

console.log(getUserId());



// Log Code //

onEvent("Logs_Button", "click", function() {
  
  setScreen("LogSearch_Screen");
  
  logAmount();
  
});

onEvent("LogSearch_Button", "click", function() {
  
  logRead();
  
});

onEvent("LogWebsite_Button", "click", function() {
  
  urlRead();
  
});

onEvent("LogBack_Button", "click", function() {
  
  setScreen("LogSearch_Screen");
  
});

onEvent("LogSearchBack_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("DisplayLogHome_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("LogSearchHome_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});



// User Code //

onEvent("User_Button", "click", function() {
  
  setScreen("UserSearch_Screen");
  
});

onEvent("UserSearchSearch_Button", "click", function() {
  
  userSearch();
  
});

onEvent("UserPageBack_Button", "click", function() {
  
  setScreen("UserSearch_Screen");
  
  setProperty("UserPageRole_Label", "text-color", "black");
  
});

onEvent("UserPageHome_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("UserSearchHome_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("UserSearchBack_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});



// Login In And Sign Up //

onEvent("Login_Button", "click", function() {
  
  loginRead();
  
});

onEvent("SignUpLogin_Button", "click", function() {
  
  loginRead();
  
});

onEvent("SignUpCreate_Button", "click", function() {
  
  accountCreation();
  
});

onEvent("SignUpBack_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("SignUpHome_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("SignUp_Button", "click", function() {
  
  setScreen("SignUp_Screen");
  
});



// Chatting Code //

onEvent("Chat_Button", "click", function() {
  
  if (userSettings.logged == false) {
    
    
    
  } else {
    
    setScreen("Chat_Screen");
  
    userJoin();
    
  }
  
});

onEvent("ChatHome_Button", "click", function() {
  
  setScreen("Index_Screen");
  
  userLeave();
  
});

onEvent("ChatSend_Button", "click", function() {
  
  if (getText("ChatMessage_Input").length >= 4) {
    
    if (getText("ChatMessage_Input").length <= 50) {
      
      if 
      (getText("ChatMessage_Input").includes("Fuck") 
      || getText("ChatMessage_Input").includes("Ass") 
      || getText("ChatMessage_Input").includes("Shit") 
      || getText("ChatMessage_Input").includes("Nigger")
      || getText("ChatMessage_Input").includes("Cunt")
      || getText("ChatMessage_Input").includes("Sex")
      || getText("ChatMessage_Input").includes("Dick")
      || getText("ChatMessage_Input").includes("Wtf")
      || getText("ChatMessage_Input").includes("Cock")
      || getText("ChatMessage_Input").includes("Sexual")
      || getText("ChatMessage_Input").includes("Porn")
      || getText("ChatMessage_Input").includes("CP")
      || getText("ChatMessage_Input").includes("Cum")
      || getText("ChatMessage_Input").includes("Pussy")
      || getText("ChatMessage_Input").includes("Nut")
      || getText("ChatMessage_Input").includes("Bust")
      || getText("ChatMessage_Input").includes("Bitch")) {
        
        setScreen("Banned_Screen");
        
      } else {
        
        createRecord("chat", {sender: "{" + userSettings.role + "} " + userSettings.username + ": " + getText("ChatMessage_Input"), user:getUserId()}, function() {
    
          setText("ChatMessage_Input", "");
    
        });
      
        adm1nRead();  
        
      }
      
      if (getUserId() == "n3GJpqFyg7QVLT+xQBIRjTZ5mko") {
        
        
        
      } else {
        
        hideElement("ChatSend_Button");
        
        setTimeout(chatCooldown, 5000); 
        
      }
      
    } else {
      
      setText("ChatMessage_Input", "");
      
    }
    
  } else {
    
    setText("ChatMessage_Input", "");
    
  }
  
});

onRecordEvent("chat", function(record, eventType) {
  
  if (eventType == 'update' || eventType == 'delete' || eventType == 'create') {
    
    setText("Chat_ChatMenu", "");
    
    readRecords('chat', {}, function(rec) {
        
      for (var i = 0; i < rec.length; i++) {
        
        setText("Chat_ChatMenu", rec[i].sender + "\n" + getText("Chat_ChatMenu"));
        
      }
      
    });
    
  }
  
});



// Posting Code //

onEvent("Post_Button", "click", function() {
  
  setScreen("Posting_Screen");
  
});

onEvent("PostingHome_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("PostingBack_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("PostingPosts_Button", "click", function() {
  
  setScreen("PostSearch_Screen");
  
  readRecords('posts', {}, function(rec) {
    
    setText("PostSearchCurrent_Label", "Current Number Of Posts: " + rec.length);
    
  });
  
});

onEvent("PostingCreate_Button", "click", function() {
  
  setScreen("PostCreate_Screen");
  
});

onEvent("PostSearchBack_Button", "click", function() {
  
  setScreen("Posting_Screen");
  
});

onEvent("PostSearchHome_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("PostingFind_Button", "click", function() {
  
  var num = getNumber("PostSearch_Input");
  
  if (num == undefined) {
    
    return(num);  
    
  } else {
    
    if (num == 0) {
      
      return(num);
      
    } else {
      
      readRecords("posts", {id: num}, function(rec) {
        
        if (rec == undefined) {
          
          return(rec);
          
        } else {
          
          if (rec[0] == undefined) {
            
             
            
          } else {
            
            setScreen("Post_Screen");
            
            setText("PostUsername_Label", rec[0].username);
            setText("PostText_Label", rec[0].text);
            
          }
          
        }
        
      });
      
    }
    
  }
  
});

onEvent("PostBack_Button", "click", function() {
  
  setScreen("PostSearch_Screen");
  
});

onEvent("PostHome_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("PostCreateBack_Button", "click", function() {
  
  setScreen("Posting_Screen");
  
});

onEvent("PostCreateHome_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("PostCreatePost_Button", "click", function() {
  
  var postLength = getText("PostCreateText_Input");
  
  if (postLength > 111) {
    
    
    
  } else {
    
    if (getText("PostCreateText_Input").includes("fuck") || getText("PostCreateText_Input").includes("bitch") || getText("PostCreateText_Input").includes("ass") || getText("PostCreateText_Input").includes("fuck") || getText("PostCreateText_Input").includes("shit") || getText("PostCreateText_Input").includes("nigger")) {
        
        setScreen("Banned_Screen");
        
      } else {
        
        if (getText("PostCreateText_Input").length < 5) {
          
          // Dont Allow // 
          
        } else {
          
          setScreen("Posting_Screen");
    
        setText("PostCreateText_Input", "");
    
        createRecord("posts", {username: userSettings.username, text: postLength}, function() {
      
      
      
        }); 
        
        hideElement("PostingCreate_Button");
          
        }
        
      }
    
  }
  
});



// Others //

onEvent("Credits_Button", "click", function() {
  
  open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s");
  
});

onEvent("IndexLogo_Image", "click", function() {
  
  if (userSettings.admin == true) {
    
    setScreen("Secret_Screen");
  
    readRecords("Accounts", {}, function(rec) {
    
      drawChart("Secret_Chart", "bar", rec);
    
    }); 
    
  } else {
    
    // Cant Access Secret Screen //
    
  }
  
});

onEvent("SecretBack_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

onEvent("ColackBack_Button", "click", function() {
  
  setScreen("Index_Screen");
  
});

var adm1nSettings = {
  name: "ADM1N",
  usage: "Administration Bot With Helpful Commands.",
  role: "{Bot}",
  version: 2,
  sender: '{Bot} ADM1N: '
};

function adm1nRead() {
  
  var aPrefix = "!";
  
  var message = getText("ChatMessage_Input");
  
  if (message == aPrefix + "clear") {
    
    if (userSettings.admin == true) {
      
      readRecords('chat', {}, function(rec) {
        
        var x = 0;
        
        createRecord('chat', {sender: adm1nSettings.sender + "Clearing The Chat!"}, function() {
          
          
          
        });
        
        timedLoop(100, function() {
          
          deleteRecord('chat', {id: rec[x].id}, function() {
            
            
            
          });
          x++;
          if (x == rec.length) {
            
            stopTimedLoop();
            
            createRecord('chat', {sender: adm1nSettings.sender + "Chat Completely Cleared!"}, function() {
              
              
              
            });
            
          }
          
        });
        
      });
      
    } else {
      
      createRecord('chat', {sender: adm1nSettings.sender + userSettings.username + " attempted to use an Admin Command."}, function() {
        
        
        
      });
      
    }
    
  } else if (message == aPrefix + "setup") {
    
    createRecord('chat', {sender: adm1nSettings.sender + "Hello " + userSettings.username + "!" + " Thank You For Using The Adm1n Bot! Use !commands to start!"}, function() {
      
      
      
    });
     
  } else if (message == aPrefix + "commands") {
    
    createRecord('chat', {sender: adm1nSettings.sender + "My Current Commands: commands, setup, and clear. My current Prefix is: " + aPrefix}, function() {
      
      
      
    });
    
  } 
  
}

function userJoin() {
  
  if (userSettings.admin == true) {
    
    createRecord('chat', {sender: "== " + adm1nSettings.sender + userSettings.username + " has joined! =="}, function() {
      
      
      
    }); 
    
  } else {
    
    createRecord('chat', {sender: adm1nSettings.sender + userSettings.username + " has joined!"}, function() {
      
      
      
    });
    
  }
    
}
  
function userLeave() {
    
  createRecord('chat', {sender: adm1nSettings.sender + userSettings.username + " has left."}, function() {
      
      
      
  });

}



// Functions //

function forkFunction() {
  
  mainCheck();
  devModeCheck();
  recordLength();
  accountRead();
  funStuff();

}
function devModeCheck() {
  
  if (getUserId() == "n3GJpqFyg7QVLT+xQBIRjTZ5mko" && appSettings.devMode == true) {
    
    console.log("Developer Mode On for " + getUserId());
    
    setText("DevLog_Label", "Colack's Dev Blog | Developer Mode");
    
    setScreen("Index_Screen");
    
  } else {
    
    setText("DevLog_Label", "C");
    
    addStart();
    
  }
  
}
function addStart() {
  
    setText("DevLog_Label", "Co");

    setTimeout(add2, 100);
    
    hideElement("LogWebsite_Button");

    function add2() {
      setText("DevLog_Label", "Col");

      setTimeout(add3, 100);
    }

    function add3() {
      setText("DevLog_Label", "Cola");

      setTimeout(add4, 100);
    }

    function add4() {
      setText("DevLog_Label", "Colac");

      setTimeout(add5, 100);
    }

    function add5() {
      setText("DevLog_Label", "Colack");

      setTimeout(add6, 100);
    }

    function add6() {
      setText("DevLog_Label", "Colack'");

      setTimeout(add7, 100);
    }

    function add7() {
      setText("DevLog_Label", "Colack's");

      setTimeout(add8, 100);
    }

    function add8() {
      setText("DevLog_Label", "Colack's ");

      setTimeout(add9, 100);
    }

    function add9() {
      setText("DevLog_Label", "Colack's D");

      setTimeout(add10, 100);
    }

    function add10() {
      setText("DevLog_Label", "Colack's De");

      setTimeout(add11, 100);

      function add11() {
        setText("DevLog_Label", "Colack's Dev");

        setTimeout(add12, 100);

        function add12() {
          setText("DevLog_Label", "Colack's Dev ");

          setTimeout(add13, 100);

          function add13() {
            setText("DevLog_Label", "Colack's Dev B");

            setTimeout(add14, 100);

            function add14() {
              setText("DevLog_Label", "Colack's Dev Bl");

              setTimeout(add15, 100);

              function add15() {
                setText("DevLog_Label", "Colack's Dev Blo");

                setTimeout(add16, 100);

                function add16() {
                  setText("DevLog_Label", "Colack's Dev Blog");
                }
              }
            }
          }
        }
      }
    }
  }
function mainCheck() {
  
  if (appSettings.main == true) {
    
    setScreen("DownTime_Screen");
    
  } else {
    
    setScreen("Index_Screen");
    
  }
  
}
function funStuff() {
  
  // Wow! You Found my Secret Function! //
  
  var random1 = randomNumber(1, 255);
  var random2 = randomNumber(1, 255);
  var random3 = randomNumber(1, 255);
  
  setProperty("IndexLogo_Image", "icon-color", rgb(random1, random2, random3));
  setProperty("Logs_Button", "background-color", rgb(random1, random2, random3));
  setProperty("Post_Button", "background-color", rgb(random1, random2, random3));
  setProperty("Chat_Button", "background-color", rgb(random1, random2, random3));
  setProperty("User_Button", "background-color", rgb(random1, random2, random3));
  setProperty("Credits_Button", "background-color", rgb(random1, random2, random3));
  setProperty("Login_Button", "background-color", rgb(random1, random2, random3));
  setProperty("SignUp_Button", "background-color", rgb(random1, random2, random3));
  
}
function recordLength() {
  
  readRecords("Accounts", {}, function(rec) {
    
    console.log(rec.length);
    
  });
  
  readRecords("Logs", {}, function(rec) {
    
    console.log(rec.length);
    
  });
  
}
function logRead() {
  
  var searchValue = getNumber("NumberInput_Input");
  
  if (searchValue == undefined) {
    
    return(searchValue);
    
  } else {
    
    if (searchValue == 0) {
      
      setScreen("Colack_Screen");
      
    } else {
        
        readRecords("Logs", {id: searchValue}, function(rec) {
        
        if (rec == undefined) {
          
          return(rec);
          
        } else {
          
          if (rec[0] == undefined) {
            
            
            
          } else {
          
            setScreen("DisplayLog_Screen");
          
            setText("LogTitle_Label", rec[0].title);
            setText("LogText1_Label", rec[0].text1);
            setText("LogText2_Label", rec[0].text2);
            setText("LogText3_Label", rec[0].text3);
          
            hideElement("LogWebsite_Button");
          
            if (rec[0].image == false) {
            
              console.log("No Image");
            
            } else {
            
              setProperty("Log_Image", "image", rec[0].image);
            
              console.log("Image set as: " + rec[0].image);
            
            } 
          
            if (rec[0].url == false) {
            
              console.log("No URL Button.");
            
            } else {
            
              appSettings.urlActive = true;
              appSettings.currentUrl = rec[0].url;
            
              showElement("LogWebsite_Button");
            
              setText("LogWebsite_Button", rec[0].urlTitle);
            
            } 
          
            setText("LogDate_Label", rec[0].date);
          
            console.log("Log Fully Loaded.");
            
            }
          
          }
        
        });
        
      }
    
    } 

}
function logAmount() {
  
  readRecords("Logs", {}, function(rec) {
    
    setText("LogSearchCurrent_Label", "Current Amount Of Logs: " + rec.length);
    
  });
  
}
function urlRead() {
  
  if (appSettings.urlActive == true) {
    
    open(appSettings.currentUrl);
    
  } else {
    
    return(appSettings.urlActive);
    
  }
  
}
function userSearch() {
  
  readRecords("Accounts", {username: getText("UserSearchUsername_Input")}, function(rec) {
    
    if (rec.length > 0) {
      
      setScreen("UserPage_Screen");
      
      setText("UserPageUsername_Label", rec[0].username);
      setText("UserPageRole_Label", rec[0].role);
      
      if (rec[0].badge == 1) {
        
        setProperty("UserPageBadge_Image", "image", "OG_esports_Logo.png");
        
      } else if (rec[0].badge == 2) {
        
        setProperty("UserPageBadge_Image", "image", "5695_staffbot.png");
        
      } else if (rec[0].badge == 3) {
        
        setProperty("UserPageBadge_Image", "image", "Beta_Tester_-__Accreditation_Badge__1_.png");
        
      } else {
        
        console.log("No Badge");
        
      }
      
      if (rec[0].role == "Beta Tester") {
        
        setProperty("UserPageRole_Label", "text-color", "green");
        
      } else if (rec[0].role == "Admin") {
        
        setProperty("UserPageRole_Label", "text-color", "blue");
        
      } else if (rec[0].role == "Developer") {
        
        setProperty("UserPageRole_Label", "text-color", "purple");
        
      } else {
        
        
        
      }
      
    } else {
      
      console.log("Specified User Does Not Exist");
      
    }
    
  });
  
}
function accountRead() {
  
  readRecords("Accounts", {userid: getUserId()}, function (rec) {
    
    if (rec[0] == undefined) {
      
      if (appSettings.main == true) {
        
        
        
      } else {
        
        setScreen("SignUp_Screen"); 
        
      }
      
    } else {
      
      userSettings.logged == true;
      
      if (rec[0].banned == true) {
      
        setScreen("Banned_Screen");
      
      } else {
      
        if (rec[0].role == "Admin") {
        
        userSettings.admin = true;
         
      } else if (rec[0].role == "Developer") {
        
        userSettings.admin = true;
        
      }
      
      } 
      
    }
  
    if (appSettings.main == true) {
    
      console.log("Logging In Not Currently Allowed");
    
    } else if (appSettings.main == false) {
    
      if (rec.length > 0) {
    
        setScreen("Index_Screen");
    
        userSettings.username = rec[0].username;
        userSettings.role = rec[0].role;
        userSettings.banned = rec[0].banned;
        userSettings.logged = true;
    
        setText("Welcome_Label", "Welcome, " + userSettings.role + " " + userSettings.username + "!");
    
        hideElement("Login_Button");
        hideElement("SignUp_Button");
      
    } else {
    
      setScreen("SignUp_Screen");
    
    }
    
  }
  
  
});
  
}
function loginRead() {
  
  readRecords("Accounts", {userid: getUserId()}, function (rec) {
    
    if (rec.length > 0) {
    
    setScreen("Index_Screen");
    
    userSettings.username = rec[0].username;
    userSettings.role = rec[0].role;
    userSettings.banned = rec[0].banned;
    userSettings.logged = true;
    
    console.log(userSettings.logged);
    
    setText("Welcome_Label", "Welcome, " + userSettings.role + " " + userSettings.username + "!");
    
    hideElement("Login_Button");
    hideElement("SignUp_Button");
    
  } else {
    
    setScreen("SignUp_Screen");
    
  }
  
  if (userSettings.role == "Admin") {
    
    console.log("Logged In As An Admin.");
    
    userSettings.admin == true;
    
  } else if (userSettings.role == "Developer") {
    
    userSettings.admin == true;
    
  }
  
  if (userSettings.banned == true) {
    
    setScreen("Banned_Screen");
    
  }
  
});
  
}
function accountCreation() {
  
  if (getText("Username_Input").length < 4) {
    
    console.log("Username is too short.");
    
  } else if (getText("Username_Input").length > 32) {
    
    console.log("Username is too long.");
    
  } else {
    
    readRecords("Accounts", {username: getText("Username_Input").substring(0,32)}, function (rec) {
      
      if (rec.length > 0) {
        
        console.log("Username is already taken.");
        
      } else {
        
        userSettings.role = userSettings.defaultRole;
        userSettings.logged = true;
        
        createRecord("Accounts", {userid: getUserId(), username: getText("Username_Input").substring(0,32), role: userSettings.defaultRole, banned: false, badge: 0}, function () {
          
          setScreen("Index_Screen");
          
          userSettings.username = getText("Username_Input");
          
          setText("Welcome_Label", "Welcome, " + userSettings.role + " " + userSettings.username + "!");
          
          hideElement("SignUp_Button");
          
          hideElement("Login_Button");
          
        });
      }
    });
  }
  
}
function chatCooldown() {
  
  showElement("ChatSend_Button");
  
}
