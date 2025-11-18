// Physics build up.Phsudo code 
collisionDetect: {
    collisionType: {
        bounce: bounceDetect = () => {
            console.log('bounceDetect');
        };
        normal: normalDetect = () => {
            console.log('normalDetect');
        }
        collisionTransfer: {
            let object1 = 1,
            object2=1,friction = 0.02
            object1- object2 * friction;
        };
    };
}
// v.js
const blockCount=[],
wallCount=[],
bounces=[],
balls= [],
player= [],
blok= [],
Walls= [];
function boundry(elm,d){
elm.pos.x <= gamebound.boundryleft?elm.pos.x+= -1 :elm.pos.x+=elm.pos.x ,
elm.pos.x >= gamebound.boundryright?elm.pos.x=elm.pos.x+= -1 :elm.pos.x+=elm.pos.x,
elm.pos.y >= gamebound.boundrybottom?elm.pos.y+= 1*vrs.positive:elm.pos.y*=vrs.negative,
elm.pos.y <= gamebound.boundrytop?elm.pos.x+= -1*vrs.positive:elm.pos.x+= 1*vrs.negative;
elm.collide = true;
return elm;
}
async function v(x,y,z,varib) {
varib = await function(){return createVector(x, y, z);};
    return varib;
}
function wall(spots) {
  Object.keys(spots).forEach((spot, index) => {
     
      let ss=spots[spot];
        wallCount.push(ss);
        ss.collide=false;
        ss.bounce=false;
        let elm = new Block(ss.x, ss.y, ss.w, ss.h, ss.c);
        Walls.push(elm);
        
    });
}
function setBalls(balls,vrs){
  while (balls < vrs.num) {
     balls.push(new Ball(vrs.center, 50, 10, 50));};
 }
 function setPlayer(player,vrs){
  player.push(
    new Paddle(vrs.center, hgt-vrs.offset*vrs.Size/2,50,10,0));
 }
function setBloks(blok,vrs){
  for (let i = 0; i < vrs.num; i++) {
    blok.push(new Block(random(vrs.Size,wth-vrs.Size),
     random(hgt),50,10,color(random(255),
     random(255),random(255)),`${i+1}`));
    }
};


function Force(x, y, m = 1) {
        this.force=createVector(this.force,x,y);
      this.force.normalize();
      this.force.mult(m);
      return this.force;
  }
if(bounces.length>3){

}
function boost(a){
    let force = p5.Vector.fromAngle(a.vel.heading * -0.001);    
    console.log("boosting",a);
    a.vel.mult(force);
return a;
  }
  
function Bounce(b){
    if(this.bounce){
    
     b.vel.add(vrs.wind);
      b.boost();
      b.acc.setMag(0.1);
    b.gravforce.mult(b.groundforce);
    b.vel.mult(-1);
    
    
  }
  return b;
 }
 function collider(b){
    if(this.collide){
    
     b.vel.add(vrs.wind);
      b.boost();
      b.acc.setMag(0.1);
    b.gravforce.mult(b.groundforce);
    b.vel.mult(-1);
  }
 }
// vars.js

let wth=innerWidth,
hgt=innerHeight;
 
const vrs={   num: 1,
    offset:20,
    mag:0.007,
    Size: 10,
    grav:0.03,
    ground:-0.03,
    wind:0.3,
    mass:0,
    spd: 1,
    negative: -1,
    positive: 1,
    angle: Math.PI*2,
    bottom: wth / 1.3,
    center: hgt / 2,
},
gamebound={
boundryleft:0+vrs.offset ,
boundryright:wth-vrs.offset,
boundrybottom:hgt-vrs.offset,
boundrytop:vrs.offset,
},
wallspecs = {
    "leftwall" : {
        'x': gamebound.boundryleft,//*
        'y': gamebound.boundrybottom,
        'w': vrs.Size,
        'h':hgt+vrs.Size,
        'c':'rgb(200,0,200)',
        'blockcount':'left'
    },
    "rightwall" :{
        'x': gamebound.boundryright,
        'y': gamebound.boundrybottom,
        'w': vrs.Size,
        'h': hgt+vrs.Size,
        'c': 'rgb(0,200,0)',
        'blockcount':'right'
    },
    "flor" : {
        'x': gamebound.boundryright,
        'y': gamebound.boundrybottom,
        'w': wth+vrs.Size,
        'h': vrs.Size,
        'c': 'rgb(0,0,200)',
        'blockcount':'bottom'
    },
    "roof" : {
        'x': gamebound.boundrytop,
        'y': gamebound.boundrytop,
        'w': wth+vrs.Size,
        'h': vrs.Size,        
        'c': 'rgb(200,50,200)',
        'blockcount':'top'
    }
};

// blocks.js
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

