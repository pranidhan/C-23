class Box {
    constructor(x,y,width,height){//parameters
       this.body = Matter.Bodies.rectangle(x,y,width,height)
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }
    display(){


        var pos = this.body.position
       push();
        translate(pos.x,pos.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }


}