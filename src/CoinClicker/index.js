// Code By Jack //

timedLoop(1000, function( ) {
  coin = coin + auto;
  
  setText("CoinAmount", coin);
});

setScreen("Index");

function game() {
  setScreen("Game");
}





// Variables/Elements/Properties //

var total = 0;

var auto = 0;
var per = 1;
var coin = 0;

var achievements = 0;
var bought = 0;

var code1;
var code2;
var code3;

var new1;

hideElement("label3");





// On Events //

onEvent("PassStartButton", "click", function( ) {
  
  code1 = getText("Code1") * 3; 
  
  code2 = getText("Code2") / 3;
  
  code3 = getText("Code3");
  
  coin = code1 + coin * 3;
  
  setText("CoinAmount", code1);
  setText("CoinButton", per);
  
  playSound("sound://category_retro/retro_game_bit_coin_1.mp3");
  setScreen("Loading");
  
  setTimeout(game, 5000);
  
  total = total + 1;
  
  if (code3 === 1) {
    per = 1;
    
    bought = 1;
    
    achievements = 1;
  }
  
});

onEvent("SaveButton", "click", function( ) {
  setScreen("SaveScreen");
  
  new1 = coin / 3;
  
  setText("label1", new1);
  
  total = total + 1;
});

onEvent("NewGame", "click", function( ) {
  setText("CoinButton", per);
  
  playSound("sound://category_retro/retro_game_bit_coin_1.mp3");
  setScreen("Loading");
  
  setTimeout(game, 1500);
  
  total = total + 1;
});

onEvent("CoinButton", "click", function( ) {
  
  coin= coin + per;
  
  setText("CoinAmount", coin);
  
  total = total + 1;
});

onEvent("StoreButton", "click", function( ) {
  
  setScreen("Store");
  
  setText("CoinAmount", coin);
  
  total = total + 1;
});

onEvent("Back", "click", function( ) {
  
  setScreen("Game");
  
  setText("CoinAmount", coin);
  
  total = total + 1;
});

onEvent("Back2", "click", function() {
  setScreen("Game");
  
  total = total + 1;
});

onEvent("Stats", "click", function( ) {
  
  setScreen("Statss");
  
  total = total + 1;
  
  setText("ClickAmount", total);
  
  setText("Coinsamount", coin);
  
  setText("Peramount", per);
  
  setText("label12", auto);
});

onEvent("BuyPick", "click", function( ) {
  
  if (coin >= 50) {
    
    hideElement("BuyPick");
    
    showElement("label3");
    
    coin = coin - 50;
    
    per = per + 1;
    
    bought = 1;
    
  }
});
