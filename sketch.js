
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new paper(200, 450, 100)
	wall1 = new bin(1000, 450, 200, 200)
	ground = new groung(width/2, 690, width, 20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 
  ball.display();
  wall1.display();
  ground.display();
}
 
function keyPressed(){
		if (keyCode === UP_ARROW){
				Matter.Body.applyForce(ball.body, ball.body.position, {x:2.5, y:-2.5});
	}
}


