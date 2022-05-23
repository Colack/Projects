const myPlayer = {
    name: "Colack",
    health: 100,
    defense: 10,
    attack: 10,
    speed: 10,
    xp: 0,
    gold: 5,
    inventory: [],
    equipment: [],
    level: "1",
    levelUp: function() {
        this.level += 1;
        this.health += 10;
        this.defense += 1;
        this.attack += 1;
        this.speed += 1;
        this.gold += 10;
    },
    attacks: [0]
}

export { myPlayer };
