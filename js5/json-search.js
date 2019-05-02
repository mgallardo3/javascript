/*
Maria Gallardo
05/01/2019
json-search.js

This file contains a set of objects to and methods to display those objects in
json-search.html file
*/

//Create Json file with at least 5 people name, sex, born, died, father, and mother.
var people = [

    {
        name: "Jane Doe",
        sex : "female",
        born: 1955,
        died: 1999,
        father: "Todd Doe",
        mother: "Angie Doe"
    },
    {
        name: "Jane Ramirez",
        sex : "female",
        born : 1935,
        died : 1997,
        father : "Tom Ramirez",
        mother : "Lina Ramirez"
    },
    {
        name : "Joe Smith",
        sex : "male",
        born : 1985,
        died : 2005,
        father : "Calvin Smith",
        mother : "Mary Smith"
    },
    {
        name: "Noah Miller",
        sex : "male",
        born : 1901,
        died : 2001,
        father : "James Miller",
        mother : "Ava Miller"
    },
    {
        name : "Jacob Brown",
        sex : "male",
        born : 1934,
        died : 1979,
        father : "Mason Brown",
        mother : "Bella Brown"
    }

];

//Grab the button and assign a function
let search = document.getElementById('search');
search.onclick = findPerson;

//Get the information stored in the inputBox
let inputBox = document.getElementById('box');

//Get the div to display the result
let output = document.getElementById('result');

function findPerson()
{
    //Collect the entered name, transform the name to uppercase for comparison purposes
    let name = inputBox.value;
    name = name.toUpperCase();
    if(name === "")
    {
        output.innerHTML = "<p>Please enter a name to start your search</p>"
    }
    else
    {
        //filter the search by name
        const foundPerson = JSON.stringify(
            people.filter(person => person.name.toUpperCase().match(name)));
        console.log(foundPerson);

        //Display the value
        output.innerHTML = foundPerson;
    }

}
