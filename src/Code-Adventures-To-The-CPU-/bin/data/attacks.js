const attacks = [
    {
        name: "Attack",
        action: function() {
            
            let randomNumber = Math.floor(Math.random() * 10) + 1;

            if (randomNumber < 2) {

                console.log("Attack Missed!");

                return false;

            } else {

                console.log("Attack Hit!");

                return true;

            }

        }
    }
];

export { attacks };
