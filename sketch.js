var playerImg, player;
var  enemy;
var enemy2Img,enemy1Img
var road, roadImg;
var enemyGroup, enemy1Img, enemy2Img 

var score=0 
var gamestate; 




function preload(){
    playerImg= loadImage("Player.png");
    enemy1Img= loadImage("red.png");
    enemy2Img= loadImage("green.png");
    roadImg= loadImage("road.jpeg");
    
}


function setup() {
    createCanvas(400,600);

    road= createSprite(200,200);
    road.addImage(roadImg);
    road.scale=3;

    player=createSprite(200,500);
    player.addImage(playerImg);
    player.scale=0.2;
    player.debug=false;
    player.setCollider ("rectangle", 0, 0, 280,500)
    enemyGroup = createGroup ();

    gamestate="play"
    

}

function draw() 
{
    background("grey");

    if(gamestate=="play"){
        player.x = World.mouseX;
        if (player.x>300) {
            player.x=320;
        }
        road.velocityY=3;
        
        if(road.y>320){
            road.y= 200;
        }

        if (frameCount % 100 ==0) {
            score = score + 5;
        }
        spwnEnemy();
        if (player.isTouching(enemyGroup)) {
            gamestate="end"
        }
    }
    if(gamestate=="end"){
        road.velocityY=0;
        enemyGroup.setVelocityEach(0,0);
    }
   

   
    drawSprites();
    fill ("lime");
    textSize(20);
    text("Score : "+ score, 250,20);
   
    
  
}

function spwnEnemy() {
    if(frameCount % 40 == 0) {
        enemy= createSprite (random(30,380),-10);
        enemy.debug="false";
        enemy.setCollider ("rectangle", 0,0,290,500);

        var num=Math.round(random(1,2));
        if(num==1){
            enemy.addImage(enemy1Img);
        }
        else{
            enemy.addImage(enemy2Img)
        }
        enemy.scale=0.15;
        enemy.velocityY=7;
        enemyGroup.add(enemy);
       
    }                      
}

 
    
