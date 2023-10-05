
// Welcome user to the calculator 
console.log('Welcome to the Calculator!');

// ask user for first number
let rls = require('readline-sync');
let number1 = Number(rls.question("What's your first number?\n"));

// ask user for second number
let number2 = Number(rls.question("What's your second number?\n"));

// Ask the user for an operation to perform.
let operation = rls.question('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n');

// Perform the operation on the two numbers.
let output;
switch (operation) {
  case '1': 
    output = number1 + number2
    break;
  case '2': 
    output = number1 - number2
    break;
  case '3':
    output = number1 * number2
    break;
  case '4':
    output = number1 / number2
    break;
}

console.log(`The result is ${output}`);
// Diplay the result to the terminal.
