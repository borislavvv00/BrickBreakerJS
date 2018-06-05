function BallTouchPlatform(i)
{
	if(Ball.position[i].x + Ball.radius / 2 == Platform.X)
	{
		if(Ball.position[i].y >= Platform.Y + Math.round(Platform.sizeY / 3) && Ball.position[i].y <= Platform.Y + Platform.sizeY - Math.round(Platform.sizeY / 3)) // middle part of the platform
		{
			Ball.position[i].direction = "up";
		}
		if(Ball.position[i].y >= Platform.Y + 1 && Ball.position[i].y <= Platform.Y + Math.round(Platform.sizeY / 3) + 1) // left part of the platform
		{
			Ball.position[i].direction = "upLeft";
		}
		if(Ball.position[i].y <= Platform.Y + Platform.sizeY + 1 && Ball.position[i].y >= Platform.Y + Platform.sizeY - Math.round(Platform.sizeY / 3) + 1) // rigth  part of the platform
		{
			Ball.position[i].direction = "upRigth";
		}
	}
}

function DropTouchPlatform()
{
	if(Platform.X == Drop.X && Platform.Y <= Drop.Y && Platform.Y + Platform.sizeY >= Drop.Y)
	{
		switch(Drop.color[collorIndex])
		{
			case "red"://make platform big
				if(Platform.sizeY <= map.width)
				{	
					Platform.sizeY += 20;
				}
				break;
			case "orange":// make platform small
				if(Platform.sizeY >= 20)
				{
					Platform.sizeY -= 10;
				}
				break;
			case "purple":// make ball big
				if(Ball.radius <= 11)
				{	
					Ball.radius += 2;
				}
				break;
			case "sienna":// make ball small
				if(Ball.radius >= 6)
				{	
					Ball.radius -= 4;
				}
				break;
			case "cornsilk":// lost 1 live
				Platform.lives--;
				break;
			case "chartreuse":// add 1 live
				Platform.lives++;
				break;
			case "yellow"://go to next level
				DestroyCurrentObjects();
				break;
			case "dimgray"://double balls
				DoubleBalls();
				break;
		}
	}
}
