// Conductor

var key = "";
var i = 0;
var notIn = false;
var level = [
  {
    // Not Used
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "T"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "Th"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "The"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "M"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "Mi"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "Mid"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "Midd"
  },
  {
    type: "text",
    sound: "erro-2.mp3",
    val: "Middl"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "iddle"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "By"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "Jimm"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "immy"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "Eat"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "Worl"
  },
  {
    type: "text",
    sound: "sound://category_pop/deep_bubble_notification.mp3",
    val: "orld"
  },
  {
    type: "wait",
    sound: "sound://category_pop/deep_bubble_notification.mp3"
  },
  {
    type: "wait",
    sound: "sound://category_pop/deep_bubble_notification.mp3"
  },
  {
    type: "wait",
    sound: "sound://category_pop/deep_bubble_notification.mp3"
  },
  {
    type: "wait",
    sound: "sound://category_pop/deep_bubble_notification.mp3"
  },
  {
    type: "wait",
    sound: "sound://category_pop/deep_bubble_notification.mp3"
  },
  {
    type: "wait",
    sound: "sound://category_pop/deep_bubble_notification.mp3"
  },
  {
    type: "wait",
    sound: "sound://category_pop/deep_bubble_notification.mp3"
  },
  {
    type: "wait",
    sound: "sound://category_pop/deep_bubble_notification.mp3"
  },
  {
    type: "wait",
    sound: "sound://category_pop/deep_bubble_notification.mp3"
  },
];

timedLoop(360, function() {
  
  if (notIn) {
    
  } else {
    
    i++;
    
    createType();
    soundPlay();
    
    switch (key) {
    
    }
    
  }
  
}); 

onEvent("index", "mousedown", function(event) {
  
  key = event.key;
  
});

function soundPlay() {
  playSound(level[i].sound);
}
function createType() {
  if (level[i].type == "text") {
    setProperty("TEXT", "text", level[i].val);
  } else if (level[i].type == "wait") {
    setProperty("TEXT", "text", "");
  }
}
function start() {
  playSound("Jimmy_Eat_World_-_The_Middle_-_Lyri_(getmp3.pro)-(1).mp3");
}
start();
