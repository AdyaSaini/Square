class box {
    constructor(x,y,width,height){
        var options ={
            restitution:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        rect(pos.x, pos.y, this.width, this.height);
    }
}