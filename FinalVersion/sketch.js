
var monsters = [];
var mCount = 4;

var boss;

var particles = [];
var pCount = 12;

function setup()
{
  createCanvas(775, 500);
  smooth();
	frameRate(30);
  
  // StartUp Message
  console.log("Command Center XYZ: " );
  console.log("...");

  for( var i = 0; i < mCount; i++ )
  {
    monsters.push( new OrbitMonster() );
  }
  boss = new TVMonster();
  for( var i = 0; i < pCount; i++ )
  {
    particles.push( new Particle() );
  }
}

function draw()
{
  background( 0 );
  
  for( var i = 0; i < pCount; i++ )
  {
    particles[ i ].update();
    particles[ i ].checkEdges();
    particles[ i ].display();
    stroke( random(255), random(255), random(255) );
    // line( particles[ i ].pos.x, particles[ i ].pos.y, particles[ i + 1 ].pos.x, particles[ i + 1 ].pos.y );
    // line( particles[ i ].pos.x, particles[ i ].pos.y, particles[ i + 2 ].pos.x, particles[ i + 2 ].pos.y );
  }

  for( var i = 0; i < mCount; i++ )
  {
    monsters[ i ].update( boss.pos );
    monsters[ i ].checkEdges();
    monsters[ i ].display();
  }
  
  // monster.update( boss.pos );
  // monster.checkEdges();
  // monster.display();

  boss.update();
  boss.checkEdges();
  boss.display();
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