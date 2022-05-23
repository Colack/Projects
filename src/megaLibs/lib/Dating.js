// Pic Your Date
function kyle () {
hideElement("shalldo1");
hideElement("shalldo2");
hideElement("whatshallyoudo");

onEvent("grumpsbutton", "click", function( ) {
setScreen("Grumps");
});

onEvent("alienbutton", "click", function( ) {
setScreen("Alien");
});

onEvent("foodbutton", "click", function( ) {
setScreen("Food");
});

// Picked Grumps

onEvent("grumpsbutton", "click", function( ) {
  
  playSpeech("senpai is that really you. i've not seen you in about 6 months. I was hoping to see you again and my wish came true. So what are we gonna do?", "male", "English");
  
  setTimeout(function() {
    showElement("shalldo1");
    showElement("shalldo2");
    showElement("whatshallyoudo");
  }, 12000);
  
});
onEvent("shalldo1", "click", function( ) {
  setScreen("youdied");
});
onEvent("shalldo2", "click", function( ) {
  setScreen("goWithGrumps");
});

// dancing 

timedLoop(2000, function() {
  var x = randomNumber(1,2);
  console.log(x);
  
  if (x == 1){
    showElement("date");
    hideElement("looking");
  }
  else{
    showElement("looking");
    hideElement("date");
  }
});
}
kyle () ;
