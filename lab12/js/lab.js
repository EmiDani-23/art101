/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Emily Barete
   Date: 2024
*/

// Return Gryffindor, Ravenclaw, SLytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str) {
    let len = str.length;
    let mod = len % 4; // <== Here is the fix. Original line: `let mod = length % 4;`
    if (mod === 0){
        return "Gryffindor"
    } 
    else if (mod === 1) {
        return "Ravenclaw"
    }
    else if (mod === 2) {
        return "Slytherin"
    }
}   

//attach click handler to submit button
$("#button").click(function(){
    console.log("Button clicked");
    //get the value in the #input text box, assign to a variable name
    var name = $("#input").val()
    console.log("Name:" + name);
    // get the house
    var house = sortingHat(name);
    console.log("House:" + house);
    //add house to output div
    $("#output").html("<h1>" + house + "</h1>");
});