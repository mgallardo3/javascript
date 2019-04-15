/*
Maria Gallardo
04/10/2019
heehaw.js
This file prints strings to the console, depending of the type of number
*/

for (let num =1; num <=100; num+=1)
{
    if((num % 3 === 0) && (num %5 ===0))
    {
        console.log("Hee Haw! ");
    }

    else if(num % 3 === 0)
    {
        console.log("Hee! ");
    }

    else if(num %5 ===0)
    {
        console.log("Haw! ");
    }
    else
    {
        console.log(num);
    }
}
