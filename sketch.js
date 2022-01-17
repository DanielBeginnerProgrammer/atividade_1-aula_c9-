//VARIAVEIS
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var deco1;
var box;
function setup() {
//sprites
  createCanvas(1800, );
  deco1= createSprite(260,200,80,80)
deco1.shapeColor = 'darkblue';
deco2 = createSprite(260,50,80,60)
deco2.shapeColor = 'lightgreen';
  box = createSprite(200, 200, 20, 20);
  box.shapeColor = 'blue';
  wall1 = createSprite(160,240,280,3);
  wall2 = createSprite(200,160,200,3);
  wall3 = createSprite(300,200,3,80);
  wall4 = createSprite(100,120,3,80);
  wall4 = createSprite(20,130,3,220);
  wall5 = createSprite(200,80,200,3);
  wall6 = createSprite(160,20,280,3);
  wall7= createSprite(300,50,3,60);
}
function draw() {
  background('purple');
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 5;
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 5;
  }
  drawSprites();
}