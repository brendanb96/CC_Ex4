
var monster;
var boss;

function setup()
{
  createCanvas(775, 500);
  smooth();
	frameRate(30);
  
  // StartUp Message
  console.log("Command Center XYZ: " );
  console.log("...");

  monster = new OrbitMonster();
  boss = new TVMonster();
}

function draw()
{
  background( 0 );
  
  monster.update( boss.pos );
  monster.checkEdges();
  monster.display();

  boss.update();
  boss.display();
  monster.checkEdges();
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