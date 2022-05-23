import { enemies } from "../enemies/level1Enemies.js";
import { myPlayer } from "../data/player.js";
import { attacks } from "../data/attacks.js";
import readline from "readline";
import clear from 'clear';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function fightLoader(enemieID) {

    console.log(enemies[enemieID].text);

    if (enemies[enemieID].speed > myPlayer.speed) {

        console.log("The enemie strikes first!");

        enemieTurn(enemieID);

    } else {

        console.log("You strike first!");

        playerTurn(enemieID);

    }

}

function playerTurn(enemieID) {

    console.log("What would you like to do?");
    
    for (var i = 0; i < myPlayer.attacks.length; i++) {

        console.log(i + ": " + attacks[myPlayer.attacks[i]].name);

    }

    rl.question(">", function(answer) {

        if (myPlayer.attacks.includes(parseInt(answer))) {

            if (attacks[myPlayer.attacks[parseInt(answer)]].action()) {

                enemies[enemieID].hp -= myPlayer.attack;

                console.log("You hit the enemie for " + myPlayer.attack + " damage!");

                if (enemies[enemieID].hp <= 0) {

                    console.log("You killed the enemie!");

                    myPlayer.xp += enemies[enemieID].xp;

                    myPlayer.gold += enemies[enemieID].gold;

                } else {

                    console.log("The enemie has " + enemies[enemieID].hp + " health left!");

                    enemieTurn(enemieID);

                }

            } else {

                console.log("You missed!");

                enemieTurn(enemieID);

            }


        } else {

            console.log("Invalid input!");

            clear();

            playerTurn();

        }

    });

}

function enemieTurn(enemieID) {

    let randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber < 2) {

        console.log("The enemie missed!");

        playerTurn();

    } else {

        randomNumber = Math.floor(Math.random() * 100) + 1;

        if (randomNumber == 100) {

            enemies[enemieID].special();

            console.log("The enemie used a special attack!");

            playerTurn();

        } else {

            console.log("The enemie hit you for " + enemies[enemieID].attack + " damage!");

            myPlayer.health -= enemies[enemieID].attack;

            if (myPlayer.health <= 0) {

                console.log("You died!");

                process.exit();

            } else {

                console.log("You have " + myPlayer.health + " health left!");

                playerTurn();

            }
        
        }

    }

}
