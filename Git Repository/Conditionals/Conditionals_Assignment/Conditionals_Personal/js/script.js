//Conditionals Assignment - Conditionals_Personal
//Amy Harvey 12/13/2013 Conditionals_Personal


//christmas lights in and on the house
var xmasLightsFront = prompt ("How many Christmas lights are out front this year?"); //how many christmas lights do you have out front
var xmasLightsBack = prompt ("How many Christmas lights are out back this year?"); // how many christmas lights are out back this year
var xmasLightsIn = prompt ("How many Christmas lights total are inside?"); // how many christmas lights are inside
var totalXmasLights = (+xmasLightsBack + +xmasLightsFront + +xmasLightsIn); //how many christmas lights total are up
var xmasLightsOutside = (+xmasLightsBack + +xmasLightsFront);


if(totalXmasLights <= 2000){
    console.log("With" + " " + xmasLightsOutside + " " + "Christmas lights is just enough for you can compete in the contest");

}else if(xmasLightsOutside >=1000){
    console.log( "With" + " " + xmasLightsOutside + " " + "Christmas lights up, you can compete in the daily contest instead of the weekly contest for best Christmas design");

}else{
    console.log("You only have" + " " + totalXmasLights + " " + "Christmas lights and that is not enough to compete this year");
}