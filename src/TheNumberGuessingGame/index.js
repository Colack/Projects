// Code By Jack //

setText("QuestionLabel", "Is your number even?");

setScreen("Index");

var number = 0;
var code= 0;

onEvent("Continue","click", function( ) {
  
  setScreen("Guesser");
  
});



onEvent("Yes", "click", function( ) {
  
  if (code == 0) {
    
    code = 1;
    
    setText("QuestionLabel", "Is your number a mulitiple of 5?");
    
  } else if (code == 1) {
    
    code = 3;
    
    setText("QuestionLabel", "Is your number higher than 25?");
    
  } else if (code == 2) {
    
    code = 5;
    
    setText("QuestionLabel", "Is your number higher than 25?");
    
  } else if (code == 3) {
    
    code = 7;
    
    setText("QuestionLabel", "Is your number a multiple of 3?");
    
  } else if (code == 4) {
    
    code = 9;
    
    setText("QuestionLabel", "Is your number a multiple of 6?");
    
  } else if (code == 5) {
    
    code = 11;
    
    setText("QuestionLabel", "Is your number a multiple of 9");
    
  } else if (code == 6) {
    
    code = 13;
    
    setText("QuestionLabel", "Does your number have a 4 in it?");
    
  } else if (code == 7) {
    
    number = 30;
    
    code = 15;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 8) {
    
    number = 20;
    
    code =  17;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 9) {
    
    code = 19;
    
    setText("QuestionLabel", "Does your number have a 3 in it?");
    
  } else if (code == 10) {
    
    code = 21;
    
    setText("QuestionLabel", "Is your number a multiple of 4?");
    
  } else if (code == 11) {
    
    number = 45;
    
    code = 23;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 12) {
    
    number = 15;
    
    code = 25;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 13) {
    
    code = 27;
    
    setText("QuestionLabel", "Does your number have a 3 or a 9 in it?");
    
  } else if (code == 14) {
    
    code = 29;
    
    setText("QuestionLabel", "Is your number a prime number?");
    
  } else if (code == 16) {
    
    number = 40;
    
    code = 31;
    
    setScreen("NumberGuess");
    
    setText("QuestionLabel", "Is your number 2 squared?");
    
  } else if (code == 19) {
    
    number = 36;
    
    code = 33;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 20) {
    
    code = 35;
    
    setText("QuestionLabel", "Is your number a multiple of 8?");
    
  } else if (code == 21) {
    
    code = 37;
    
    setText("QuestionLabel", "Is your number 2 squared?");
    
  } else if (code == 22) {
    
    code = 39;
    
    setText("QuestionLabel", "Does your number have a 2 in it?");
    
  } else if (code == 26) {
    
    number = 25;
    
    code = 41;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 27) {
    
    code = 43;
    
    setText("QuestionLabel", "Does your number have a 3 in it?");
    
  } else if (code == 28) {
    
    code = 45;
    
    setText("QuestionLabel", "Is your number a multiple of 3?");
    
  } else if (code == 29) {
    
    code = 47;
    
    setText("QuestionLabel", "Is your number 1 digit?");
    
  } else if (code == 30) {
    
    code = 49;
    
    setText("QuestionLabel", "Is your number less than 5?");
    
  } else if (code == 34) {
    
    number = 42;
    
    code = 51;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 35) {
    
    number = 32;
    
    code = 53;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 36) {
    
    code = 55;
    
    setText("QuestionLabel", "Does your number have an 8 in it?");
    
  } else if (code == 37) {
    
    number = 4;
    
    code = 57;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 38) {
    
    number = 6;
    
    code = 59;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 39) {
    
    code = 61;
    
    setText("QuestionLabel", "Does your number have a 1 in?");
    
  } else if (code == 40) {
    
    number = 22;
    
    code = 63;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 43) {
    
    number = 43;
    
    code = 65;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 44) {
    
    number = 41;
    
    code = 67;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 45) {
    
    code = 69;
    
    setText("QuestionLabel", "Does your number have a 9 in it?");
    
  } else if (code == 46) {
    
    number = 29;
    
    code = 71;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 47) {
    
    number = 1;
    
    code = 73;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 49) {
    
    number = 3;
    
    code = 75;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 50) {
    
    number = 7;
    
    code = 77;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 54) {
    
    number = 28;
    
    code = 49;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 55) {
    
    number = 38;
    
    code = 81;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 56) {
    
    number = 46;
    
    code = 83;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 61) {
    
    number = 12;
    
    code = 85;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 64) {
    
    number = 16;
    
    code = 87;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 69) {
    
    number = 39;
    
    code = 89;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 70) {
    
    number = 31;
    
    code = 91;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 71) {
    
    code = 93;
    
    setText("QuestionLabel", "Does your number have a 3 in it?");
    
  } else if (code == 93) {
    
    number = 13;
    
    code = 95;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 94) {
    
    number = 17;
    
    code = 97;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } 
});

