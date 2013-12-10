//Personal Expression
//Amy Harvey 12/10/2013 Expression_Personal

//How many baseballs will the kids get to hit in tryouts based off the amount of balls and buckets we have at the park
var baseBalls = prompt("How many Baseballs are in the bucket?") //want user to prompt how many baseballs are in the bucket
var bucketOballs = prompt("How many buckets did you bring to the park?") //user prompt for how many buckets total they brought to the park today
var kidsPlaying = prompt("How many kids signed up to play Baseball?") //user prompt for how many kids want to play baseball

var ballstoHit = baseBalls * bucketOballs / kidsPlaying; //multiplying the amount of baseballs by the amount of buckets divided by the amount of kids

console.log("Each kid will get" + " " + ballstoHit + " " + "out of" + " " + bucketOballs + " " + "buckets to use for tryouts") //console.log will output the amount of baseballs each kid will get to hit in tryouts for baseball




