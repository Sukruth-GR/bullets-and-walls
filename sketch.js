  var bullet, wall;

  var speed, weight, thickness;

  var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "grey";
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "black";
}

function draw() {
  background(255,255,255);  

  bullet.velocityX = 20;

  if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;
      damage = 0.5* weight* speed* speed/(thickness* thickness* thickness);

      if(damage>10){
          wall.shapeColor = "red";
      }

      if(damage<10){
          wall.shapeColor = "green";
      }
  }

  function hasCollided(object1, object2){
      bulletRightEdge = object1.x + object1.width;
      wallLeftEdge = object2.x;
      if(bulletRightEdge>=wallLeftEdge){
          return true;
      }
      return false;
  }




  drawSprites();
}