var level = 0;
var car = createSprite(50, 200);
car.setAnimation("car_green_1");
car.scale = 0.5;

function draw() {
  
  background("white");
  drawSprites();
  
  if (keyDown("space")) {
    
    car.x = car.x + 5;
    
  }
  
}
