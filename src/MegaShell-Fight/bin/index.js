import readLine from 'readline';
import clear from 'clear';
import figlet from 'figlet';

import { fighters } from './data/fighters.js';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

var whoFight;
var fightModeActivated = false;
var currentFighter = {
    name: "",
    health: 0,
    attack: 0,
    defense: 0,
    quote: "",
    attackQuote: "",
    missQuote: "",
    special: () => {}
}
var enemieFighter = {
    name: "",
    health: 0,
    attack: 0,
    defense: 0,
    quote: "",
    attackQuote: "",
    missQuote: "",
    special: () => {}
}

export function onGameStart() {

    if (fightModeActivated == false) {

        clear();

        console.log(figlet.textSync('Fight', {
            font: 'Ghost',
            horizontalayout: 'default',
            verticalLayout: 'default'
        }));    
    
        console.log("|| Welcome to the Arena!");
        console.log("|| This Mode was made because I was bored.");
        console.log("|| Check out the full game at github.com/Shining-Gold-Studios/megaShell-Fight");

    } else {

        // Dont log the fight mode message again

    }

    fightModeActivated = true;

    console.log("|| Modes: ");
    console.log("|| 1. Fight Mode");
    console.log("|| 2. Story Mode");
    console.log("|| 3. Character List");
    console.log("|| 4. Info");
    console.log("|| 5. Exit");

    rl.question("> ", (answer) => {

        if (answer == 1) {

                    rl.question("|| What Fighter Would you like to use? ", (answer) => {

                        if (fighters[answer]) {
        
                            currentFighter.name = fighters[answer].name;
                            currentFighter.health = fighters[answer].health;
                            currentFighter.attack = fighters[answer].attack;
                            currentFighter.defense = fighters[answer].defense;
                            currentFighter.attackQuote = fighters[answer].attackQuote;
                            currentFighter.quote = fighters[answer].quote;
                            currentFighter.missQuote = fighters[answer].missQuote;
                            currentFighter.special = fighters[answer].special;
                            
        
                            let randomFighter = fighters[Math.floor(Math.random() * fighters.length)];
        
                            enemieFighter.name = randomFighter.name;
                            enemieFighter.health = randomFighter.health;
                            enemieFighter.attack = randomFighter.attack;
                            enemieFighter.defense = randomFighter.defense;
                            enemieFighter.attackQuote = randomFighter.attackQuote;
                            enemieFighter.quote = randomFighter.quote;
                            enemieFighter.missQuote = randomFighter.missQuote;
                            enemieFighter.special = randomFighter.special;
        
                            console.log(`|| ${currentFighter.name} is ready to fight!`);
        
                            rl.question("|| Are you ready to fight? (y/n) ", (answer) => {
        
                                if (answer == "y") {
        
                                    console.log(`|| ${currentFighter.name} is fighting ${enemieFighter.name}!`);
        
                                    fight();
        
                                } else {
        
                                    console.log("|| You hesitated...");
        
                                    onGameStart();
        
                                }
        
                            });
        
        
        
                        } else {
        
                            console.log("|| That's not a fighter!");

                            onGameStart();
        
                        }
                        
                    });

        } else if (answer == 3) {

                    console.log("|| Fighters: ");

                    for (let i = 0; i < fighters.length; i++) {

                        console.log("\n");
                        console.log(`> ID: ${i} ` + fighters[i].name);       
                        console.log(`Health: ` + fighters[i].health);
                        console.log(`Attack: ` + fighters[i].attack);
                        console.log(`Defense: ` + fighters[i].defense);
                        console.log(`Quote: ` + fighters[i].quote);

                    }

                    rl.question("Press enter to continue...", (answer) => {

                        onGameStart();

                    });

        } else if (answer == 5) {

            console.log("Exiting...");

            fightModeActivated = false;

            process.exit(0);

        } else if (answer == 4) {

            console.log("|| Info: ");
            console.log("|| This game was made by Shining Gold Studios.");
            console.log("|| Check out the full game at github.com/Shining-Gold-Studios/megaShell-Fight");
            console.log("|| This was originally intended to be included with megaShell, but it became its own game.");
            console.log("|| Check out megaShell at github.com/Shining-Gold-Studios/megaShell");
            console.log("|| :)");

            rl.question("Press enter to continue...", (answer) => {

                onGameStart();

            });

        } else if (answer == 2) {



        }

    });

}

