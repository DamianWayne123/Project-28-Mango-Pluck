
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree,treeing;
var boy,boying;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload()
{
treeing=loadImage("tree.png");
boying=loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  	ground = new Ground(200,650,1200,15);
    mango1= new Mango(600,400,20,20);
    mango2= new Mango(855,400,20,20);
    mango3= new Mango(670,400,20,20);
    mango4= new Mango(730,400,20,20);
    mango5= new Mango(710,400,20,20);
    mango6= new Mango(780,400,20,20);
    mango7= new Mango(780,400,20,20);
    mango8= new Mango(780,400,20,20);
    mango9= new Mango(780,400,20,20);
    mango10= new Mango(780,400,20,20);

    attach= new Throw(stones.body,{x:100,y:455});

    tree=createSprite(775,368);
    tree.addImage(treening);
    tree.scale=0.42;

    boy=createSprite(160,550);
    boy.addImage(boying);
    boy.scale=0,125;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  textSize(18);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stones.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  attach.fly();
}

function detectCollision(stones,mango){

  if(stones.body.position.x - mango.body.position.x < mango.radius + stones.radius
    &&stones.body.position.x - stones.body.position.x < mango.radius + stones.radius
    &&mango.body.position.y - stones.body.position.y < mango.radius + stones.radius){
     
      Matter.Body.setStatic(mango.body,false);
    }
}

function  keyPressed(){
  if(keycode===32){
    Matter.Body.setPosition(stones.body{x:100,y:465})
      attach.Launch(stones.body)
  }
}







