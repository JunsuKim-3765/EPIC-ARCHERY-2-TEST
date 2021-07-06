const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;

var computerArcher, playerArcher;
function setup() {
  canvas = createCanvas(1536, 840);

  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  playerBase = new PlayerBase(450,500, 180, 150);
  player = new Player(435,354, 50, 180);
 
  //Create Player Archer Object
  playerArcher = new Playerarcher(490,324,120,120);

  computerBase = new ComputerBase(1070,500,180,150);
  computer = new Computer(1070,354,50,180);
  computerArcher = new ComputerArcher(1470,324,120,120);
  
  //Create an arrow Object
  computerArrow=new ComputerArrow(800, 200, 10, 10);
  playerArrow=new PlayerArrow(20, 20, 10, 10);

  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display();

  //Display arrow();
  computerArrow.display();
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    playerArrow.shoot(playerArcher.body.angle);
    //Call shoot() function and pass angle of playerArcher
    shoot(playerArcher.body.angle);

  }
}



