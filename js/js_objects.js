// JavaScript Document to illustrate JavaScript objects and illustrations
// Use the new JS syntax of "use strict"
(function ()
{
  "use strict";

  // Create a single object using an object literal
  var singleStudent = 
  {
    surname: "Askerland",
    otherNames: "Lucius Artorius Castus",
    age: 66,
    gender: 'Male',
    course: "ADSE",
    fullName: function ()
    {
      return this.surname + " " + this.otherNames; // Fixed typo: "surname" instead of "strname"
    }
  };

  // Display the student's details
  document.writeln("<br/><h3 class=\"section-heading\">Student Details</h3><p>"
    + "Student Names: " + singleStudent.fullName() + "<br/>"
    + "Student's Age: " + singleStudent.age + "<br/>"
    + "Student's Gender: " + singleStudent.gender + "<br/>"
    + "Student's Course: " + singleStudent.course + "<br/></p>");

  // Define the Employee object
  var singleEmployee = 
  {
    firstname: "John",
    lastname: "Doe",
    age: 30,
    gender: 'Male',
    department: "HR",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    salary: 50000,
    fullDetails: function ()
    {
      var allDetails = "Employee's Names: " + this.firstname + " " + this.lastname + "<br/>" +
        "Employee's Age: " + this.age + "<br/>" +
        "Employee's Gender: " + this.gender + "<br/>" +
        "Employee's Department: " + this.department + "<br/>" +
        "Employee's Phone Number: " + this.phoneNumber + "<br/>" +
        "Employee's Email: " + this.email + "<br/>" +
        "Employee's Salary: " + this.salary;
      return allDetails;
    }
  };

  // Display the employee's details
  document.writeln("<br/><h3 class=\"section-heading\">Employee Details</h3><p>"
    + "Employee Names: " + singleEmployee.firstname + " " + singleEmployee.lastname + "<br/>"
    + "Employee's Age: " + singleEmployee.age + "<br/>"
    + "Employee's Gender: " + singleEmployee.gender + "<br/>"
    + "Employee's Department: " + singleEmployee.department + "<br/>"
    + "Employee's Phone Number: " + singleEmployee.phoneNumber + "<br/>"
    + "Employee's Email: " + singleEmployee.email + "<br/>"
    + "Employee's Salary: " + singleEmployee.salary + "<br/></p>");

  // Create a Circle object and define methods for area and circumference
  function Circle(radius)
  {
    this.radius = radius;
    this.area = function ()
    {
      return Math.PI * this.radius * this.radius;
    };
    this.circumference = function ()
    {
      return 2 * Math.PI * this.radius;
    };
  }

  // Declare and instantiate objects of type Circle
  var smallCircle = new Circle(7);
  var largeCircle = new Circle(21);

  // Display the details of the circles
  document.write("<br/><h3 class=\"section-heading\">Details of the small circle</h3>"
    + "<p>Radius: " + smallCircle.radius + " cm. "
    + "<br/>Area: " + smallCircle.area() + " cm<sup>2</sup>."
    + "<br/>Circumference: " + smallCircle.circumference() + " cm.</p>");

  document.write("<br/><h3 class=\"section-heading\">Details of the large circle</h3>"
    + "<p>Radius: " + largeCircle.radius + " cm."
    + "<br/>Area: " + largeCircle.area() + " cm<sup>2</sup>"
    + "<br/>Circumference: " + largeCircle.circumference() + " cm.</p>");

  // Define the right-angled triangle object
  function RightAngledTriangle(base, height)
  {
    this.base = base;
    this.height = height;
    this.area = function ()
    {
      return 0.5 * this.base * this.height;
    };
    this.perimeter = function ()
    {
      return this.base + this.height + Math.sqrt(this.base * this.base + this.height * this.height);
    };
  }

  // Create an object of a right-angled triangle
  var triangle = new RightAngledTriangle(5, 12);

  document.write("<br/><h3 class=\"section-heading\">Details of right-angled triangle</h3>"
    + "<p>Base: " + triangle.base + " cm."
    + "<br/>Height: " + triangle.height + " cm."
    + "<br/>Area: " + triangle.area() + " cm<sup>2</sup>"
    + "<br/>Perimeter: " + triangle.perimeter() + " cm.</p>");

  // Work with JavaScript built-in Date objects
  var now = new Date(); // Get the current time
  var currYear = now.getUTCFullYear(); // Get the current year
  var currMonth = now.getUTCMonth(); // Get current month as a number between 0 - 11
  var currDate = now.getDate(); // Get the date as a number between 1 - 31
  var day = now.getDay(); // Get day number between 0 - 6
  var currDay; // Will hold the string name of the weekday

  switch (day)
  {
    case 0:
      currDay = "Sunday";
      break;
    case 1:
      currDay = "Monday";
      break;
    case 2:
      currDay = "Tuesday";
      break;
    case 3:
      currDay = "Wednesday";
      break;
    case 4:
      currDay = "Thursday";
      break;
    case 5:
      currDay = "Friday";
      break;
    case 6:
      currDay = "Saturday";
      break;
  }

  // Get the time details
  var currentHour = now.getHours();
  var currentMin = now.getMinutes();
  var currSec = now.getSeconds();

  // Display the current date and time
  document.write("<br/><p><h3>Today is " + currDay + " " + currDate + "~"
    + currMonth + "~" + currYear + " and the time is "
    + currentHour + ":" + currentMin + ":" + currSec + "<h3></p>");
}());
