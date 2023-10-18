/*
Write a function that takes one argument,
a positive integer, and returns a string of alternating
'1's and '0's, always starting with a '1'. The length
of the string should match the given integer.
*/

function stringy (int) {
  let onesAndZerosString = '';

  for (let idx = 1; idx <= int; idx += 1) {
    let oneOrZero = idx % 2 === 1 ? '1' : '0';
    onesAndZerosString += oneOrZero;
  }
  console.log(onesAndZerosString);
  return onesAndZerosString;
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"