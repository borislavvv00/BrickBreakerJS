function PlatformTouchMapBorder()
{
	if(Platform.Y == 0)//left border
	{
		Platform.direction = "rigth";
	}
	else if(Platform.Y + Platform.sizeY == map.width - informationFieldSize)//rigth border
	{
		Platform.direction = "left";
	}
}

function DropTouchBottomBorder()
{
	if(Drop.X == map.height - 50 - Drop.size)
	{
		isDropFalling = true;
		Drop.X = 700;
	}
}

function BallTouchMapBorder(i)
{
	if(Ball.position[i].x - Ball.radius / 2 == 0 &&  Ball.position[i].y > 0 && Ball.position[i].y < map.width) // top border
	{
		switch(Ball.position[i].direction)
		{
			case "up":
				Ball.position[i].direction = "down";
				break;
			case "upLeft":
				Ball.position[i].direction = "downLeft";
				break;
			case "upRigth":
				Ball.position[i].direction = "downRigth";
				break;
		}
	}
	//-------------------------------------------------------------------------------------------------------------------------------
	else if(Ball.position[i].x + Ball.radius / 2 == map.height - 50 &&  Ball.position[i].y > 0 && Ball.position[i].y < map.width) // bottom border
	{
		if(Platform.lives == 0)
		{	
			isGameOver = true;
		}
		if(Platform.lives > 0 && Ball.position.length == 1)
		{
			Ball.position[0].y = map.width / 2 - 100;
			Ball.position[0].x = map.height - 200;
			Ball.position[0].direction = "down";
			Platform.lives--;
		}
		else if(Ball.position.length > 1)
		{
			Ball.position.splice(i, 1);
		}
	}
	//---------------------------------------------------------------------------------------------------------------------------------
	else if(Ball.position[i].x > 0 && Ball.position[i].x < map.height && Ball.position[i].y == 0) // left border
	{
		switch(Ball.position[i].direction)
		{
			case "upLeft":
				Ball.position[i].direction = "upRigth";
				break;
			case "downLeft":
				Ball.position[i].direction = "downRigth";
				break;
		}	
	}
	//---------------------------------------------------------------------------------------------------------------------------------
	else if(Ball.position[i].x > 0 && Ball.position[i].x < map.height && Ball.position[i].y == map.width - informationFieldSize) // rigth border
	{
		switch(Ball.position[i].direction)
		{
			case "upRigth":
				Ball.position[i].direction = "upLeft";
				break;
			case "downRigth":
				Ball.position[i].direction = "downLeft";
				break;
		}	
	}
}
