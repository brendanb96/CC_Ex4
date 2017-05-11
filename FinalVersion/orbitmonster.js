

function OrbitMonster()
{
  this.pos = new createVector( random( 100, 300 ), random( 100, 300 ) );
  this.vel = new createVector( 0, 0 );
  this.acc = new createVector( 0, .28);
  this.ts = 15;
  this.clr = color( random(255), random(255), random(255) );
  this.accMag = random( 0.2, 0.8 );

  this.update = function( bossPos ) 
  {
    this.acc = p5.Vector.sub( bossPos, this.pos );
    this.acc.setMag( this.accMag );

    this.vel.add( this.acc );
    this.vel.limit( this.ts );
    this.pos.add( this.vel );
    this.checkEdges();
  };

  this.checkEdges = function() 
  {
    if ( (this.pos.x + 30 > width) || (this.pos.x - 30 < 0) ) 
    {
      this.vel.x *= -1;
    }

    if ( (this.pos.y + 30 > height) || (this.pos.y - 30 < 0) )  
    {
      this.vel.y *= -1;
    }
  };

  this.display = function()
  {
    ellipseMode( CENTER );
    stroke( 0 );
    // BODY
    fill( this.clr );
    ellipse( this.pos.x, this.pos.y, 50, 50 );
    // IRIS
    fill( 118, 166, 178 );
    ellipse( this.pos.x, this.pos.y, 40, 25 );
    // PUPIL
    fill( 204, 200, 155 );
    ellipse( this.pos.x, this.pos.y, 7.5, 25 );
  };
}
