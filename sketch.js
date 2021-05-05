const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground;
var box1,box2;

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.myWorld;
  //my world is my engines world
  ground=new Ground(200,380,400,20)
box1=new Box(200,300,50,50);
box2=new Box(240,100,50,80);

 
}

function draw() {
  background(0);
  Engine.update(myEngine);
  ground.display();
  box1.display();
  box2.display();

 
}   