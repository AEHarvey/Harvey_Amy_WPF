//Functions Assignment - Wacky Week 4
//Amy Harvey 12/20/2013

var total = getAmts(); // arguments for first var for calling function

function getAmts(e, t){ //parameters
    var turtleGo= prompt("How many Turtles are traveling with the Elves?"); // total amount of turtles traveling with elves
    var elvesGo = prompt("How many Elves are traveling with the Turtles?"); // total amount of elves traveling with turtles
    var turtleFeet = t * 4; // amount of turtle feet on the trip is turtleGo * 4, turtles have 4 feet per body
    var elvesFeet = e * 2; // amount elves feet on the trip is elvesGo * 2, elves have 2 feet per body
    var totalFeet = +turtleFeet + +elvesFeet; //total amount of feels is turtleFeet + elvesfeet

    /*if(totalFeet >= 40 || turtleGo >=10 || elvesGo >=10){
        //code performed if turtles or elves going is 10 or up or total feet is equal or greater than 40
        console.log('Head Turtle says "too many feet to stop at the village salon for a pedicure!"');
            }else{
                //code performed if there is not too many feet and the village salon will be able to fit us in
                console.log('Head Elf says "I think the village salon shop worker can fit us in before we continue our journey!"');
    }*/

    //commenting out the if else statement to put in ternary

  (totalFeet >= 40 || turtleGo >= 10 || elvesGo >=10) ? console.log('Head Turtle says "too many feet to stop at the village salon for a pedicure!"') : console.log('Head Elf says "I think the village salon shop worker can fit us in before we continue our journey!"');
}

