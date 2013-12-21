//Functions Assignment - Industry Week 4
//Amy Harvey 12/20/2013

// industry section for assignment
// webpages needed for a small shopping website

var total = graphicsAmt();

function graphicsAmt(){
    var graphicsStore = prompt ("Enter the amount of graphics in you E-Store.");// variable for circle size, diameter times pi, which are the arguments set in variable total
    var websitePages = prompt ("Enter the amount of pages you need.");

if(graphicsStore <= 10 && websitePages <= 5){
    //code performed if amount of graphics is less than or equal to 10 and amount of pages is less than or equal to 5
    console.log("I can make " + graphicsStore +  " graphics for you and " + websitePages + " website pages , but it will take sometime");
    //
    }else
        if(websitePages <= 5 && graphicsStore >= 11){
    //code performed if website pages is less than or equal to 5 but graphics is greater than or equal to 11
    console.log("I can build " + websitePages + " website pages for you, but I cannot create " + graphicsStore + " graphics in time");
    //what it will print "if" statement is true
}       else{

            //print this if bot conditions are false
            console.log("I can't do either for you, the job is too great");
                //all items are determined by prompts
    }
        }

