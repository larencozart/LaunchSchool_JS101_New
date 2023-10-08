/*
Write a program that asks the user to enter an integer
 greater than 0, then asks whether the user wants to
 determine the sum or the product of all numbers between
 1 and the entered integer, inclusive.
*/

/*
P
- Create a function that returns either the sum or product
 of the numbers between 1 and the user number, inclusive.
E
- Use 's' and 'p' to distiguish between sum and product
- Return a printed statement that describes the operation's result
D
-input: string of an integer, string of operation choice
-output: string of operation result
A
HIGH-LEVEL:
- Ask the user for an integer and have the user choose sum or product.
Iterate through the range of numbers, and save the sum or product of each
new iteration in a variable. return the result in a print statement
LOW-LEVEL:
- IMPORT module for requesting user input (readlinesync)
- GET input from user: an integer
- SET user integer to variable 'userInteger' and transfrom it to a
 number data type
- GET input from user: choice between 'product' or 'sum'
- SET user integer to variable 'userOperation'
- SET a variable 'result' to either 0 (sum) or 1 (product)
  - use IF statement
- ITERATE through a range between 1 and 'userInteger'
  - SET result to result += or *=  current index
- RETURN print statement of result of operation

C
*/
const RLS = require('readline-sync');

let userInteger = Number(RLS.question('=> Please enter an integer greater than 0: \n'));
let userOperation = RLS.question('=> Enter "s" to compute the sum, or "p" to compute the product.\n');

let result;
let operationName;
if (userOperation === 's') {
  result = 0;
  operationName = 'sum';
  for (let idx = 1; idx <= userInteger; idx += 1) {
    result += idx;
  }
} else if (userOperation === 'p') {
  result = 1;
  operationName = 'product';
  for (let idx = 1; idx <= userInteger; idx += 1) {
    result *= idx;
  }
}

console.log(`The ${operationName} of the integers between 1 and ${userInteger} is ${result}.`);

//Please enter an integer greater than 0:
//Enter "s" to compute the sum, or "p" to compute the product.


//The product of the integers between 1 and 6 is 720
//The sum of the integers between 1 and 5 is 15.