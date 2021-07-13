class Snow {
     constructor(x,y,r) {
         var options = {
              'friction': 0.5,
              'density' : 0.8,
         }

         this.x = x
         this.y = y
         this.r  = r
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);


        

     }
     display () {
       push () 
       imageMode(CENTER);
       image(this.image, 0, 0, this.r*2, this.r*2);
       pop();

     }

     
     }
