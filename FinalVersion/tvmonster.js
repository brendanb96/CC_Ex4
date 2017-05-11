
function TVMonster()
{
  this.pos = new createVector( width/2, height/2 );
  this.vel = new createVector();
  this.acc = new createVector();
  this.ts = 5;
  this.clr = color( random(255), random(255), random(255) );

  this.update = function( vel ) 
  {
    if( vel != null )
    {
      this.vel = vel;
    }
    this.vel.add( this.acc );
    this.vel.limit( this.ts );
    this.pos.add( this.vel );
  };

  this.checkEdges = function() 
  {
    if (this.pos.x > width) 
    {
      this.pos.x = 0;
    }
    else if (this.pos.x < 0) 
    {
      this.pos.x = width;
    }

    if (this.pos.y > height) 
    {
      this.pos.y = 0;
    }
    else if (this.pos.y < 0) 
    {
      this.pos.y = height;
    }
  };

  this.display = function()
  {
    this.makeDisk();
    this.makeTVBase();
    this.makeTVAccents();
  };

  //MAIN TV MONSTER
  this.makeTVBase = function()
  {
    // outer TV
    strokeWeight(3);
    fill(0, 0, 0);
    rectMode( CENTER );
    rect( this.pos.x, this.pos.y, 100, 100 );
    
    // inner TV (the screen)
    //fill(255, 237, 220);
    fill( this.clr );
    rectMode( CENTER );
    rect( this.pos.x, this.pos.y, 80, 80 );
  };

  //FLOATING DISK
  this.makeDisk = function()
  {
    //Disk Edges
    stroke( 0, 0, 0 );
    ellipseMode( CENTER );
    fill(204, 200, 155, 70);
    ellipse( this.pos.x, this.pos.y + 50, 175, 125 );
  };

  //Antennas + Face
  this.makeTVAccents = function()
  {
    //Antennas
    //antenna lines
    strokeWeight(2);
    line( this.pos.x, this.pos.y - 50, this.pos.x - 37.5, this.pos.y - 87.5 );
    line( this.pos.x, this.pos.y - 50, this.pos.x + 25, this.pos.y - 62.5 );
    //antenna tips
    strokeWeight(5);
    point( this.pos.x - 37.5, this.pos.y - 87.5 );
    point( this.pos.x + 25, this.pos.y - 62.5 );
    
    // frown
    strokeWeight(2);
    noFill();
    arc( this.pos.x, this.pos.y + 25, 50, 25, PI, 2*PI );
    
    // eyes
    fill(98, 255, 0);
    ellipse( this.pos.x - 18.75, this.pos.y - 12.5, 12.5, 12.5 );
    ellipse( this.pos.x + 18.75, this.pos.y - 12.5, 12.5, 12.5 );
    
    // eyebrows
    line( this.pos.x - 30, this.pos.y - 30, this.pos.x - 7.25, this.pos.y - 18.75 );
    line( this.pos.x + 30, this.pos.y - 30, this.pos.x + 7.25, this.pos.y - 18.75 );
  };
}

