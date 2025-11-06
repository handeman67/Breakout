class Block {
   constructor(x, y, w, h, clr, blockcount) {
      !clr ? this.clr = 50 : this.clr = clr;
      !x ? this.x = 50 : this.x = x;
      !w ? this.w = vrs.Size : this.w = w;
      !h ? this.h = vrs.Size : this.h = h;
      !y ? this.y = 50 : this.y = y;
      !blockcount? blockcount="block":blockcount;
      this.blockcount=blockcount;
      this.inc = [];   
      this.inc.push("");
      this.pos = createVector(this.x, this.y);
      this.vel = p5.Vector.random2D();
      this.vel.mult(Math.random(wth));
      this.force = p5.Vector.fromAngle(this.vel.heading);
      this.acc = createVector(0, 0);
      this.color=color('yellow');
      this.gravforce = createVector(0, 0.03);
      this.groundforce = createVector(0, 1);
      this.mass = w * h / 2;
      this.collide = false;
      this.bounce = false;
      this.boundry ={
         left: this.pos.x,
         right : this.pos.x + this.w,
         top : this.pos.y,
         bottom : this.pos.y + this.h
      }
      this.showtext=(a,b,c)=>{
         let e = this;
         push();
           stroke(200, 100, 0);
           strokeWeight(2);
           textSize(20);
           text(a, b, c);    
           pop();
       }
      this.detection = (a, b) => {
         if (a.pos.x >= this.boundry.right || a.pos.x <= this.boundry.left) {
            console.log('detect hit','walls');
            Bounce(a);
          
         }
         if (a.pos.y <= this.boundry.top || a.pos.y >= this.boundry.bottom) {
            console.log('detect hit','floor and ceiling');
            Bounce(a);
        
         } };
      this.show_bl = () => {
         noStroke();
         stroke(this.color);
         fill(this.clr);
          text(this.blockcount, this.w+vrs.Size, this.h+vrs.Size);
         rect(this.pos.x, this.pos.y, this.w, this.h, 10, 10, 10, 10);
         };
      this.hits=(inc, a,)=>{
         let d = dist(a.pos.x, a.pos.y, inc.pos.x, inc.pos.y);
         console.log("before",d);
         if (d <= a.w) {
            console.log("lessthan");
            this.collide = true;
            this.bounce = true;     
          } else {
            console.log("morethan");
            this.collide = false;
            this.bounce = false;
          }
       };
   }
}
