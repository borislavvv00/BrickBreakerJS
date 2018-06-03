(function(window, document)
{
	canvas = document.getElementById("map");
	context = canvas.getContext("2d");
	document.addEventListener("keydown", GetKeyboardCommands);
//-------------------------------------------------------------------------------------	
	var autoPlay = document.getElementById("auto");
	var autoPlayClickCount = 0;
	autoPlay.onclick = function()
	{
		if(autoPlayClickCount % 2 == 0)// button on
		{
			isAutoPlayClicked = true;
			autoPlay.innerHTML = "autoPlayOn";
		}
		else // button off
		{
			isAutoPlayClicked = false;
			autoPlay.innerHTML = "autoPlayOff";
			Platform.direction = "stop";
		}
		autoPlayClickCount++;
	}
//----------------------------------------------------------------------------------------	
	var restart = document.getElementById("restart");
	restart.onclick = function()
	{
		DestroyCurrentObjects();
		isGameOver = false;
		isGameSetUP = false;
		isAutoPlayClicked = false;
		Ball.radius = 10;
		score = 0;
		level = 1;
		Platform.lives = 5;
		Platform.sizeY = 60;
		Platform.X = map.height - 70;
		Platform.Y = map.width / 2 - 120;
		Platform.direction = "stop";
	}
//--------------------------------------------------------------------------------------	
	var pause = document.getElementById("pause");
	var pauseClickCount = 0;
	pause.onclick = function()
	{
		if(pauseClickCount % 2 == 0)// button on
		{
			isGamePaused = true;
			pause.innerHTML = "pauseOn";
		}
		else // button off
		{
			isGamePaused = false;
			pause.innerHTML = "pauseOff";
		}
		pauseClickCount++;
	}
//---------------------------------------------------------------------------------------	
	setInterval(DrawGameElements, 1);
}
)(window, document);
