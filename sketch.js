var wall, thickness;
var bullet, speed, weight;

var wall2, thickness2;
var bullet2, speed2, weight2;

var wall3, thickness3;
var bullet3, speed3, weight3;

var wall4, thickness4;
var bullet4, speed4, weight4;

var damage, damage2, damage3, damage4;

var divider, divider2, divider3, divider4;

function setup() {
  createCanvas(1600,800);

  //setting up wall
  thickness = random(22, 83);
  wall = createSprite(1200, 60, thickness, 100);
  wall.shapeColor = (80, 80, 80);

  //setting up wall2
  thickness2 = random(22, 83);
  wall2 = createSprite(1200, 260, thickness2, 100);
  wall2.shapeColor = (80, 80, 80);

  //setting up wall3
  thickness3= random(22, 83);
  wall3 = createSprite(1200, 460, thickness3, 100);
  wall3.shapeColor = (80, 80, 80);

  //setting up wall4
  thickness4 = random(22, 83);
  wall4 = createSprite(1200, 660, thickness4, 100);
  wall4.shapeColor = (80, 80, 80);

  //setting up bullet
  bullet = createSprite(50, 60, 50, 20);
  bullet.shapeColor = (255, 255, 255);
  speed = random(231, 321);
  weight = random(30, 52);

  //setting up bullet2
  bullet2 = createSprite(50, 260, 50, 20);
  bullet2.shapeColor = (255, 255, 255);
  speed2= random(231, 321);
  weight2 = random(30, 52);

  //setting up bullet3
  bullet3 = createSprite(50, 460, 50, 20);
  bullet3.shapeColor = (255, 255, 255);
  speed3 = random(231, 321);
  weight3 = random(30, 52);

  //setting up bullet4
  bullet4 = createSprite(50, 660, 50, 20);
  bullet4.shapeColor = (255, 255, 255);
  speed4= random(231, 321);
  weight4 = random(30, 52);

  //setting up divider
  divider = createSprite(800, 170, 1600, 20);
  divider.shapeColor = "white";

  //setting up divider2
  divider2 = createSprite(800, 370, 1600, 20);
  divider2.shapeColor = "white";

  //setting up divider3
  divider3 = createSprite(800, 570, 1600, 20);
  divider3.shapeColor = "white";

  //setting up divider4
  divider4 = createSprite(800, 770, 1600, 20);
  divider4.shapeColor = "white";

}

function draw() {
  background(0,0,0);  

  bullet.velocityX = speed/4;

  if (colided(bullet, wall)){
    bullet.velocityX = 0;
    damage = Math.round(0.5 * weight * speed * speed/(thickness*thickness*thickness));
    textSize(20);
    text("Damage = "+damage, 100, 100);
    text("Speed = "+Math.round(speed), 250, 100);
    text("Weight = "+Math.round(weight), 400, 100);
    if (damage <= 10){
      wall.shapeColor = "green";
    }else{
      wall.shapeColor = "red";
    }
    bullet2.velocityX = speed2/4
  }

  if (colided(bullet2, wall2)){
    bullet2.velocityX = 0;
    damage2 = Math.round(0.5 * weight2 * speed2 * speed2/(thickness2*thickness2*thickness2));
    textSize(20);
    text("Damage = "+damage2, 100, 300);
    text("Speed = "+Math.round(speed2), 250, 300);
    text("Weight = "+Math.round(weight2), 400, 300);
    if (damage2 <= 10){
      wall2.shapeColor = "green";
    }else{
      wall2.shapeColor = "red";
    }
    bullet3.velocityX = speed3/4;
  }

  if (colided(bullet3, wall3)){
    bullet3.velocityX = 0;
    damage3 = Math.round(0.5 * weight3 * speed3 * speed3/(thickness3*thickness3*thickness3));
    textSize(20);
    text("Damage = "+damage3, 100, 500);
    text("Speed = "+Math.round(speed3), 250, 500);
    text("Weight = "+Math.round(weight3), 400, 500);
    if (damage3 <= 10){
      wall3.shapeColor = "green";
    }else{
      wall3.shapeColor = "red";
    }
    bullet4.velocityX = speed4/4

  }

  if (colided(bullet4, wall4)){
    bullet4.velocityX = 0;
    damage4 = Math.round(0.5 * weight4 * speed4 * speed4/(thickness4*thickness4*thickness4));
    textSize(20);
    text("Damage = "+damage4, 100, 700);
    text("Speed = "+Math.round(speed4), 250, 700);
    text("Weight = "+Math.round(weight4), 400, 700);
    if (damage4 <= 10){
      wall4.shapeColor = "green";
    }else{
      wall4.shapeColor = "red";
    }
  }

  drawSprites();
}