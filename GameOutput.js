var isGameSetUP = false;
var isDropDrawed = false;
var isDropFalling = true;
var isAutoPlayClicked = false;
var isGameOver = false;
var isGamePaused = false;
var collorIndex = 0;//drop color
var level = 1;
var score = 0;
var cursorX = cursorY = 0;
var informationFieldSize = 205;

function DrawRect(color, y, x, ySize, xSize)
{
	context.fillStyle = color;
	context.fillRect(y, x, ySize, xSize);
	context.strokeRect(y, x, ySize, xSize);
}

function DrawCircle(color, y, x, radius)
{
	context.beginPath();
	context.arc(y, x, radius, 0, 2 * Math.PI)
	context.fillStyle = color;
	context.fill();
	context.closePath();
}

function DrawGameStats()
{	
	context.font = "30px Arial";
	context.fillStyle = "white";
	context.fillText("score = " + score, 5, 590);
	context.fillText("level = " + level, 200, 590);
	context.fillText("lives = " + Platform.lives, 350, 590);
}

function DrawInformationList()
{
	var distance = 0;
	for(var i = 0; i < Drop.color.length; i++)
	{
		DrawRect(Drop.color[i], 510, 30 + distance, Drop.size, Drop.size);
		distance += Drop.size + 5;
	}
	context.font = "20px Arial";
	context.fillStyle = "white";
	context.fillText("- bigger platform", 515 + Drop.size + 5, 45);
	context.fillText("- smaller platform", 515 + Drop.size + 5, 70);
	context.fillText("- bigger ball", 515 + Drop.size + 5, 95);
	context.fillText("- smaller ball", 515 + Drop.size + 5, 120);
	context.fillText("- lose 1 live", 515 + Drop.size + 5, 145);
	context.fillText("- get 1 live", 515 + Drop.size + 5, 170);
	context.fillText("- go to next level", 515 + Drop.size + 5, 195);
	context.fillText("- double balls", 515 + Drop.size + 5, 220);
}

function DrawGameElements()
{
	if(isGameSetUP == false)// game start set ups
	{
		Ball.position.push({ x : map.height - 200, y : map.width / 2 - 100, direction : "down" });
		CreateBricks();
		isGameSetUP = true;
	}
//----------------------------draw elements---------------------------------------------------------
	DrawRect("black", 0, 0, map.width, map.height);
	
	for(var i = 0; i < Brick.position.length; i++)
	{
		DrawRect(Brick.color[Brick.position[i].colorIndex], Brick.position[i].y, Brick.position[i].x, Brick.sizeY, Brick.sizeX);
	}
	
	if(isDropDrawed == true)//if drop is falling
	{
		DrawRect(Drop.color[collorIndex], Drop.Y, Drop.X, Drop.size, Drop.size);
	}
	
	DrawRect(Platform.color, Platform.Y, Platform.X, Platform.sizeY, Platform.sizeX);
	DrawRect("white", 0, 550, map.width, 2);
	DrawRect("white", 500, 0, 2, map.height - 50);
	DrawGameStats();
	DrawInformationList();
	console.log(Ball.position.length);
	for(var i = 0; i < Ball.position.length; i++)
	{	
		DrawCircle(Ball.color, Ball.position[i].y, Ball.position[i].x, Ball.radius);
	}
//-----------------------------------------------------------------------------------------------------
	if(isGamePaused == false)
	{
		if(isAutoPlayClicked == true)
		{
			AutoPlay();
		}
		if(isGameOver == true)
		{
			GameOver();
		}
//-------------------------------------------Game logic------------------------------------------------
		LevelGenerator();
		
		Directions(Platform);
		Directions(Drop);
		
		PlatformTouchMapBorder();
		DropTouchPlatform();
		DropTouchBottomBorder();
		
		for(var i = 0; i < Ball.position.length; i++)
		{	
			BallTouchPlatform(i);
			BallTouchBrick(i);
			BallTouchMapBorder(i);
			BallDirections(i);
		}
	}
}