onEvent("No", "click", function( ) {
  
  if (code == 0) {
    
    code = 2;
    
    setText("QuestionLabel", "Is your number a multiple of 5?");
    
  } else if (code == 1) {
    
    code = 4;
    
    setText("QuestionLabel", "Is your number higher than 25?");
    
  } else if (code == 2) {
    
    code = 6;
    
    setText("QuestionLabel", "Is your number higher than 25?");
    
  } else if (code == 3) {
    
    code = 8;
    
    setText("QuestionLabel", "Does your number start with 2?");
    
  } else if (code == 4) {
    
    code = 10;
    
    setText("QuestionLabel", "Does your number have 1 digit?");
    
  } else if (code == 5) {
    
    code = 12;
    
    setText("QuestionLabel", "Is your number a multiple of 3?");
    
  } else if (code == 6) {
    
    code = 14;
    
    setText("QuestionLabel", "Does your number have a 1 in it?");
    
  } else if (code == 7) {
    
    code = 16;
    
    setText("QuestionLabel", "Does your number have a 4 in it?");
    
  } else if (code == 8) {
    
    number = 10;
    
    code = 18;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 9) {
    
    code = 20;
    
    setText("QuestionLabel", "Does your number have a 2 in it?");
    
  } else if (code == 10) {
    
    code = 22;
    
    setText("QuestionLabel", "Is your number a multiple of 6?");
    
  } else if (code == 11) {
    
    number = 35;
    
    code = 24;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 12) {
    
    code = 26;
    
    setText("QuestionLabel", "Does your number have a 2 in it?");
    
  } else if (code == 13) {
    
    code == 28;
    
    setText("QuestionLabel", "Does your number have a 3 in it?");
    
  } else if (code == 14) {
    
    code = 30;
    
    setText("QuestionLabel", "Is your number a multiple of 3?");
    
  } else if (code == 16) {
    
    number = 50;
    
    code = 32;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 19) {
    
    code = 34;
    
    setText("QuestionLabel", "Does your number have a 2 in it?");
    
  } else if (code == 20) {
    
    code = 36;
    
    setText("QuestionLabel", "Does your number have a 3 in it?");
    
  } else if (code == 21) {
    
    code = 38;
    
    setText("QuestionLabel", "Is your number a multiple of 3?");
    
  } else if (code == 22) {
    
    code = 40;
    
    setText("QuestionLabel", "Does your number have a 2 in it?");
    
  } else if (code == 26) {
    
    number = 5;
    
    code = 42;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 27) {
    
    code = 44;
    
    setText("QuestionLabel", "Does your number have a 1 in it?");
    
  } else if (code == 28) {
    
    code = 46;
    
    setText("QuestionLabel", "Does your number have a 9 in it?");
    
  } else if (code == 29) {
    
    number = 21;
    
    code = 48;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 30) {
    
    code = 50;
    
    setText("QuestionLabel", "Is your number 1 digit?");
     
  } else if (code == 34) {
    
    number = 48;
    
    code = 52;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 35) {
    
    code = 54;
    
    setText("QuestionLabel", "Does your number have an 8 in it?");
    
  } else if (code == 36) {
    
    code = 56;
    
    setText("QuestionLabel", "Does your number have a 6 in it?");
    
  } else if (code == 37) {
    
    number = 8;
    
    code = 58;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 38) {
    
    number = 2;
    
    code = 60;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 39) {
    
    number = 18;
    
    code = 62;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 40) {
    
    code = 64;
    
    setText("QuestionLabel", "Does your number have a 6 in it?");
    
  } else if (code == 43) {
    
    number = 49;
    
    code = 66;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 44) {
    
    number = 47;
    
    code = 68;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 45) {
    
    code = 70;
    
    setText("QuestionLabel", "Does your number have a 1 in it?");
    
  } else if (code == 46) {
    
    number = 27;
    
    code = 72;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 47) {
    
    code = 74;
    
    setText("QuestionLabel", "Does your number have a 3 or a 9 in it?");
    
  } else if (code == 49) {
    
    number = 9;
    
    code = 76;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 50) {
    
    number = 23;
    
    code = 78;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 54) {
    
    number = 26;
    
    code = 80;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 55) {
    
    number = 34;
    
    code = 82;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 56) {
    
    number = 44;
    
    code = 84;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 61) {
    
    number = 24;
    
    code = 86;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 64) {
    
    number = 14;
    
    code = 88;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 69) {
    
    number = 33;
    
    code = 90;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 70) {
    
    number = 37;
    
    code = 92;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 74) {
    
    code = 94;
    
    setText("QuestionLabel", "Does your number have a 7 in it?");
    
  } else if (code == 93) {
    
    number = 19;
    
    code = 96;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  } else if (code == 94) {
    
    number = 11;
    
    code = 98;
    
    setScreen("NumberGuess");
    
    setText("NumberLabel", number);
    
  }
}); 
