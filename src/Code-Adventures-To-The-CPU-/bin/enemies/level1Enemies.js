const enemies = [
    {
        name: "Test Enemy",
        hp: 100,
        attack: 10,
        defense: 10,
        speed: 10,
        xp: 10,
        gold: 10,
        text: "This is a test enemy",
        special: function() {

            // Test Attack!
            console.log("Test Attack!");

            enemies[0].attack += 5; 

        }
    }

];

export { enemies };
