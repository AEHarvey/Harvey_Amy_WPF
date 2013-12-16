//Conditionals Assignment - Wacky Problem
//Amy Harvey 12/14/2013 Conditionals Assignment - Wacky Problem

// Dogs with double dewclaws!

var greatP = 3; // the great pyrenees down the road has 3 dewclaws
var huskyD = 4; // the husky next door has 4, one on each paw
var miniPin = 1; // my friends mini pin has 1 dewclaw
var totalDeclaw = (+greatP + +huskyD + +miniPin); //total amount of dewclaws for the dogs I know

/*if(totalDeclaw > 10){ // if the total dewclaws between 3 dogs equals 10 it'll print this to the console
    console.log("I know 3 people that have dogs that have declaws!"); // sentence it will print if total is above 10

}else{ //else condition if total dewclaws is less than 10
    console.log("I know 3 dogs with dewclaws but they only have" + " " + totalDeclaw + " " + "total declaws"); // what it will print to the console if total dewclaws is lower than 10
*/
// commenting out if else statement to put in ternary

(totalDeclaw > 10) ? console.log("I know 3 people that have dogs that have declaws!") : console.log("I know 3 dogs with dewclaws but they only have" + " " + totalDeclaw + " " + "total declaws");