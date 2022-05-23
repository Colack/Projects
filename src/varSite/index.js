// Build 327221 //
// Code By Jack //

// Variables //

var userSettings = {
  role: "",
  defaultRole: "*",
  logged: false,
  username: "",
  banned: false,
  version: {
    build: "Build 326221",
    major: 1,
    minor: 0,
    patch: 4
  }
  
};

var colackSpecialEasterEggThing = [
  "Hello There!",
  "You probably found this Version of the App by Finding My Decoder, or you now have Access to the Special Development Kits!",
  "Either Way, Welcome!",
  "As you know, this text is hidden in the Code as an Easter Egg to anyone who searches deep enough for it.",
  "It has no purpose besides that...",
  "But I guess I'll give it some purpose; By Explaining What the Point of this App Even Was!",
  "The varSite Search Engine, Or originally called 'varSite Browser', was created because I was bored of making Dumb games in computer science.",
  "This was my first Major Project, with me wanting to try out my Programming skills.",
  "Most of the code inside of this project was collected from some of my other Projects.",
  "Take for example: The chatting system. It was taken from my Library: ChatJS",
  "That was an very short lived project that existed as my Developer log, which evolved into this.",
  "Whats funny is, I was only allowed to edit this Project during my First Period Class... Meaning that updates only came out around 1 time per day!",
  "And besides, those updates were very, very, very minor!",
  "...",
  "Your Probably wondering how this entire thing works...",
  "Well, it all starts with The 'onClientAsk' Function.",
  "That function boots up the app, and allows it to ask for your specific client.",
  "The app also contains 3 more functions; Laptop, Mobile, and Desktop.",
  "Ill only go into the Desktop Client.",
  "From the Desktop Client comes an Loading Screen with an Fade in system. This System was actually the first thing I coded!",
  "Then, you get logged in using the 'login' function.",
  "This function just checks the database for specific values, and if they return as true, it logs you in as that specific user.",
  "There are now a couple options you can do.",
  "If you go into the Search Bar, you can type whatever you want!",
  "And if its not an Website, it will take the text you search, and attempt to find an website that matches that request.",
  "And thats how the app works!",
  "Thank you for reading. I get lonely sometimes.....",
  "I've hidden a couple of easter eggs inside of this app. If you can find them, send me an Screenshot on Discord: Colack#7421",
  ":)",
  "- Colack/"
];

var currentClient = 0; 

var collectedUsername;

var siteName;

var text;

var imageLink;

var endType = ".site";

var currentSite = "";


// Records //

onRecordEvent("Users", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  readRecords("Users", {userId: getUserId()}, function(rec) {
    
    if (rec[0].banned == true) {
      
      setScreen("Banned");
      
    } else if (rec[0].banned == false) {
      
      
      
    } else {
      
      
      
    }
    
  });
  
});

onRecordEvent("Chat", function() {
  
  playSound("assets/category_accent/puzzle_game_accent_a_01.mp3");
  
  setText("ChatLabel", "");
    
    readRecords('Chat', {}, function(rec) {
        
      for (var i = 0; i < rec.length; i++) {
        
        setText("ChatLabel", rec[i].sender + "\n" + getText("ChatLabel"));
        
      }
      
    });
  
});

onRecordEvent("PublicChat", function() {
  
  playSound("assets/category_accent/puzzle_game_accent_a_01.mp3");
  
  setText("PublicChatLabel", "");
    
    readRecords("PublicChat", {}, function(rec) {
        
      for (var i = 0; i < rec.length; i++) {
        
        setText("PublicChatLabel", rec[i].sender + "\n" + getText("PublicChatLabel"));
        
      }
      
    });
  
});

onRecordEvent("Functions", function() {
  
  readRecords("Functions", {id: 2}, function(rec) {
    
    if (rec[0].a == true) {
      
      if (userSettings.role == "`") {
        
        
        
      } else {
        
        setScreen("BlankScreen");
        
      }
      
    } else {
      
      setScreen("DownTimeOver");
      
    }
    
  });  
  
});


// OnAppStart //

onClientAsk();

variableLoader();



// Starting Events //

onEvent("Desktop", "click", function() {
  
  stopSound("assets/category_music/clear_evidence_loop1.mp3");
  
  playSound("assets/category_app/app_button_1.mp3");
  
  onDesktopStart();
  
});

onEvent("Mobile", "click", function() {
  
  stopSound("assets/category_music/clear_evidence_loop1.mp3");
  
  playSound("assets/category_app/app_button_1.mp3");
  
  onMobileStart();
  
});

onEvent("LowEnd", "click", function() {
  
  stopSound("assets/category_music/clear_evidence_loop1.mp3");
  
  playSound("assets/category_app/app_button_1.mp3");
  
  onLaptopStart();
  
});



// SearchBar/Go Events //

onEvent("SearchBar", "keydown", function(event) {
  
  var ans = getText("SearchBar");
  
  if (event.key == "Enter") {
    
    searchBar(ans);
    
  } else {
    
    playSound("assets/category_app/app_button_1.mp3");
    
  }
  
});

onEvent("SearchBar2", "keydown", function(event) {
  
  var ans = getText("SearchBar2");
  
  if (event.key == "Enter") {
    
    searchBar(ans);
    
  } else {
    
    playSound("assets/category_app/app_button_1.mp3");
    
  }
  
});

