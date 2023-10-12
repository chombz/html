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
		var rad = 70;
		
		//set the start and end angles for the arc
		var startAngle = Math.PI * 0.9;
		var endAngle = Math.PI * 1.8;
		
		
		
		//draw the arc with the above [arameter
		myContext.arc(xCoord, yCoord, rad, startAngle, endAngle, false);
		myContext.lineWidth = 8;
		myContext.strokeStyle = "#c36404";
		myContext.stroke();
	}; 
}());