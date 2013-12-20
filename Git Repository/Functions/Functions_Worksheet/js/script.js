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

var beeStings = beaverWeight(31, 8.666666667); //animal is a beaver, beavers weight is 31lbs

function beaverWeight(bw, bs){
    var stingsToKill = bw * bs;
    return stingsToKill;

}
console.log("It takes " + beeStings + " to kill this beaver")


