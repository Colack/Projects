var password = "null";

playSound()

setScreen("Index");
setProperty("Index", "background-color", "black");


onEvent("NewSave", "click", function( ) {
  
  setScreen("Map");
  
  setPosition("Marker", 125, 160);
  setPosition("MapImage", 30, 20);
  
  showElement("MapImage");
  showElement("MapBackground");
  
  hideElement("MapBack");
  
  setTimeout(NewGameContinue, 5000);
  
});



function NewGameContinue() {
  
  showElement("MapBack");
  
  setScreen()
  
}

