/*
Build a program that randomly generates Teddy's age,
and logs it to the console. Have the age be a random
number between 20 and 120 (inclusive).
*/

let teddyAge = () => {
  let max = 120;
  let min = 20;
  let age = Math.ceil((Math.random() * (max - min)) + min);
  console.log(`Teddy is ${age} years old!`);
};

teddyAge();
teddyAge();
teddyAge();
teddyAge();
teddyAge();
teddyAge();
// Teddy is 69 years old!