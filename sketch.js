const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball,ground,ground2;

var chain;

var box1,box2,box3,box4,box5,box6,box7;

function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var options = {
        isStatic:false,
        restitution:1.0,
        density:3.0,
        friction:0.3
    }

    var ground_options = {
        isStatic:true
    }

    ball = Bodies.circle(200,200,30,options);
    World.add(world,ball);

    ground = Bodies.rectangle(600,350,1200,10,ground_options);
    World.add(world,ground);

    ground2 = Bodies.rectangle(950,230,200,10,ground_options);
    World.add(world,ground2);

    chain = new Chain(ball,{x:210,y:144});

    box1 = new Box(871,196,50,50);
    box2 = new Box(922,196,50,50);
    box3 = new Box(972,196,50,50);
    box4 = new Box(1020,196,50,50);
    box5 = new Box(925,150,50,50);
    box6 = new Box(975,150,50,50);
    box7 = new Box(950,90,50,50);

}

function draw(){
    background(51);
    Engine.update(engine);
    strokeWeight(4);
    text(mouseX+","+mouseY,mouseX,mouseY);   
    
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,30);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,10);

    rectMode(CENTER);
    rect(ground2.position.x,ground2.position.y,200,10);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode === 32){
        chain.attach(ball);
    }
}