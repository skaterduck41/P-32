const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1;
var block1;
var hex1;
var slingShot1;
var text;
var score= 0;

function setup() {
createCanvas(800,400);
engine = Engine.create();
world = engine.world
Engine.run(engine)
ground1 = new Ground(100,400, 1500,20);
block1 = new Ground(600, 235, 250, 20);
block2 = new Ground(300, 350, 350, 20);
box1 = new Box(490, 210, 50, 50)
box2 = new Box(530, 210, 50, 50)
box3 = new Box(560, 210, 50, 50)
box4 = new Box(610, 210, 50, 50)
box5 = new Box(660, 210, 50, 50)
box6 = new Box(530, 180, 50, 50)
box7 = new Box(560, 180, 50, 50)
box8 = new Box(610, 180, 50, 50)
box9 = new Box(610, 150, 50, 50)
box10 = new Box(560, 150, 50, 50)
box11 = new Box(200, 310, 50, 50)
box12 = new Box(250, 310, 50, 50)
box13 = new Box(300, 310, 50, 50)
box14 = new Box(350, 310, 50, 50)
box15 = new Box(400, 310, 50, 50)
box16 = new Box(250, 280, 50, 50)
box17 = new Box(300, 280, 50, 50)
box18 = new Box(350, 280, 50, 50)
box19 = new Box(300, 250, 50, 50)
box20 = new Box(350, 250, 50, 50)
box21 = new Box(320, 220, 50, 50)
hex1 = new Hex(200,200)
//hex1 = Bodies.circle(50,200, 20);
//World.add(world,hex1)
//hex1 = new Hex(200,200)

slingShot1 = new SlingShot(hex1.body,{x:200, y:200});



}

function draw() {
  background(255,255,255);
  text("SCORE: " + score, 600, 40);
  console.log("SCORE: " + score);  
 // Engine.update(engine);
  ground1.display();
  block1.display();
  block2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  slingShot1.display();
  hex1.display();
box1.score();

console.log("SCORE: " + score);
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
}

function mouseDragged() {
  Matter.Body.setPosition(this.hex1, {x: mouseX , y: mouseY});

}


function mouseReleased() {
  slingShot.fly();
  
}
function keyPressed(){
  if (keyCode===32){
      slingShot.attach(hex1.body)
     Matter.Body.setPosition(hex1.body,{x:200, y:200})
  }
}