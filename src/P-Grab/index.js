// Code By Jack //

import readline from 'readline';
import https from 'https';
import open from 'open';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask for a username
rl.question('Enter a username: ', (username) => {

    console.log("Getting profile picture for " + username);
    console.log(`I've got it!`);
    console.log("Sending you to the website...");
    open(`https://github.com/${username}.png?size=1000`);

    setTimeout(() => {

        console.log("Done!");
        
        rl.question("Press any key to exit...", () => {

            console.log("Exiting...");

            process.exit(0);

        });

    }, 5000);

});
