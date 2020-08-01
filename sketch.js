var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redZone,redZone2,redZone3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	groundSprite=createSprite(width/2, height, width,10);
	groundSprite.shapeColor=color(255)

	redZone=createSprite(400,600,200,20);
	redZone.shapeColor=color("red");

	redZone2=createSprite(305,520,10,150);
	redZone2.shapeColor=color("red");

	redZone3=createSprite(495,520,10,150);
	redZone3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 580, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	redZone = Bodies.rectangle(400,600,200,10, {isStatic:true} );
	World.add(world, redZone);

	redZone2 = Bodies.rectangle(305,520,10,150, {isStatic:true} );
	World.add(world, redZone2);

	redZone3 = Bodies.rectangle(495,520,10,150, {isStatic:true} );
	World.add(world, redZone3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    
  }
}



