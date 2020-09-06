
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var ground;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	tree=loadImage("tree.png")
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground= new Ground(10,680,2000,10);
	stone= new Stone(140,580,30,30);
	mango1= new Mango(760,360,40,40);
	mango2= new Mango(620,440,40,40);
	mango3= new Mango(680,440,40,40);
	mango4= new Mango(800,420,40,40);
	mango5= new Mango(740,400,40,40);
	sling = new Sling(stone.body,{x:180,y:580});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  
  image(tree,500,280,400,400);
  image(boy,140,530,200,200);
 

  
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling.display();
  


  detectCollision(stone.body,mango1.body);
  detectCollision(stone.body,mango2.body);
  detectCollision(stone.body,mango3.body);
  detectCollision(stone.body,mango4.body);
  detectCollision(stone.body,mango5.body);
 
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
}

function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone.body, {x:235,y:420});
sling.attach(stone.body);
}
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}
