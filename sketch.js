const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var diameter;

var ball5;

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bar = new Bar(680, 100, 600, 15)
	 diameter = 50
	 
	 ball = new Ball(480, 402, 23);
	 string1 = new String(ball.body, bar.body, -diameter*2, 0)
	 ball2 = new Ball(680, 412, 23);
	 string2 = new String(ball2.body, bar.body, -diameter*1, 0)
	 ball3 = new Ball(765, 403, 23);
	 string3 = new String(ball3.body, bar.body, -diameter*0, 0)
	 ball4 = new Ball(870, 380, 23);
	 string4 = new String(ball4.body, bar.body, -diameter*-1, 0)
	 ball5 = new Ball(880, 398, 23);
	 string5 = new String(ball5.body, bar.body, -diameter*-2, 0)
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bar.display();
  ball.display();
  string1.display();
  ball2.display();
  string2.display();
  ball3.display();
  string3.display();
  ball4.display();
  string4.display();
  ball5.display();
  string5.display();
  

  text(mouseX+","+mouseY,mouseX,mouseY);
 
}
function mouseDragged(){
	Body.setPosition(ball5.body, {x:mouseX, y:mouseY})
	}
	
	function mouseReleased(){
	string1.fly()
	}



