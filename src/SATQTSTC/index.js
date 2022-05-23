// Code By Jack //

playSound("assets/2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3");

playSpeech("Steven And The Quest To Save The Climate", "male", "English");

setPosition("Steven", stevenX, stevenY);

var steven2X = 120;

var steven2Y = 150;

if (randomNumber(1, 10) === 7) {
  setScreen("EasterEggScreenRandit");
}

setPosition("Steven2", steven2X, steven2Y);

var speed = 10;

function moveSteven2(){
  
  if (steven2Y < 0) {
    steven2Y = 0;
  }
  
  if (steven2Y > 300 ){
    steven2Y = 300;
  }
  
  if (steven2X > 300) {
    steven2X = 0;
  }
  
  if (steven2X < 0 ) {
    steven2X = 300;
  }
  
  setPosition("Steven2", steven2X, steven2Y);
}

function gamecomplete( ) {
	
  showElement("enemie5");
  showElement("enemie4");
  showElement("enemie3");
  showElement("Enemie2");
  showElement("Enemie1");
  showElement("enemie6");
	
}

function soundstop() {
	
  stopSound("assets/2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3");
	
}

var stevenX = 120;

var stevenY = 150;

function moveSteven(){
  
  if (stevenY < 0) {
    stevenY = 0;
  }
  
  if (stevenY > 300 ){
    stevenY = 300;
  }
  
  if (stevenX > 300) {
    stevenX = 0;
  }
  
  if (stevenX < 0 ) {
    stevenX = 300;
  }
  
  setPosition("Steven", stevenX, stevenY);
}





// Events //

onEvent("StartButton", "click", function() {
	
	setScreen("ControlScreenAndStart");
	
});

onEvent("SettingsButton", "click", function() {
	
	setScreen("GamingSettings");
	
});

onEvent("HomeButtonReet", "click", function() {
	
	setScreen("MainScreen");
	
});

onEvent("GoButtonBack", "click", function() {
	
	setScreen("MainScreen");
	
});

onEvent("LogoImage", "click", function() {
	
	setScreen("HeeHeeProgrammerScreen");
	
});

onEvent("PLsBackHome", "click", function() {
	
	setScreen("MainScreen");
	
});

onEvent("ButtonUp", "click", function() {
	
  stevenY = stevenY - speed;
	
  moveSteven();
	
});

onEvent("ButtonDown", "click", function() {
	
  stevenY = stevenY + speed;
	
  moveSteven();
	
});

onEvent("ButtonLeft", "click", function() {
	
  stevenX = stevenX - speed;
	
  moveSteven();
	
});

onEvent("ButtonRight", "click", function() {
	
  stevenX = stevenX + speed;
	
  moveSteven();
	
});

onEvent("GoButtonStart", "click", function( ) {
	
	setScreen("GameScreen1");
	
});

onEvent("Enemie1", "mouseover", function( ) {
	
	hideElement("Enemie1");
	
});

onEvent("enemie3", "mouseover", function( ) {
	
	hideElement("enemie3");
	
});

onEvent("Enemie2", "mouseover", function( ) {
	
  hideElement("Enemie2");
	
});

onEvent("ButtonUp2", "click", function() {
	
  steven2Y = steven2Y - speed;
	
  moveSteven2();
	
});

onEvent("ButtonDown2", "click", function() {
	
  steven2Y = steven2Y + speed;
	
  moveSteven2();
	
});

onEvent("ButtonLeft2", "click", function() {
	
  steven2X = steven2X - speed;
	
  moveSteven2();
	
});

onEvent("ButtonRight2", "click", function() {
	
  steven2X = steven2X + speed;
	
  moveSteven2();
	
});

onEvent("nextlevelcavebutton", "click", function( ) {
	
	setScreen("TipScreenLevel2");
	
});

onEvent("NextLevelButtonTip", "click", function( ) {
	
	setScreen("GameScreen2");
	
});

onEvent("enemie6", "mouseover", function( ) {
	
	hideElement("enemie6");
	
});

onEvent("enemie5", "mouseover", function( ) {
	
	hideElement("enemie5");
	
});

onEvent("enemie4", "mouseover", function( ) {
	
	hideElement("enemie4");
	
});

onEvent("NextLevel2Button", "click", function( ) {
	
	setScreen("TipScreenLevel3");
	
});

onEvent("NextLevel3", "click", function( ) {
	
	setScreen("HelpDragonScreen");
	
});

