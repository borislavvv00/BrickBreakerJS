var Platform =
{
	color : "green",
	sizeX : 20, 
	sizeY : 60,
	X : map.height - 70,
	Y : map.width / 2 - 120,
	lives : 5,
	diraction : "stop"
};

var Ball = 
{
	radius : 10,
	color : "white",
	position : []
};

var Drop = 
{
	color : ["red", "orange", "purple", "sienna", "cornsilk", "chartreuse", "yellow", "dimgray"],
	X : 0,
	Y : 0,
	size : 20,
	direction : "stop",
	count : 5
};

var Brick = 
{
	color : ["blue", "yellow"],
	sizeX : 30,
	sizeY : 50,
	position : [],
	count : 45
};