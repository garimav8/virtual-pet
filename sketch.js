var database

var dog,sadDog,happyDog;

 var feed
 var addMilk
 var FoodStock
 var foodObj
 //var food
 var FoodS;
 //var foodStock= 20;


 var fedTime
 var lastFed 
 var FeedTime 

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,500);

  database = firebase.database();

  dog=createSprite(800,300,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food()
  //foodObj.getFoodStock()
  console.log(foodObj.foodStock)
 

  feed= createButton("Feed the dog")
  feed.position(700,100)
  feed.mousePressed(feedDog);

  addMilk = createButton("Add the Food")
  addMilk.position(800,100)
  addMilk.mousePressed(addFood)

 
}

function draw() {
  background(46,139,87);

  drawSprites();

  foodObj.display();
 // console.log(hour())

  fill(255,255,254);
  textSize(15)
 if(hour()>=12){
 text("Last Feed : " + hour()%12  + " PM " , 320,35)
 }
 else if(lastFed == 0){
  text("Last Feed : 12 AM " , 320,35)
  }
 else{
   text("Last Feed : " + hour() + " AM " , 320,35);
  }

  
}

//function to read food Stock

//fedTime= database.ref('FeedTime');
//fedTime.on("value",function(data){
 // lastFed= data.val();
//})


//function to add food in stock
function addFood(){

  foodObj.addFood()
 // updateFoodStock(foodObj.FoodStock)

/*if( foodObj.updateFoodStock(foodObj.foodStock+1)){
  FoodStock.display;
}*/
}
//function to update food stock
 /*function feedDog(){
 dog.addImage(happyDog)

 if(foodObj.getFoodStock()<=0){
  foodObj.updateFoodStock(foodObj.getFoodStock()*0);
}
  else{
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}*/

//function to update food stock and last fed time
 function feedDog(){

  dog.addImage(happyDog)

 foodObj.deductFood()

 
 //database.ref('/').update({
  // FeedTime:hour()
 //})
 //updateFeedTime()
 
 
 //if("feed the dog".button = Pressed){
 // foodObj.add(150,150)
 //}

   /* var food = foodObj.foodStock
   if(foodObj.foodStock<=0){
   foodObj.updateFoodStock(food*0);
   }
   else{
    foodObj.updateFoodStock(food-1)
    }*/

   
 
  }

  
  


