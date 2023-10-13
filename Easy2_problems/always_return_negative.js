/*
Write a function that takes a number as an argument.
If the argument is a positive number, return the negative
of that number. If the argument is a negative number,
return it as-is.
*/

function negative (num) {
  return num * Infinity === -Infinity ? num : num * -1;
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

// can also return Math.abs(num) * -1;