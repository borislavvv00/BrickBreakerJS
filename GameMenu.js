var isMouseOnStart = false;
var isMouseOnCredits = false;
var isGameStart = false;
var isMouseOnBackToMenu = false;
var isMouseOnRules = false;
var isCreditsClicked = false;
var isRulesClicked = false;
var intervalMenu = setInterval(DrawGameMenu, 80);
var intervalCredits = null;
var intervalGame = null;
var intervalRules = null;

function DrawText(size, color, text, x, y)
{
	context.font = size;
	context.fillStyle = color;
	context.fillText(text, x, y);
}

function MouseOver(cursorX, cursorY)
{
	if(isCreditsClicked == false && isRulesClicked == false)
	{
		if(cursorX >= 290 && cursorX <= 390 && cursorY >= 290 && cursorY <= 330)
		{
			isMouseOnStart = true;
		}
		else
		{
			isMouseOnStart = false;	
		}
	}
//----------------------------------------------------------------------------------	
	if(isCreditsClicked == false)
	{
		if(cursorX >= 280 && cursorX <= 400 && cursorY >= 340 && cursorY <= 380)
		{
			isMouseOnRules = true;
		}
		else
		{
			isMouseOnRules = false;	
		}
	}
//------------------------------------------------------------------------------------
	if(cursorX >= 310 && cursorX <= 429 && cursorY >= 433 && cursorY <= 448)
	{
		isMouseOnBackToMenu = true;
	}
	else
	{
		isMouseOnBackToMenu = false;	
	}
//-----------------------------------------------------------------------------------
	if(isRulesClicked == false)
	{
		if(cursorX >= 265 && cursorX <= 420 && cursorY >= 390 && cursorY <= 430)
		{
			isMouseOnCredits = true;
		}
		else
		{
			isMouseOnCredits = false;	
		}
	}
}

function MenuOptionsClick()
{
	if(isGameStart == false)
	{
		if(isMouseOnStart == true)
		{
			DestroyCurrentObjects();
			clearInterval(intervalMenu);
			intervalGame = setInterval(DrawGameElements, 1);
			isGameStart = true;
		}
		else if(isMouseOnCredits == true && isCreditsClicked == false && isRulesClicked == false)
		{
			DestroyCurrentObjects();
			clearInterval(intervalMenu);
			intervalCredits = setInterval(Credits, 80);
			isCreditsClicked = true;
		}
		else if(isMouseOnBackToMenu == true)
		{
			DestroyCurrentObjects();
			clearInterval(intervalCredits);
			clearInterval(intervalRules);
			intervalMenu = setInterval(DrawGameMenu, 80);
			isCreditsClicked = false;
			isRulesClicked = false;
		}
		else if(isMouseOnRules == true && isCreditsClicked == false && isRulesClicked == false)
		{
			DestroyCurrentObjects();
			clearInterval(intervalMenu);
			intervalRules = setInterval(Rules, 80);
			isRulesClicked = true;
		}
	}
}

function DrawMouseOverText(isMouseOn, size, text, x, y)
{
	if(isMouseOn == false)
	{	
		DrawText(size, "white", text, x, y);
	}
	else
	{
		DrawText(size, "yellow", text, x, y);
	}
}

function Rules()
{
	context.fillStyle = "black";
	context.fillRect(0, 0, map.width, map.height);
	
	DrawText("30px Arial", "white", "To move use", 100, 100);
//---------------------------------------------------------------------------	
	let ad = document.getElementById("ad");
	context.drawImage(ad, 300, 70, 100, 50);
//---------------------------------------------------------------------------		
	DrawText("30px Arial", "white", "or", 430, 100);
//---------------------------------------------------------------------------		
	let mouseMove = document.getElementById("mouseMove");
	context.drawImage(mouseMove, 460, 30, 140, 100);

	DrawMouseOverText(isMouseOnBackToMenu, "20px Arial", "Back to Menu", 300, 420);
}

function Credits()
{
	context.fillStyle = "black";
	context.fillRect(0, 0, map.width, map.height);
		
	DrawText("50px Arial", "white", "Created by: Borislavvv", 100, 300);
	DrawMouseOverText(isMouseOnBackToMenu, "20px Arial", "Back to Menu", 300, 420);
}

function DrawGameMenu()
{
	context.fillStyle = "black";
	context.fillRect(0, 0, map.width, map.height);
	DrawText("100px Arial", "white", "Menu", 210, 180);
	
	DrawMouseOverText(isMouseOnStart, "50px Arial", "Start", 280, 300);
	DrawMouseOverText(isMouseOnRules, "50px Arial", "Rules", 270, 350);
	DrawMouseOverText(isMouseOnCredits, "50px Arial", "Credits", 255, 400);
}