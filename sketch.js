var ground , ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;	

function setup() {	
	createCanvas(800, 700);
	rectMode(CENTER);

	ball = createSprite(50,625,40,40);

	/*if(KEYCODE === UP_ARROW){
		ball.velocityX = 2;
		ball.velocityY = 2;
	}*/

	side1 = createSprite(580,650,200,20);
	side1.shapeColor = "red";
	side2 = createSprite(470,610,20,100);
	side2.shapeColor = "red";
	side3 = createSprite(685,610,20,100);
	side3.shapeColor = "red";	

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	groundSprite = createSprite(ground.position.x, ground.position.y, width, 10);
	groundSprite.shapeColor = color(255)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(180);
   
  drawSprites();
 
}

