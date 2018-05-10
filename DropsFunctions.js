function DropTouchBottomBorder()
{
	if(Drop.X == map.height)
	{
		fallDrop = true;
	}
}

function PlatformCatchDrop()
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
				if(Ball.radius <=4 )
				{	
					Ball.radius -= 2;
				}
				break;
		}
	}
}