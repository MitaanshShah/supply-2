var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, boxLine, boxLine2, boxLine3, boxLine3Body, boxLineBody, boxLine2Bod;
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
	rectMode(CENTER); //LOL are send me the zip file yar..this is really annoying

	engine = Engine.create();
	world = engine.world; 

	boxLineBody = Bodies.rectangle(width/2, 640, 200, 20, {isStatic:true})
	World.add(world, boxLineBody)

    boxLine2Body = Bodies.rectangle(300, 595, 20, 100)
	World.add(world, boxLine2Body)
	
	boxLine3Body = Bodies.rectangle(500, 595, 20, 100)
	World.add(world, boxLine3Body)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	boxLine = createSprite(boxLineBody.position.x, 650, 200, 20); 
	boxLine.shapeColor = "red"
	
	boxLine2 = createSprite(boxLine2Body.position.x, 610, 20, 100);
	boxLine2.shapeColor = "red"

	boxLine3 = createSprite(boxLine3Body.position.x, 610, 20, 100);
	boxLine3.shapeColor = "red"
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("blue"); 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false)
  }

  drawSprites();
 
}


 



