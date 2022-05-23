import kaboom from "kaboom"



// initialize context
kaboom()



// load assets
loadSprite("player", "sprites/Placeholder.png")
loadSprite("bullet", "sprites/Placeholder-small.png")




// Create player and other items 

const player = add([
	sprite("player"),
	pos(350, 200),
	area(),
	body()
])

const score = add([
	text("Text goes here"),
	pos(24, 24)
])

add([
	rect(width(), 48),
	pos(0, height() - 48),
	outline(4),
	area(),
	solid(),
	color(127, 200, 255),
])



// Player stats

var myPlayer = {
	speed: 2000
};



// Player Movement 

onKeyPress("space", () => {
	var value;
	
	if (Math.sign(player.pos.x) == -1) {
		value = player.pos.x - 10;
	} else if (Math.sign(player.pos.x) == 1) {
		value = player.pos.x + 10;
	} else if (Math.sign(player.pos.x) == 0) {
		value = player.pos.x + 10;
	} else {
		value = player.pos.x + 10;
	}

	const projectile = add([
		sprite("sword"),
		pos(value, player.pos.y),
		area(),
		move(player.pos.angle, 1200),
		cleanup(),
	])
})

onKeyPress("left", () => {
	player.move(-Math.abs(myPlayer.speed), 0)
})

onKeyPress("right", () => {
	player.move(myPlayer.speed, 0)
})

onKeyPress("up", () => {
	if (player.grounded()) {
		player.jump()
	}
})
