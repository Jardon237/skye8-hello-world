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

//Undefined Value returned from a Function
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum= sum+5;

}

addThree();
addFive();

