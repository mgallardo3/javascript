/*
Maria Gallardo
04/21/2019
array-object.js

This file contains a function that receives an array as an argument and returns
an object
*/

//createObject function takes an array as a parameter and returns an object
function createObject(array)
{
    //create the arrays to store the objects attributes
    var strings =[];
    var numbers=[];
    var booleans=[];

    //loop through array
    array.forEach(function(attribute)
    {

        if(typeof attribute == 'string')
        {
            strings.push(attribute);
        }

        else if(typeof attribute == 'number')
        {
            numbers.push(attribute);
        }

        else if(typeof attribute == 'boolean')
        {
            booleans.push(attribute);
        }

    });
    //Put the object together
    var createObject = {
        objectString: strings,
        objectNumbers: numbers,
        objectBooleans : booleans
    };
    //print object to the website
    document.getElementById("object").innerHTML = "Var result = {<br>" +
        "strings: ["+ createObject.objectString + " ],<br>" +
        "numbers: [" + createObject.objectNumbers + " ],<br>" +
        "booleans: [" + createObject.objectBooleans + " ]<br>}";


}

var myArray = [-1,5,"cat",false,10.2,true,"dog"];

createObject(myArray);