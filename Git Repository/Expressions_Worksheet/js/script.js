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

var avg = total / 5; //average total spent over 5 weeks at the grocery store

console.log("you have spent a total of" + " " + total + " " + "on groceries over 5 weeks. That is an average of" + " " + avg + " " + "per week")


//amount of an item after discount given before and after tax

const origPrice = 284.75; //original price of item is 284.75
var discoGiven = .30;  //discount given is 30 percent of original price
var backMsg = 284.75 * .30; //item is a back massage for your work chair
var salesTax = .07; //sales tax is 7% on the dollar
var totalPT = origPrice - backMsg; // total of discount given pre tax
var totalSt = origPrice * salesTax; // the amount of sales tax on original price of item
var totalAll = origPrice + totalSt; //the amount of item with sales tax
var discoGave = totalAll * discoGiven; // discount given with sales tax added on
var totalEnd = totalAll - discoGave; //item price after discount

console.log("Your Back Massager was originally" + " " + "$" + origPrice + " " + ", but after the" + " " + discoGiven + " " + "discount, it is now" + " " + "$" + totalPT + " " + "without tax, and" + " " + "$" + totalEnd + " " + "with tax")

















