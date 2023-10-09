/*
Write a program that prompts the user for two positive integers,
and then prints the results of the following operations on those
two numbers: addition, subtraction, product, quotient, remainder,
and power. Do not worry about validating the input.
*/

const RLS = require('readline-sync');

let prompt = (msg) => console.log(`==> ${msg}`);

let num1 = Number(RLS.question(prompt('Enter a number: ')));
let num2 = Number(RLS.question(prompt('Enter another number: ')));

prompt(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
prompt(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
prompt(`Product: ${num1} * ${num2} = ${num1 * num2}`);
prompt(`Quotient: ${num1} / ${num2} = ${num1 / num2}`);
prompt(`Remainder: ${num1} % ${num2} = ${num1 % num2}`);