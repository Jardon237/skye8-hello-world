//judeo
/** oxox*/
var myFirstName="Ngwa";
var myLastName="Jude";
 
//variable assignment
var a =5;
var b=10;
var c="I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//case sensitivity
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
 properCamelCase = "A String";
titleCaseOver = 9000;

//using let keyword
let catName = "Oliver";
let catSound = "Meow!";

//working with operators
var remainder = 0;
remainder= 11%3; //using %
const quotient = 4.4 / 2.0; // gives a value of 2.2

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9
c += 7// using += operator

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";// using back slashes to escaape
const Me="FirstLine\n\t\\SecondLine\nThirdLine"
const mySt = "This is the start. " + "This is the end"; //string concartenation
let Me2 ="This is the first sentence. ";
Me2 += "This is the second sentence.";

const myName = "Jude";
const myS = "My name is " + myName + "and i am well!"; //constant with strings

const someAdjective = "realy a bad thing";
let Me3 = "Learning to code is ";
Me3+= someAdjective; //appending vairabless to string

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length; // getting the leght of a character in a string

let firstLetterOfLastName = "";
firstLetterOfLastName = lastName[0]; //getting index of a character in a string



const thirdLetterOfLastName = lastName[2]; // Change this line
const lastLetterOfLastName = lastName[lastName.length-1]; //accessing the last element in a string

const myArray = ["judde", 1, 2]; // working With
var myData = myArray[0]; // passsing the first element from my array to my data
muyArray[0]="john";

const myArra = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1]; // accessing number 8 in a mukti dimentional array
  myArray.push(["dog", 3]);// adding an array to the array list
  var removedFromMyArray = myArray.pop(); // removes the last element in the array
  var removedFromMyArray = myArray.shift(); // removes the forst elemrnt from the array
  myArray.shift();
  myArray.unshift(["Paul" ,35]);
  const myList = [["me", 1], ["you", 2], ["us", 3], ["them", 4], ["trash", 5]]; //confused list


  function reusableFunction(){ // working with functions
    console.log("Hi World");
  }
  reusableFunction(); 

  function functionWithArgs(x, y){
    console.log( x + y);
  }
  functionWithArgs( 1, 2); //function to add 2 numbers

  function timesFive(num){
    return(num * 5);
  }
  const newValue=timesFive(5); //using return to frint a functoion.

// over writting a global vaiarable  
  const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear="sweater"
 
  return outerWear;
}

myOutfit();

//Undefined Value returned from a FunctionJudiscop-5

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum= sum+5;

}

addThree();
addFive();
// qeue implementation
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const removed = arr.shift();
  return removed;

  return item;
  
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// working with booleans
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if  (wasThatTrue){
  return "Yes, that was true";
}
  return "No, that was false";

  // Only change code above this line

}
trueOrFalse(true);
trueOrFalse(false);

function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";    //equal to
  }
  return "Not Equal";
}

testEqual(12);

function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}                                  ///strictly equal to ===

testStrict();

function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

function testNotEqual(val) {
  if (val!= 99) {          // working with != operator
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual();

function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }

  if (val>10) {  
    return "Over 10";        //working with >
  }

  return "10 or Under";
}

testGreaterThan(); 

function testGreaterOrEqual(val) {
  if (val >=20) {  
    return "20 or Over";
  }

  if (val >=10) { 
    return "10 or Over";
  }                              // working eith >=

  return "Less than 10";
}

testGreaterOrEqual();

function testLessThan(val) {
  if (val< 25) {  
    return "Under 25";
  }

  if (val< 55) {  
    return "Under 55";
  }                     //working with <

  return "55 or Over";
}

testLessThan();

function testLessOrEqual(val) {
  if (val<=12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  
    return "Smaller Than or Equal to 24";  //working with <=
  }

  return "More Than 24";
}

testLessOrEqual();

function testLogicalAnd(val){
  if (val<= 50 && val>= 25){
    return "true";
  }
    return "false";      //working with logical AND (&&)
}

testLogicalAnd();

function testLogicalOr(val){
  if(val <10 || val> 20){
    return "True";
  }
    return "False"; // working with logical Or
}
testLogicalOr();

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  }
                            // working with else staments
  else{
    result = "5 or Smaller";
  }

  return result;
}

testElse(4);

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";  // working with else if staments
  }
  else{

  return "Between 5 and 10";
}
}

testElseIf(7);