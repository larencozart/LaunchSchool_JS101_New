/* eslint-disable max-len */

// 1
// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.replace('important', 'urgent');
console.log(newAdvice);
// use String.replaceAll() to replace all instance of a pattern

// 2
// The Array.prototype.reverse method reverses the order of elements in an array,
// and Array.prototype.sort can rearrange the elements in a variety of ways, including
// descending. Both of these methods mutate the original array as shown below.
// Write two distinct ways of reversing the array without mutating the original array.
// Use reverse for the first solution, and sort for the second.

// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();
let reversedNumbers2 = numbers.toReversed();
console.log(numbers);
console.log(reversedNumbers);
console.log(reversedNumbers2);

let sortedNumbers = [];
sortedNumbers = sortedNumbers.concat(numbers).sort((num1, num2) => num2 - num1);
let sortedNumbers2 = numbers.toSorted((num1, num2) => num2 - num1);
console.log(numbers);
console.log(sortedNumbers);
console.log(sortedNumbers2);

// Bonus Question: Can you do it using the Array.prototype.forEach() method?
let forEachReversedNumbers = [];
numbers.forEach((num) => {
  forEachReversedNumbers.unshift(num);
});
console.log(forEachReversedNumbers);

// 3
// Given a number and an array, determine whether the number is included in the array.
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

// 4
// Starting with the string: show two different ways to put the expected "Four score and " in front of it.
let famousWords = "seven years ago...";
famousWords = 'Four score and '.concat(famousWords);
console.log(famousWords);

let famousWords2 = "seven years ago...";
famousWords2 = `Four score and ${famousWords2}`;
console.log(famousWords2);

// 5
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by
// removing the number at index 2, so that the array becomes [1, 2, 4, 5].

let array = [1, 2, 3, 4, 5];
console.log(array);
array.splice(2, 1);
console.log(array);

// 6
// Create a new array that contains all of the above values, but in an un-nested format:
// => [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let flatFlintstones = flintstones.flat();
console.log(flintstones);
console.log(flatFlintstones);

// 7 *** DO NOT FULL UNDERSTAND LAUNCH SCHOOL SOLUTION **
// Create an array from this object that contains only two elements: Barney's name and Barney's number:
// [ 'Barney', 2 ]
let flintstones6 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barney = Object.entries(flintstones6)[2];
console.log(barney);
// LS solution
Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

//8
// How would you check whether the objects assigned to variables numbers and table below are arrays?
let numbers8 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers8));
console.log(Array.isArray(table));

// 9
// Back in the stone age (before CSS), we used spaces to align things
//  on the screen. If we have a 40-character wide table of Flintstone family members,
//  how can we center the following title above the table with spaces?
let title = "Flintstone Family Members";
let targetLength = 40;
let paddingLength = Math.floor((targetLength - title.length) / 2);
let paddedTitle = title.padStart(paddingLength + title.length, ' ');
console.log(paddedTitle);
console.log(paddedTitle.length);


// 10
// Write a one-line expression to count the number of lower-case
// t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);