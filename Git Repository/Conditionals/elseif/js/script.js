//Conditional logic - Else if

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45;
//if the child is old enough, print to the console "You can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
   //code performed if the condition is true
    console.log("You Can ride the coaster!");
}else if(kidHeight > wParentHeight ){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present")
}else{
    //sorry you have some growing to do
    console.log("Sorry kid, you've got some growing to do")
}