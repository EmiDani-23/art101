// index.js - Lab 7 - Functions
// Author: Emily Barete
// Date: 10/27/24

// sortUserName - a function that takes user input the letters
// of their name
function sortUserName() {
  const userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);

  // one-liner
  var nameSorted = userName.toLowerCase().split("").sort().join("");
   console.log("nameSorted =", nameSorted)
   return nameSorted;
}

//output 
document.writeln ("oh hey, ive fixed your name: ", sortUserName (), "</br>");

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
