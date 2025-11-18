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
