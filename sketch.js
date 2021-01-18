var gamestate = PLAY 
var PLAY = 1
var END = 0
var survivalTime = 0
    
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
  monkey.velocityY = 1
  
  ground = createSprite(400,350,1000,10)
  ground.velocityX = -4;
  ground.x = ground.width/2
  console.log(ground.x)
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

}


function draw() {
  background("lightgreen")

  textSize(20)
  fill("black")
  stroke("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time:" + survivalTime,100,50)

  
   if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
   }
   monkey.velocityY = monkey.velocityY + 1
     
     
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
   
   
  monkey.collide(ground)
  drawSprites();

  
}

function food(){
    if (frameCount % 80 === 0){
     var banana = createSprites(600,120,10,40)
     banana.y = 4
      banana.y = Math.round(random(120,200))
      banana.addAnimation("banana.png", banana)
      banana.velocityX = -3
      banana.lifetime = 300;
      FoodGroup.add(banana)


}
}

function Obstacle(){
  if (frameCount % 300 === 0){
 var  Obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -3
    
}
    obstacle.scale = -4.5;
    obstacle.lifetime = 300;
  
  obstacleGroup.add("obstacle.png", obstacle)

}
