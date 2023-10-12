(function() {
	"use strict";
	
	// Function to get the user's location
	function getUserLocation() {
	   // Check if the browser supports geolocation
	   if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(showPosition); // Get the user's location
	   } else {
		  alert("Sorry, your browser does not support Geolocation");
	   }
	}
	
	// Function to display the user's location
	function showPosition(position) {
	   alert("Your location is " + position.coords.latitude + ", " + position.coords.longitude);
	}
 
	// Call the function to get the user's location
	getUserLocation();
 }());
 