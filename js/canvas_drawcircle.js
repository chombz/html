// JavaScript Document to illustrate hiw to draw lines on canvas using JavaScript
// Use the new JS syntax of "use strict"
(function()
{
   "use strict";
	
	//Function to be called when the document loads
	window.onload = function()
	{
		//Get a reference to the canvas on the HTML document 
		var docCanvas = document.getElementById("my-canvas");
		
		var myContext = docCanvas.getContext("2d");
		
		
		//Set up and draw the arc 
		
		//set x and y center point
		var xCoord = docCanvas.width / 2;
		var yCoord = docCanvas.height / 2;
		
		
		//set the radius of the arc from the center point
		var rad = 50;
		
		//set the start and end angles for the arc
		var startAngle = 0;
		var endAngle = Math.PI * 2;//full circle
		
		
		
		// Draw the arc with the specified parameters
		myContext.arc(xCoord, yCoord, rad, startAngle, endAngle, false);
		myContext.lineWidth = 8;
		myContext.strokeStyle = "#c36404";
		myContext.stroke();
	}; 
}());