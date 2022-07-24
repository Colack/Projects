// SuperChat
// Colack/

var i = 0;

onEvent("text_input1", "keydown", function(event) {
  switch (event.key) {
    case "Enter":
      i = 0;
      break;
    case "Esc":
      i++;
      texts(i);
      break;
  }
  
});

function start() {
  
}

function texts(num) {
  var x = "";
  switch (num) {
    case 1:
      x = "GTG!";
      break;
    case 2:
      x = "I'm AFK!";
      break;
    case 3:
      x = "Hi!";
      break;
    case 4:
      x = "Bye!";
      break;
    case 5:
      x = "Yo!";
      break;
    case 6:
      x = "Aight!";
      break;
    case 7:
      x = "AYT?";
      break;
    case 8:
      x = "B2W!";
      break;
    case 9:
      x = "BRB!";
      break;
    case 10:
      x = "CYA!";
      break;
    case 11:
      x = "EZ!";
      break;
    case 12:
      x = "FTW!";
      break;
    case 13:
      x = "FYI!";
      break;
    case 14:
      x = "FWM!";
      break;
    case 15:
      x = "G2G!";
      break;
    case 16:
      x = "GG!";
      break;
    case 17:
      x = ""
  }
  setText("text_input1", x);
}

start();
