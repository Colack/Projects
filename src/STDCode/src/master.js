/* 
  Creates a button on the screen displaying the text provided and referenced by the given id.
  id (string)
  text (string)
  x (number)
  y (number)
  width (number)
  height (number)
  border (number)
*/
function mkbutton(id, text, x, y, width, height, border) {
  
  button(id, text);
  setPosition(id, x, y, width, height);
  setProperty(id, "border-width", border);
  
  return 0;
  
}
/*
  Creates a new text input, and then slowly makes it more visible.
  Built for dark mode
*/
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

function doReverseFade(newScreen) {
  
  textInput("NEWFADE", "");
  
  setScreen(newScreen);
  
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
var userSettings = {
  role: "",
  defaultRole: "User",
  logged: false,
  username: "",
  banned: false,
};
var collectedUsername = "";
var chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var usernameLength = 12;
var username = "";
// Display everyones username in the console. //
function displayUsernames(YourAdminID) {
  if (getUserId() == YourAdminID) {
    readRecords("Accounts", {}, function (records) {
      if (records.length > 0) {
        for (var i = 0; i < records.length; i++) {
          console.log(records[i].username);
        }
      }
    });
  } else {
    console.log("User Tried Issuing an Admin Command.");
    console.log(getUserId());
  }
}
// Generate an Random username //
function randomUsernameGenerator() {
  for (var i = 0; i <= usernameLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);

    username += chars.substring(randomNumber, randomNumber + 1);
  }

  console.log(username);
}
// Grab that Random Username //
function randomUsernameGrab(YourVariable) {
  YourVariable = username;

  console.log(YourVariable);
}
// Clear Chat //
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
// Set the Screen to an banned screen //
function banShow(YourBanScreen) {
  readRecords("Accounts", { userId: getUserId() }, function (rec) {
    if (rec[0].banned == true) {
      setScreen(YourBanScreen);
    }
  });
}
// SignUp //
function signUpCall(usernameInput, YourLabel, YourMainScreen, UserDatabase) {
  collectedUsername = getText(usernameInput);

  if (collectedUsername.length < 4) {
    setText(YourLabel, "Username is too short!");
  } else if (collectedUsername.length > 32) {
    setText(YourLabel, "Username is too long!");
  } else {
    readRecords(
      UserDatabase,
      { username: collectedUsername.substring(0, 32) },
      function (rec) {
        if (rec.length > 0) {
          setText(YourLabel, "Username is Already Taken.");
        } else {
          userSettings.role = userSettings.defaultRole;
          userSettings.logged = true;
          userSettings.username = getText(usernameInput);

          createRecord(
            UserDatabase,
            {
              userId: getUserId(),
              username: collectedUsername.substring(0, 32),
              role: userSettings.role,
              banned: false,
            },
            function () {
              setScreen(YourMainScreen);
            }
          );
        }
      }
    );
  }
}
// Login //
function login(YourScreen, YourLoginButton, YourSignUpButton, UserDatabase) {
  readRecords(UserDatabase, { userId: getUserId() }, function (rec) {
    if (rec.length > 0) {
      hideElement(YourLoginButton);
      hideElement(YourSignUpButton);

      userSettings.username = rec[0].username;
      userSettings.role = rec[0].role;
      userSettings.banned = rec[0].banned;
      userSettings.logged = true;

      console.log(userSettings.logged);
    } else {
      setScreen(YourScreen);
    }
  });
}
// Send an Message in chat //
function chatSend(YourMessageInput, ChatDatabase) {
  var messageSender = getText(YourMessageInput);

  createRecord(
    ChatDatabase,
    {
      sender:
        "{" +
        userSettings.role +
        "} " +
        userSettings.username +
        ": " +
        messageSender,
      user: getUserId(),
    },
    function () {
      setText(YourMessageInput, "");
    }
  );
}
// Read Chat //
function chatRead(YourChatList, ChatDatabase) {
  setText(YourChatList, "");

  readRecords(ChatDatabase, {}, function (rec) {
    for (var i = 0; i < rec.length; i++) {
      setText(YourChatList, rec[i].sender + "\n" + getText(YourChatList));
    }
  });
}
// When Chat is clicked //
function chatClick(YourChatScreen, ChatDatabase) {
  setScreen(YourChatScreen);

  createRecord(
    ChatDatabase,
    { sender: "{Bot} Companion: " + userSettings.username + " Has joined." },
    function () {}
  );
}
var i = 0;

// Information //
function info() {
  
  console.log("Display.js Library");
  console.log("Code By Jack");
  
}

// Draw an Circle //
function drawCircle() {
  
  penUp();
  
  dot(50);
  
}

// Draw an Small circle //
function drawSmallCircle() {
  
  penUp();
  
  dot(10);
  
}

// Draw an Big circle //
function drawBigCircle() {
  
  penUp();
  
  dot(100);
  
}

// Draw an small square //
function drawSmallSquare() {
  
  penDown();
  
  moveForward(25);
  
  turnRight(90);
  
  moveForward(25);
  
  turnRight(90);
  
  moveForward(25);
  
  turnRight(90);
  
  moveForward(25);
  
}

// Draw an big square
function drawBigSquare() {
  
  penDown();
  
  moveForward(100);
  
  turnRight(90);
  
  moveForward(100);
  
  turnRight(90);
  
  moveForward(100);
  
  turnRight(90);
  
  moveForward(100);
  
}

