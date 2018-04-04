"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-sm-6">';
    html += '<li>' +'<h1 class="menuItems">' + coffee.name + '<small>' + coffee.roast + ' </small>' + '</h1>';
    html += '</li>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } if (selectedRoast === "all") {
            filteredCoffees.push(coffee)
        }
    });
    coffeeMenu.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon ', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeeMenu = document.querySelector('#coffee-menu');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var submitNewCoffeeButton = document.querySelector('#submit-new');

coffeeMenu.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

function myFunction() {
    // Declare variables
    var input, filter, ul, li, h1, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("coffee-menu");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        h1 = li[i].getElementsByTagName("h1")[0];
        if (h1.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function capitalize(input) {
    input = input.toString();
    var first = input[0].toUpperCase();
    var rest = input.substring(1).toLowerCase();
    return first + rest;
}

function capitalizeEachWord(input) {
    var inputArray = input.split(" ");
    var output = "";
    inputArray.forEach(function(word){
        output += " " + capitalize(word);
    });
    return output;
}


function updateWithNewCoffees() {
    // var selectedRoast = roastSelection.value;
    var newCoffeeList = [];
    coffees.forEach(function(coffee) {
            newCoffeeList.push(coffee)
    });
    coffeeMenu.innerHTML = renderCoffees(newCoffeeList);
}


function addCoffee() {
    var newCoffeeObject = {};
    var newSelectedRoast = document.querySelector("#add-coffee").value;
    var newCoffeeName = capitalizeEachWord(document.querySelector("#newInput").value);
    newCoffeeObject = {
        id: coffees.length+1,
        name: newCoffeeName,
        roast: newSelectedRoast
    };
    coffees.push(newCoffeeObject);
    updateWithNewCoffees();
}









