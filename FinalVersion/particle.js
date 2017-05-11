

function Particle()
{
  this.pos = new createVector( 250, 250 );
  this.vel = new createVector( 0, 0 );
  this.acc = new createVector( random(), random() );
  this.ts = 9;
  this.clr = color( random(255), random(255), random(255) );

  // this.addForce = function()
  // {
  //   var mouse = createVector( mouseX, mouseY );
  //   var force = p5.Vector.sub( mouse, this.pos );
  //   this.update( force );
  // };

  this.update = function() 
  {
    // if( mouseForce != null )
    // {
    //   this.vel.add( mouseForce );
    // }
    // var newForce = p5.Vector.sub( bossPos, this.pos );
    // this.acc.add( newForce );
    // this.vel.add( newForce );
    // this.acc = p5.Vector.sub( bossPos, this.pos );
    // var newForce = p5.Vector.sub( bossPos, this.pos );
    // newForce.setMag( 0.05 );

    var mouse = createVector( mouseX, mouseY );
    var force = p5.Vector.sub( mouse, this.pos );
    force.setMag( 2 );

    this.acc.add( force );

    // this.acc.add( newForce );
    this.acc.x = random( -1, 1 );
    this.acc.y = random( -1, 1 );
    this.vel.add( this.acc );
    this.vel.limit( this.ts );
    this.pos.add( this.vel );
    this.checkEdges();
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
    ellipseMode( CENTER );
    fill( this.clr );
    ellipse( this.pos.x, this.pos.y, 15, 15 );
  };
}