function fight() {

    console.log("|| Its time to Fight!");

    // flip a coin to see who goes first

    const coin = Math.floor(Math.random() * 2);

    if (coin === 0) {

        console.log("|| " + currentFighter.name + " goes first!");

        fightStart(1);

    } else {

        console.log("|| " + enemieFighter.name + " goes first!");

        fightStart(0);

    }

}

function fightStart(who) {

    whoFight = who;

    if (who == 1) {

        const random = Math.floor(Math.random() * 100) + 1;

        if (random == "1") {

            console.log("|| " + currentFighter.name + " used their special attack!");

            clear();

            currentFighter.special();

        } else {

            clear();

        const attack = Math.floor(Math.random() * currentFighter.attack);

        const defense = Math.floor(Math.random() * enemieFighter.defense);

        const damage = attack - defense;

        if (damage < 0) {

            console.log(currentFighter.missQuote);

            console.log("|| Attacked Missed!");

            console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

            rl.question("|| Press enter to continue...", (answer) => {

                fightStart(0);

            });

        } else {

            console.log(currentFighter.attackQuote);

            console.log("|| " + currentFighter.name + " deals " + damage + " damage!");

            console.log("|| " + enemieFighter.name + " has " + (enemieFighter.health - damage) + " health left!");

            enemieFighter.health -= damage;

            if (enemieFighter.health <= 0) {

                console.log("|| " + enemieFighter.name + " has been defeated!");

                console.log("|| " + currentFighter.name + " wins!");

                fightModeActivated = false;

                onGameStart();;

            } else {

                rl.question("|| Press enter to continue...", (answer) => {

                    fightStart(0);

                });

            }
            
        }

        }

    } else {

        const random = Math.floor(Math.random() * 100) + 1;

        if (random == "1") {

            console.log("|| " + enemieFighter.name + " used their special attack!");

            clear();

            enemieFighter.special();

            if (currentFighter.health <= 0) {

                console.log("|| " + currentFighter.name + " has been defeated!");

                console.log("|| " + enemieFighter.name + " wins!");

                fightModeActivated = false;

                onGameStart();;

            } else {

                rl.question("|| Press enter to continue...", (answer) => {

                    fightStart(1);

                });

            }

        } else {

            clear();

        const attack = Math.floor(Math.random() * enemieFighter.attack);

        const defense = Math.floor(Math.random() * currentFighter.defense);

        const damage = attack - defense;

        if (damage < 0) {

            console.log(enemieFighter.missQuote);

            console.log("|| Attacked Missed!");

            console.log("|| " + currentFighter.name + " has " + (currentFighter.health - damage) + " health left!");

            rl.question("|| Press enter to continue...", (answer) => {

                fightStart(1);

            });

        } else {

            console.log(enemieFighter.attackQuote);

            console.log("|| " + enemieFighter.name + " deals " + damage + " damage!");

            console.log("|| " + currentFighter.name + " has " + (currentFighter.health - damage) + " health left!");

            currentFighter.health -= damage;

            if (currentFighter.health <= 0) {

                console.log("|| " + currentFighter.name + " has been defeated!");

                console.log("|| " + enemieFighter.name + " wins!");

                fightModeActivated = false;

                onGameStart();;

            } else {

                rl.question("|| Press enter to continue...", (answer) => {

                    fightStart(1);

                });

            }
        
        }   

        }

    }

}

onGameStart();
