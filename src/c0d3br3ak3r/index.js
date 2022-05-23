// Code By Jack //

playSound("assets/Horror.01-Theme.mp3", true);

hideElement("mission2");

showElement("Start");
showElement("CreditsButton");

var mission2 = false;

onEvent("Start", "click", function( ) {
  setScreen("Story");
  
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  hideElement("Next2");
  hideElement("StoryText2");
  hideElement("imageCode2");
  hideElement("Next3");
  hideElement("StoryText3");
  hideElement("imageCode3");
  
  showElement("Next1");
  showElement("StoryText");
  showElement("imageCode");
});

onEvent("Next1", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  hideElement("Next1");
  hideElement("StoryText");
  hideElement("imageCode");
  
  showElement("Next2");
  showElement("StoryText2");
  showElement("imageCode2");
});

onEvent("Next2", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  hideElement("Next2");
  hideElement("StoryText2");
  hideElement("imageCode2");
  
  showElement("imageCode3");
  showElement("StoryText3");
  showElement("Next3");
});

onEvent("Next3", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  hideElement("Next3");
  hideElement("imageCode3");
  hideElement("StoryText3");
  
  setScreen("Passlist");
});

onEvent("Continue", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  setScreen("PasswordBreak");
  
  hideElement("hide");
  hideElement("PasswordList1");
});

onEvent("Insert", "click", function( ) {
  if (getText("passwordinput") == 33667140) {
    
    setScreen("puzzle1complete");
    
    playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  } else {
    setScreen("caught");
    playSound("assets/category_alerts/retro_game_long_fall_2.mp3");
  }
});

onEvent("MainMenu", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  setScreen("Main");
});

onEvent("PassListGet", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  showElement("PasswordList1");
  showElement("hide");
});

onEvent("hide", "click", function( ) {
  hideElement("hide");
  hideElement("PasswordList1");
});

onEvent("ContinueNext", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  setScreen("Story2");
});

onEvent("Continue5", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  setScreen("ClusterPuzzle");
  
  showElement("CallCRTL");
});

onEvent("CallCRTL", "click", function( ) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_2_long_up_down.mp3");
  
  setScreen("CallCTRL");
  
  hideElement("CTRLCALL1");
  hideElement("LetsGo");
  
  showElement("CTRLCALL");
  showElement("Next");
});

onEvent("Next", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  hideElement("CTRLCALL");
  hideElement("Next");
  
  showElement("CTRLCALL1");
  showElement("LetsGo");
});

onEvent("LetsGo", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  setScreen("CtrlHelp");
});

onEvent("continue2", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  setScreen("AntiVirus");
  
  showElement("antivirus1");
  showElement("Overflow");
  
  hideElement("Overflow1");
  hideElement("antivirus2");
});

onEvent("Overflow", "click", function( ) {
  playSound("assets/category_alerts/vibrant_game_negative_alert.mp3");
  
  hideElement("antivirus1");
  hideElement("Overflow");
  
  showElement("Overflow1");
  showElement("antivirus2");
});

onEvent("Overflow1", "click", function( ) {
  playSound("assets/category_alerts/vibrant_game_negative_alert.mp3");
  
  setScreen("virusin");
  
});

onEvent("continue5", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  setScreen("ClusterPuzzle");
  
  hideElement("CallCRTL");
});

onEvent("continue", "click", function( ) {
  if (getText("UsernameInsert") == "15") {
    setScreen("goodjob");
    
    playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  } else {
    setScreen("caught");
    playSound("assets/category_alerts/retro_game_long_fall_2.mp3");
  }
});

onEvent("continu6", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  setScreen("clustergrab");
});

onEvent("choosecluster", "click", function( ) {
  if (getText("insertcluster") == "5") {
    playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
    setScreen("clustergrabbed");
  } else {
    playSound("assets/category_alerts/retro_game_long_fall_2.mp3");
    setScreen("caught");
  }
  
});

onEvent("continue12", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  setScreen("Cluster5");
});

onEvent("next10", "click", function( ) {
  playSound("assets/category_achievements/melodic_win_2.mp3");
  
  setScreen("GameComplete");
});

onEvent("mainmenu", "click", function( ) {
  playSound("assets/category_achievements/melodic_win_1.mp3");
  
  setScreen("Main");
  
  mission2 = true;
  
  if(mission2 == true) {
    showElement("mission2");
  }
});

onEvent("CreditsButton", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  setScreen("Credits");
});

onEvent("back1", "click", function( ) {
  playSound("assets/category_alerts/retro_game_health_pickup_5.mp3");
  
  setScreen("Main");
});

onEvent("secretbutton", "click", function( ) {
  setScreen("SecretScreen");
});

onEvent("mission2", "click", function( ) {
  setScreen("Mission2Start");
});

onEvent("Title", "click", function( ) {
  mission2 = true;
  
  if (mission2 == true) {
    showElement("mission2");
  }
  
  showElement("text2");
  showElement("Awesome!");
  
  hideElement("button3");
  hideElement('text_area4');
});

onEvent("Awesome!", "click", function( ) {
  hideElement("text2");
  hideElement("Awesome!");
  
  showElement("text_area4");
  showElement("button3");
});

onEvent("button3", "click", function( ) {
  setScreen
});
