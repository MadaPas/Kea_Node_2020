// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch neither line 1 or line 2

var sum = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(sum);
// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";
var sum1 = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(sum.toFixed(2));
// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 10;
var three = 11;

var avg = (one + two + three)/3;
console.log(avg.toFixed(5));
// Show in the console the avg. with 5 decimals

// --------------------------------------


// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc";
// Get me the character "c"

console.log(letters[2]);

console.log(letters.substring(2));
//console.log(letters.substring(1,3));

// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript


var result = fact.replace("j", "J");

console.log(result);

var computer = {}; //javascript object


// --------------------------------------