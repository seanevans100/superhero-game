var superhero;

var shImg;

var sky;

var skyImg;

var spaceship;

var obtacles;

var obtaclesImg;

var bulletCount = 0;

var END =0;

var PLAY =1;

var gameState = PLAY;

var lazer = createSprite(200,350,10,10);

var lazer2 = createSprite(200,350,10,10);

var lazer3 = createSprite(200,350,10,10);

var lazer4 = createSprite(200,350,10,10);

var laserImg;

var score_number = 0

function preload(){

    shImg = loadImage("superhero.png")

    skyImg = loadImage("sky.png")

    obtaclesImg = loadImage("evil spaceship.png")

    laserImg = loadImage("red laser.png")

}

function setup(){

    createCanvas(400,400)

    sky = createSprite(width/2,200);

    sky.addImage(skyImg);

    sky.velocityX = -4;

    superhero = createSprite(50,250,20,20)

    superhero.addImage(shImg)

    superhero.scale = 0.1;

    obtaclesGB = new Group();

}

function draw(){

    background(0);

    if(obtaclesGB.isTouching(superhero)){
        
        superhero.destroy();
        
        sky.velocityX = 0;
        
        obtacles.velocityX = 0;
        
        obtacles.destroy();
        
        text("gameover!",250,250)

    }

    if(sky.x < 0 ){

        sky.x = width/2;

    }

    shooting();

    obtacle();

    drawSprites();

    text("score"+score_number,150,30)

}

function obtacle(){

    superhero.y = World.mouseY

    if(frameCount%60==0){

        obtacles = createSprite(width-100,Math.round(random(50,350)),20,30);

        obtacles.addImage(obtaclesImg);

        obtacles.scale = 0.1

        obtacles.velocityX = -2;

        obtacles.lifetime = 400;

        obtaclesGB.add(obtacles);

    }

}

function shooting(){

    if(keyWentDown("space")){
    
    bulletCount = bulletCount+1;
    
    if(bulletCount==1){
    
      lazer.y = superhero.y
    
      lazer.x = superhero.x - 20
    
      lazer.velocityY = +4
    
      lazer.addImage(laserImg)
    }
    if(bulletCount==2){
    
      lazer2.y = superhero.y

      lazer2.x = superhero.x -20
    
      lazer2.velocityY = +4

      lazer2.addImage(laserImg)
    }
    if(bulletCount==3){
    
      lazer3.y = superhero.y
    
      lazer3.x = superhero.x - 20
    
      lazer3.velocityY = +4

      lazer3.addImage(laserImg)
    
      
    }
    if(bulletCount==4){
    
      lazer4.y = superhero.y
    
      lazer4.x = superhero.x - 20
    
      lazer4.velocityY = +4

      lazer4.addImage(laserImg)
      
      bulletCount = 0
    
      
    }
  
  
    
      
    }
    
    
    
  }
  