onEvent("Go", "click", function() {
  
  var value = getText("SearchBar");
  
  playSound("assets/category_app/app_button_1.mp3");
  
  websiteSearch(value);
  
});

onEvent("Go2", "click", function() {
  
  var value = getText("SearchBar2");
  
  playSound("assets/category_app/app_button_1.mp3");
  
  websiteSearch(value);
  
});



// BackButtons/X Buttons //

onEvent("BackButton", "click", function() {
  
  changeScreen("MainMenu");
  
});

onEvent("BackButton2", "click", function() {
  
  changeScreen("MainMenu");
  
});

onEvent("BackButton3", "click", function() {
  
  changeScreen("MainMenu");
  
});

onEvent("BackButton4", "click", function() {
  
  changeScreen("MainMenu");
  
});

onEvent("BackButton5", "click", function() {
  
   changeScreen("SettingsMenu");
  
});

onEvent("BackButton6", "click", function() {
  
  changeScreen("SettingsMenu");
  
});

onEvent("BackButton7", "click", function() {
  
  changeScreen("MainMenu");
  
});

onEvent("BackButton8", "click", function() {
  
  changeScreen("MainMenu");
  
});

onEvent("BackButton9", "click", function() {
  
  changeScreen("SettingsMenu");
  
});

onEvent("BackButton10", "click", function() {
  
  changeScreen("YourSites");
  
});

onEvent("BackButton11", "click", function() {
  
  changeScreen("SettingsMenu");
  
});

onEvent("BackButton12", "click", function() {
  
  changeScreen("MainMenu");
  
});

onEvent("BackButton13", "click", function() {
  
  changeScreen("MainMenu");
  
});

onEvent("BackButton14", "click", function() {
  
  changeScreen("MainMenu");
  
});

onEvent("BackButton15", "click", function() {
  
  setScreen("MainMenu");
  
});

onEvent("BackButton16", "click", function() {
  
  setScreen("MainMenu");
  
}); 

onEvent("X", "click", function() {
  
  hideElement("X");
  
  hideElement("NewsCoolLabel");
  
});

onEvent("X2", "click", function() {
  
  hideElement("ChatRulesPopup");
  hideElement("X2");
  
});



// Site Creation //

onEvent("Create", "click", function() {
  
  siteCreation();
  
});

onEvent("Publish", "click", function() {
  
  siteCreate();
  
});

onEvent("Edit", "click", function() {
  
  siteEditClick();
  
});

onEvent("EditSite", "click", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  yourSiteCheck();
  
});

onEvent("PublishChanges", "click", function() {  
  
  siteChangePublish();
  
});



// Logging-In/Signing Out //

onEvent("SignUp", "click", function() {
  
   playSound("assets/category_app/app_button_1.mp3");
   
   setScreen("SignUpScreen");
  
});

onEvent("SignUpButton", "click", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  signUp();
  
});

onEvent("Login", "click", function() {
  
  login();
  
});



// Chat Events //

onEvent("MessageInput", "keydown", function(event) {
  
  var message = getText("MessageInput");
  
  if (event.key == "Enter") {
    
    if (message.length < 5) {
    
      
    
    } else if (message.length > 75) {
    
      
    
    } else {
      
      createRecord("Chat", {sender: userSettings.username + ": " + message, user: getUserId()}, function() {
        
        setText("MessageInput", "");
        
      });
      
    }
    
  } 
  
});

onEvent("Send", "click", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  var contact = getText("ContactInput");
  
  createRecord("Contact", {message: userSettings.username + " " + contact}, function() {
    
    
    
  });
  
});

onEvent("ClearChatButton", "click", function() {
  
  chatClear();
  
});

onEvent("SendChat", "click", function() {
  
  var input = getText("ChatInput");
  
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
    
    
    
  } else if (input.length > 50) {
    
    
    
  } else {
    
    hideElement("SendChat");
    
    createRecord("PublicChat", {sender: userSettings.username + ": " + input, user: getUserId()}, function() {
      
      setText("ChatInput", "");
      
    showElement("SendChat");
      
    });
    
  }
  
});



// Default Events //

onEvent("Settings", "click", function() {
  
   playSound("assets/category_app/app_button_1.mp3");
   
   setScreen("SettingsMenu");
  
});

onEvent("Contact", "click", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  setScreen("ContactScreen");
  
});

onEvent("Credits", "click", function() {
  
  playSound("assets/category_slide/animation_whoosh.mp3");
  
  if (currentClient == 0) {
  
    creditsShow();
    
  } else if (currentClient == 1) {
    
    stopSound("assets/category_loops/vibrant_game_somethings_out_there_loop_1.mp3");
    
    playSound("assets/category_loops/red_flag_loop1.mp3", true);
    
    setScreen("CreditsMenu");
    
    setText("CreditsLabel", "varSite Search Engine");
    
    setTimeout(creditsDisplay, 2000);
    
  }
  
});

onEvent("OfficialSites", "click", function() {
  
  setScreen("OfficialSitesList");
  
  playSound("assets/category_accent/puzzle_game_accent_a_01.mp3");
  
  setText("OfficialSitesLabel", "");
    
    readRecords('Official', {}, function(rec) {
        
      for (var i = 0; i < rec.length; i++) {
        
        setText("OfficialSitesLabel", rec[i].Sitename + "\n" + getText("OfficialSitesLabel"));
        
      }
      
    });
  
});

