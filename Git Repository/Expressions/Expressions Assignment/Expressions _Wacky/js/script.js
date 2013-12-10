//Expressions_Wacky
//Amy Harvey 12/10/2013

//how many pairs and single toe socks can i come up with?

var btoeSocks = [22, 16, 3, 25] //I've got 22 single black toe socks in the dryer, 16 pairs in the dresser, found 3 in the basket and 25 more in the washer
var totalbSocks = btoeSocks[0] + btoeSocks[1] + btoeSocks[2] + btoeSocks[3]; //total of all the black toe socks
var mctoeSocks = [14, 1, 9] //i've got 14 pairs of mismatched multicolored toe socks in my drawer, 1 single stuck in the basket and 9 bright colored toe socks in my dresser
var totalmcSocks = mctoeSocks[0] + mctoeSocks[1] + mctoeSocks[2]; //total multicolored toe socks

var totaltoeSocks = totalbSocks + totalmcSocks/2;


console.log(totalbSocks)
console.log(totalmcSocks)
console.log(totaltoeSocks)
console.log("I've found all my" + " " + totalbSocks + " " + "black toe socks and all of my" + " " + totalmcSocks + " " + "multi colored toe socks and now I have" + " " + totaltoeSocks + " " + "pairs.");