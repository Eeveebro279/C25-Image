class bin {

    constructor(x, y, width, height, angle) {
        var options = {
            restitution:0.0,
            friction:10.05,
            density:3.0,
            isStatic: true
        }
        this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("magenta");
        fill("purple");
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

}