/*
  Lab.Js - This simple Javascript/jQuery script uses buttons to modify some elements on the pa:

  Requirements: Query must be loaded for this script to work.

  Author: Emily Barete

  Date: 2024
*/

// Add button to challenge section
$("#challenge").append("<button id='button-challenge'>Click Me!</button>");

// Add a click listener to the challenge button
$("#button-challenge").click(function() {
    // Now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// Add button to problems section
$("#problems").append("<button id='button-problems'>Click Me!</button>");
    $("#button-problems").click(function() {
    $("#problems").toggleClass("special");
});

// Add a button to results section
$("#results").append("<button id='button-results'>Click Me!</button>");
    $("#button-results").click(function() {
    $("#results") .toggleClass("special");
});