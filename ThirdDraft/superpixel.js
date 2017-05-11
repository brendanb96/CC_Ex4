function SuperPixel( x, y, pixelClr )
{
  this.pos = new createVector( x, y );
  this.vel = new createVector( 0, 0 );
  this.acc = new createVector( random(), random() );
  this.ts = 9;

  this.clr = pixelClr;

  this.display = function()
  {
  	// fill( green( this.clr ), blue( this.clr ), red( this.clr ) );
  	// fill( 2 );
  	fill( this.clr );
  	ellipse( this.pos.x, this.pos.y, 2, 2 );
  };

  // this.addForce = function()
}