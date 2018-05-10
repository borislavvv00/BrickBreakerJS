function CheckForFallingDrop(i) 
{
	if(fallDrop == true) // check if the drop is fall
	{
		Drop.X = Brick.position[i].x;
		Drop.Y = Brick.position[i].y - Brick.sizeY;
		collorIndex = Math.round(Math.random() * 3);
		drawDrop = true;
		Drop.direction = "down";
		fallDrop = false;
	}
}

function RemoveBrick(i, direction)
{
	score++;
	Ball.direction = direction;
	Brick.position.splice(i, 1);
	CheckForFallingDrop(i);
}

function BallTouchBrick()
{
	for(var i = 0; i < Brick.position.length; i++)
	{
		//-------------------------------------------------------------bottom side of brick------------------------------------------------------
		if(Ball.X - Ball.radius / 2 == Brick.position[i].x + Brick.sizeX &&  Ball.Y >= Brick.position[i].y && Ball.Y <= Brick.position[i].y + Brick.sizeY + 1)
		{
			switch(Ball.direction)
			{
				case "up":
					RemoveBrick(i, "down");
					break;
				case "upLeft":
					RemoveBrick(i, "downLeft");
					break;
				case "upRigth":
					RemoveBrick(i, "downRigth");
					break;
			}
		}
		//-------------------------------------------------------------top side of brick--------------------------------------------------------
		if(Ball.X + Ball.radius / 2 == Brick.position[i].x &&  Ball.Y >= Brick.position[i].y && Ball.Y <= Brick.position[i].y + Brick.sizeY + 1)
		{
			RemoveBrick(i, "up");
			switch(Ball.direction)
			{
				case "down":
					RemoveBrick(i, "up");
					break;
				case "downLeft":
					RemoveBrick(i, "upLeft");
					break;
				case "downRigth":
					RemoveBrick(i, "upRigth");
					break;
			}
		}
		//------------------------------------------------------------left side of brick--------------------------------------------------------------
		if(Ball.Y + Ball.radius / 2 == Brick.position[i].y && Ball.X >= Brick.position[i].x && Ball.X <= Brick.position[i].x + Brick.sizeX + 1)
		{
			switch(Ball.direction)
			{
				case "upRigth":
					RemoveBrick(i, "upLeft");
					break;
				case "downRigth":
					RemoveBrick(i, "downLeft");
					break;
			}
		}
		//-----------------------------------------------------------rigth side of brick----------------------------------------------------------------
		if(Ball.Y - Ball.radius / 2 == Brick.position[i].y  + Brick.sizeY && Ball.X >= Brick.position[i].x && Ball.X <= Brick.position[i].x + Brick.sizeX + 1)
		{
			switch(Ball.direction)
			{
				case "upLeft":
					RemoveBrick(i, "upRigth");
					break;
				case "downLeft":
					RemoveBrick(i, "downRigth");
					break;
			}
		}
	}
}