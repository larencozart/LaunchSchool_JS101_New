// 1
// Will the following functions return the same results?
function first() {
  // returns the object {prop1: "hi there"}
  return {
    prop1: "hi there"
  };
}

function second() {
  return 
  // return value needs to start on same line as return keyword
  // undefined will get returned as the default
  {
    prop1: "hi there"
  };
}

console.log(first()); // => {prop1: "hi there"}
console.log(second()); // => undefined

// 2
// What does the last line in the following code output?
let object = { first: [1] };
// 'object' var declared. initialized with object literal value;
// object propery 'first' has the value of an array [1];
let numArray = object["first"];
// 'numArray' var decaled. initialized with value of the property
// 'first' of 'object' variable
// the value is the reference to the array [1]
// the same array is being referenced in 'numArray'
// as in 'object.first'
numArray.push(2);
// the method .push() is being called upon the numArray var
// with the argument 2; this appends 2 to the array [1] => [1, 2]
// this mutates the array referenced in object.first's value

console.log(numArray); //  => "[1, 2]"
console.log(object); // => { first: [1, 2]}

// 3
// Given the following similar sets of code, what will each code snippet print?
// A
function messWithVars1(one, two, three) {
  one = two;
  two = three;
  three = one;
}

// let one = ["one"];
// //declare & initialize 'one' var with value of array ["one"];
// // global var
// let two = ["two"];
// //declare & initialize 'two' var with value of array ["two"];
// // global var
// let three = ["three"];
//declare & initialize 'three' var with value of array ["three"];
// global var

// messWithVars1(one, two, three);
// call function messWithVars1 with arguments:
// global var value one ["one"],
// global var value two ["two"], and
// global var value three ["three"]
// all of these values are objects, and are passed by references
// function call has a side effect:
// param one reassigned to value of two ["two"];
// param two reassigned to value of three ["three"];
// param three reassigned to value of one ["one"]

// these are not the same variables as global bc these vars
// with the same name shadow the global scope vars, only the param
// vars are read by the function scope

// although reassignment is the side effect, the global variables
// are not mutated or reassigned bc the parameter names shadowed
// the global var names

// console.log(`one is: ${one}`); // => one is: one (array val interpolated to string)
// console.log(`two is: ${two}`); // => two is: two
// console.log(`three is: ${three}`); // => three is: three

// B
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

// let one = ["one"];
// // declare & initialize 'one' var with value of array ["one"];
// // global var
// let two = ["two"];
// // declare & initialize 'two' var with value of array ["two"];
// // global var
// let three = ["three"];
// //declare & initialize 'three' var with value of array ["three"];
// // global var

// messWithVars(one, two, three);
// call function messWithVars2 with arguments:
// 1. global var value one ["one"],
// 2. global var value two ["two"], and
// 3. global var value three ["three"]
// all of these values are objects, and are passed by references
// function call reassigns param values
// param one assigned val ["two"]
// param two assigned val ["three"]
// param three assigned val ["one"]
// undefined is returned

// the param names again shadow the global vars with the same names
// global vars are not mutated or reassigned

// console.log(`one is: ${one}`); // => one is: one (array val interpolated to string)
// console.log(`two is: ${two}`); // => two is: two
// console.log(`three is: ${three}`); // => three is: three

// C
function messWithVars3(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];
// same as before

messWithVars3(one, two, three);
// same call with same argument values
// values are arrays and passed by reference
// param one initialized with ["one"]
// param two initialized with ["two"]
// param three initialized with ["three"]
// function actions:
// ["one"].splice(0 start, 1 delete count, "two" replace) => ["two"]
// array reference has been mutated
// ["two"].splice(0 start, 1 delete count, "three" replace) => ["three"]
// array reference has been mutated
// ["three"].splice(0 start, 1 delete count, "one" replace) => ["one"]
// array reference has been mutated

console.log(`one is: ${one}`); // => one is: two
console.log(`two is: ${two}`); // => two is: three
console.log(`three is: ${three}`); // => three is: one

// 4
/*
Ben was tasked to write a simple JavaScript function to
determine whether an input string is an IP address using 4
dot-separated numbers, e.g., 10.4.5.11. He is not familiar
with regular expressions.

Alyssa supplied Ben with a function named isAnIpNumber.
It determines whether a string is a numeric string between
0 and 255 as required for IP numbers and asked Ben to use it.
Here's the code that Ben wrote:
*/
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  // length condition (4)
  if (dotSeparatedWords.length !== 4) return false;

  // valid numbers condition
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}
/*
Alyssa reviewed Ben's code and said, "It's a good start,
but you missed a few things. You're not returning a false
condition, and you're not handling the case when the input
string has more or less than 4 components, e.g., 4.5.5 or
1.2.3.4.5: both those values should be invalid."

Help Ben fix his code.
*/