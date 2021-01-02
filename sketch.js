//Create variables here
var dog,happyDog,foodS,foodStock;
var dogImage1;
var database;

function preload()
{
  //load images here
dogImage1 = loadImage("dogImg.png");

happyDog = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
createCanvas(800,800);
dog = createSprite(400,400,5,5);
dog.addImage(dogImage1);
dog.scale = 0.3;

foodStock = database.ref('food');
foodStock.on("value",readStock);
  
}


function draw() 
{
  background(546,139,37);  

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
 
  textSize(20);
  stroke("green");
  fill("yellow");
  text("foodStock "+foodS,670,50);
  text("note : press up arrow key to feed drago milk", 20,50);

 
 
}

function readStock(data)
{
foodS = data.val();
}

function writeStock(x)
{
if(x<=0)
{
  x=0
}else{
  x = x - 1;
}
database.ref('/').update({
food:x 
})
}

