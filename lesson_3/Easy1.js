/* eslint-disable max-len */

// 1
// Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

// no: empty items will fill indexes 3 - 5, and 5 will fill index 6;
// numbers[4] returns undefined;

// 2
// How can you determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
console.log(str1[str1.length - 1] === '!');
console.log(str1.endsWith('!'));
console.log(str2[str2.length - 1] === '!');
console.log(str2.endsWith('!'));

// 3
// Determine whether the following object of people and their age contains an entry for 'Spot':
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(Object.hasOwn(ages, 'Spot'));

// 4
// Using the following string, create a new string that contains all
// lowercase letters except for the first character, which should be
// capitalized. (See the example output.)
let munstersDescription = "the Munsters are CREEPY and Spooky."; // => The munsters are creepy and spooky.
let modifiedDescription = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();
console.log(modifiedDescription);

// 5
// What will the following code output?
console.log(false == '0'); // ==> true
console.log(false === '0'); // ==> false

// 6
// We have most of the Munster family in our ages object:
// Add entries for Marilyn and Spot to the object:
let ages6 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges6 = { Marilyn: 22, Spot: 237 };

console.log(Object.assign(ages6, additionalAges6));
console.log(ages6);

// 7
// Determine whether the name Dino appears in the strings below -- check each string separately:
let strA = "Few things in life are as important as house training your pet dinosaur.";
let strB = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(strA.includes('Dino'));
console.log(strB.includes('Dino'));

// 8
// How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);

flintstones.pop();

flintstones[flintstones.length] = "Dino";
console.log(flintstones);

flintstones.pop();

flintstones = flintstones.concat('Dino');
console.log(flintstones);

// 9
// In the previous problem, our first answer added 'Dino' to the array like this:
// flintstones.push('Dino');
// How can we add multiple items to our array? ('Dino' and 'Hoppy')
flintstones.pop();
flintstones.push('Dino', 'Hoppy');
console.log(flintstones);

// 10
// Return a new version of this sentence that ends just before
// the word house. Don't worry about spaces or punctuation:
// remove everything starting from the beginning of house to the end of the sentence.

// Expected return value:
// => 'Few things in life are as important as '
let advice = "Few things in life are as important as house training your pet dinosaur.";

let indexOfH = advice.indexOf('house');
let newAdvice1 = advice.slice(0, indexOfH);
console.log(newAdvice1);