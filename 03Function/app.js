// Các kỹ thuật sử dụng module-require

// Ex1 
var onee = require("./one");
onee();

//Ex2
var temp = require("./two").sayTwo();


//Ex3 
var three = require("./three");
three.message = "Not hello three";
three.sayThree();


//Ex4
var Four = require("./four");

var fo = new Four();
// fo.message = "Not hello four";
fo.sayFour();



//Ex 5
var five = require("./five").say;
five();