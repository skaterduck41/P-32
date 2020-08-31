class Box{
    constructor(x, y, width, height) {
        var options = {
         // isStatic: false,
          'restitution':0.8,
            'friction':0,
            'density':1.0
        }
        this.Visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/box.png");
        World.add(world, this.body);
//var score1 =0;
      }
      score(){
        if (this.Visibility<0 && this.Visibility >=105){
          score++
        }
            }
        display(){
         
          if (this.body.speed<3) {
           var angle = this.body.angle;
           var pos  = this.body.position
            push();
        
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
          else {
            World.remove(world,this.body)
            push();
            this.Visibility = this.Visibility - 5
           tint(255, this.Visibility)
            image(this.image, this.body.position.x, this.body.position.y, 50, 50)
            pop();
          }
   
      }
   }
   