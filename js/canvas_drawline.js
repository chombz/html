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
		
		
		//Set up and draw the line 
		myContext.beginPath();
		myContext.moveTo(50,100);
		myContext.lineTo(250,50);
		myContext.lineWidth = 5;
		myContext.strokeStyle = "#c36404";
		myContext.stroke();
	}; 
}());