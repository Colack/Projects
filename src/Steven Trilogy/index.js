// Credits //



// - Coding - //



// - Jack (Colack) //
// - Chris Bo (Lists, Variables, ETC.) //
// - Doug Mcnally (Movement System) //



// - Design - //



// Original Designs - Dark //
// Original Concept - Derelicte //
// Original Code - Colack //
// Original Planning - Dark //
// Level Design - Derelicte //



// - Music - //



// - Jack (Colack)  //

// - Fight On //
// - Fight Forward! //
// - The Sandman //
// - Return Of The Sandman //



// - Adhesive Wombat //

// - Credits (SATQTSTC 1) //
// - Title (SATQTSTC 2) //



// - Felician Studios //

// - Title Theme (SATQTSTC 1) //
// - Retro Forest (SATQTSTC 2) //



// - Kevin Macleod //

// - Desert City (SATQTSTC 2) //
// - Look Busy (SATQTSTC 2) //
// - Beauty Flow (SATQTSTC 2) //
// - Fig Leaf Times Two (SATQTSTC 2) //
// - Easy Lemon (SATQTSC 2) //
// - Ether Vox (SATQTSTC 2) //



// - shadow6nothing9 //

// - Quiet Slumber (SATQTSTC 2) //



// - Code.org //

// - All Sound Effects //
// - Level 1 Music (SATQTSTC 1) //
// - Level 2 Music (SATQTSTC 1) //



// - Images - //



// - camdencc //

// - Pixel Dragon //



// - 8 bit warlords //

// - Pixel Dragon (BossFight) //



// - Favim.com // 

// - 8 bit Castle Ruins //



// - egoal //

// - 8 bit Castle Gif //



// - Google Images //

// - Explosion PNG //










// Menu Code //



var Unlocked = 1;

function checker() {
  
  hideElement("S2");
  hideElement("StevenIcon2");
  
  if (Unlocked === 1) {
  
    playSound("AdhesiveWombat---8-Bit-Adventure.mp3", true);
  
    showElement("S2");
    showElement("StevenIcon2");
  
  } else if (Unlocked === 2) {
  
  
  
  } else if (Unlocked === 0) { 
  
    playSound("2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3", true);
  
  }
  
  
  
}

onEvent("S1", "mouseover", function( ) {
  
  setProperty("S1", "text-color", rgb(128, 128, 128));
  setProperty("StevenIcon", "icon-color", rgb(128, 128, 128));
  
});

onEvent("S1", "mouseout", function( ) {
  
  setProperty("S1", "text-color", rgb(255, 255, 255));
  setProperty("StevenIcon", "icon-color", rgb(255, 255, 255));
  
});

onEvent("S1", "click", function( ) {
  
  GameStart();
  
  stopSound("2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3");
  stopSound("AdhesiveWombat---8-Bit-Adventure.mp3");
  
});

onEvent("S2", "mouseover", function() {
  
  setProperty("S2", "text-color", rgb(128, 128, 128));
  setProperty("StevenIcon2", "icon-color", rgb(128, 128, 128));
  
});

onEvent("S2", "mouseout", function( ) {
  
  setProperty("S2", "text-color", rgb(255, 255, 255));
  setProperty("StevenIcon2", "icon-color", rgb(255, 255, 255));
  
});

onEvent("S2", "click", function( ) {
  
  GameStart2();
  
});





// SATQTSTC 1 //

var Clicked = false;

var xVel1 = 0;

var yVel1 = 0;

var keys1 = [false, false, false, false];

var xVel2 = 0;

var yVel2 = 0;

var keys2 = [false, false, false, false];

var Enemie1Clicks = 0;

var Enemie2Clicks = 0;

var Enemie3Clicks = 0;

var Enemie4Clicks = 0;

var Enemie5Clicks = 0;

var Enemie6Clicks = 0;

var Defeated1 = 0;

var Defeated2 = 0;

