// index.js - Lab 8 - Anon Functions and Callbacks
// Author: Emily Barete
// Date: 10/27/24

function isEven(x) {
  return x % 2 == 0;
}

// test function-
console.log("Is 1 even?", isEven(1)); // Fixed here
console.log("Is 2 even? ", isEven(2)); // And here

array = [100, 81, 4, 16, 42, 144, 10000];
console.log("My array", array);

var result = array.map(isEven); // map is not a method on arrays so I fixed this too.
console.log("Test of evenness of array:", result);
var result = array.map(function (x) { 
return x **0.5; 
});
  // should return [10, 9, 2, 4, 6.48074069840786, 12, 100]
  console. log("Squareroot of array:", result);

//allows us to write an object to the document 

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
