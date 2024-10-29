// index.js - Lab 6: Arrays and Objects
// Author: Emily Barete
// Date: 10/24/2024

// Define Variables
var myTransport = ["Nissan Sentra", "Honda Accord", "Rides from my boyfriend", "rides from my friends", "rides from my parents"];

// Fcreae an object for my main ride
var myMainRide = {
  make: "Nissan",
  model: "Sentra",
  color: "Bright Red",
  year: 2012,
  age: function() {
    return 2024 - this.year;
  }
}

//output 
document.writeln("getting around:" + myTransport + "<br>"); 
//allows us to write an object to the document 
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
