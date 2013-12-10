//Expressions_Industry Assignment Week 2
//Amy Harvey 12/10/2013


var websitePics = 567; //the amount of pictures setup to go on a photographers designed website
var bwPics = 210; // the amount of pictures in black and white
var landsPics = 99 // the amount of pictures photographed in landscape mode
var portrPics = websitePics - landsPics; // the amount of portrait style pics out of all pics
var regPics = websitePics - bwPics; //the amount of regular colored pictures available for the photographers website

console.log("We decided on which of the photographers" + " " + websitePics + " " + "pictures we wanted to use. Out of all of the" + " " + regPics + " " + "regular pictures there were only a few we were able to use. However, he had" + " " +  portrPics + " " + "portrait pictures we are able to use to showcase his work")