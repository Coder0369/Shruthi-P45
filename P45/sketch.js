var bg,bgImg;
var player, shooterImg, shooter_shooting;
var crow, crowImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var crowGroup;



function preload(){
  
 

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  crowImg = loadImage("assets/crow.gif")

  bgImg = loadImage("assets/bg.jpg")

 

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.5
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

}