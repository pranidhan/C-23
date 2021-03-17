const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box (290,100,30,100);//pass property as an argument
    box2 =new Box(300,150,30,30);
    ground=new Ground(200,380,400,20)
   
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   box2.display();
   ground.display();
}