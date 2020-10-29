const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	
	boy = createSprite(400,550);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	tree = new Tree(900,400,30,300);
	ground = new Ground(600,600,2000,20);
	mango1 = new Mango(900,250,15);
	mango2 = new Mango(800,200,15);
	mango3 = new Mango(800,280,15);
	mango4 = new Mango(1000,250,15);
	mango5 = new Mango(670,300,15);
	mango6 = new Mango(800,320,15);
	mango7 = new Mango(1000,340,15);
	stone = new Stone(350,550,15);
	boyShot = new Shot(stone.body,{x:350,y:500});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);

  background("lightgray");
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  boyShot.display();
  isTouching(stone,mango1);
  isTouching(stone,mango2);
  isTouching(stone,mango3);
  isTouching(stone,mango4);
  isTouching(stone,mango5);
  isTouching(stone,mango6);
  isTouching(stone,mango7);
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boyShot.fly();
}
function isTouching(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);
	}
}