// player.js
class Paddle extends Block{
   constructor(x,y,w,h,clr,blockcount)
   {
      super(x, y, w, h);
      !clr?this.clr=50:this.clr=clr;
      !x?this.x=vrs.center:this.x=x;
      !w?this.w=vrs.Size*2:this.w=w;
      !h?this.h=vrs.Size:this.h=h;
      !y?this.y=vrs.bottom:this.y=y;
      !blockcount?this.blockcount=`(${this.pos.y},${ this.pos.x})`:this.blockcount=blockcount;
      this.vel.sub(this.vel);
      this.mass=this.w*this.h/2;
      }
      show_p(){
         noStroke();
         fill(this.clr);
         rect(this.pos.x ,this.pos.y,this.w,this.h, 10, 10, 10, 10);
         text(`paddel`, this.pos.x ,this.pos.y-vrs.Size*2);
      };
      playerBoundry(){
         console.log("playerBoundry")
      }
      update_p(){ 
         this.move();
       if(this.collide){
          console.log('colliding')
       }
      };
      move(){
         let e=this;
      if (keyIsDown(37)) {
     
         this.pos.x -= vrs.spd/2;
     }
      if (keyIsDown(39)) {
         this.pos.x += vrs.spd/2;
   
       }
   }
   hits(inc){
      let e = this;
      let d = dist(e.pos.x, e.pos.y, inc.pos.x, inc.pos.y);
      if(d<=100){
         console.log("onehundred");    
       boundry(e);
if(this.collide){
   console.log("collide");
}
 }     // if (gamebound.boundryleft&&d <= 108) 
      // { e.pos.x  = gamebound.boundryleft+vrs.Size;console.log("detecting left",this.boundry.left,"d",d);}
      //    //  e.pos.x -= (e.pos.x/2)* vrs.negative}
      //    if (gamebound.boundryright&&d <= 75) 
      //    {e.pos.x=gamebound.boundryright-vrs.Size;console.log("detecting right",this.boundry.right,"d",d);}

         //   if(bounces.length>3){
         //    console.log('bounces', d);
         //    bounces.splice(0,1);
         //   //  console.log('bounces', this.groundforce);
         //   }
      this.move();
      this.collide = false;
      this.bounce=false;
   }

}

// arrows.js
const Arrow=()=>{let v0 = createVector(50, 50);
   let v1 = createVector(mouseX - 50, mouseY - 50);
    push();
   stroke(100,255,0);
   strokeWeight(3);
   fill(100,100,100);
   translate(center,0);
   line(0, 0, vec.x, vec.y);
   rotate(vec.heading());
   let arrowSize = 7;
   translate(vec.mag() - arrowSize, 0);
   triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
   pop();
   drawArrow(v0, v1, 'black'); 
   let myHeading = v1.heading();
   noStroke();
   text(
     'vector heading: ' +
       myHeading.toFixed(2) +
       ' radians or ' +
       degrees(myHeading).toFixed(2) +
       ' degrees',
     10,
     50,
     90,
     50
   );
 };
// balls.js
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
    if(e.collide){
    console.log(`hit at ${a.pos.y}`, inc)
    }else{
e.acc.add(e.gravforce);
    e.acc.setMag(vrs.mag);
    e.vel.add(e.acc);
    e.pos.add(e.vel);
    }    
    // if(e.vel<0){e.vel=size}     
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

}
// sketch.js
/*jshint esversion: 6 */

function setup() {

    createCanvas(wth,hgt, P2D);
    wall(wallspecs);
    setBalls(balls,vrs); 
    setPlayer(player,vrs);
    setBloks(blok,vrs);

 

}

function draw() {
    
    rectMode(RADIUS);
    ellipseMode(RADIUS);
    background(200, 200, 20);
    for (let b of balls) {
    
        b.show_b();
        b.update_b();
       
        b.showtext(`x : ${Math.floor(b.pos.x)}`,50,200);
        b.showtext(`y : ${Math.floor(b.pos.y)}`,250,200);
        b.showtext(`bouncing: ${b.bounce}  num= ${bounces.length}`,50,100);
        b.showtext(`mouse X : ${mouseX}  mouse Y : ${mouseY}`,50,150);
        for (let W of Walls) {
            //  b.hits(b,W,0);  
            W.show_bl();
            b.detection(W)
          
            for (let p of player) {

                b.hits(p,b,40);
                b.hits(W,b,W.y);
                p.show_p();
                p.update_p();
                // p.hits(W,p,100);
               
                // W.hits(p,W);
                W.hits(b,W,b.r);
                for (let bl of blok) {
                    bl.show_bl();
                //    p.detection(b)
                //    p.detection(W)
                    
                  
              
                //   
                 if(this.collide){
                     console.log("inside the draw function.")
                  };
                }
            }
        }
    }

}

