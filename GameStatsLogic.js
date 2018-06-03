function LevelGenerator()
{
	if(Brick.position.length == 0)
	{
		isGameSetUP = false;
	}
}

function GameOver()
{	
	isAutoPlayClicked = false;
	Platform.direction = "stop";
	context.font = "50px Arial";
	context.fillStyle = "red";
	context.fillText("GAME OVER", 100, 300);
}

function DestroyCurrentObjects()
{
	while(Brick.position.length != 0)
	{
		Brick.position.splice(0, 1);
	}
	while(Ball.position.length != 0)
	{
		Ball.position.splice(0, 1);
	}
}

function DoubleBalls()
{
	for(var i = 0; i < 2; i++)
	{	
		Ball.position.push({ x : map.height - 200, y : map.width / 2 - 100, direction : "down" });
	}
}