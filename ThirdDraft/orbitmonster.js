

function OrbitMonster()
{
  this.pos = new createVector( 250, 250 );
  this.vel = new createVector( 0, 0 );
  this.acc = new createVector( 0, .28);
  this.ts = 9;
  this.clr = color( random(255), random(255), random(255) );

  // this.addForce = function()
  // {
  //   var mouse = createVector( mouseX, mouseY );
  //   var force = p5.Vector.sub( mouse, this.pos );
  //   this.update( force );
  // };

  this.update = function( bossPos ) 
  {
    // if( mouseForce != null )
    // {
    //   this.vel.add( mouseForce );
    // }
    // var newForce = p5.Vector.sub( bossPos, this.pos );
    // this.acc.add( newForce );
    // this.vel.add( newForce );
    // this.acc = p5.Vector.sub( bossPos, this.pos );
    var newForce = p5.Vector.sub( bossPos, this.pos );
    newForce.setMag( 0.05 );

    this.acc.add( newForce );
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


// this.addForce = function()
//   {
//     var mouse = createVector( mouseX, mouseY );
//     var force = p5.Vector.sub( mouse, this.pos );
//     this.update( force );
//   };

//   this.update = function( force, bossPos ) 
//   {
//     if( force != null )
//     {
//       this.vel.add( force );
//     }
//     var newForce = p5.Vector.sub( bossPos, this.pos );
//     this.vel.add( newForce );
//     this.vel.add( this.acc );
//     this.vel.limit( this.ts );
//     this.pos.add( this.vel );
//   };