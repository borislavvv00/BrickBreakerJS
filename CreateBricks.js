function CreateBricks()
{
	var distanceBetweenBricksVertical = 30;
	var distanceBetweenBricksHorizontal = 15;
	var color = 0;
	
	for(var i = 0; i < Brick.count; i++)
	{
		switch(level)
		{
			case 1:
				color = 0;
				break;
			case 2:
				if(i > Brick.count / 2)
				{
					color = 1;
				}
				break;
			case 3:
				color = 1;
				break;
		}	
		//---------------------------first line of bricks from top to bottom--------------------
		if(i == 0) // first brick of the line from left to rigth
		{
			Brick.position.push({ x : distanceBetweenBricksVertical, y : distanceBetweenBricksHorizontal, colorIndex : color });
		}
		else if(i >= 1 && i <= 8) // else bricks
		{
			Brick.position.push({ x : distanceBetweenBricksVertical, y : Brick.position[i - 1].y + Brick.sizeY, colorIndex : color });
		}
		//--------------------------second line------------------------------------------------
		else if(i == 9)
		{
			Brick.position.push({ x : distanceBetweenBricksVertical + Brick.sizeX , y : distanceBetweenBricksHorizontal, colorIndex : color });
		}
		else if(i >= 10 && i <= 17)
		{
			Brick.position.push({ x : distanceBetweenBricksVertical + Brick.sizeX, y : Brick.position[i - 1].y + Brick.sizeY, colorIndex : color });
		}
		//--------------------------third line------------------------------------------
		else if(i == 18)
		{
			Brick.position.push({ x : distanceBetweenBricksVertical + Brick.sizeX * 2 , y : distanceBetweenBricksHorizontal, colorIndex : color });
		}
		else if(i >= 19 && i <= 26)
		{
			Brick.position.push({ x : distanceBetweenBricksVertical + Brick.sizeX * 2, y : Brick.position[i - 1].y + Brick.sizeY, colorIndex : color });
		}
		//--------------------------fourth line------------------------------------------
		else if(i == 27)
		{
			Brick.position.push({ x : distanceBetweenBricksVertical + Brick.sizeX * 3 , y : distanceBetweenBricksHorizontal, colorIndex : color });
		}
		else if(i >= 28 && i <= 35)
		{
			Brick.position.push({ x : distanceBetweenBricksVertical + Brick.sizeX * 3, y : Brick.position[i - 1].y + Brick.sizeY, colorIndex : color });
		}
		//----------------------------fifth line--------------------------------------------
		else if(i == 36)
		{
			Brick.position.push({ x : distanceBetweenBricksVertical + Brick.sizeX * 4 , y : distanceBetweenBricksHorizontal, colorIndex : color });
		}
		else if(i >= 37 && i <= 45)
		{
			Brick.position.push({ x : distanceBetweenBricksVertical + Brick.sizeX * 4, y : Brick.position[i - 1].y + Brick.sizeY, colorIndex : color });
		}
	}
}