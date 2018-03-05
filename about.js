var Particles = [];

function preload()
{
    img = loadImage('http://i.imgur.com/iMf3glV.png');
    myFont = loadFont('Images/EncodeSans-Light.ttf');
    myFont2 = loadFont('Images/IndieFlower.ttf');
}

function setup()
{
    background(51,51);
    createCanvas(innerWidth,innerHeight);
  
    for(var i = 0 ; i < 5; i++)
        {
            Particles.push(new Particle(random(0,width),random(0,height)));
        }
}

function mousePressed()
{
    Particles.push(new Particle(mouseX,mouseY));
}
function draw()
{
    background(251,51); 

    for(var i = 0 ; i < Particles.length; i++)
        {
            Particles[i].update();
            Particles[i].display();
            
            if(Particles.length > 25)
            {
               Particles.splice(0,1);
            }
        }

    pop();textSize(15);
    fill(100,100);
    textFont(myFont2);
    text('<p>',415,180);
    push();

    textSize(64);
    textFont(myFont);
    push();
    fill(80);
    noStroke();
    text('About :',450,160);
    s = "My name is Shivansh Tiwari, and I'm a recent B.E graduate. I have 2 years of experience in web development and wordpress, I'm also intrested in Big Data.";
   
    t = "My native place is Jabalpur but i am currently in Pune looking for better job opportunities.";
    pop();
    fill(100);
    textSize(15);
    text(s, 450, 210,550);
    text(t, 450, 260,550);
    push();
    image(img, width/20 - 50, -height/15, img.width/2, img.height/2);
    pop();
    
    pop();textSize(15);
    fill(100,100);
    textFont(myFont2);
    text('</p>',415,300);
    push();
}

function Particle(x,y)
{ 
    var s = 7;
    this.x = x;
    this.y = y;
    this.xspeed = random(2,s);
    this.yspeed = random(2,s);
    this.history = [];
    this.update = function()
    {

        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed ;
        
        for(var i = 0; i < this.history.length;i++)
            {
                this.history[i].x += random(-2,2);
                this.history[i].y += random(-2,2);
            }
        
        var v = createVector(this.x,this.y);
        this.history.push(v);       
        if(this.history.length > 15)
            {
                this.history.splice(0,1);
            }
    }
    this.display = function()
    {
        push();
        stroke(255,69,0);
        strokeWeight(10);
        fill(255,69,0,50);
        ellipse(this.x,this.y,15,15);  
        pop();
        
        for(var i = 0; i < this.history.length; i++)
            {
                push();
                var pos = this.history[i];
                stroke(51);
               fill(255,140,0);
                ellipse(pos.x,pos.y,i,i);
                pop();
            }
      
         if(this.x < 0)
            {
                this.x = width;
            }
         else if(this.y < 0)
            {
                this.y = height;
            }
         else if(this.x > width)
            {
                this.x = 0;
            }
         else if(this.y > height)
            {
                this.y = 0;
            }
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
