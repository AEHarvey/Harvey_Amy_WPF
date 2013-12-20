//Functions Worsheet
//Amy Harvey 12/19/2013

//Circumference Problem
//Circumference calculation is diameter * Pi

var total = circumfSize(4, 3.14); // arguments sent to parameters

function circumfSize(d, p){ //parameters from the arguments for functions to use
    var circleSize = d * p; // variable for circle size, diameter times pi, which are the arguments set in variable total
    return circleSize; // return function is 'spitting' out the information it was given

    //also removed the pi symbol because it kept giving me errors. input the 'p' for pi
}

console.log("The circumference of the circle is " + total + " inches."); // console.log info of the d * p which is diameterm
//added inches to the end of the console.log so that there was a type for the 'total'




//String Problem
//12/20/2013
//problem created today because I had trouble understanding returns over last few days and completion of problems today

//takes 8.666666667 bee stings per lb to kill an animal. Calculate how many stings to kill an animal

var beeStings = beaverWeight(31, 8.666666667); //animal is a beaver, beavers weight is 31lbs, 8.666666667 stings per pound to kill an animal

function beaverWeight(bw, bs){ // parameters to from arguments to determine how many bee stings for a 31lb beaver
    var stingsToKill = bw * bs; // using the parameter amounts to determine the amount of bee stings total to kill a 31 lb animal
    return stingsToKill; // return for the expression for stingsToKill variable

}
console.log("It takes " + beeStings + " to kill this beaver") //console.log prints out using the variable that used the function to determine the amount of bee stings it takes to kill a 31lb animal


//Functions Worksheet completed