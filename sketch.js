
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
var score=0;
//var bg2='pinkcolour.png';
var bg;

function preload()
{
  polygon_img=loadImage("polygon.png");
 

 getTime();
}

function setup()
 {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  score = 0;
  time = 0;
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
 //level one
 block1 = new Block(280,275,30,40);  
 block2 = new Block(310,275,30,40);
 block3 = new Block(340,275,30,40);
 block4 = new Block(370,275,30,40);
 block5 = new Block(400,275,30,40);
 block6 = new Block(430,275,30,40);
 block7 = new Block(460,275,30,40);
 block8 = new Block(490,275,30,40);
 //level two
 block9 = new Block(310,235,30,40);
 block10 = new Block(340,235,30,40);
 block11 = new Block(370,235,30,40);
 block12 = new Block(400,235,30,40);
 block13 = new Block(430,235,30,40);
 block14 = new Block(460,235,30,40);
 //level three
 block15 = new Block(340,195,30,40);
 block16 = new Block(370,195,30,40);
 block17 = new Block(400,195,30,40);
 block18 = new Block(430,195,30,40);
 //level four
 block19 = new Block(370,155,30,40);
 block20 = new Block(400,155,30,40);
 //level five
 block21 = new Block(385,115,30,40);

 //set two 
 //level one
 blocks1 = new Block(640,175,30,40);
 blocks2 = new Block(670,175,30,40);
 blocks3 = new Block(700,175,30,40);
 blocks4 = new Block(730,175,30,40);
 blocks5 = new Block(760,175,30,40);
 //level two
 blocks6 = new Block(670,135,30,40);
 blocks7 = new Block(700,135,30,40);
 blocks8 = new Block(730,135,30,40);
 //level three
 blocks9 = new Block(700,95,30,40);

  //polygon holder with slings
 
  polygon = Bodies.circle(150,200,20,);
  World.add(world,polygon);
  
  slingshot = new SlingShot(this.polygon,{x:150,y:200});
  
}
function draw() {
  if (bg)
  background(bg);

  textSize(35);
  fill("white");
  text("Score: " +score,690,40);

  Engine.update(engine);
 
  textSize(30);
  fill("lblack");
  text("To Launch It, Drag It !!",200,30);

  textSize(16);
  text("Press Space To Launch Again",500 ,350);

  ground.display();
  fill("black");
  stand1.display();
  fill("yellow");
  stand2.display();
  fill("yellow");
  strokeWeight(2);
  stroke(15);
  fill("black"); 
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  fill("black");
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  fill("black");  
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block16.score();
  block18.display();
  block18.score();
  fill("black"); 
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  fill("black"); 
  block21.display();
  block21.score();
  fill("black"); 
  blocks1.display();
  blocks1.score();
  blocks2.display();
  blocks2.score();
  blocks3.display();
  blocks3.score();
  blocks4.display();
  blocks4.score();
  blocks5.display();
  blocks5.score();
  
  fill("black"); 
  blocks6.display();
  blocks6.score();
  blocks7.display();
  blocks7.score();
  blocks8.display();
  blocks8.score();
 
  
  fill("black"); 
  blocks9.display();
  blocks9.score();
  fill("black"); 

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();
  
}
function mouseDragged()
{
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.polygon,{x:150,y:50});    
    slingshot.attach(this.polygon);
    
    }
 }

 async function getTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  
  var date=responseJSON.datetime;
  var hour=date.slice(11,13)
  console.log(hour);

  if(hour>=06 && hour<=16)
 
  {
    bg="lightgreen"
    // bg2="images/pinkcolour.jpg";
  }
else{
bg="lightblue"
  //   bg2="images/bluecolour.png";
  }
  //bg=loadImage(bg2);
}
 
  