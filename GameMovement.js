function AutoPlay()
{
	if(Ball.Y < Platform.Y + 2) // hit ball with left side of platform
	{
		Platform.direction = "left";
	}
	if(Ball.Y > Platform.Y + Platform.sizeY - 2)// hit ball with rigth side of platform
	{
		Platform.direction = "rigth";
	}
}

function GetCursorPossition(event)
{
	cursorX = event.clientX;
	if(cursorX >= Platform.sizeY / 2 && cursorX <= map.width - Platform.sizeY / 2)// check if the cursor if on the game map
	{
		Platform.Y = cursorX - (Platform.sizeY / 2);
	}
	Platform.direction = "stop";//when cursor is out of game map
	document.getElementById("score").innerHTML = "score = " + score + "				level  " + level;
}

function GetKeyboardCommands(event)
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

function Directions(obj) 
{
	switch(obj.direction)
	{
		case "left":
			obj.Y--;
			break;
		case "rigth":
			obj.Y++;
			break;
		case "down":
			obj.X++;
			break;
		case "up":
			obj.X--;
			break;
		case "upLeft":
			obj.X--;
			obj.Y--;
			break;
		case "upRigth":
			obj.X--;
			obj.Y++;
			break;
		case "downLeft":
			obj.X++;
			obj.Y--;
			break;
		case "downRigth":
			obj.X++;
			obj.Y++;
			break;
	}
}