class Ground{
//properties
constructor(x,y,width,height){
var options = {
    isStatic : true
}
    this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);

this.height = height;
this.width = width;
}

//functions
display(){
    var pos = this.body.position;
    rectMode(CENTER);
   
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);
}

}