onEvent("ContinueButton", "click", function( ) {
	
	setScreen("DragonLikeScreen");
	
	gamecomplete = true;
	
});

onEvent("Credits", "click", function( ) {
	
	setScreen("HeeHeeSecretScreen");
	
});

onEvent("stroybutton", "click", function( ) {
	
	setScreen("storyscreen");
	
});

onEvent("button13", "click", function( ) {
	
	setScreen("MainScreen");
	
});

onEvent("homebuttonyourmom", "click", function( ) {
	
	setScreen("MainScreen");
	
});

onEvent("EasterEggbuttonRee", "click", function( ) {
	
	playSound("Metal-Gear-Alert!-Sound-Effect-(64-kbps).mp3");
	
});

onEvent("ChangeLogButtonGo", "click", function( ) {
	
	setScreen("ChangeLogScreen");
	
});

onEvent("HomeBUttonChangeLog", "click", function( ) {
	
	setScreen("MainScreen");
	
});

onEvent("HomeButton2", "click", function( ) {
	
	setScreen("MainScreen");
	
});

onEvent("Level1", "click", function( ) {
	
	setScreen("GameScreen1");
	
});

onEvent("Level2", "click", function( ) {
	
  setScreen("GameScreen2");
	
});

onEvent("DragonBossFight", "click", function( ) {
	
  setScreen("HelpDragonScreen");
	
});

onEvent("BonusLevel1", "click", function( ) {
	
  setScreen("BonusLevel1Screen");
	
});

onEvent("BonusLevel2", "click", function( ) {
	
  setScreen("BonusLevel2Screen");
	
});

onEvent("home", "click", function( ) {
	
	setScreen("MainScreen");
	
});

onEvent("homeextrabutton", "click", function( ) {
	
	setScreen("MainScreen");
	
});

onEvent("LevelSelectScreen1", "click", function( ) {
	
	setScreen("LevelSelectScreen");
	
});

onEvent("homebutton2", "click", function( ) {
	
	setScreen("MainScreen");
	
});

onEvent("UnusedTravelScreensNice", "click", function( ) {
	
	setScreen("UnusedScreenMenu");
	
});

onEvent("Screen4", "click", function( ) {
	
	setScreen("screen4");
	
});

onEvent("Screen11", "click", function( ) {
	
  setScreen("screen1");
	
});

onEvent("CharacterNameScreen", "click", function( ) {
	
  setScreen("CharacterNameScreen");
	
});

onEvent("MyYoutube", "click", function( ) {
	
	open("https://www.youtube.com/channel/UCPa-5v5wY_vInbwAuUnXYWw");
	
});

onEvent("StevenCoolBoyLogo", "click", function( ) {
	
	playSpeech("My Name Is Steven!", "male", "English");
	
});

onEvent("HelpDragonScreen", "click", function( ) {
	
	playSpeech("Roar Im Angry.", "female", "English");
	
});

onEvent("DragonLikeScreen", "click", function( ) {
	
	 playSpeech("Now Im happy", "female", "English");
	
});

onEvent("SoundSlider", "input", function( ) {
	
	soundstop();
	
});

onEvent("ChangeSong1", "click", function( ) {
	
	stopSound("FORTNITE-ANTHEM---DANNY-P-(Official-Music-Video)-(64-kbps).mp3");
	
	stopSound("Among-Us-Drip-Theme-Song-Original-(Among-Us-Trap-Remix-_-Amogus-Meme-Music)-(64-kbps).mp3");
	
	playSound("assets/2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3");
  
});

onEvent("Song2", "click", function( ) {
	
	stopSound("FORTNITE-ANTHEM---DANNY-P-(Official-Music-Video)-(64-kbps).mp3");
	
	stopSound("assets/2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3");
	
	playSound("Among-Us-Drip-Theme-Song-Original-(Among-Us-Trap-Remix-_-Amogus-Meme-Music)-(64-kbps).mp3");
	
});

onEvent("SUpeCoolFortnite2", "click", function( ) {
	
	stopSound("assets/2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3");
	
	stopSound("Among-Us-Drip-Theme-Song-Original-(Among-Us-Trap-Remix-_-Amogus-Meme-Music)-(64-kbps).mp3");
	
	playSound("FORTNITE-ANTHEM---DANNY-P-(Official-Music-Video)-(64-kbps).mp3");
	
});

onEvent("CharacterName1", "click", function( ) {
	
	setScreen("CharacterNameScreen");
	
});
