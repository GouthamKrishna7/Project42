var background_img;
var spaceCraft , spaceCraft_img1 , spaceCraft_img2 , spaceCraft_img3 , spaceCraft_img4;
var iss , iss_img;
var hasDocked = false;
function preload(){
  background_img = loadImage('spacebg.jpg')
  spaceCraft_img1 = loadImage('spacecraft1.png')
  spaceCraft_img2 = loadImage('spacecraft2.png')
  spaceCraft_img3 = loadImage('spacecraft3.png')
  spaceCraft_img4 = loadImage('spacecraft4.png')
  iss_img = loadImage('iss.png')
}
function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(400, 350, 50, 50);
  spaceCraft.addAnimation('Space Craft',spaceCraft_img1);
  spaceCraft.addAnimation('Left SpaceCraft',spaceCraft_img3);
  spaceCraft.addAnimation('right SpaceCraft',spaceCraft_img4);
  spaceCraft.addAnimation('Down SpaceCraft',spaceCraft_img2);
  spaceCraft.addAnimation('Up SpaceCraft',spaceCraft_img1);
  spaceCraft.scale = 0.2
  iss = createSprite(400,200,50 , 50);
  iss.addAnimation('ISS',iss_img)
  iss.scale = 0.8

 spaceCraft.x = random(200,600)
}

function draw() {
  background(background_img); 
  if((spaceCraft.x > 347 && spaceCraft.x <352)  && (spaceCraft.y > 268 && spaceCraft.y <271)){
    hasDocked = true;
    textSize(25)
    fill('Red')
    stroke('Red')
    text('Docking Sucessful' , 300 , 370)
  }
  if(!hasDocked){
    spaceCraft.changeAnimation('Space Craft',spaceCraft_img1);
    if(keyDown("left")){
      spaceCraft.x = spaceCraft.x -2;
      spaceCraft.changeAnimation('Left SpaceCraft',spaceCraft_img3);
     
    }
    if(keyDown("right")){
      spaceCraft.x = spaceCraft.x +2;
      spaceCraft.changeAnimation('right SpaceCraft',spaceCraft_img4);
      
    }
    if(keyDown("down")){
      spaceCraft.changeAnimation('Down SpaceCraft',spaceCraft_img2);
    }
    if(keyDown("up")){
      spaceCraft.y = spaceCraft.y -2;
      spaceCraft.changeAnimation('Up SpaceCraft',spaceCraft_img1);
     
    }
  } 

  drawSprites();
}