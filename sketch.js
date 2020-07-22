const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Suno;
var Mercuryo;
var Venuso;
var Eartho;
var Marso;
var Jupitero;
var Saturno;
var Uranuso;
var Neptuneo;

function setup() {
  createCanvas(1375,650);
  engine = Engine.create();
  world = engine.world;
  Suno = new sun1Class(650,350,200,200,10);
  Mercuryo = new mercury1Class(450,325,100,100,10);
  Venuso = new venus1Class(350,325,100,100,10);
  Eartho = new earth1Class(250,325,100,100,10);
  Marso = new mars1Class(150,325,100,100,10);
  Jupitero = new jupiter1Class(850,325,100,100,10);
  Saturno = new saturn1Class(950,325,100,100,10);
  Uranuso = new uranus1Class(1050,325,100,100,10);
  Neptuneo = new neptune1Class(1150,325,100,100,10);

}

function draw() {
  Engine.update(engine);
  background(0);  
  Suno.display();
  Suno.width = 200 + frameCount/10;
  Suno.height = 200 + frameCount/20;
  Mercuryo.display();
  Venuso.display();
  Eartho.display();
  Marso.display();
  Jupitero.display();
  Saturno.display();
  Uranuso.display();
  Neptuneo.display();
 
  if(Suno.body.position.x-Mercuryo.body.position.x < Suno.width/2 + Mercuryo.width/2){
    Mercuryo.width = 0.001;
    Mercuryo.height = 0.001;
  }
  if(Suno.body.position.x-Venuso.body.position.x < Suno.width/2 + Venuso.width/2){
    Venuso.width = 0.001;
    Venuso.height = 0.001;
  }
 
}
