var tom,tomImg,jerry,jerryImg,Ground,groundImg;
function preload() {
    //load the images here
    tomImg=loadImage("cat1.png","cat2.png","cat3.png")
    jerryImg=loadImage("mouse1png","mouse2.png","mouse3.png")
    groundImg=loadImage("garden.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry=createSprite(200,200,10,10)
    jerry.addAnimation(jerryImg)

    tom=createSprite(500,500,10,10)
    tom=loadImage("tomImg")
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
