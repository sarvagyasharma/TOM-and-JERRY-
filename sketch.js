var bg ;
var bgimg;
var cat;
var catimg1;
var catimg2;
var catimg3;
var rat ;
var ratimg1;
var ratimg2;
var ratimg3
function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg3 = loadAnimation("images/cat4.png")
    
    ratimg1 = loadAnimation("images/mouse1.png");
    ratimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    ratimg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,650,10,10);
    cat.addAnimation("cat",catimg1);
    cat.addAnimation("catwalk",catimg2);
    cat.addAnimation("happycat",catimg3);
    cat.scale = 0.2;

    rat = createSprite(150,650,10,10);
    rat.addAnimation("rat",ratimg1);
    rat.addAnimation("ratwalk",ratimg2);
    rat.addAnimation("happyrat",ratimg3);
    rat.scale = 0.2;
    

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - rat.x < (cat.width/2 - rat.width/2) ){
       
       cat.velocityX = 0
       rat.velocityX = 0
       cat.changeAnimation("happycat");
       rat.changeAnimation("happyrat");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === RIGHT_ARROW){
    rat.velocityX = 3;  
    rat.changeAnimation("ratwalk");

   
   }

   if(keyCode === LEFT_ARROW){
       cat.velocityX = -3
       cat.changeAnimation("catwalk");
   }

}
