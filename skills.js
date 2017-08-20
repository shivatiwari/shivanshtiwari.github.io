var balls = [];
var angle = 0.0;

function preload(){
   ima6 = loadImage('http://i.imgur.com/OyIHIxA.png');
}

function setup()
{
    img1 = loadImage('http://i.imgur.com/97zRmwL.png');
    img2 = loadImage('http://i.imgur.com/5vQMyGR.png');
    img3 = loadImage('http://i.imgur.com/2VgdI6O.png');
    img4 = loadImage('http://hello.p5js.org/assets/p5-sq-reverse.svg');
    img5 = loadImage('http://i.imgur.com/2VHctAJ.png');
    
    createCanvas(innerWidth,innerHeight);
    
    for(var i=0; i< 25; i++)
        {
   balls[i] = new Ball(random(width),random(height)); 
        }
    
}

function draw()
{
    background(255);
   
    for(var i = 0; i < balls.length; i++)
        {
    balls[i].move();
            
    balls[i].bounce();
            
    balls[i].display();
            
       
    for(var j = 0; j < balls.length; j++)
            {
   
            if(i != j && balls[i].intersects(balls[j]))
                {
                    balls[i].bounceback();
                    balls[j].bounceback();
                }
            }
        }
    if(mouseIsPressed)
        {
        balls.push(new Ball(mouseX,mouseY));
        }
    if(balls.length > 200)
        {
            balls.splice(0,1);
        }
  push();
    image(img1, width/8, height/8, img1.width/4, img1.height/4);
    image(img2, width/3, height/8, img2.width/4, img2.height/4);
    image(img3, width/1.9, height/8.5, img3.width/10, img3.height/10);
    image(img4, width/1.9, height/8.5, img4.width/10, img4.height/10);
    image(img5, width/1.9, height/1.8, img5.width/3, img5.height/3);
    pop(); 
    push();
    //translate(width/8, height/10);
    rect(width/5, height/1.8,20,20);
    rect(width/2, height/2,20,20);
    rotate(angle);
    angle += 0.00001;
   image(ima6,width/5, height/1.8,ima6.width/2,ima6.height/2);
     
    pop();
}

function Ball(x,y)
{
    this.x = x;
    this.y = y;
    this.r = 4;
     var s = 5;
//    this.xspeed = 2;
//    this.yspeed = 2;
    this.xspeed =random(-s,s);
    this.yspeed =random(-s,s);

    this.move = function()
    {
          this.x = this.x + this.xspeed;
          this.y = this.y + this.yspeed;  
        
        
    }
    
    this.display = function()
    {
        stroke(random(255));
        strokeWeight(5);
        fill(255);
       //image(ima6,this.x, this.y,width/2,height/2);
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    this.bounceback = function()
    {
        this.xspeed = this.xspeed * -1;
         this.yspeed = this.yspeed * -1;
//        other.xspeed = other.xspeed * -1;
//        other.yspeed = other.yspeed * -1;
        
        
    }
    this.bounce = function()
    {
         
         if(this.x > width || this.x < 0)
        this.xspeed = this.xspeed * -1;
    
    if(this.y > height || this.y <0)
        this.yspeed = this.yspeed * -1;

    }
    this.intersects = function(other)
    {
      var d = dist(this.x,this.y, other.x,other.y);
        if(d <= this.r + other.r)
           {
           return true;
           }
        else{
            return false;
        }
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}