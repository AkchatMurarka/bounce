var fixedRect;
var movingRect;
var fixedRect1;
var fixedRect2;
var fixedRect3;

function setup() {
  createCanvas(1000,1000);
fixedRect =  createSprite(20, 500, 50, 50);

fixedRect1 = createSprite(500,50,50,50);

fixedRect2 = createSprite(500,950,50,50);

fixedRect3 = createSprite(980,500,50,50);

// movingRect = createSprite(400,200,70,70);
// movingRect.shapeColor = "blue";
 }

function draw() {
  background(255,255,255);  
  fixedRect.shapeColor = "green";
fixedRect.setVelocity(1,0);

fixedRect1.shapeColor = "yellow";
fixedRect1.setVelocity(0,1);

fixedRect2.shapeColor = "orange";
fixedRect2.setVelocity(0,-1);

fixedRect3.shapeColor = "brown";
fixedRect3.setVelocity(-1,0);

// movingRect.x = mouseX;
// movingRect.y = mouseY;
// console.log(movingRect.x - fixedRect.x)
// if(isTouching(movingRect,fixedRect)||isTouching(movingRect,fixedRect1)||isTouching(movingRect,fixedRect2)||isTouching(movingRect,fixedRect3)){
//   movingRect.shapeColor = "red";

// }else{
//   movingRect.shapeColor = "blue";
// }

// if(isTouching(movingRect,fixedRect1)){
//   movingRect.shapeColor = "red";
// }else{
//   movingRect.shapeColor = "blue";
// }
// if(isTouching(movingRect,fixedRect2)){
//   movingRect.shapeColor = "red";
// }else{
//   movingRect.shapeColor = "blue";
// }
// if(isTouching(movingRect,fixedRect3)){
//   movingRect.shapeColor = "red";
// }else{
//   movingRect.shapeColor = "blue";
// }

// bounce(fixedRect,fixedRect3);
// bounce(fixedRect1,fixedRect2);

  drawSprites();
}

function isTouching(obj1,obj2)
// obj1, obj2 are parameters;
{
  if(obj1.x - obj2.x <= (obj1.width + obj2.width)/2 && obj2.x - obj1.x <= (obj1.width + obj2.width)/2 
  && obj1.y - obj2.y <= (obj1.height + obj2.height)/2 && obj2.y - obj1.y <= (obj1.height + obj2.height)/2){
    //movingRect.shapeColor = "red";
    return true
  }else {
   // movingRect.shapeColor = "blue";
   return false
  }

}

function bounce(obj1,obj2){
  if(obj1.x - obj2.x <= (obj1.width + obj2.width)/2 && obj2.x - obj1.x <= (obj1.width + obj2.width)/2 ){
  obj1.velocityX = -1;
  obj2.velocityX = 1;
  }
if( obj1.y - obj2.y <= (obj1.height + obj2.height)/2 && obj2.y - obj1.y <= (obj1.height + obj2.height)/2){
obj1.velocityY =-1;
obj2.velocityY = 1; 
}
}