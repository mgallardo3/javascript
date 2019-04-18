/*
Maria Gallardo
04/10/2019
heehaw.js

This file creates a function called heehaw() that takes an input and prints the numbers from 1 to
the input
*/

function heeHaw(input)
{

    //if the user enters 0 or a negative number send an error message
    if(input <=0)
    {
        console.log(input + " is not a valid input");
    }

    //if the input is valid then run the program
    for (let num =1; num <=input; num+=1)
    {
        //if current number is divisible by both 3 and 5 return hee haw!
        if((num % 3 === 0) && (num %5 ===0))
        {
            console.log("Hee Haw!");
        }

        //if current number is only divisible by 3 return hee!
        else if(num % 3 === 0)
        {
            console.log("Hee!");
        }

        //if current input is only divisible by 5 return Haw!
        else if(num %5 ===0)
        {
            console.log("Haw!");
        }

        //else return the number
        else
        {
            console.log(num);
        }
    }
}
