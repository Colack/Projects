// ID INFORMATION //

// Charcter ID's //
// 0 - None //
// 1 - Knight //
// 2 - Rook //
// 3 - Bishop //
// 4 - King //
// 5 - Castle //

// Weapon ID's //
// 0 - None //
// 1 - Sword //
// 2 - Axe //
// 3 - Staff //
// 4 - Sceptor //
// 5 - Pitchfork //
// 6 - Knife //
// 7 - Stone Blade //
// 8 - Magni-Blade //
// 9 - X Blade //
// 10 - Mag Blade //
// 11 - Legend Blade //
// 12 - Destruction Blade //
// 13 - Choppy Axe //
// 14 - Hatchet //
// 15 - Mega-Axe //
// 16 - Iron Axe //
// 17 - Steel Axe //
// 18 - Pickaxe //
// 19 - Wand of life //
// 20 - Wand of Destruction //
// 21 - Wand of Earth //
// 22 - Wand Of Air //
// 23 - Wand Of Water //
// 24 - Wand Of Fire //
// 25 - Wand Of All //
// 26 - Golden Sceptor //
// 27 - Sharp Crown //
// 28 - Diamond Staff // 
// 29 - The Royal Destroyer //
// 30 - Kings Sceptor // 
// 31 - Flaming PitchFork //
// 32 - The Crowd //
// 33 - The Anhiliator //

var health;
var power;
var attack;
var defense;

var character;
var weapon;

var keys;
var armor;

var level;
var levels;

var dungeon;
var dungeons;

var monsters;
var bosses;

var page;

var ai;
var enemielvl;
var enemielayout;

var all;

health = 10;
power = 1;
attack = 1;
defense = 1;
character = 0;
weapon = 0;
keys = 0;
armor = 0;
level = 0;
levels = 0;
dungeon = 0;
dungeons = 0;
monsters = 0;
bosses = 0;
page = 0;
ai = 0;
enemielvl = 0;
enemielayout = 0;

all = health + power + attack + defense + character + weapon + keys + armor + level + levels + dungeon + dungeons + monsters + bosses + page + ai + enemielvl + enemielayout;

setScreen("Index");

if (health === 0) {
  setScreen("GameOver");
}

onEvent("Title", "click", function( ) {
  console.log(health);
  console.log(power);
  console.log(attack);
  console.log(defense);
  console.log(character);
  console.log(weapon);
  console.log(keys);
  console.log(armor);
  console.log(level);
  console.log(levels);
  console.log(dungeon);
  console.log(dungeons);
  console.log(monsters);
  console.log(bosses);
  console.log(page);
});

onEvent("StartGame", "click", function( ) {
  setScreen("CharacterChoose");
  
  page = "CharacterChoose";
  
  hideElement("rookinfo");
  hideElement("Rook");
  hideElement("ChooseRook");
  hideElement("Right2");
  hideElement("Left2");
  
  hideElement("Bishop");
  hideElement("Right3");
  hideElement("Left3");
  hideElement("bishopinfo");
  hideElement("ChooseBishop");
  
  hideElement("King");
  hideElement("Right4");
  hideElement("Left4");
  hideElement("ChooseKing");
  hideElement("kinginfo");
  
  hideElement("Castle");
  hideElement("ChooseCastle");
  hideElement("Right5");
  hideElement("Left5");
  hideElement("castleinfo");
  
  showElement("ChooseKnight");
  showElement("knightinfo");
  showElement("Left1");
  showElement("Right1");
  showElement("Knight");
});

onEvent("Right5", "click", function( ) {
  hideElement("Castle");
  hideElement("ChooseCastle");
  hideElement("Right5");
  hideElement("Left5");
  hideElement("castleinfo");
  
  showElement("Knight");
  showElement("ChooseKnight");
  showElement("Right1");
  showElement("Left1");
  showElement("knightinfo");
});

onEvent("Left1", "click", function( ) {
  showElement("Castle");
  showElement("ChooseCastle");
  showElement("Right5");
  showElement("Left5");
  showElement("castleinfo");
  
  hideElement("Knight");
  hideElement("ChooseKnight");
  hideElement("Left1");
  hideElement("Right1");
  hideElement("knightinfo");
});

onEvent("Right1", "click", function( ) {
  hideElement("ChooseKnight");
  hideElement("Knight");
  hideElement("knightinfo");
  hideElement("Left1");
  hideElement("Right1");
  
  showElement("rookinfo");
  showElement("Rook");
  showElement("ChooseRook");
  showElement("Right2");
  showElement("Left2");
});

onEvent("Left2", "click", function( ) {
  hideElement("rookinfo");
  hideElement("Rook");
  hideElement("ChooseRook");
  hideElement("Left2");
  hideElement("Right2");
  
  showElement("ChooseKnight");
  showElement("Knight");
  showElement("knightinfo");
  showElement("Left1");
  showElement("Right1");
});

onEvent("Right2", "click", function( ) {
  hideElement("rookinfo");
  hideElement("Rook");
  hideElement("ChooseRook");
  hideElement("Left2");
  hideElement("Right2");
  
  showElement("Bishop");
  showElement("ChooseBishop");
  showElement("Right3");
  showElement("Left3");
  showElement("bishopinfo");
});

