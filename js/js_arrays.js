(function ()
{
	"use strict";

	// Looping/iteration variables
	var e, c;

	// Declare a single-dimensional array of student names
	var studentNames = ["Ahmed", "Carlos", "Edwin", "Farhiya", "Frank", "Michael", "Sammy", "Veronica"];

	// Display the names of students using a normal for loop
	for (e = 0; e < studentNames.length; e++)
	{
		document.writeln("Student " + (e + 1) + " : " + studentNames[e] + "<br/>");
	}

	// Display the number of students in the class
	document.writeln("<p> The original number of students is " + studentNames.length + " </p>");

	// Admit/add new students to the class
	studentNames.push("Yoresalein", "George", "Shrek", "Fiona", "Bill", "Dingo");

	// Display new student names using a normal for loop
	document.writeln("<br><p>The names of the new students in the class are: <br/>");

	for (e = 0; e < studentNames.length; e++)
	{
		document.writeln("Student " + (e + 1) + " : " + studentNames[e] + "<br/>");
	}
	document.writeln("</p><br/>");
	document.writeln("</p><br/>");

	// Display names for students in the class before sorting using a for...in loop
	document.writeln("<p>The names of all the students in the class before sorting are: ");
	for (var name in studentNames)
	{
		document.writeln("Student " + (parseInt(name) + 1) + " : " + studentNames[name] + "<br/>");
	}
	document.writeln("</p><br/>");
	document.writeln("</p><br/>");

	// Sort student names
	studentNames.sort();

	// Display names for students in the class after sorting using a for...in loop
	document.writeln("<p>The names of all the students in the class after sorting are: ");
	for (var name in studentNames)
	{
		document.writeln("Student " + (parseInt(name) + 1) + " : " + studentNames[name] + "<br/>");
	}
	document.writeln("</p><br/>");
	document.writeln("</p><br/>");

	// Reverse the student names
	studentNames.reverse();

	// Display the names of all the students in the class after reversing using a for...in loop
	document.writeln("<p>The names of all the students in the class after reversing them are: <br/>");
	for (var name in studentNames)
	{
		document.writeln("Student " + (parseInt(name) + 1) + " : " + studentNames[name] + "<br/>");
	}
	document.writeln("</p><br/>");
	document.writeln("</p><br/>");

	// Remove and display the names of the first and last students
	document.writeln("After removing the names of students (i.e: " + studentNames.shift() 
					+ " and " + studentNames.pop() + "), there are " + studentNames.length 
					+ " left in the class.");

	// Display the names of the remaining students
	document.writeln("<p> The original number is " + studentNames.length + " </p>");

	document.writeln("</p><br/>");
	document.writeln("</p><br/>");
	document.writeln("</p><br/>");
	document.writeln("</p><br/>");
	document.writeln("</p><br/>");
	document.writeln("</p><br/>");

	// Demonstrate the use of 2-D arrays
	document.write("<br/><h3 class=\"section-heading\">Staff Salary Report</h3>");

	// 2-D array to hold salary details
	var studSalary = 
	[
		["Timothy", "001", 50000, 10000, 7000],
		["Nicolas", "002", 150000, 50000, 40000],
		["Victor", "003", 70000, 50000, 3000],
		["Ken", "004", 460000, 86000, 99000],
		["Arthur", "005", 88000, 73000, 2200],
		["Charlie", "006", 170000, 36000, 93000],
		["Aisha", "007", 54000, 9000, 7000],
		["Rusell", "008", 100000, 44000, 43000],
		["Fanien", "009", 93000, 75000, 2300],
		["Mueni", "010", 800000, 68000, 20000]
	];

	// Display staff details and their gross pay in a table
	// Create the table
	document.write("<table border=\"2\" class=\"data-table\">");
	document.write("<tr><th>"
				  +"Name"
				  +"</th><th>"
				  +"Emp_ID"
				  +"</th><th>"
				  +"Basic Pay"
				  +"</th><th>"
				  +"House Allowance"
				  +"</th><th>"
				  +"Travel Allowance"
				  +"</th><th>"
				  +"Gross Pay"
				  +"</th></tr>");

	// Use a nested loop to display the employee salary details
	for (e = 0; e < studSalary.length; e++)
	{
		document.write("<tr>"); // Open the table row
		var grossPay = 0;
		for (c = 0; c < studSalary[e].length; c++)
		{
			document.write("<td>" + studSalary[e][c] + "</td>");
			if (c > 1)
			{
				grossPay += studSalary[e][c];
			}
		}
		document.write("<td>" + grossPay + "</td>");
		document.write("</tr>"); // Close the table row
	}
	document.write("</table>");
}());
