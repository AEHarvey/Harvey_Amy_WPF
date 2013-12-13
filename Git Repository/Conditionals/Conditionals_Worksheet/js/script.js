//Conditionals Worksheet
//Amy Harvey 12/13/2013 Conditionals Worksheet

//Last chance for gas!
//Can we make it the next 200 miles without stopping for gas?

var gasEfficiency = 32; // gas tank gets 32MPG on the highway
var gasPercentLeft = .15; // gas tank has 15% left before the car runs out of gas
var gTankSize = 27; // gas tank can hold 27 gallons
var gallonsLeft = gasEfficiency * gTankSize * gasPercentLeft / gasEfficiency; //gives the amount of gallons left in the tank
var notEnoughGas = gasEfficiency * gTankSize * gasPercentLeft; //the amount of miles left on the current gas tank which is not enough to go the distance needed

if(notEnoughGas > 200){
    //code performed if the condition is true
    console.log("Yes, you can make it without stopping for gas!!");
}else{(notEnoughGas < 200);
    //code performed if the condition is false
    console.log("You only have" + " " + gallonsLeft + " " +  "gallons of gas in your tank, better get gas now while you can");
}

//Grade Letter Calculator

var studentGrade = 87; //student has an 87% grade at end of class
var letterGrade;

if(studentGrade >= 90){ // greater than or equal to 90 is a letter grade A
    letterGrade = "A";
}else    if(studentGrade >= 80){ //greater than or equal to 80 is a b
    letterGrade = "B";
}else {
    if(studentGrade >= 73){ // greater than or to a 70 is a C
        letterGrade = "C";
    }else {
        if(studentGrade >= 70){ //greater than or equal to 70 is a d
            letterGrade = "D";
        }else {
            if(studentGrade >= 69){ // anything below a 69 is an F
                lettergrade = "F";
            }else{
            }
        }
    }
}

console.log("You have an" + " " + studentGrade + "%, which means you have a" + " " + letterGrade + " " + "in this class")







