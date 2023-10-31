// Create a function called pizzaOven. We should feel free to customize what information we keep track of for 
// our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

// Create a function called pizzaOven that returns a JavaScript (Pizza) Object

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
}
// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("your first pizza is ready 🍕", pizza1);

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("your second pizza is ready 🍕", pizza2);

// Create 2 more pizzas with any toppings we like!

var pizza3 = pizzaOven("corn flour", "spicy marinara", ["mozzarella", "cheddar"], ["mushrooms", "pepper", "olives", "onions"]);
console.log("your second pizza is ready 🍕", pizza3);
var pizza4 = pizzaOven("blue corn flour", "white sauce", ["mozzarella", "ricotta"], ["mushrooms", "chicken"]);
console.log("your second pizza is ready 🍕", pizza4);

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

function randomPizza(){
    var crustTypes = ['corn flour','hand tossed','blue corn flour','deep dish'];
    var sauceType = ['traditional','marinara','spicy marinara','white sauce'];
    var cheeses = ['mozzarella', 'feta','cheddar','ricotta'];
    var toppings = ['pepperoni', 'sausage','mushrooms', 'olives', 'onions','pepper','chicken'];
    var cheesesNumber = 1,toppingsNumber = 1;

    cheesesNumber = Math.ceil(Math.random()*cheeses.length);
    toppingsNumber = Math.ceil(Math.random()*toppings.length);
    var CHEESES = [];
    for(var i = 0; i<cheesesNumber;i++){
        CHEESES.push(cheeses[i]);
    }
    var TOPPINGS = [];
    for(var i = 0; i<toppingsNumber;i++){
        TOPPINGS.push(toppings[i]);
    }
    return {
        crustType: crustTypes[Math.floor(Math.random()*crustTypes.length)],
        sauceType:  sauceType[Math.floor(Math.random()*sauceType.length)],
        cheeses: CHEESES,
        toppings: TOPPINGS
    };


}

console.log("your pizza shall be 🍕🎲: ", randomPizza());