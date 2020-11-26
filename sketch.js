
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;
var box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	body = engine.body;

	//Create the Bodies Here.
	ground = new Ground(600, 380, 1200, 20);
	box1 = new Box(900, 360, 200, 20);
	box2 = new Box(800, 320, 20, 100);
	box3 = new Box(1000, 320, 20, 100);

	paper = new Paper(200, 320, 10);
	

	Engine.run(engine);
  
}


function draw() {
	background(0);
	rectMode(CENTER);

	ground.display();
	box1.display();
	box2.display();
	box3.display();
	paper.display();

	

}

function keypressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
	}
}

