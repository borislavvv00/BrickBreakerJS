function PlatformTouchMapBorder()
{
	if(Platform.Y == 0)//left border
	{
		Platform.direction = "rigth";
	}
	else if(Platform.Y + Platform.sizeY == map.width)//rigth border
	{
		Platform.direction = "left";
	}
}

function BallTouchPlatform()
{
	if(Ball.X + Ball.radius / 2 == Platform.X &&  Ball.Y >= Platform.Y + Math.round(Platform.sizeY / 3) && Ball.Y <= Platform.Y + Platform.sizeY - Math.round(Platform.sizeY / 3)) // middle part of the platform
	{
		Ball.direction = "up";
	}
	if(Ball.X + Ball.radius / 2 == Platform.X &&  Ball.Y >= Platform.Y + 1 && Ball.Y <= Platform.Y + Math.round(Platform.sizeY / 3) + 1) // left part of the platform
	{
		Ball.direction = "upLeft";
	}
	if(Ball.X + Ball.radius / 2 == Platform.X &&  Ball.Y <= Platform.Y + Platform.sizeY + 1 && Ball.Y >= Platform.Y + Platform.sizeY - Math.round(Platform.sizeY / 3) + 1) // rigth  part of the platform
	{
		Ball.direction = "upRigth";
	}
}

function BallTouchMapBorder()
{
	if(Ball.X - Ball.radius / 2 == 0 &&  Ball.Y > 0 && Ball.Y < map.width && Ball.direction == "up") // top border
	{
		Ball.direction = "down";
	}
	else if(Ball.X - Ball.radius / 2 == 0 &&  Ball.Y > 0 && Ball.Y < map.width && Ball.direction == "upLeft") // top border
	{
		Ball.direction = "downLeft";
	}
	else if(Ball.X - Ball.radius / 2 == 0 &&  Ball.Y > 0 && Ball.Y < map.width && Ball.direction == "upRigth") // top border
	{
		Ball.direction = "downRigth";
	}
	//-------------------------------------------------------------------------------------------------------------------------------
	else if(Ball.X + Ball.radius / 2 == map.height &&  Ball.Y > 0 && Ball.Y < map.width) // bottom border
	{
		context.clearRect(0, 0, map.width, map.height);
		console.log("gameOver");
		Ball.Y = map.width / 2;
		Ball.X = map.height - 100;
	}
	//---------------------------------------------------------------------------------------------------------------------------------
	else if(Ball.X > 0 && Ball.X < map.height && Ball.Y == 0 && Ball.direction == "upLeft") // left border
	{
		Ball.direction = "upRigth";
	}
	else if(Ball.X > 0 && Ball.X < map.height && Ball.Y == 0 && Ball.direction == "downLeft") // left border
	{
		Ball.direction = "downRigth";
	}
	//---------------------------------------------------------------------------------------------------------------------------------
	else if(Ball.X > 0 && Ball.X < map.height && Ball.Y == map.width &&  Ball.direction == "upRigth") // rigth border
	{
		Ball.direction = "upLeft";
	}
	else if(Ball.X > 0 && Ball.X < map.height && Ball.Y == map.width &&  Ball.direction == "downRigth") // rigth border
	{
		Ball.direction = "downLeft";
	}
}