onEvent("ChangelogTry", "click", function() {
  
  changeLogLoad();  
  
});

onEvent("News", "click", function() {
  
  showElement("NewsCoolLabel");
  
  showElement("X");
  
});

onEvent("DiscordServer", "click", function() {
  
  open("https://discord.gg/CUJrdW5vKn");
  
});

onEvent("Commands", "click", function() {
  
  setText("CommandsLabel", "/prchat - Premiere Chat \n /changelog - Changelog \n /chat - chat");
  
  setScreen("CommandsThing");
  
});

onEvent("DownTimeButton", "click", function() {
  
  readRecords("Functions", {id: 2}, function(rec) {
    
    if (userSettings.role == "`") {
      
      if (rec[0].a == true) {
      
      updateRecord("Functions", {id: rec[0].id, a: false}); 
      
    } else {
      
      updateRecord("Functions", {id: rec[0].id, a: true});
      
    }
      
    } else {
      
      
      
    }
    
  });
  
});



// Administrator Panel //

onEvent("DeleteSite", "click", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  var value = getText("AdminInput");
  
  if (value == undefined) {
    
    
    
  } else {
    
    readRecords("Website", {Link: value}, function(rec) {
      
      if (rec == undefined) {
        
        
        
      } else {
        
        if (rec[0] == undefined) {
          
          
          
        } else {
          
          deleteRecord("Website", {id: rec[0].id}, function() {
            
            
            
          });
          
        }
        
      }
      
    });
    
  }
  
});

onEvent("BanUser", "click", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  var value = getText("AdminInput");
  
  if (value == undefined) {
    
  } else {
    
    readRecords("Users", {username: value}, function(rec) {
      
      if (rec == undefined) {
        
      } else {
        
        if (rec[0] == undefined) {
          
        } else {
          
          updateRecord("Users", {id: rec[0].id, userId: rec[0].userId, username: rec[0].username, role: rec[0].role, banned: true, count: rec[0].count}, function() {
            
          });
          
        }
        
      }
      
    });
    
  }
  
});

onEvent("UnbanUser", "click", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  var value = getText("AdminInput");
  
  if (value == undefined) {
    
  } else {
    
    readRecords("Users", {username: value}, function(rec) {
      
      if (rec == undefined) {
        
      } else {
        
        if (rec[0] == undefined) {
          
        } else {
          
          updateRecord("Users", {id: rec[0].id, userId: rec[0].userId, username: rec[0].username, role: rec[0].role, banned: false, count: rec[0].count}, function() {
            
          });
          
        }
        
      }
      
    });
    
  }
  
});

onEvent("ResetUserCount", "click", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  var value = getText("AdminInput");
  
  if (value == undefined) {
    
  } else {
    
    readRecords("Users", {username: value}, function(rec) {
      
      if (rec == undefined) {
        
      } else {
        
        if (rec[0] == undefined) {
          
        } else {
          
          updateRecord("Users", {id: rec[0].id, userId: rec[0].userId, username: rec[0].username, role: rec[0].role, banned: rec[0].banned, count: 0}, function() {
            
          });
          
        }
        
      }
      
    });
    
  }
  
});

onEvent("MaxCount", "click", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  var value = getText("AdminInput");
  
  if (value == undefined) {
    
  } else {
    
    readRecords("Users", {username: value}, function(rec) {
      
      if (rec == undefined) {
        
      } else {
        
        if (rec[0] == undefined) {
          
        } else {
          
          updateRecord("Users", {id: rec[0].id, userId: rec[0].userId, username: rec[0].username, role: rec[0].role, banned: rec[0].banned, count: 3}, function() {
            
          });
          
        }
        
      }
      
    });
    
  }
  
});

onEvent("GivePremiere", "click", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  var value = getText("AdminInput");
  
  if (value == undefined) {
    
  } else {
    
    readRecords("Users", {username: value}, function(rec) {
      
      if (rec == undefined) {
        
      } else {
        
        if (rec[0] == undefined) {
          
        } else {
          
          updateRecord("Users", {id: rec[0].id, userId: rec[0].userId, username: rec[0].username, role: "^", banned: rec[0].banned, count: rec[0].count}, function() {
            
          });
          
        }
        
      }
      
    });
    
  }
  
});

onEvent("RemovePremiere", "click", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  var value = getText("AdminInput");
  
  if (value == undefined) {
    
  } else {
    
    readRecords("Users", {username: value}, function(rec) {
      
      if (rec == undefined) {
        
      } else {
        
        if (rec[0] == undefined) {
          
        } else {
          
          updateRecord("Users", {id: rec[0].id, userId: rec[0].userId, username: rec[0].username, role: "*", banned: rec[0].banned, count: rec[0].count}, function() {
            
          });
          
        }
        
      }
      
    });
    
  }
  
});

onEvent("AdminInput", "keydown", function() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
});

onEvent("AdminChatMessageInput", "keydown", function(event) {
  
  var message = getText("AdminChatMessageInput");
  
  if (event.key == "Enter") {
    
    if (message.length < 5) {
    
      setText("AdminChatMessageInput", "");
    
    } else if (message.length > 75) {
    
      setText("AdminChatMessageInput", "");
    
    } else {
      
      createRecord("AdminChat", {sender: userSettings.username + ": " + message, user: getUserId()}, function() {
        
        setText("AdminChatMessageInput", "");
        
      });
      
    }
    
  } 
  
});

