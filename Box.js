class Box{
    constructor(x,y,width,length){
        var options = {
            isStatic:false,
        }
        this.body = Bodies.rectangle(x,y,width,length,options);
        this.w = width;
        this.l = length;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.w,this.l);
        pop();
    }
}