onEvent("Left3", "click", function( ) {
  showElement("rookinfo");
  showElement("Rook");
  showElement("ChooseRook");
  showElement("Left2");
  showElement("Right2");
  
  hideElement("Bishop");
  hideElement("ChooseBishop");
  hideElement("Right3");
  hideElement("Left3");
  hideElement("bishopinfo");
});

onEvent("Right3", "click", function( ) {
  showElement("ChooseKing");
  showElement("Right4");
  showElement("Left4");
  showElement("King");
  showElement("kinginfo");
  
  hideElement("Bishop");
  hideElement("ChooseBishop");
  hideElement("Left3");
  hideElement("Right3");
  hideElement("bishopinfo");
});

onEvent("Left4", "click", function( ) {
  hideElement("ChooseKing");
  hideElement("Right4");
  hideElement("Left4");
  hideElement("King");
  hideElement("kinginfo");
  
  showElement("Bishop");
  showElement("ChooseBishop");
  showElement("Left3");
  showElement("Right3");
  showElement("bishopinfo");
});

onEvent("Right4", "click", function( ) {
  showElement("Castle");
  showElement("Right5");
  showElement("Left5");
  showElement("ChooseCastle");
  showElement("castleinfo");
  
  hideElement("King");
  hideElement("ChooseKing");
  hideElement("Right4");
  hideElement("Left4");
  hideElement("kinginfo");
});

onEvent("Left5", "click", function( ) {
  hideElement("Castle");
  hideElement("ChooseCastle");
  hideElement("Left5");
  hideElement("Right5");
  hideElement("castleinfo");
  
  showElement("King");
  showElement("ChooseKing");
  showElement("Left4");
  showElement("Right4");
  showElement("kinginfo");
});

onEvent("ChooseKnight", "click", function( ) {
  character = 1;
  attack = 10;
  defense = 10;
  health = 15;
  power = 5;
  weapon = 1;
  
  setScreen("GameStart");
  
  page = "GameStart";
  
  setText("YourCharacter", "You have chosen the Knight.");
});

onEvent("ChooseRook", "click", function( ) {
  character = 2;
  attack = 5;
  defense = 10;
  health = 20;
  power = 10;
  weapon = 2;
  
  setScreen("GameStart");
  
  page = "GameStart";
  
  setText("YourCharacter", "You have chosen the Rook.");
});

onEvent("ChooseBishop", "click", function( ) {
  character = 3;
  attack = 0;
  defense = 10;
  health = 10;
  power = 30;
  weapon = 3;
  
  setScreen("GameStart");
  
  page = "GameStart";
  
  setText("YourCharacter", "You have chosen the Bishop.");
});

onEvent("ChooseKing", "click", function( ) {
  character = 4;
  attack = 10;
  defense = 20;
  health = 5;
  power = 20;
  weapon = 4;
  
  setScreen("GameStart");
  
  page = "GameStart";
  
  setText("YourCharacter", "You have chosen the King.");
});

onEvent("ChooseCastle", "click", function( ) {
  character = 5;
  attack = 20;
  defense = 0;
  health = 30;
  power = 10;
  weapon = 5;
  
  setScreen("GameStart");
  
  page = "GameStart";
  
  setText("YourCharacter", "You have chosen the Castle.");
});

onEvent("GoBack", "click", function( ) {
  health = 10;
  power = 1;
  attack = 1;
  defense = 1;
  character = 0;
  weapon = 0;
  
  setScreen("CharacterChoose");
  
  page = "CharacterChoose";
  
  hideElement("rookinfo");
  hideElement("Rook");
  hideElement("ChooseRook");
  hideElement("Right2");
  hideElement("Left2");
  
  hideElement("Bishop");
  hideElement("Right3");
  hideElement("Left3");
  hideElement("bishopinfo");
  hideElement("ChooseBishop");
  
  hideElement("King");
  hideElement("Right4");
  hideElement("Left4");
  hideElement("ChooseKing");
  hideElement("kinginfo");
  
  hideElement("Castle");
  hideElement("ChooseCastle");
  hideElement("Right5");
  hideElement("Left5");
  hideElement("castleinfo");
  
  showElement("ChooseKnight");
  showElement("knightinfo");
  showElement("Left1");
  showElement("Right1");
  showElement("Knight");
});

onEvent("Continue", "click", function( ) {
  
  if (character === 1) {
    
    ai = 1;
    enemielvl = 1;
    enemielayout = 1;
    
    console.log(all);
    
  } else if(character === 2) {
    
   ai = 2; 
   enemielvl = 2;
   enemielayout = 2;
   
   console.log(all);
   
  } else if(character === 3) {
    
    ai = 3;
    enemielvl = 3;
    enemielayout = 3;
    
    console.log(all);
    
  } else if(character === 4) {
    
    ai = 4;
    enemielvl = 4;
    enemielayout = 4;
    
    console.log(all);
    
  } else if(character === 5) {
    
    ai = 5;
    enemielvl = 5;
    enemielayout = 5;
    
    console.log(all);
    
  }
  
  setScreen("Game");
  
});