onRecordEvent("AdminChat", function() {
  
  playSound("assets/category_accent/puzzle_game_accent_a_01.mp3");
  
  setText("AdminChatLabel", "");
    
    readRecords('AdminChat', {}, function(rec) {
        
      for (var i = 0; i < rec.length; i++) {
        
        setText("AdminChatLabel", rec[i].sender + "\n" + getText("AdminChatLabel"));
        
      }
      
    });
  
});



// Client Functions //

function onDesktopStart() {
  
  currentClient = 0;
  
  setScreen("MainMenu");
  
  showElement("varSiteLabelStart");
  
  hideElement("SearchBar");
  hideElement("Credits");
  hideElement("Settings");
  hideElement("VarSiteHeader");
  hideElement("WelcomeLabel");
  hideElement("Create");
  hideElement("YourImageInput");
  hideElement("Go");
  hideElement("Go2");
  hideElement("ClearChatButton");
  hideElement("ChangelogTry");
  hideElement("News");
  hideElement("NewsCoolLabel");
  hideElement("X");
  hideElement("DiscordServer");
  hideElement("Commands");
  hideElement("DownTimeButton");
  
  playSound("assets/category_loops/vibrant_game_somethings_out_there_loop_1.mp3", true);
  
  var i = 0;
  
  timedLoop(10, function() {
    
    i = i + 0.01;
    
    if (i >= 1) {
      
      stopTimedLoop();
      
      timedLoop(10, function() {
        
        i = i - 0.01;
        
        if (i <= 0.01) {
          
          stopTimedLoop();
          
          introOver();
          
        } else {
          
          setProperty("varSiteLabelStart", "background-color", rgb(34, 29, 48, i));
          setProperty("varSiteLabelStart", "text-color", rgb(216, 255, 167, i));
      
        }
        
      });
      
    } else {
      
      setProperty("varSiteLabelStart", "background-color", rgb(34, 29, 48, i));
      setProperty("varSiteLabelStart", "text-color", rgb(216, 255, 167, i));
      
      
      
    }
    
  });
  
  function introOver() {

    hideElement("varSiteLabelStart");
    showElement("Credits");
    showElement("VarSiteHeader");
    showElement("WelcomeLabel");
    showElement("ChangelogTry");
    showElement("News");
    showElement("DiscordServer");
    showElement("Commands");
    
    textShow();
    
  }
  
  function textShow() {
    
    setText("WelcomeLabel", "W");
    
    setTimeout(textShow2, 100);
    
    function textShow2() {
      
      setText("WelcomeLabel", "We");
    
      setTimeout(textShow3, 100);
      
    }
    
     function textShow3() {
      
      setText("WelcomeLabel", "Wel");
    
      setTimeout(textShow4, 100);
      
    }
    
     function textShow4() {
      
      setText("WelcomeLabel", "Welc");
    
      setTimeout(textShow5, 100);
      
    }
    
     function textShow5() {
      
      setText("WelcomeLabel", "Welco");
    
      setTimeout(textShow6, 100);
      
    }
    
     function textShow6() {
      
      setText("WelcomeLabel", "Welcome");
    
      setTimeout(textShow7, 100);
      
    }
    
     function textShow7() {
      
      setText("WelcomeLabel", "Welcome ");
    
      setTimeout(textShow8, 100);
      
    }
    
     function textShow8() {
      
      setText("WelcomeLabel", "Welcome t");
    
      setTimeout(textShow9, 100);
      
    }
    
     function textShow9() {
      
      setText("WelcomeLabel", "Welcome to");
    
      setTimeout(textShow10, 100);
      
    }
    
     function textShow10() {
      
      setText("WelcomeLabel", "Welcome to ");
    
      setTimeout(textShow11, 100);
      
    }
    
     function textShow11() {
      
      setText("WelcomeLabel", "Welcome to v");
    
      setTimeout(textShow12, 100);
      
    }
    
     function textShow12() {
      
      setText("WelcomeLabel", "Welcome to va");
    
      setTimeout(textShow13, 100);
      
    }
    
     function textShow13() {
      
      setText("WelcomeLabel", "Welcome to var");
    
      setTimeout(textShow14, 100);
      
    }
    
     function textShow14() {
      
      setText("WelcomeLabel", "Welcome to varS");
    
      setTimeout(textShow15, 100);
      
    }
    
     function textShow15() {
      
      setText("WelcomeLabel", "Welcome to varSi");
    
      setTimeout(textShow16, 100);
      
    }
    
     function textShow16() {
      
      setText("WelcomeLabel", "Welcome to varSit");
    
      setTimeout(textShow17, 100);
      
    }
    
     function textShow17() {
      
      setText("WelcomeLabel", "Welcome to varSite");
    
      setTimeout(textShow18, 100);
      
    }
    
     function textShow18() {
      
      setText("WelcomeLabel", "Welcome to varSite!");
      
      setTimeout(login, 2000);
      
    }
    
  }
  
}

