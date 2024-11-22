/*
 * This is a fizzBuzzBoom program that iterates through numbers 1 to 200,
 * and prints "Fizz", "Buzz", or "Boom" based on divisibility rules.
 *  Author: Emily Barete
 * Date: 2024
 */

function fizzBuzzBoom() {
    // Initialize an empty string to store the output
    let oneLongString = "";

    // Loop through numbers from 1 to 200
    for (let num = 1; num <= 200; num++) {
        // Create an empty string for the current number's output
        let str = "";

        // Check if the number is divisible by each of our factors

        // If divisible by 3, concatenate "Fizz" to the output string
        if (num % 3 == 0) {
            str += "Fizz";
        }

        // If divisible by 5, concatenate "Buzz" to the output string
        if (num % 5 ==0) {
            str += "Buzz";
        }

          // If divisible by five, concatentate Boom to the outptu string.
          if (num %7==0){
              str +="Boom"
          }

          // Finally, add back in our original number and make sure we 
       	  // always print something
      
      
          if (str==""){
              str=num;
          }
          else{
              str+="!"
          
      }
         console.log(num);
         
         oneLongString+=str+"<br>";

         
      }
      
     $("#output").html(oneLongString);
}

// Call the function once defined

fizzBuzzBoom();