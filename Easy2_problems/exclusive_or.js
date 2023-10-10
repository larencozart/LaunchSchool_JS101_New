/*
In this exercise, you will write a function named xor
that takes two arguments, and returns true if exactly
one of its arguments is truthy, false otherwise. Note
that we are looking for a boolean result instead of a
truthy/falsy value as returned by || and &&.
*/


function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true