function onMobileStart() {
  
  currentClient = 1;
  
  setScreen("MainMenu");
  
  hideElement("SearchBar");
  hideElement("Credits");
  hideElement("Settings");
  hideElement("VarSiteHeader");
  hideElement("WelcomeLabel");
  hideElement("Create");
  hideElement("YourImageInput");
  hideElement("Go");
  hideElement("Edit");
  hideElement("ClearChatButton");
  hideElement("ChangelogTry");
  hideElement("News");
  hideElement("NewsCoolLabel");
  hideElement("X");
  hideElement("DiscordServer");
  hideElement("SearchBar");
  hideElement("Commands");
  hideElement("DownTimeButton");
  
  playSound("assets/category_loops/vibrant_game_somethings_out_there_loop_1.mp3", true);
  
  setTimeout(onMobileContinue, 3000);
  
  function onMobileContinue() {
    
    hideElement("varSiteLabelStart");
    
    login();

    showElement("Credits");
    showElement("Settings");
    showElement("VarSiteHeader");
    showElement("WelcomeLabel");
    showElement("Go");
    showElement("Go2");
    showElement("Commands");
    
    hideElement("Create");
    
  }
  
}

function onLaptopStart() {
  
  showElement("varSiteLabelStart");
  
  currentClient = 0;
  
  setScreen("MainMenu");
  
  hideElement("SearchBar");
  hideElement("Credits");
  hideElement("Settings");
  hideElement("VarSiteHeader");
  hideElement("WelcomeLabel");
  hideElement("Create");
  hideElement("YourImageInput");
  hideElement("Go");
  hideElement("Go2");
  hideElement("Edit");
  hideElement("ClearChatButton");
  hideElement("ChangelogTry");
  hideElement("News");
  hideElement("NewsCoolLabel");
  hideElement("X");
  hideElement("DiscordServer");
  hideElement("Commands");
  hideElement("DownTimeButton");
  
  playSound("assets/category_loops/vibrant_game_somethings_out_there_loop_1.mp3", true);
  
  setTimeout(onLaptopContinue, 3000);
  
  function onLaptopContinue() {
    
    hideElement("varSiteLabelStart");
    
    login();
    showElement("Credits");
    showElement("Settings");
    showElement("VarSiteHeader");
    showElement("WelcomeLabel");
    showElement("Create");
    showElement("Edit");
    showElement("ChangelogTry");
    showElement("News");
    showElement("DiscordServer");
    showElement("Commands");
    
  }
  
}

function onClientAsk() {
  
  readRecords("Functions", {id: 1}, function(rec) {
    
    if (rec[0].a == true) {
      
      setScreen("BlankScreen");
      
    } else {
      
      setScreen("ClientAsk"); 
      
    }
    
  });
  
  playSound("assets/category_music/clear_evidence_loop1.mp3", true);
  
}



// Functions //

function variableLoader() {
  
  colackSpecialEasterEggThing;
  
}

function websiteSearch(searchValue) {
  
  if (searchValue == undefined) {
    
    setScreen("SiteDoesNotExist");
    
    playSound("assets/category_retro/retro_game_echo_error_2.mp3");
    
  } else {
    
    readRecords("Website", {Link: searchValue}, function(rec) {
      
      if (rec == undefined) {
        
        setScreen("SiteDoesNotExist");
        
        playSound("assets/category_retro/retro_game_echo_error_2.mp3");
        
      } else {
        
        if (rec[0] == undefined) {
          
          setScreen("SiteDoesNotExist");
          
          playSound("assets/category_retro/retro_game_echo_error_2.mp3");
          
        } else {
          
          showElement("YourSitesImage");
          
          setScreen("SiteScreen");
          
          setText("SiteName", rec[0].Name);
          setText("SearchBar2", rec[0].Link);
          setText("SiteText", rec[0].Text);
          
          if (rec[0].Image == undefined) {
            
            hideElement("YourSitesImage");
            
          } else {
            
            setProperty("YourSitesImage", "image", rec[0].Image);
            
          }
          
        }
        
      }
      
    });
    
  }
  
}

function yourSiteCheck() {
  
  var value = getText("YourSiteURL");
  
  readRecords("Website", {Link: value, Author: getUserId()}, function(rec) {
    
    if (rec == undefined) {
      
      
    } else {
      
      if (rec[0] == undefined) {
        
        
        
      } else {
        
        setScreen("EditWebsite");
        
        currentSite = rec[0].Link;
        
      }
      
    }
    
  });
  
}

function login() {
  
  readRecords("Users", {userId: getUserId()}, function(rec) {
    
    if (rec.length > 0) {
      
      if (rec[0].banned == true) {
        
        setScreen("Banned");
        
      } else {
        
        hideElement("Login");
        hideElement("SignUp");
        
        userSettings.username = rec[0].username;
        userSettings.role = rec[0].role;
        userSettings.banned = rec[0].banned;
        userSettings.logged = true;
      
        setText("WelcomeLabel", "Welcome " + userSettings.username + "!");
      
        setPosition("Contact", 0, 0);
        
        setPosition("Edit", 0, 50);
        
        setPosition("OfficialSites", 0, 100);
        
        if (currentClient == 0) {
          
          showElement("Create");
          showElement("Settings");
          showElement("SearchBar");
          
        } else if (currentClient == 1) {
          
          hideElement("Create");
          hideElement("Settings");
          showElement("SearchBar");
          
        }
        
        if (userSettings.role == "`") {
          
          showElement("DownTimeButton");
          
        } else {
          
          hideElement("DownTimeButton");
          
        }
      
        
      }
      
      
    } else {
      
      setScreen("SignUpScreen");
      
      hideElement("BackButton5");
      
    }
    
  });
  
}

