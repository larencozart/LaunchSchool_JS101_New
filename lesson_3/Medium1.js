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

// 4
/*
Alyssa was asked to write an implementation of a rolling buffer.
You can add and remove elements from a rolling buffer. However,
once the buffer becomes full, any new elements will displace the
oldest elements in the buffer.

She wrote two implementations of the code for adding elements to
the buffer. In presenting the code to her team leader, she said
"Take your pick. Do you prefer push() or concat() for modifying
the buffer?".

Is there a difference between these implementations, other than
the method she used to add an element to the buffer? You may assume
that newElement will always be a primitive value.
*/

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  // mutates the original buffer argument
  // the caller will see the argument has been mutated
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  // returns a shallow copy of the original buffer with the newElement merged
  // reassigns buffer to this shallow copy;
  // orginal argument will not be mutated
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// 5
// What will the following two lines of code output?
console.log(0.3 + 0.6); // => 0.8999999
console.log(0.3 + 0.6 === 0.9); // ==> 0.89999 === 0.9 => false
// JS short coming, floating points arent always highly accurate

// 6
// What do you think the following code will output?
// How can you reliably test if a value is NaN?
let nanArray = [NaN];

console.log(nanArray[0] === NaN); // => false
// NaN cannot be compared with == or === operators successfully
console.log(Number.isNaN(nanArray[0]));

// 7
// What is the output of the following code?

let answer = 42;
// declare var answer, initialize it with number value 42;
function messWithIt(someNumber) {
  // has a parameter someNumber
  return (someNumber += 8);
  // attempts to return the reassignment of somenumber (42)
  // with someNumber + 8;
  // but the value of 42 cannot be modified
  // it is passed in by value
  // 42 += 8 => returns 50;

}

let newAnswer = messWithIt(answer);
// declare var answer, initialize it with return value of calling the
// messWithIt function with the argument '42' (answer variable) passed in
console.log(answer - 8);
// answer (42) - 8 => 34
// answer has not been reassigned
// the value of answer was passed in, the the variable itself


// 8
// One day, Spot was playing with the Munster family's home computer,
// and he wrote a small program to mess with their demographic data:
// After writing this function, he typed the following code:
// Before Grandpa could stop him, Spot hit the Enter key with his tail.
// Did the family's data get ransacked? Why or why not?

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    // Object.values returns an array of property values of the object:
    // [{age: 32, gender" : 'male'}, {}, {}, {} etc]; an array of objects
    // forEach is iterating over each obj element (initialized as 'familyMember')
    // in the array
    familyMember["age"] += 42;
    // for each obj element, reassign element["age"]
    // (the property "age" on the element obj) => element[age] + 42;
    familyMember["gender"] = "other";
    // for each obj element, reassign element["gender"]
    // (the property "gender" on the element obj) to value 'other';
  });
}

messWithDemographics(munsters);
// this does mutate the original object that is passed in by reference
console.log(munsters);
// pass in obj munsters to function as argument

// 9
// Function and method calls can take expressions as arguments.
// Suppose we define a function named rps as follows, which follows
// the classic rules of the rock-paper-scissors game, but with a slight
// twist: in the event of a tie, it just returns the choice made by both players.
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// What does the following code output?
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
// => returns "paper"

// 10
// Consider these two simple functions:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
// What will the following function invocation return?
console.log(bar(foo()));
// bar function called with argument of return value of foo's function call
// foo returns "yes"
// bar takes argument "yes"
// bar param initialized with value "yes"
// bar sees that "yes" does not equal "no" and returns "no"
// this will return "no"