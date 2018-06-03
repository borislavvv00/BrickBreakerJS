function AutoPlay()
{
	if(Ball.position[0].y < Platform.Y + 2) // hit ball with left side of platform
	{
		Platform.direction = "left";
	}
	if(Ball.position[0].y > Platform.Y + Platform.sizeY - 2)// hit ball with rigth side of platform
	{
		Platform.direction = "rigth";
	}
}

function GetCursorPossition(event)
{
	if(isAutoPlayClicked == false && isGamePaused == false)
	{
		cursorX = event.clientX;
		if(cursorX >= Platform.sizeY / 2 && cursorX <= map.width - Platform.sizeY / 2 - informationFieldSize && isGameOver == false)// check if the cursor if on the game map
		{
			Platform.Y = cursorX - (Platform.sizeY / 2);
		}	
		Platform.direction = "stop";//when cursor is out of game map
	}
}

function GetKeyboardCommands(event)
{
	if(isGameOver == false)
	{
		switch(event.keyCode)
		{
			case 37:
				Platform.direction = "left";
				break;
			case 39:
				Platform.direction = "rigth";
				break;
		}
	}
}

function BallDirections(i)
{
	switch(Ball.position[i].direction)
	{
		case "left":
			Ball.position[i].y--;
			break;
		case "rigth":
			Ball.position[i].y++;
			break;
		case "down":
			Ball.position[i].x++;
			break;
		case "up":
			Ball.position[i].x--;
			break;
		case "upLeft":
			Ball.position[i].x--;
			Ball.position[i].y--;
			break;
		case "upRigth":
			Ball.position[i].x--;
			Ball.position[i].y++;
			break;
		case "downLeft":
			Ball.position[i].x++;
			Ball.position[i].y--;
			break;
		case "downRigth":
			Ball.position[i].x++;
			Ball.position[i].y++;
			break;
	}
}

function Directions(object/*direction, x, y*/) 
{
	switch(object.direction)
	{
		case "left":
			object.Y--;
			break;
		case "rigth":
			object.Y++;
			break;
		case "down":
			object.X++;
			break;
		case "up":
			object.X--;
			break;
	}
}
