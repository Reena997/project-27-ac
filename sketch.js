
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
	world = engine.world;

	//bobDiameter = 240;

	roof = new Roof(400,100,600,50);
	bob1 = new Bob(160,600,120);
	bob2 = new Bob(280,600,120);
	bob3 = new Bob(400,600,120);
	bob4 = new Bob(520,600,120);
	bob5 = new Bob(640,600,120);

	rope1 = new Rope(bob1.body,roof.body,-240,0);
	rope2 = new Rope(bob2.body,roof.body,-120,0);
	rope3 = new Rope(bob3.body,roof.body,-0,0);
	rope4 = new Rope(bob4.body,roof.body,120,0);
	rope5 = new Rope(bob5.body,roof.body,240,0);
	//Create the Bodies Here.
//bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
//rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  keyPressed();
  
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
}
function keyPressed(){
	if(keyDown("r")){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:130,y:-145});

		
	}
}



