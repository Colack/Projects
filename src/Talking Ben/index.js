playSound("Ben.mp3");

onEvent("Send", "click", function( ) {
  
  var random = randomNumber(1, 3);
  
  if (random == 1) {
    
    playSound("No.mp3");
    
  } else if (random == 2) {
    
    playSound("Talking-Ben-Laughing-Sound-Effect.mp3");
    
  } else if (random == 3) {
    
    playSound("Yes.mp3");
    
  } 
  
  setText("text_input1", "");
  
});
