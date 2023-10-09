/*
Using the multiply() function from the "Multiplying Two Numbers"
problem, write a function that computes the square of its argument
(the square is the result of multiplying a number by itself).
*/
let multiply = (arg1, arg2) => arg1 * arg2;
let square = arg => multiply(arg, arg);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true