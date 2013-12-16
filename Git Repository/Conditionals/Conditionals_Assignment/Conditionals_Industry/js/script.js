//Conditionals Assignment
//Amy Harvey 12/13/2013 Conditionals Assignment - Industry


//the amount of logos and graphics needing to be prepared for the website creation

var logo1 = prompt ("How many logos do you need?"); //finding out how many logos they might need for their website
var banners1 = prompt ("How many banners do you need?"); // prompt for how many banners will be needed
var totalLoBa = (+logo1 + +banners1); //total amount of banners and logos for website

if(logo1 >= 1 && banners1 >= 1);{ // if the logos and banners are equal or above 1, it'll print to the console
    console.log("I need" + " " + totalLoBa + " " + "for my website");

}   if(logo1 < 1){ //if logo is less than 1 it'll alert that needs a number
    alert ("I need a response for how many logos you need"); //alert response if needed
    prompt ("How many logos do you need?"); // prompt if necessary for logos needed
}    if(banners1 < 1){ //if banners are less than 1 it'll prompt for a new answer
    alert ("I need a response about the banners"); // alert if answer is not 1 or above
    prompt ("How many banners do you need?"); // prompt for number if less than 1
}else (logo1 >= 1 && banners1 >= 1);{ //if logos are 1 or above and banners are 1 or above it'll alert "thanks" and then print to console
    alert ("Thank you for the response"); // alert for else, if logos and banners are above 1, saying thanks
    console.log("I need" + " " + totalLoBa + " " + "logo's and banner's for my website");
}