function signUp() {

  var input = getText("UsernameInput");
  
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
    
    readRecords("Users", {username: input.substring(0, 32)}, function (rec) {
      
      if (rec.length > 0) {
        
        setText("UsernameInput", "Username is already taken!");
        
        setTimeout(clearUsernameInput, 500);
        
      } else {
        
        readRecords("Users", {userId: getUserId()}, function(rec) {
          
          if (rec.length > 0) {
            
            setText("UsernameInput", "You cannot have more than 1 account!");
            
            setTimeout(clearUsernameInput, 500);
            
          } else {
            
            userSettings.role = userSettings.defaultRole;
            userSettings.logged = true;
            userSettings.username = input;
        
            createRecord("Users", {userId: getUserId(), username: input, role: userSettings.role, banned: false, count: 0}, function() {
          
            hideElement("SignUp");
            hideElement("Login");
          
            setText("WelcomeLabel", "Welcome " + userSettings.username + "!");
          
            setScreen("MainMenu");
          
            setPosition("Contact", 0, 0);
        
            setPosition("Edit", 0, 50);
        
            setPosition("OfficialSites", 0, 100);
          
            showElement("Settings");
          
            showElement("Create");
            
            showElement("SearchBar");
          
          });
            
          }
          
          
        });
        
      }
      
    });
    
  }
  
}

function clearUsernameInput() {
  
  setText("UsernameInput", collectedUsername);
  
}

function siteNameReload() {
  
  setText("YourSiteName", siteName);
  
}

function siteTextReload() {
  
  setText("YourWebsiteText", text);
  
}

function adminCheck() {
  
  if (userSettings.role == "`") {
      
      setScreen("AdminMenu");

    } else {
      
      readRecords("Users", {userId: getUserId()}, function(rec) {
              
        updateRecord("Users", {id: rec[0].id, userId: getUserId(), username: rec[0].username, role: rec[0].role, banned: true, count: rec[0].count}, function() {
                
                
                
        });
              
      });
      
    }
  
}

function creditsShow() {
    
    stopSound("assets/category_loops/vibrant_game_somethings_out_there_loop_1.mp3");
    
    playSound("assets/category_loops/red_flag_loop1.mp3", true);
    
    setScreen("CreditsMenu");
    
    setText("CreditsLabel", "varSite Search Engine V. 1.0");
    
    var i = 0;
    
    timedLoop(10, function() {
      
      i = i + 0.01;
      
      if (i >= 1) {
        
        stopTimedLoop();
        
        timedLoop(10, function() {
          
          i = i - 0.01;
          
          if (i <= 0.01) {
            
            stopTimedLoop();
            
            creditsShow2();
            
          } else {
            
            setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
            setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
            
          }
          
        });
        
      } else {
        
        setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
        setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
        
      }
      
    });
    
    function creditsShow2() {
    
    setText("CreditsLabel", "Concept By Jack");
    
    var i = 0;
    
    timedLoop(10, function() {
      
      i = i + 0.01;
      
      if (i >= 1) {
        
        stopTimedLoop();
        
        timedLoop(10, function() {
          
          i = i - 0.01;
          
          if (i <= 0.01) {
            
            stopTimedLoop();
            
            creditsShow3();
            
          } else {
            
            setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
            setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
            
          }
          
        });
        
      } else {
        
        setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
        setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
        
      }
      
    });
    
    
  }
  
function creditsShow3() {
    
    setText("CreditsLabel", "Coded By Jack");
    
    var i = 0;
    
    timedLoop(10, function() {
      
      i = i + 0.01;
      
      if (i >= 1) {
        
        stopTimedLoop();
        
        timedLoop(10, function() {
          
          i = i - 0.01;
          
          if (i <= 0.01) {
            
            stopTimedLoop();
            
            creditsShow4();
            
          } else {
            
            setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
            setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
            
          }
          
        });
        
      } else {
        
        setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
        setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
        
      }
      
    });
    
    
  }
  
function creditsShow4() {
    
    setText("CreditsLabel", "Created for the Performance Task");
    
    var i = 0;
    
    timedLoop(10, function() {
      
      i = i + 0.01;
      
      if (i >= 1) {
        
        stopTimedLoop();
        
        timedLoop(10, function() {
          
          i = i - 0.01;
          
          if (i <= 0.01) {
            
            stopTimedLoop();
            
            creditsShow5();
            
          } else {
            
            setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
            setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
            
          }
          
        });
        
      } else {
        
        setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
        setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
        
      }
      
    });
    
    
  }
  
function creditsShow5() {
    
    setText("CreditsLabel", "Thank you to all of my Beta Testers!");
    
    var i = 0;
    
    timedLoop(10, function() {
      
      i = i + 0.01;
      
      if (i >= 1) {
        
        stopTimedLoop();
        
        timedLoop(10, function() {
          
          i = i - 0.01;
          
          if (i <= 0.01) {
            
            stopTimedLoop();
            
            creditsShow6();
            
          } else {
            
            setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
            setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
            
          }
          
        });
        
      } else {
        
        setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
        setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
        
      }
      
    });
    
    
  }
  
function creditsShow6() {
    
    setText("CreditsLabel", "Thank You For Viewing.");
    
    var i = 0;
    
    timedLoop(10, function() {
      
      i = i + 0.01;
      
      if (i >= 1) {
        
        stopTimedLoop();
        
        timedLoop(10, function() {
          
          i = i - 0.01;
          
          if (i <= 0.01) {
            
            stopTimedLoop();
            
            stopSound("assets/category_loops/red_flag_loop1.mp3");
            
            onDesktopStart();
            
          } else {
            
            setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
            setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
            
          }
          
        });
        
      } else {
        
        setProperty("CreditsLabel", "background-color", rgb(34, 29, 48, i));
        setProperty("CreditsLabel", "text-color", rgb(216, 255, 167, i));
        
      }
      
    });
    
    
  }
    
  }
  
