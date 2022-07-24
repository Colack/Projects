var text = "HELLO WORLD";

onAppStart();

function onAppStart() {
  
  for (var i = 0; i < text.length; i++) {
    
    playSound("BeepBox-Song.mp3");
    
    setTimeout(a, 150);
    
  }
  
}

function a() {
  
  console.log("Hello World!");
  
}