var Click1 = false;

var Click2 = false;

var Click3 = false;

var Click4 = false;

var Click5 = false;

var Click6 = false;

var health = 10;

var CanBeTouched = false;

var StevenHealth = 10;

var X1 = false;
var X2 = false;
var X3 = false;
var X4 = false;
var X5 = false;

var chance = randomNumber(1, 5);

var explosionTouch = false;

var WeakAllowed = false;

var DragonHealth = 5;

var Enemie1ClickAmount = 0;
var Enemie2ClickAmount = 0;
var Enemie3ClickAmount = 0;
var Enemie4ClickAmount = 0;
var Enemie5ClickAmount = 0;
var Enemie6ClickAmount = 0;

var nosound = false;

hideElement("Dragon3");
hideElement("Steven3");
hideElement("X1");
hideElement("X2");
hideElement("X3");
hideElement("X4");
hideElement("X5");
hideElement("ExplosionBomb");
hideElement("DragonFly");
hideElement("WeakTouch");

setText("Credits1", "");

onEvent("Start1", "click", function( ) {
  
  if (Clicked === false) {
    
    stopSound("2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3");
  
    setProperty("image2", "icon-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
    
    playSound("sound://category_retro/retro_game_bit_coin_1.mp3");
    
    setTimeout(Menu2, 2000);
    
    Clicked = true;
    
  } else {
    
    
    
  }
  
});



// Level 1 //

onEvent("Continue", "click", function( ) {
  
  if (nosound == true) {
    
    stopSound("sound://category_loops/stabilizing_breath_loop1.mp3");
    
  } else {
    
    playSound("sound://category_loops/stabilizing_breath_loop1.mp3", true);
    
  }
  
  setScreen("Game1");
  
  Enemie1ClickAmount = 5;
  Enemie2ClickAmount = 3;
  Enemie3ClickAmount = 5;
  
  setPosition("Enemie1", randomNumber(1, 255), randomNumber(1, 255));
  setPosition("Enemie2", randomNumber(1, 255), randomNumber(1, 255));
  setPosition("Enemie3", randomNumber(1, 255), randomNumber(1, 255));
  
  setText("Health1", "Enemy 1 Health: " + Enemie1ClickAmount + "/5");
  setText("Health2", "Enemy 2 Health: " + Enemie2ClickAmount + "/3");
  setText("Health3", "Enemy 3 Health: " + Enemie3ClickAmount + "/5");
  
  timedLoop(17, function() {
    xVel1 = 0;
    yVel1 = 0;
    if (keys1[0]) {
      xVel1 += -5;
    }
    if (keys1[1]) {
      xVel1 += 5;
    }
    if (keys1[2]) {
      yVel1 += -5;
    }
    if (keys1[3]) {
      yVel1 += 5;
    }
    setPosition("Steven1", getXPosition("Steven1")+xVel1, getYPosition("Steven1")+yVel1);
  });
  
});

onEvent("Settings1", "click", function( ) {
  
  setScreen("Settings");
  
});

onEvent("StopSound", "click", function( ) {
  
  stopSound("2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3");
  
  nosound = true;
  
});

onEvent("Yesmusic", "click", function( ) {
  
  nosound = false;
  
  playSound("2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3", true);
  
});

onEvent("Back", "click", function( ){
  
  setScreen("SATQTSTC");
  
});

onEvent("Game1", "keydown", function(event) {
  
  if (event.key == "Up") {
    
    keys1[2] = true;
    
  } else if ((event.key == "Down")) {
    
    keys1[3] = true;
    
  } else if ((event.key == "Left")) {
    
    keys1[0] = true;
    
  } else if ((event.key == "Right")) {
    
    keys1[1] = true;
    
  }
  
});

onEvent("Enemie1", "click", function( ) {
  
  setPosition("Enemie1", randomNumber(1, 255), randomNumber(1, 255));
  
  if (Enemie1Clicks == 5) {
    
    if (Click1 == true) {
      
      
      
    } else {
      
      setProperty("Enemie1", "image", "explosion_png_by_dbszabo1_d516els-fullview.png");
   
      Defeated1 = Defeated1 + 1;
    
      playSound("sound://category_collect/vibrant_game_arcade_game_electric_bubble_collect.mp3");
    
      setTimeout(Enemie1Done, 500);
    
      Click1 = true;
      
      if (Defeated1 == 3) {
      
        setScreen("Story1");
        
        stopSound("sound://category_loops/pulsating_discovery_loop1.mp3");
        
        StorySound();
      
      } 
      
    }
    
  } else {
    
    Enemie1Clicks = Enemie1Clicks + 1;
    
    Enemie1ClickAmount = Enemie1ClickAmount - 1;
    
    Check1();  
    
    playSound("sound://category_hits/retro_game_simple_impact_3.mp3");
    
  }
  
});

onEvent("Enemie2", "click", function() {
  
  setPosition("Enemie2", randomNumber(1, 255), randomNumber(1, 255));
  
  if (Enemie2Clicks == 3) {
    
    if (Click2 == true) {
      
      
      
    } else {
      
      setProperty("Enemie2", "image", "explosion_png_by_dbszabo1_d516els-fullview.png");
  
      Defeated1 = Defeated1 + 1;
    
      playSound("sound://category_collect/vibrant_game_arcade_game_electric_bubble_collect.mp3");
    
      setTimeout(Enemie2Done, 500);
    
      if (Defeated1 == 3) {
      
        setScreen("Story1");
        
        stopSound("sound://category_loops/pulsating_discovery_loop1.mp3");
        
        StorySound();
      
      
      }
      
      Click2 = true;
      
    }
    
  } else {
    
    Enemie2Clicks = Enemie2Clicks + 1;
    
    Enemie2ClickAmount = Enemie2ClickAmount - 1;
    
    Check2();
    
    playSound("sound://category_hits/retro_game_simple_impact_3.mp3");
    
  }
  
});

onEvent("Enemie3", "click", function( ) {
  
  setPosition("Enemie3", randomNumber(1, 255), randomNumber(1, 255));
  
  if (Enemie3Clicks == 5) {
    
    if (Click3 == true) {
      
      
      
    } else {
      
      setProperty("Enemie3", "image", "explosion_png_by_dbszabo1_d516els-fullview.png");
    
      Defeated1 = Defeated1 + 1;
    
      playSound("sound://category_collect/vibrant_game_arcade_game_electric_bubble_collect.mp3");
    
      setTimeout(Enemie3Done, 500);
    
      if (Defeated1 == 3) {
        
        setScreen("Story1");
        
        stopSound("sound://category_loops/pulsating_discovery_loop1.mp3");
        
        StorySound();
        
      }
      
      Click3 = true;
      
    }
    
    
    
  } else {
    
    Enemie3Clicks = Enemie3Clicks + 1;
    
    Enemie3ClickAmount = Enemie3ClickAmount - 1;
    
    Check3();
    
    playSound("sound://category_hits/retro_game_simple_impact_3.mp3");
    
  }
  
});

onEvent("Game1", "keyup", function(event) {
  
  if (event.key == "Up") {
    
    keys1[2] = false;
    
  } else if ((event.key == "Down")) {
    
    keys1[3] = false;
    
  } else if ((event.key == "Left")) {
    
    keys1[0] = false;
    
  } else if ((event.key == "Right")) {
    
    keys1[1] = false;
    
  }
  
});



// Level 2 //

onEvent("Game2", "keydown", function(event) {
  
  if (event.key == "Up") {
    
    keys2[2] = true;
    
  } else if ((event.key == "Down")) {
    
    keys2[3] = true;
    
  } else if ((event.key == "Left")) {
    
    keys2[0] = true;
    
  } else if ((event.key == "Right")) {
    
    keys2[1] = true;
    
  }
  
});

onEvent("Game2", "keyup", function(event) {
  
  if (event.key == "Up") {
    
    keys2[2] = false;
    
  } else if ((event.key == "Down")) {
    
    keys2[3] = false;
    
  } else if ((event.key == "Left")) {
    
    keys2[0] = false;
    
  } else if ((event.key == "Right")) {
    
    keys2[1] = false;
    
  }
  
});

onEvent("Enemie4", "click", function( ) {
  
  setPosition("Enemie4", randomNumber(1, 255), randomNumber(1, 255)); 
  
  if (Enemie4Clicks == 7) {
    
    if (Click4 == true) {
      
      
      
    } else {
      
      setProperty("Enemie4", "image", "explosion_png_by_dbszabo1_d516els-fullview.png");
    
      Defeated2 = Defeated2 + 1;
    
      playSound("sound://category_collect/vibrant_game_arcade_game_electric_bubble_collect.mp3");
    
      setTimeout(Enemie4Done, 500);
    
      if (Defeated2 == 3) {
        
        setScreen("Story2");
        
        stopSound("sound://category_loops/faultering_desicion_loop1.mp3");
        
        StorySound2();
        
      }
      
      Click4 = true;
      
    }
    
    
    
  } else {
    
    Enemie4Clicks = Enemie4Clicks + 1;
    
    Enemie4ClickAmount = Enemie4ClickAmount - 1;
    
    Check4();
    
    playSound("sound://category_hits/retro_game_simple_impact_3.mp3");
    
  }
  
});

onEvent("Enemie5", "click", function( ) {
  
  setPosition("Enemie5", randomNumber(1, 255), randomNumber(1, 255));
  
  if (Enemie5Clicks == 11) {
    
    if (Click5 == true) {
      
      
      
    } else {
      
      setProperty("Enemie5", "image", "explosion_png_by_dbszabo1_d516els-fullview.png");
    
      Defeated2 = Defeated2 + 1;
    
      playSound("sound://category_collect/vibrant_game_arcade_game_electric_bubble_collect.mp3");
    
      setTimeout(Enemie5Done, 500);
    
      if (Defeated2 == 3) {
        
        setScreen("Story2");
        
        stopSound("sound://category_loops/faultering_desicion_loop1.mp3");
        
        StorySound2();
        
      }
      
      Click5 = true;
      
    }
    
    
    
  } else {
    
    Enemie5Clicks = Enemie5Clicks + 1;
    
    Enemie5ClickAmount = Enemie5ClickAmount - 1;
    
    Check5();
    
    playSound("sound://category_hits/retro_game_simple_impact_3.mp3");
    
  }
  
});

onEvent("Enemie6", "click", function( ) {
  
  setPosition("Enemie6", randomNumber(1, 255), randomNumber(1, 255));
  
  if (Enemie6Clicks == 13) {
    
    if (Click6 == true) {
      
      
      
    } else {
      
      setProperty("Enemie6", "image", "explosion_png_by_dbszabo1_d516els-fullview.png");
    
      Defeated2 = Defeated2 + 1;
    
      playSound("sound://category_collect/vibrant_game_arcade_game_electric_bubble_collect.mp3");
    
      setTimeout(Enemie6Done, 500);
    
      if (Defeated2 == 3) {
        
        setScreen("Story2");
        
        stopSound("sound://category_loops/faultering_desicion_loop1.mp3");
        
        StorySound2();
        
      }
      
      Click6 = true;
      
    }
    
    
    
  } else {
    
    Enemie6Clicks = Enemie6Clicks + 1;
    
    Enemie6ClickAmount = Enemie6ClickAmount - 1;
    
    Check6();
    
    playSound("sound://category_hits/retro_game_simple_impact_3.mp3");
    
  }
  
});

onEvent("X1", "mouseover", function( ) {
    
    
    if (X1 == false) {
      
      playSound("sound://category_hits/8bit_splat.mp3");
    
      health = health - 1;
    
      healthcheck();
    
      X1 = true;
      
      setTimeout(HideAll, 2000);
      
    } else {
      
      setTimeout(HideAll, 2000);
      
    }

    
});
  
onEvent("X2", "mouseover", function( ) {
    
    
    if (X2 == false) {
      
      playSound("sound://category_hits/8bit_splat.mp3");
    
      health = health - 1;
    
      healthcheck();
    
      X2 = true;
      
      setTimeout(HideAll, 2000);
      
    } else {
      
      setTimeout(HideAll, 2000);
      
    }

    
});
  
onEvent("X3", "mouseover", function( ) {
    
    
    if (X3 == false) {
      
      playSound("sound://category_hits/8bit_splat.mp3");
    
      health = health - 1;
    
      healthcheck();
    
      X3 = true;
      
      setTimeout(HideAll, 2000);
      
    } else {
      
      setTimeout(HideAll, 2000);
      
    }

    
});
  
onEvent("X4", "mouseover", function( ) {
    
    
    if (X4 == false) {
      
      playSound("sound://category_hits/8bit_splat.mp3");
    
      health = health - 1;
    
      healthcheck();
    
      X4 = true;
      
      setTimeout(HideAll, 2000);
      
    } else {
      
      setTimeout(HideAll, 2000);
      
    }

    
});
  
onEvent("X5", "mouseover", function( ) {
    
    
    if (X5 == false) {
      
      playSound("sound://category_hits/8bit_splat.mp3");
    
      health = health - 1;
    
      healthcheck();
    
      X5 = true;
      
      setTimeout(HideAll, 2000);
      
    } else {
      
      setTimeout(HideAll, 2000);
      
    }

    
});

onEvent("ExplosionBomb", "mouseover", function( ) {
    
    if (explosionTouch == false) {
      
      health = health - 1;
      
      explosionTouch = true;
      
      healthcheck();
      
      playSound("sound://category_hits/8bit_splat.mp3");
      
      setTimeout(HideAll2, 1000);
      
    } else {
      
      setTimeout(HideAll2, 1000);
      
    }
    
});

onEvent("DragonFly", "click", function( ) {
  
  if (CanBeTouched == true) {
    
    health = health - 1;
    
    CanBeTouched = false;
    
    setTimeout(Back, 1000);
    
  } else {
    
    setTimeout(Back, 3000);
    
  }
  
});

onEvent("WeakTouch", "click", function( ) {
  
  if (WeakAllowed == false) {
    
    WeakAllowed = true;
    
    DragonHealth = DragonHealth - 1;
    
    playSound("sound://category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
    
    hideElement("WeakTouch");
    
    DragonHealthCheck();
    
    setTimeout(BackOut, 500);
    
  } else {
    
    setTimeout(BackOut, 500);
    
  }
  
});




function GameStart() {
  
  setScreen("SATQTSTC");
  
  setTimeout(Menu1, 100);
  
}

function Menu1() {
  
   playSound("2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3", true);
  
}

function Menu2() {
    
  setScreen("HowToPlay1");
  
}

function Enemie1Done() {
  
  hideElement("Enemie1");
  
}

function Enemie2Done() {
  
  hideElement("Enemie2");
  
}

function Enemie3Done() {
  
  hideElement("Enemie3");
  
}  

function Enemie4Done() {
  
  hideElement("Enemie4");
  
}

function Enemie5Done() {
  
  hideElement("Enemie5");
  
}

function Enemie6Done() {
  
  hideElement("Enemie6");
  
}

function StorySound() {
  
  playSound("intro1.mp3");
  
  stopSound("sound://category_loops/stabilizing_breath_loop1.mp3");
  
  setTimeout(Dragon1, 5000);
  
}

function StorySound2() {
  
  playSound("sound://category_explosion/8bit_explosion.mp3");
  
  stopSound("sound://category_loops/faultering_desicion_loop1.mp3");
  
  setTimeout(Level3, 5000);
  
}

function Check1() {
  
  if (Enemie1ClickAmount == 0) {
    
    hideElement("Health1");
    
  } else {
    
    setText("Health1", "Enemy 1 Health: " + Enemie1ClickAmount + "/5");
    
  }
  
}

function Check2() {
  
  if (Enemie2ClickAmount == 0) {
    
    hideElement("Health2");
    
  } else {
    
    setText("Health2", "Enemy 2 Health: " + Enemie2ClickAmount + "/3");
    
  }
  
}

function Check3() {
  
  if (Enemie3ClickAmount == 0) {
    
    hideElement("Health3");
    
  } else {
    
    setText("Health3", "Enemy 3 Health: " + Enemie3ClickAmount + "/5");
    
  }
  
}

function Check4() {
  
  if (Enemie4ClickAmount == 0) {
    
    hideElement("Health4");
    
  } else {
    
    setText("Health4", "Enemy 4 Health: " + Enemie4ClickAmount + "/7");
    
  }
  
}

function Check5() {
  
  if (Enemie5ClickAmount == 0) {
    
    hideElement("Health5");
    
  } else {
    
    setText("Health5", "Enemy 5 Health: " + Enemie5ClickAmount + "/11");
    
  }
  
}

function Check6() {
  
  if (Enemie6ClickAmount == 0) {
    
    hideElement("Health6");
    
  } else {
    
    setText("Health6", "Enemy 6 Health: " + Enemie6ClickAmount + "/13");
    
  }
  
}

function Dragon1() {
  
  setScreen("Game2");
  
  setPosition("Enemie4", randomNumber(1, 255), randomNumber(1, 255));
  setPosition("Enemie5", randomNumber(1, 255), randomNumber(1, 255));
  setPosition("Enemie6", randomNumber(1, 255), randomNumber(1, 255));
  
  Enemie4ClickAmount = 7;
  Enemie5ClickAmount = 11;
  Enemie6ClickAmount = 13;
  
  setText("Health4", "Enemie 4 Health: " + Enemie4ClickAmount + "/7");
  setText("Health5", "Enemie 5 Health: " + Enemie5ClickAmount + "/11");
  setText("Health6", "Enemie 6 Health: " + Enemie6ClickAmount + "/13");
  
  if (nosound == true) {
    
    
    
  } else {
    
   playSound("sound://category_loops/faultering_desicion_loop1.mp3", true); 
    
  }
  
  timedLoop(17, function() {
    xVel2 = 0;
    yVel2 = 0;
    if (keys2[0]) {
      xVel2 += -5;
    }
    if (keys2[1]) {
      xVel2 += 5;
    }
    if (keys2[2]) {
      yVel2 += -5;
    }
    if (keys2[3]) {
      yVel2 += 5;
    }
    setPosition("Steven2", getXPosition("Steven2")+xVel2, getYPosition("Steven2")+yVel2);
  });
  
}

function Level3() {
  
  setScreen("Game3");
  
  setTimeout(Story3, 15000);
  
}

function Story3() {
  
  showElement("Dragon3");
  
  setTimeout(Story5, 5000);
  
}

function Story5() {
  
  showElement("Steven3");
  
  setTimeout(Story4, 5000);
  
}

function Story4() {
  
  setScreen("BossBattle");
  
  if (nosound == true) {
    
    
    
  } else {
    
    playSound("2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3", true);
    
  }
  
  stopSound("sound://category_loops/faultering_desicion_loop1.mp3");
  stopSound("sound://category_loops/stabilizing_breath_loop1.mp3");
  
  setText("StevenHealth", "Your Health: " + StevenHealth + "/10");
  setText("DragonHealth", "Dragon Health: " + DragonHealth + "/5");

  setTimeout(TextHide, 5000);
  
}

function TextHide() {
  
  hideElement("FightLabel");
  
  setTimeout(AttackAI, 2000);
  
}

function AttackAI() {
  
  if (chance == 1) {
    
    Attack1();
    
  } else if (chance == 2) {
    
    Attack2();
    
  } else if (chance == 3) {
    
    Attack3();
    
  } else {
    
    WeakShow();
    
  }
  
}

function Attack1() {
  
  showElement("X1");
  showElement("X2");
  showElement("X3");
  showElement("X4");
  showElement("X5");
  
  playSound("sound://category_hits/vibrant_game_electro_hit_collect.mp3");
  
  setTimeout(Attack1A, 2000);
  
  
}

function Attack1A() {
  
  setProperty("X1", "icon-color", "red");
  setProperty("X2","icon-color", "red");
  setProperty("X3", "icon-color", "red");
  setProperty("X4", "icon-color", "red");
  setProperty("X5", "icon-color", "red");
  
  playSound("sound://category_explosion/retro_game_classic_explosion_2.mp3");
  
}

function healthcheck() {
  
  if (health == 0) {
    
    setScreen("GameOver");
    
    stopSound("2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3");
    
    playSound("sound://category_music/8bit_game_over_2.mp3");
    
  } else if (health > 0) {
    
    setText("StevenHealth", "Your Health: " + health + "/10");
    
  }
  
}

function HideAll() {
  
  hideElement("X1");
  hideElement("X2");
  hideElement("X3");
  hideElement("X4");
  hideElement("X5");
  
  X1 = false;
  X2 = false;
  X3 = false;
  X4 = false;
  X5 = false;
  
  setProperty("X1", "icon-color", "green");
  setProperty("X2","icon-color", "green");
  setProperty("X3", "icon-color", "green");
  setProperty("X4", "icon-color", "green");
  setProperty("X5", "icon-color", "green");
  
  chance = randomNumber(1, 5);
  
  setTimeout(AttackAI, 1000);
  
}

function Attack2() {
  
  showElement("ExplosionBomb");
  
  playSound("sound://category_hits/puzzle_game_magic_item_unlock_4.mp3");
  
  setTimeout(Explosion, 2000);
  
}

function Explosion() {
  
  setProperty("ExplosionBomb", "image", "explosion_png_by_dbszabo1_d516els-fullview.png");
  
  playSound("sound://category_explosion/retro_game_classic_explosion_2.mp3");
  
}

function HideAll2() {
  
  setProperty("ExplosionBomb", "image", "icon://fa-futbol-o");
  
  hideElement("ExplosionBomb");
  
  explosionTouch = false;
  
  chance = randomNumber(1, 5);
  
  setTimeout(AttackAI, 1000);
  
}

function Attack3() {
  
  showElement("DragonFly");
  
  hideElement("image4");

  CanBeTouched = true;
  
}

function Back() {
  
  hideElement("DragonFly");
  
  showElement("image4");
  
  CanBeTouched = true;
  
  chance = randomNumber(1, 5);
  
  setTimeout(AttackAI, 500);
  
}

function WeakShow() {
  
  showElement("WeakTouch");
  
}

function BackOut() {
  
  chance = randomNumber(1, 5);
  
  hideElement("WeakTouch");
  
  WeakAllowed = false;
  
  setTimeout(AttackAI, 500);
  
}

function DragonHealthCheck() {
  
  if (DragonHealth == 0) {
    
    setScreen("FinalWin1");
    
    stopSound("2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3");
    stopSound("AdhesiveWombat---8-Bit-Adventure.mp3");
    
    playSound("sound://category_explosion/8bit_explosion.mp3");
    
    setTimeout(Sound2, 700);
    
  } else {
    
    setText("DragonHealth", "Dragon Health: " + DragonHealth + "/5");
    
  }
  
}

function Sound2() {
  
  playSound("sound://category_explosion/8bit_explosion.mp3");
  
  setTimeout(Sound3, 700);
  
}

function Sound3() {
  
  playSound("sound://category_explosion/vibrant_game_cartoon_game_laser_hit_7_explosion.mp3");
  
  setTimeout(Credits1, 3000);
  
}

function Credits1() {
  
  if (nosound == true) {
    
    
    
  } else {
    
   playSound("AdhesiveWombat---8-Bit-Adventure.mp3"); 
    
  }
  
  setTimeout(Credits2, 6000);
  
}

function Credits2() {
  
  setText("Credits1", "Programmed By Colack");
  
  setTimeout(Credits3, 6000);
  
}

function Credits3() {
  
  setText("Credits1", "Original Game Idea By Dark");
  
  setTimeout(Credits4, 6000);
  
}

function Credits4() {
  
  setText("Credits1", "Original Game Design By Derelicte");
  
  setTimeout(Credits5, 7000);
  
}

function Credits5() { 
  
  setText("Credits1", "Music By: Felician Studios, Adhesive Wombat, Colack, Code.org, and Kevin Macleod.");
  
  setTimeout(Credits6, 5000);
  
}

function Credits6() {
  
  setText("Credits1", "And Special Thanks To You!");
  
  setTimeout(MenuBack, 48000);
  
}

function MenuBack() {
  
  setScreen("Index");
  
  hideElement("Dragon3");
  hideElement("Steven3");
  hideElement("X1");
  hideElement("X2");
  hideElement("X3");
  hideElement("X4");
  hideElement("X5");
  hideElement("ExplosionBomb");
  hideElement("DragonFly");
  hideElement("WeakTouch");
  
  Clicked = false;

  xVel1 = 0;

  yVel1 = 0;

  keys1 = [false, false, false, false];

  xVel2 = 0;

  yVel2 = 0;

  keys2 = [false, false, false, false];

  Enemie1Clicks = 0;

  Enemie2Clicks = 0;

  Enemie3Clicks = 0;

  Enemie4Clicks = 0;

  Enemie5Clicks = 0;

  Enemie6Clicks = 0;

  Defeated1 = 0;

  Defeated2 = 0;

  Click1 = false;

  Click2 = false;

  Click3 = false;

  Click4 = false;

  Click5 = false;

  Click6 = false;

  health = 10;

  CanBeTouched = false;

  X1 = false;
  X2 = false;
  X3 = false;
  X4 = false;
  X5 = false;

  chance = randomNumber(1, 5);

  explosionTouch = false;

  WeakAllowed = false;

  DragonHealth = 5;
  
  showElement("Enemie1");
  showElement("Enemie2");
  showElement("Enemie3");
  showElement("Enemie4");
  showElement("Enemie5");
  showElement("Enemie6");
  
  setProperty("Enemie1", "image", "icon://fa-bug");
  setProperty("Enemie2", "image", "icon://fa-slideshare");
  setProperty("Enemie3", "image", "icon://fa-shield");
  setProperty("Enemie4", "image", "icon://fa-user-secret");
  setProperty("Enemie5", "image", "icon://fa-qq");
  setProperty("Enemie6", "image", "icon://fa-drupal");
  
  showElement("S2");
  showElement("StevenIcon2");
  
  Unlocked == 2;
  
}



function GameStart2() {
  
  stopSound("2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3");
  stopSound("AdhesiveWombat---8-Bit-Adventure.mp3");
  
  setScreen("SATQTSTC2");
  
}

onEvent("MainMenu", "click", function() {
  
  setScreen("Index");
  
  checker();
  
});

onEvent("SettingsButton", "click", function() {
  
  setScreen("SettingsMenu");
  
});

onEvent("2Back", "click", function() {
  
  setScreen("SATQTSTC2");
  
});
