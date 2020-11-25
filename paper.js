class paper {

    constructor(x, y, r) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic: false
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, 5, options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("green");
        image(this.image, 0, 0, this.r);
        pop();
      }
}