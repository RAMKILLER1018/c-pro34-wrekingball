const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box11
,box12,box13,box14,box15,box16,box21,box22,box23,box24,box25,box26,box27;
var ball,sling;

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(750,780,1500,20);
    //1
    box1 = new Box(800,750,70,70);
    box2 = new Box(800,750,70,70);
    box3 = new Box(800,750,70,70);
    box4 = new Box(800,750,70,70);
    box5 = new Box(800,750,70,70);
    box6 = new Box(800,750,70,70);
    box7 = new Box(800,750,70,70);
    box8 = new Box(800,750,70,70);
//2
    box11 = new Box(900,750,70,70);
    box12 = new Box(900,750,70,70);
    box13 = new Box(900,750,70,70);
    box14 = new Box(900,750,70,70);
    box15 = new Box(900,750,70,70);
    box16 = new Box(900,750,70,70);

    //3
    box21 = new Box(1000,750,70,70);
    box22 = new Box(1000,750,70,70);
    box23 = new Box(1000,750,70,70);
    box24 = new Box(1000,750,70,70);
    box25 = new Box(1000,750,70,70);
    box26 = new Box(1000,750,70,70);
    box27 = new Box(1000,750,70,70);

    ball = new Ball(600,300,60);

    sling = new SlingShot(ball.body,{x:600,y:300});
}

function draw(){
    background("gray");
    Engine.update(engine);

    ground.display();
   //1
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
//2
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    //3
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();

    ball.display();

    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
