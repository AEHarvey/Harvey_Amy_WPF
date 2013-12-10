//Amy Harvey 12/07/2013 Expressions Worksheet

//Dog years problem

var sparkysAge = 4; //sparkysage is 4
var age = sparkysAge * 7; //multiplying dog years by human years

console.log("sparky is" + " " + age + " " + "years old which is " + sparkysAge + " " + "in dog years");
//console.log is equal to human years times dog years



//Slice of pie part 1
//How much pizza each party goer will get

const pizzaSlices = 8; // 8 slices per pizza
var partyPeople = 20; // 20 total people at the party
var pizzaBought = 6; // 6 total pizzas for the party

// pizzas bought divided by amount of people divided by the amount of people

var slicePer = pizzaBought * pizzaSlices / partyPeople;

console.log("each person ate" + " " + slicePer + " " + "slices of pizza at the party") // Partygoers will get 2 slices of pizza

//slice of pie part 2
//how much pizza will sparky get using modulo

var remainder = 48 % 20;
console.log("sparky got" + " " + remainder + " " + "slices of pizza")


// array for average of grocery totals
const groceryTotal = [25.62, 62.75, 45.89, 40.09, 55.99]
// the amount for all grocery totals
var total = groceryTotal[0] + groceryTotal[1] + groceryTotal[2] + groceryTotal[3] + groceryTotal[4]

var avg = total / 5;

console.log("you have spent a total of" + " " + total + " " + "on groceries over 5 weeks. That is an average of" + " " + avg + " " + "per week")