// Draw an Square //
function drawSquare() {
  
  penDown();
  
  moveForward(50);
  
  turnRight(90);
  
  moveForward(50);
  
  turnRight(90);
  
  moveForward(50);
  
  turnRight(90);
  
  moveForward(50);
  
}

// Draw an Triangle //
function drawTriangle() {
  
  penDown();
  
  turnRight(90);
  
  moveForward(100);
  
  turnLeft(135);
  
  moveForward(75);
  
  turnLeft(45);
  
  moveForward(75);
  
}

// Show an image //
function imageShow(URL) {
  
  image("Image", URL);
  setPosition("Image", 75, 150, 200, 200);
  
}

// Set Background Color to Different Values //
function rgbFun(color1, color2, color3, screenName) {
  
  setProperty(screenName, "background-color", rgb(color1, color2, color3));
  
}

// Make an image //
function createImage(imageName) {
  
  image(imageName, "icon://fa-comment");
  
}

// Shuffle Images //
function imageShuffle(imageName) {
  
  var images = [
    "icon://fa-music",
    "icon://fa-headphones",
    "icon://fa-volume-off",
    "icon://fa-hdd-o",
    "icon://fa-clock-o"
 ];
 
  var random = randomNumber(1, images.length - 1);
  
  setProperty(imageName, "image", images[random]);
  
  setTimeout(imageShuffle(imageName), 100);
  
}

// Matrix in the Console //
function matrix() {

  var chars = "- _ + = { } [ ] | ; : ' < > , . / ? 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R ST U V W X Y Z ";
  var length = 50;
  var put = "";
  
  for (var i = 0; i <= length; i++) {
    
   var randomNumber = Math.floor(Math.random() * chars.length);
   
   put += chars.substring(randomNumber, randomNumber +1);
   
  }
  
  console.log(put);
  
  setTimeout(matrix, 1);
  
  
} 
// Generate an house and output it. //
function generate(size) {
  
  if (size < 10) {
    
    console.log("Size must be 10 or greater.");
    
  } else {
    
    console.log("Generating an house.");
    console.log("");
      
    console.log("  ___________________  ");
    console.log(" /                   \\");
    console.log("/_____________________\\");
    console.log(" |___________________| ");
      
    for (var i = 0; i < size - 4; i++) {
  
      var random = randomNumber(1, 5);
      
      if (random == 1) {
        
        console.log("|_| |________| |___| ||");
        
      } else if (random == 2) {
        
        console.log("|______| |____________|");
        
      } else if (random == 3) {
        
        console.log("|_____________________|");
        
      } else if (random == 4) {
        
        console.log("|___|______|__|__|____|");
        
      } else if (random == 5) {
        
        console.log("|_____||______||__||__|");
        
      }
        
        
    }

    console.log("|_____________________|");
    
  }
  
}
// Load a screen from an given variable
function load(x) {
  
  if (myScreens.length <= 0) {
    
  } else {
    
    for (var i = 0; i < myScreens[x].buttons.length; i++) {
      
      button(myScreens[x].buttons[i].name, myScreens[x].buttons[i].text);
      
      var y = myScreens[x].buttons[i].name;
      
      setPosition(y, myScreens[x].buttons[i].xpos, myScreens[x].buttons[i].ypos);
      
    }
    
    for (var i = 0; i < myScreens[x].label.length; i++) {
      
      textLabel(myScreens[x].label[i].name, myScreens[x].label[i].text);
      
      var y = myScreens[x].label[i].name;
      
      setPosition(y, myScreens[x].label[i].xpos, myScreens[x].label[i].ypos);
      
    }
    
    for (var i = 0; i < myScreens[x].input.length; i++) {
      
      textInput(myScreens[x].input[i].name, myScreens[x].input[i].text);
      
      var y = myScreens[x].input[i].name;
      
      setPosition(y, myScreens[x].input[i].xpos, myScreens[x].input[i].ypos);
      
    }
    
  }
  
}
// Code By Jack //

var cache = {
  lock: false,
  savedValue: undefined
};


// Locks an Variable 
function lock(yourVariableName) {
  
  cache.savedValue = yourVariableName;
  
  yourVariableName = undefined;
  
  cache.lock = true;
  
}

// Unlocks an Variable.
function unlock(yourVariableName) {
  
  yourVariableName = cache.savedValue;
  
  cache.savedValue = undefined;
  
  cache.lock = false;
  
}

// Reverses your Lock.
function lockPick(yourVariableName) {
  
  if (cache.lock == true) {
    
    unlock(yourVariableName);
    
  } else if (cache.lock == false) {
    
    lock(yourVariableName);
    
  }
  
}

// Checks for locks.
function lockCheck(yourVariableName) {
  
  if (cache.lock == true) {
    
    console.log("Lock is on.");
    
  } else if (cache.lock == false) {
    
    console.log("Lock is off.");
    
  }
  
}
// Creates an Authenticator Code and sends it to an specific variable. //
function authCreate(yourVariable) {
  
  var create1 = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var create2 = 12;
  var create3 = "";
  
  for (var i = 0; i < create2; i++) {
    
    var create4 = Math.floor(Math.random() * create1.length);
    
    create3 += create1.substring(create4, create4 +1);
    
  }
  
  console.log("Your New Authenticator Code: " + create3);
  console.log("Saved in variable " + yourVariable);
  
  yourVariable = create3;
  
  delete(create1);
  delete(create2);
  delete(create3);
  
}
