(function(window, document)
{
	canvas = document.getElementById("map");
	context = canvas.getContext("2d");
	document.addEventListener("keydown", GetKeyboardCommands);
	var btn = document.getElementById("auto");
	var btnClick = 0;
	btn.onclick = function()
	{
		if(btnClick % 2 == 0)// button on
		{
			autoPlay = true;
		}
		else // button off
		{
			autoPlay = false;
			Platform.direction = "stop";
		}
		btnClick++;
	}
	setInterval(DrawGameElements, 1);
}
)(window, document);