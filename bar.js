class bar{
    constructor(x,y,width,height){
        var options = {
             isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        pop();
      }

}