var settings = {
  defaultRole: "User",
  username: "",
  role: "",
  banned: "",
  admin: "",
  
  // App Settings //
};

var logs = [
  {
    title: "Welcome And Hello!",
    id: 0,
    text1: "Welcome to Colack's Dev Log. Currently at the Date of this Log, we are running on framework V1.0, or in regular Terms, this project is brand new!",
    text2: "To be completely Honest, i'm really excited to see what this project could become!",
    text3: "Hope to see you soon, \n - Colack/",
    url: false,
    urlTitle: "",
    image: false,
    date: "1/3/22, 8:14PM"
  },
  {
    title: "What is SATQTSTC?",
    id: 1,
    text1: "SATQTSTC, or Steven And The Quest to Save The Climate is a project that I started April of Last year. There is only 1 game out in the Series so far, with more coming out.",
    text2: "I'm currently working on 3 Different titles for the Series at the Moment. Steven And The Quest to Save The Climate, Steven: Dungeons, and Steven (Working Title) are the Names of the new Projects.",
    text3: "You can probably expect at least 2 new game to come out this year. Hopefully they are done before June! \n - Colack/",
    url: "https://studio.code.org/projects/applab/SuggfcyU5Q5C7xOK4p5ZxMZSVQKz_XHRtZA-Y90Vvhc",
    urlTitle: "SATQTSTC!",
    image: false,
    date: "1/4/22, 8:10PM"
  },
  {
    title: "RoadMap",
    id: 2,
    text1: "Hello There! Steven And The Quest To Save The Climate 2 Has begun development Today!",
    text2: "My RoadMap for Steven And The Quest to Save the Climate Games is the following:",
    text3: "April 13th -> Steven 2. April 13th 2023 -> Steven 3. \n Thank You, \n - Colack/",
    url: false,
    urlTitle: "",
    image: false,
    date: "1/8/22, 2:01PM"
  },
  {
    title: "An Update; I'm Back!",
    id: 3,
    text1: "Welcome Back, sorry for being gone so long! Its been about 10 days since I have updated this!",
    text2: "I've been really busy with homework and other school related stuff.",
    text3: "SATQTSTC 2 Is still being worked on daily, and will be available in an Alpha by March. \n Always Programming, \n - Colack/",
    url: false,
    urlTitle: "",
    image: false,
    date: "1/18/22, 8:30AM"
  },
  {
    title: "Programming SATQTSTC 2!",
    id: 4,
    text1: "Hello! I officially have 72 days until Steven And The Quest To The Climate 2 Comes Out!",
    text2: "Coding the game is a pain, but hopefully it gets easier soon. I'm mostly just coding libraries and other things.",
    text3: "I will hopefully have the alpha done by March! \n Thank You, \n - Colack/",
    url: false,
    urlTitle: "",
    image: "https://i1.wp.com/www.burning-glass.com/wp-content/uploads/coding_400x267-1.jpg?fit=400%2C267&ssl=1",
    date: "1/31/22, 8:19AM"
  }
  
];

var news = [
  {
    text: "Log Update: Version 1.1: Patch 1 \n ==Added== \n News Page \n Better Login Queue Times \n Better Coding \n More Features! \n ==Removed== \n Bugs \n Glitches"   
  }
  
];

var errorCode;
var a; 

applicationStart;

onEvent("Sign", "click", function( ) {
  
  setScreen("SignUp");
  
});

onEvent("Create", "click", function () {
  
  if (getText("UsernameInput").length < 4) {
    
    errorCode = 1;
    
    showError;
    
  } else if (getText("UsernameInput").length > 32) {
    
    errorCode = 2;
    
    showError;
    
  } else {
    
    readRecords("Accounts", {username: getText("UsernameInput").substring(0,32)}, function (rec) {
      
      if (rec.length > 0) {
        
        errorCode = 3;
        
        showError;
        
      } else {
        
        errorCode = 4;
        
        showError;
        
        settings.role = settings.defaultRole;
        
        createRecord("Accounts", {userid: getUserId(), username: getText("UsernameInput").substring(0,32), role: settings.defaultRole, banned: false}, function () {
          
          setScreen("Home");
          
          settings.username = getText("UsernameInput");
          
          setText("Welcome", "Welcome, " + settings.role + " " + settings.username + "!");
          
          hideElement("Sign");
          
          hideElement("Login");
          
        });
      }
    });
  }
});

