
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

	//Create the Bodies Here.
	ball1=new Ball(300, 500)
	ball2=new Ball(350, 500)
	ball3=new Ball(400, 500)
	ball4=new Ball(450, 500)

	roof = new Roof(400, 200, 150, 20)
	rope1 = new Rope(roof.body, ball1.body)
	rope2 = new Rope(roof.body, ball2.body)
	rope3 = new Rope(roof.body, ball3.body)
	rope4 = new Rope(roof.body, ball4.body)
;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
 
}