function creditsDisplay() {
      
  setText("CreditsLabel", "Concept By Jack");
  
  setTimeout(creditsDisplay2, 2000);
  
  function creditsDisplay2() {
  
  setText("CreditsLabel", "Code By Jack");
  
  setTimeout(creditsDisplay3, 2000);
  
}

function creditsDisplay3() {
  
  setText("CreditsLabel", "Thank you for viewing.");
  
  setTimeout(creditsDisplayOver, 2000);
  
}

function creditsDisplayOver() {
  
  stopSound("assets/category_loops/red_flag_loop1.mp3");
  
  onMobileStart();
  
}
      
}

function searchBar(value) {
  
  if (currentClient == 0) {

    playSound("assets/category_slide/animation_whoosh.mp3");
    
    if (!value.includes(".")) {
      
      if (value == "/prchat") {
      
      if (userSettings.logged == true) {
        
        if (currentClient == 0) {
          
          if (userSettings.role == "`") {
            
            showElement("ClearChatButton");
            
            setScreen("Chat");
            
          } else if (userSettings.role == "^") {
            
            setScreen("Chat");
            
          }
          
        } else if (currentClient == 0) {
          
          
          
        }
        
      } else {
        
        
        
      }
      
    } else if (value == "/admin") {
      
      if (currentClient == 0) {
        
        adminCheck(); 
        
      } else if (currentClient == 1) {
        
        
        
      }
      
    } else if (value == "/changelog") {
      
      changeLogLoad();
      
    } else if (value == "/adminchat") {
      
      adminCheckChat();
      
    } else if (value == "/chat") {
      
      if (userSettings.logged == true) {
        
        showElement("ChatRulesPopup");
      
      setScreen("PublicChat");
      
      setText("ChatRulesPopup", "-- CHATTING Notes -- \n 1. No Spamming. \n 2. No Swearing. \n 3. No Harrassment. \n 4. No Racial Slurs. \n 5. No Advertising. \n Breaking any of the rules will result in an Instant-Ban from this entire application, and will also ban any alts you may have.");
        
      } else {
        
        
        
      }
      
    } else {
      
      allSiteSearch(value); 
      
    }
      
    } else {
      
      websiteSearch(value);
      
    }
    
  } else if (currentClient == 1) {
    
    
    
  }
  
}

function allSiteSearch(yourSearch) {
  
  readRecords("Website", {}, function(rec) {
    
    setScreen("WebsiteSearchFinder");
    
    setText("WebsiteSearch", "");
      
      for (var i = 0; i < rec.length; i++) {
        
        if (rec[i].Text.includes(yourSearch)) {
          
          setText("WebsiteSearch", rec[i].Link + "\n" + getText("WebsiteSearch"));
          
        } else {
          
          
          
        }
      
      }
    
  });
  
}

function changeScreen(yourScreen) {
  
  setScreen(yourScreen);
  
  playSound("assets/category_app/app_button_1.mp3");
  
}

function changeLogLoad() {
  
  setScreen("ChangeLog");
  
  readRecords("ChangeLog", {}, function(rec) {
    
    setText("ChangeLogRead", rec[0].text);
    
  });
  
}

function siteCreation() {
  
  readRecords("Users", {userId: getUserId()}, function(rec) {
    
    if (rec[0].role == "*") {
      
      if (rec[0].count >= 1) {
        
        setScreen("MainMenu");
        
        hideElement("Create");
        
      } else {
        
        setScreen("WebsiteCreation");
  
        playSound("assets/category_app/app_button_1.mp3");
        
      }
      
    } else if (rec[0].role == "^") {
      
      if (rec[0].count >= 3) {
        
        setScreen("MainMenu");
        
        hideElement("Create");
        
      } else {
        
        endType = ".com";
        
        setScreen("WebsiteCreation");
  
        playSound("assets/category_app/app_button_1.mp3");
        
        showElement("YourImageInput");
        
        setPosition("Publish", 0, 90);
         
      }
      
    } else if (rec[0].role == "`") {
      
      endType = ".org";
      
      setScreen("WebsiteCreation");
  
      playSound("assets/category_app/app_button_1.mp3");
      
      showElement("YourImageInput");
        
      setPosition("Publish", 0, 90);
      
    }
    
  });
  
}