onEvent("Login", "click", function( ) {
  
  readRecords("Accounts", {userid: getUserId()}, function (rec) {
  if (rec.length > 0) {
    
    setScreen("Home");
    
    settings.username = rec[0].username;
    settings.role = rec[0].role;
    settings.banned = rec[0].banned;
    
    setText("Welcome", "Welcome, " + settings.role + " " + settings.username + "!");
    
    hideElement("Login");
    hideElement("Sign");
  } else {
    
    setScreen("SignUp");
    
  }
  
  if (settings.role == "Admin") {
    
    console.log("Logged In As An Admin.");
    
    settings.admin == true;
    
  }
  
  if (settings.banned == true) {
    
    setScreen("Banned");
    
  }
  
});
  
});

onEvent("Back", "click", function( ) {
  
  setScreen("Home");
  
  
  
});

onEvent("Logs", "click", function( ) {
  
  setText("Current", "Current Number Of Logs: " + logs.length);
  
  setScreen("Search");
  
});

onEvent("Back3", "click", function( ) {
  
  setScreen("Home");
  
});

onEvent("Go", "click", function( ) {
  
  if (getNumber("TakeInput") == 0) {
    
    console.log("Error no log");
    
  } else {
    
    a = getNumber("TakeInput");
    
    if (logs[a-1]) {
      
      setScreen("Log");
      
      setText("LogTitle", logs[a-1].title);
      
      setText("text1", logs[a-1].text1);
      
      setText("text2", logs[a-1].text2);
      
      setText("text3", logs[a-1].text3);
      
      setText("Date", logs[a-1].date);
      
      if (logs[a-1].url == false) {
        
        hideElement("Website");
        
      } else {
        
        showElement("Website");
        
        setProperty("Website", "text", logs[a-1].urlTitle);
        
      }
      
      if (logs[a-1].image == false) {
        
        hideElement("IMAGE");
        
      } else {
        
        showElement("IMAGE");
        
        setProperty("IMAGE", "image", logs[a-1].image);
        
      }
      
    } else {
      
    }
    
  }
  
});

onEvent("back2", "click", function( ) {
  
  setScreen("Search");
  
});

onEvent("Website", "click", function( ) {
  
  open(logs[a-1].url);
  
});

onEvent("Others", "click", function( ) {
  
  setScreen("OtherSites");
  
});

onEvent("SF", "click", function( ) {
  
  open("https://stevenboard.freeforums.net");
  
});

onEvent("YT", "click", function( ) {
  
  open("https://www.youtube.com/channel/UCPa-5v5wY_vInbwAuUnXYWw");
  
});

onEvent("G", "click", function( ) {
  
  open("https://github.com/Colack");
  
});

onEvent("Back4", "click", function( ) {
  
  setScreen("Home");  

});

onEvent("News", "click", function( ) {
  
  setText("label2", news[0].text);
  
  setScreen("News/Updates");
  
});

onEvent("Back5", "click", function( ) {
  
  setScreen("Home");
  
});

readRecords("Accounts", {userid: getUserId()}, function (rec) {
  if (rec.length > 0) {
    
    setScreen("Home");
    
    settings.username = rec[0].username;
    settings.role = rec[0].role;
    settings.banned = rec[0].banned;
    
    setText("Welcome", "Welcome, " + settings.role + " " + settings.username + "!");
    
    hideElement("Login");
    hideElement("Sign");
  } else {
    
    setScreen("SignUp");
    
  }
  
  if (settings.role == "Admin") {
    
    console.log("Logged In As An Admin.");
    
    settings.admin == true;
    
  }
  
  if (settings.banned == true) {
    
    setScreen("Banned");
    
  }
  
});

function applicationStart() {
  
  setScreen("Home");

  hideElement("ERROR");
  hideElement("IMAGE");
  hideElement("Website");
  
}

function hideError() {
  
  setText("ERROR", "");
  
  hideElement("ERROR");
  
}

function showError() {
  
  showElement("ERROR");
  
  if (errorCode == 1) {
    
    setText("ERROR", "Error: Username Is Too Short.");
    
  } else if (errorCode == 2) {
    
    setText("ERROR", "Error: Username Is Too Long.");
    
  } else if (errorCode == 3) {
    
    setText("ERROR", "Error: Username Is Already Taken.");
    
  } else if (errorCode == 4) {
    
    setText("ERROR", "Creating Your Account.");
    
  }
  
  setTimeout(hideError, 2000);
  
}
