
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);

	this.ground1 = new Ground(30,670,1600,20);
	this.dustbin1 = new Dustbin(600,645,320,30);
	this.dustbin2 = new Dustbin(455,615,30,80);
	this.dustbin3 = new Dustbin(755,615,30,80);
	this.paper = new Paper(100,645,30,30);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  this.ground1.display();
  this.dustbin1.display();
  this.dustbin2.display();
  this.dustbin3.display();
  this.paper.display();
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}



