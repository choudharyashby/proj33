  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;


  var backgroundImg;


function preload () {
  backgroundImg = loadImage("snow3.jpg");

}




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}