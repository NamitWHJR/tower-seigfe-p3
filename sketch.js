const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var sling1
var score = 0

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    holder = new Ground(800,250,250,30)

    //box1 = new Box(700,320,70,70);
    //box2 = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
//level one
    box1 = new Box (700,200,50,50)
    box2 = new Box (750,200,50,50)
    box3 = new Box (800,200,50,50)
    box4 = new Box (850,200,50,50)
    box5 = new Box (900,200,50,50)
//level two
   
    box6 = new Box (750,150,50,50)
    box7 = new Box (800,150,50,50)
    box8 = new Box (850,150,50,50)
    box9 = new Box (800,100,50,50)

   






    
    sling1 = new SlingShot (bird.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    textSize(30)

    fill("red")

    text("score:"+ score,900,50)

    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    //ground.display();
    //pig1.display();
    //log1.display();

    //box3.display();
    //box4.display();
    //pig3.display();
    //log3.display();

    //box5.display();
    //log4.display();
    //log5.display();

    bird.display();
    platform.display();

    holder.display()
    
    sling1.display();
    
    //box1.score();
    //box2.score();
    //box3.score();
    //box4.score();
    //box5.score();
    //box6.score();
    //box7.score();
    //box8.score();
    //box9.score();
}

function mouseDragged(){
Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY})  

}

function keyPressed(){
    if(keyCode == 32){

sling1.attach(bird.body)

    }
}

function mouseReleased(){
sling1.fly()

}
