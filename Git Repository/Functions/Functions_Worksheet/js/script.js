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
