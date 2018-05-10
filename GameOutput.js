var ballStartDirection = true;
var score = 0;
var cursorX = cursorY = 0;
var drawDrop = false;
var fallDrop = true;
var collorIndex = 0;//index of color in the array
var autoPlay = false;
var level = 1;// game level

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

function CreateBricks()
{
	for(var i = 0; i < Brick.count; i++)
	{
		//---------------------------first line of bricks from top to bottom--------------------
		if(i == 0) // first brick of the line from left to rigth
		{
			Brick.position.push({ x : 3, y : 15 });
		}
		else if(i >= 1 && i <= 8) // else bricks
		{
			Brick.position.push({ x : 3, y : Brick.position[i - 1].y + Brick.sizeY });
		}
		//--------------------------second line------------------------------------------------
		else if(i == 9)
		{
			Brick.position.push({ x : 3 + Brick.sizeX , y : 15 });
		}
		else if(i >= 10 && i <= 17)
		{
			Brick.position.push({ x : 3 + Brick.sizeX, y : Brick.position[i - 1].y + Brick.sizeY });
		}
		//--------------------------third line------------------------------------------
		else if(i == 18)
		{
			Brick.position.push({ x : 3 + Brick.sizeX * 2 , y : 15 });
		}
		else if(i >= 19 && i <= 26)
		{
			Brick.position.push({ x : 3 + Brick.sizeX * 2, y : Brick.position[i - 1].y + Brick.sizeY });
		}
		//--------------------------fourth line------------------------------------------
		else if(i == 27)
		{
			Brick.position.push({ x : 3 + Brick.sizeX * 3 , y : 15 });
		}
		else if(i >= 28 && i <= 35)
		{
			Brick.position.push({ x : 3 + Brick.sizeX * 3, y : Brick.position[i - 1].y + Brick.sizeY });
		}
		//----------------------------fifth line--------------------------------------------
		else if(i == 36)
		{
			Brick.position.push({ x : 3 + Brick.sizeX * 4 , y : 15 });
		}
		else if(i >= 37 && i <= 45)
		{
			Brick.position.push({ x : 3 + Brick.sizeX * 4, y : Brick.position[i - 1].y + Brick.sizeY });
		}
	}
}

function DrawGameElements()
{
	if(ballStartDirection == true)// game start set ups
	{
		Ball.direction = "down";
		ballStartDirection = false;
		CreateBricks();
	}
	//----------------------------draw elements---------------------------------------------
	DrawRect("black", 0, 0, map.width, map.height);
	DrawCircle(Ball.color, Ball.Y, Ball.X, Ball.radius);
	for(var i = 0; i < Brick.position.length; i++)
	{
		DrawRect(Brick.color, Brick.position[i].y, Brick.position[i].x, Brick.sizeY, Brick.sizeX);
	}
	if(drawDrop == true)//if drop is falling
	{
		DrawRect(Drop.color[collorIndex], Drop.Y, Drop.X, Drop.size, Drop.size);
	}
	DrawRect(Platform.color, Platform.Y, Platform.X, Platform.sizeY, Platform.sizeX);
	//--------------------------------------------------------------------------------
	if(autoPlay == true)
	{
		AutoPlay();
	}
	//----------------------all moving elements get directions
	Directions(Platform);
	Directions(Ball);
	Directions(Drop);
	//---------------------rules for game elements touch each other
	BallTouchPlatform();
	BallTouchBrick();
	BallTouchMapBorder();
	PlatformTouchMapBorder();
	PlatformCatchDrop();
	DropTouchBottomBorder();
}