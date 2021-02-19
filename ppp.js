var cat,catImg,mouse,mouseImg,Ground,groundImg;
function preload() {
    //load the images here
    catImg=loadImage("cat1.png","cat2.png","cat3.png","cat4.png")
    mouseImg=loadImage("mouse1png","mouse2.png","mouse3.png","mouse.png")
    groundImg=loadImage("garden.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(200,200,10,10)
    moose.addAnimation(mouseImg)

    cat=createSprite(500,500,10,10)
    cat=loadImage("catImg")
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2)
{
    cat.addAnimation("catLastImage",catImg3)
    cat.changeAnimation("catLastImage")
}
Text(mouseX+','+mouseY,10,45)
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("catRunning",catImg2)
    cat.changeAnimation("catRunning")
}

}
