/* eslint-disable max-len */

// 1
// Write three different ways to remove all of the
// elements from the following array:
let numbers = [1, 2, 3, 4];
console.log(numbers);
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers); // 1

numbers = [1, 2, 3, 4];
console.log(numbers);
while (numbers.length > 0) {
  numbers.shift();
}
console.log(numbers); // 2

numbers = [1, 2, 3, 4];
console.log(numbers);
numbers.splice(0);
console.log(numbers); // 3

numbers = [1, 2, 3, 4];
console.log(numbers);
numbers.length = 0;
console.log(numbers); // 4

// 2
// What will the following code output?
let addArrays = [1, 2, 3] + [4, 5];
console.log(addArrays); // => 1,2,34,5
// you cant concatenate two arrays in JS
// JS converts the first array into a string, and then
// the second array into a string, then concatenates
// the strings

// 3
// What will the following code output?
let str1 = "hello there";
// declare the variable 'str1' & initialize in with the string "hello there"
let str2 = str1;
// declare the variable 'str2' & initialize it with value saved in the 
// variable 'str1' which is a primitive string value of 'hello there'
str2 = "goodbye!";
// reassign the variable str2 with the string value 'goodbye!'
console.log(str1);
// output the value of str1 to console, which is "hello there",
// bc strings are primitives, the variables str1 and str2 essentially
// save their values in separate memory locations
// reassigning str2 to a new value has no effect on the value of str1

// 4
// What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// declare variable 'arr1' and initialize it with the array above
let arr2 = arr1.slice();
// declare variable 'arr2' and initialize it with the return value of the
// method call on the array 'arr1' => returns a SHALLOW copy of the array
// this variable arr2 does not point to the same value that arr1 points to
// at the moment they have the same array elements but are not the same 
// array
// however the elements inside the array that are non-primitives or objects
// are pointed
arr2[0].first = 42;
// reassign arr2's element 0, and its property "first" with the value of 42
// it also reassigns the same property value in arr1 since this element is
// an object and its pointer is copied
console.log(arr1);
// arr1 will output => [{ first: "value1" }, { second: "value2" }, 3, 4, 5];

// 5
// The following function unnecessarily uses two return
//  statements to return boolean values. Can you rewrite
//  this function so it only has one return statement and
//  does not explicitly use either true or false?

// Try to come up with at least two different solutions.
function isColorValid(color) {
  return color === "blue" || color === "green";
}