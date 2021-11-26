class Ball extends Block {
  constructor(x, y, r) {
    super(x, y, r);

    !x ? this.x = vrs.center : this.x = x;
    !y ? this.y = vrs.bottom : this.y = y;
    !r ? this.r = vrs.Size * 2 : this.r = r;
    this.mass = this.r * this.r / vrs.Size * 2;
    this.direct = vrs.positive,
      this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(1);

  }
  update_b() {
    let e = this;
    // if(e.vel<0){e.vel=size}     
    e.acc.add(e.gravforce);
    e.acc.setMag(vrs.mag);
    e.vel.add(e.acc);
    e.pos.add(e.vel);

    // this.vel.mult(this.negative)
  }


  show_b() {
    let e = this;
    fill(100, 100, 0);
    push();
    translate(e.pos.x, e.pos.y);
    ellipse(0, 0, e.r);
    pop();

  }


        e.hits = (inc, e) => {
            e = this;
            var d = dist(e.pos.x, e.pos.y, e.inc.x, e.inc.y);
            if (d < inc.r) {
                console.log("true");
                boost();
                return true;
            } else {
                return false;
            }
        };
        e.edges = (e) => {
  
            e = this;
            if (e.pos.x > width - e.r) {
                e.pos.x = -e.r;
            } else if (e.pos.x < -e.r) {
                this.pos.x = width + e.r;
            }
            if (e.pos.y > height + e.r) {
                e.pos.y = -e.r;
            } else if (e.pos.y < -e.r) {
                e.pos.y = height + e.r;
            }
        };
        e.boost = (e) => {
            e = this;
            e.force = p5.Vector.fromAngle(e.heading);
            e.force.mult(0.5);
            e.vel.add(e.force);


}