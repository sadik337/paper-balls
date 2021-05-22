const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	paperball=new Paper(100,600,15);
  ground=new Ground(400,680,800,20);
	box1=new Dustbin(550,620,10,100);
	box2=new Dustbin(610,660,100,10);
	box3=new Dustbin(670,620,10,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paperball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperball.body,paperball.body.position,{x:35,y:-35})
	}
}
