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
