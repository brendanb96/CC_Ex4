
var monster;
var boss;
var particles = [];

var sPixels = [];

var img;

// function preload()
// {
//   img = loadImage('https://www.openprocessing.org/sketch/415863/files/kingkendrick.png');
// }

 // var d = pixelDensity;
 //  for (var i = 0; i < d; i++) 
 //  {
 //    for (var j = 0; j < d; j++) 
 //    {
 //      // loop over
 //      idx = 4 * ((y * d + j) * width * d + (x * d + i));
 //      //r
 //      var rVal = pixels[idx];
 //      //g
 //      var gVal = pixels[idx+1];
 //      //b
 //      var bVal = pixels[idx+2];
 //      //a
 //      var aVal = pixels[idx+3];
 //    }
 //  }

// var d = pixelDensity();
//   var fullImage = 4 * (img.width * d) *
//       (img.height * d);
//   loadPixels();
//   for (var i = 0; i < fullImage; i++)
//   {
//     //x
//     var rem = i % 4;
//     if( rem == 0 )
//     {
//       var quot = i % width
//       var xPos = rem % width;
//       var yPos = 
//     }
//     //y
//     //r
//     var rVal = pixels[ i ];
//     //g
//     var gVal = pixels[ i+1 ];
//     //b
//     var bVal = pixels[ i+2 ];
//     //a
//     var aVal = pixels[ i+3 ];
//   }
//   updatePixels();

function setup()
{
  createCanvas(50, 50);
  smooth();
	frameRate(30);

  for( var i = 0; i < width; i++ )
  {
    for( var j = 0; j < height; j++ )
    {
      var pixelClr = get( i, j );
      sPixels.push( new SuperPixel( i, j, pixelClr ) );
    }
  }

  // StartUp Message
  console.log("Command Center XYZ: " );
  console.log("...");

  monster = new OrbitMonster();
  boss = new TVMonster();
  for( var i = 0; i < 50; i++ )
  {
    particles.push( new Particle() );
  }
}

function draw()
{
  background( 0 );

  for( var i = 0; i < sPixels.length; i++ )
  {
    sPixels[ i ].display();
  }
  
  // image(img, width/2, height/2, 50, 50);

  // for( var i = 0; i < 48; i++ )
  // {
  //   particles[ i ].update();
  //   particles[ i ].checkEdges();
  //   particles[ i ].display();
  //   stroke( random(255), random(255), random(255) );
  //   line( particles[ i ].pos.x, particles[ i ].pos.y, particles[ i + 1 ].pos.x, particles[ i + 1 ].pos.y );
  //   line( particles[ i ].pos.x, particles[ i ].pos.y, particles[ i + 2 ].pos.x, particles[ i + 2 ].pos.y );
  // }
  
  // monster.update( boss.pos );
  // monster.checkEdges();
  // monster.display();

  // boss.update();
  // boss.checkEdges();
  // boss.display();
}

function mouseClicked()
{
  monster.addForce();
  monster.checkEdges();
}

function keyPressed()
{
  if( keyCode == UP_ARROW )
  {
    var vel = new createVector( 0, -20 );
    boss.update( vel );
  }
  if( keyCode == DOWN_ARROW )
  {
    var vel = new createVector( 0, 20 );
    boss.update( vel );
  }
  if( keyCode == LEFT_ARROW )
  {
    var vel = new createVector( -20, 0 );
    boss.update( vel );
  }
  if( keyCode == RIGHT_ARROW )
  {
    var vel = new createVector( 20, 0 );
    boss.update( vel );
  }
  if( key == ' ' )
  {
    var vel = new createVector( 0, 0 );
    boss.update( vel );
  }
}