class Food{
  constructor(){

   this.foodStock  = 20;
   // this.lastFed = 0;

    this.image = loadImage("Images/Milk.png");
    }


  getFoodStock(){
    database.ref('FoodStock').on("value", function(data){

     this.foodStock = data.val();
      
      })

    }
  
  updateFoodStock(Stock){
   database.ref('/').update({

     'FoodStock' : Stock
      
     })

   }
    
   addFood(){


    this.foodStock = this.foodStock + 1
  
    this.updateFoodStock(this.foodStock)
  
   } 


   deductFood(){


    if(this.foodStock>0){

    this.foodStock = this.foodStock - 1
}
else {this.foodStock = 0}  
    this.updateFoodStock(this.foodStock)


   }

   updateFeedTime(){
     database.ref('/').update({
      'FeedTime':hour()
     })
     

   }

   FeedTime(){
    //fedTime=database.ref('FeedTime');
    //fedTime.on(function(data){
   
   //  lastFed = data.val();
   //})
   updateFeedTime.display()
   }


    display(){
      var x= 150, y =200;
    
      imageMode(CENTER);
       //  image(this.image,150,250,70,70);
       
      if(this.foodStock!=0){
       for (var i=0; i<this.foodStock; i++){
        if(i%10==0){
          x=150;
          y=y+50;
        }
        image(this.image,x,y,60,60);
        x=x+30;
       }
      }

     // if(this.foodStock<=19){
        image(this.image,710,320,60,60);
     // }


     }
    
     

   
}



  
