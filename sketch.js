
var fixedRect;
var movingRect;

var movingRect1;
var fixedRect1;

function setup() {
createCanvas(800,400);
fixedRect= createSprite(300,100,20,100);
fixedRect.shapeColor= "green";
movingRect= createSprite(730,100,100,20);
movingRect.shapeColor= "green";

movingRect1 = createSprite(100,300,20,100);
fixedRect1 = createSprite(700,300,20,100);

movingRect.debug= true;
fixedRect.debug= true;

fixedRect1.velocityX = -5;
 movingRect1.velocityX = 5;

}



function draw() {
  background(0,0,0);  
  
 movingRect.x = mouseX;
 movingRect.y = mouseY;

 
 
  isTouching(movingRect,fixedRect);
  bounceoff(movingRect1,fixedRect1);





console.log(movingRect.x - fixedRect.x);

  drawSprites();
}

