function siteCreate() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  var input = getText("YourSiteName");
  var input2 = getText("YourWebsiteText");
  imageLink = getText("YourImageInput");
  
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
  
  input2 = input2.replace(/motherfuck/gi, "**********");
  input2 = input2.replace(/fuck/gi, "****");
  input2 = input2.replace(/shit/gi, "****");
  input2 = input2.replace(/bitch/gi, "*****");
  input2 = input2.replace(/bich/gi, "****");
  input2 = input2.replace(/cunt/gi, "****");
  input2 = input2.replace(/dick/gi, "****");
  input2 = input2.replace(/pussy/gi, "*****");
  input2 = input2.replace(/nigga/gi, "*****");
  input2 = input2.replace(/nigger/gi, "******");
  input2 = input2.replace(/\bkkk\b/gi, "***");
  input2 = input2.replace(/piss/gi, "****");
  input2 = input2.replace(/vagina/gi, "******");
  input2 = input2.replace(/penis/gi, "*****");
  input2 = input2.replace(/pussies/gi, "*******");
  input2 = input2.replace(/titties/gi, "*******");
  input2 = input2.replace(/titty/gi, "*****");
  input2 = input2.replace(/cock/gi, "****");
  input2 = input2.replace(/hitler/gi, "******");
  input2 = input2.replace(/asshole/gi, "*******");
  input2 = input2.replace(/dumbass/gi, "*******");
  input2 = input2.replace(/\bcum\b/gi, "***");
  input2 = input2.replace(/wtf/gi, "***");
  input2 = input2.replace(/slut/gi, "****");
  input2 = input2.replace(/hoe/gi, "***");
  input2 = input2.replace(/\btf\b/gi, "**");
  input2 = input2.replace(/balls/gi, "*****");
  input2 = input2.replace(/whore/gi, "*****");
  input2 = input2.replace(/horny/gi, "*****");
  input2 = input2.replace(/hump/gi, "****");
  input2 = input2.replace(/dookie/gi, "******");
  input2 = input2.replace(/deepthroat/gi, "**********");
  input2 = input2.replace(/\bass\b/gi, "***");
  input2 = input2.replace(/\bsex\b/gi, "***");
  input2 = input2.replace(/\bhentai\b/gi, "******");
  input2 = input2.replace(/\bniglet\b/gi, "******");
  input2 = input2.replace(/\bfurgot\b/gi, "******");
  input2 = input2.replace(/\bfaggot\b/gi, "******");
  
  if (input.length > 32) {
    
    setText("YourSiteName", "Site Name is Too Long!");
    
    setTimeout(siteNameReload, 500);
    
  } else if (input < 5) {
    
    setText("YourSiteName", "Site Name cannot be that Short!");
    
    setTimeout(siteNameReload, 500);
    
  } else {
    
    if (input2.length > 300) {
      
      setText("YourWebsiteText", "Text is Too Long!");
      
      setTimeout(siteTextReload, 500);
      
    } else if (input2 > 5) {
      
      setText("YourWebsiteText", "Text cannot be that short!");
      
      setTimeout(siteTextReload, 500);
      
    } else {
      
      readRecords("Website", {Link: input + endType}, function(rec) {
        
        if (rec > 0) {
          
          setText("YourSiteName", "That Name Is Already Taken!");
          
          setTimeout(siteNameReload, 500);
          
        } else {
          
          if (input.includes(" ")) {
            
            setText("YourSiteName", "Spaces are not allowed!");
            
            setTimeout(siteNameReload, 500);
            
          } else {
  
            hideElement("Publish");
            
            createRecord("Website", {Name: input, Link: input + endType, Text: input2, Author: getUserId(), Image: imageLink}, function() {
            
            readRecords("Users", {userId: getUserId()}, function(rec) {
              
              updateRecord("Users", {id: rec[0].id, userId: getUserId(), username: rec[0].username, role: rec[0].role, banned: rec[0].banned, count: rec[0].count + 1}, function() {
                
                setScreen("MainMenu");
                
                showElement("Publish");
                
              });
              
            });
            
          }); 
            
          }
          
        }
        
      });
      
    }
    
  }
  
}

function siteEditClick() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  setScreen("YourSites");
  
  yourSiteCheck();
  
}

function siteChangePublish() {
  
  playSound("assets/category_app/app_button_1.mp3");
  
  readRecords("Website", {Link: currentSite}, function(rec) {
    
    var input = getText("TextEdit");
    
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
    
    updateRecord("Website", {id: rec[0].id, Name: rec[0].Name, Link: rec[0].Link, Text: input, Author: rec[0].Author, Image: rec[0].Image}, function() {
      
      setScreen("MainMenu");
      
    });
    
  });
  
}

function chatClear() {
  
  readRecords("Chat", {}, function (rec) {
    var x = 0;

    createRecord("Chat", { sender: "Clearing The Chat!" }, function () {});

    timedLoop(100, function () {
      deleteRecord("Chat", { id: rec[x].id }, function () {});
      x++;
      if (x == rec.length) {
        stopTimedLoop();

        createRecord(
          "Chat",
          { sender: "Chat Completely Cleared!" },
          function () {}
        );
      }
    });
  });
  
}

function adminCheckChat() {
  
  if (userSettings.role == "`") {
      
      setScreen("AdminChat");

    } else {
      
      readRecords("Users", {userId: getUserId()}, function(rec) {
              
        updateRecord("Users", {id: rec[0].id, userId: getUserId(), username: rec[0].username, role: rec[0].role, banned: true, count: rec[0].count}, function() {
                
                
                
        });
              
      });
      
    }
  
}

// - Colack/ //
