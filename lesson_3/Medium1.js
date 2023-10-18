/* eslint-disable max-len */
// 

/* 1
Let's do some "ASCII Art": a stone-age form of nerd artwork from back
in the days before computers had video screens.

For this practice problem, write a program that outputs
The Flintstones Rock! 10 times, with each line indented 1 space to the
right of the line above it. The output should start out like this:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   The Flintstones Rock!
    ...

*/

let count = 1;
while (count <=  10) {
  console.log(' '.repeat(count - 1) + 'The Flintstones Rock!');
  count += 1;
}

// 2
// eslint-disable-next-line max-len
// Starting with the string: Return a new string that swaps the case of all of the letters:
// => `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;
let munstersDescription = "The Munsters are creepy and spooky.";
let swappedCases = '';
for (let idx = 0; idx < munstersDescription.length; idx += 1) {
  let char = munstersDescription[idx];
  if (char === char.toLowerCase()) {
    swappedCases += char.toUpperCase();
  } else {
    swappedCases += char.toLowerCase();
  }
}

console.log(swappedCases);

// 3
/*
Alan wrote the following function, which was intended to return all of the factors of number:

Alyssa noticed that this code would fail when the input is 0 or a negative number,
and asked Alan to change the loop. How can he make this work without using a
do/while loop? Note that we're not looking to find the factors for 0 or negative
numbers, but we want to handle it gracefully instead of raising an exception or going
into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code?
*/

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
// number % divisor ensures that the number can divide the divisor with no remainder
// divisors that divide without a remainder are factors.

console.log(factors(3));