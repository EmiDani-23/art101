/*
   Requirements: jQuery must be loaded for this script to work.

   Author: Emily Barete
   Date: 2024
*/

$("#mybutton").click(function() {
    console.log("The button was clicked!");
  });

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://swapi.dev/api/people/5/",
   // Whether this is a POST or GET request
   type: "GET",
   // What do we do when the api call is successful
   success: function(data) {
       console.log(data);
    },
})