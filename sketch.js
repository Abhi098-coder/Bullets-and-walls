var bullet,wall;
var thickness,speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,150,25);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  bullet.shapeColor = "#AF9B60";
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
  colliding(bullet,wall);
  
  
  
  drawSprites();
}

