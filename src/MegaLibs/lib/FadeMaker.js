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
