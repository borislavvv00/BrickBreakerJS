function CheckForFallingDrop(i) 
{
	if(isDropFalling == true) // check if the drop is fall
	{
		Drop.X = Brick.position[i].x;
		Drop.Y = Brick.position[i].y - Brick.sizeY;
		collorIndex = Math.round(Math.random() * 7);
		Drop.direction = "down";
		isDropFalling = false;
		isDropDrawed = true;
	}
}

function RemoveBrick(i, direction, j)
{
	score++;
	Ball.position[j].direction = direction;
	if(Brick.position[i].colorIndex == 0)
	{	
		Brick.position.splice(i, 1);
		CheckForFallingDrop(i);
	}
	else
	{
		Brick.position[i].colorIndex--;
	}
}

function BallTouchBrick(j)
{
	for(var i = 0; i < Brick.position.length; i++)
	{
		if(Ball.position[j].y >= Brick.position[i].y && Ball.position[j].y <= Brick.position[i].y + Brick.sizeY + 1)
		{
//-------------------------------------------------------------bottom side of brick------------------------------------------------------
			if(Ball.position[j].x - Ball.radius / 2 == Brick.position[i].x + Brick.sizeX)
			{
				switch(Ball.position[j].direction)
				{
					case "up":
						RemoveBrick(i, "down", j);
						break;
					case "upLeft":
						RemoveBrick(i, "downLeft", j);
						break;
					case "upRigth":
						RemoveBrick(i, "downRigth", j);
						break;
				}
			}
//-------------------------------------------------------------top side of brick--------------------------------------------------------
			if(Ball.position[j].x + Ball.radius / 2 == Brick.position[i].x)
			{
				RemoveBrick(i, "up", j);
				switch(Ball.position[j].direction)
				{
					case "down":
						RemoveBrick(i, "up", j);
						break;
					case "downLeft":
						RemoveBrick(i, "upLeft", j);
						break;
					case "downRigth":
						RemoveBrick(i, "upRigth", j);
						break;
				}
			}
		}
		if(Ball.position[j].x >= Brick.position[i].x && Ball.position[j].x <= Brick.position[i].x + Brick.sizeX + 1)
		{
//------------------------------------------------------------left side of brick--------------------------------------------------------------
			if(Ball.position[j].y+ Ball.radius / 2 == Brick.position[i].y)
			{
				switch(Ball.position[j].direction)
				{
					case "upRigth":
						RemoveBrick(i, "upLeft", j);
						break;
					case "downRigth":
						RemoveBrick(i, "downLeft", j);
						break;
				}
			}
//-----------------------------------------------------------rigth side of brick----------------------------------------------------------------
			if(Ball.position[j].y - Ball.radius / 2 == Brick.position[i].y  + Brick.sizeY)
			{
				switch(Ball.position[j].direction)
				{
					case "upLeft":
						RemoveBrick(i, "upRigth", j);
						break;
					case "downLeft":
						RemoveBrick(i, "downRigth", j);
						break;
				}
			}
		}
	}
}
