/*
Write a function that takes a non-empty string argument
and returns the middle character(s) of the string. If the
string has an odd length, you should return exactly one
character. If the string has an even length, you should
return exactly two characters.
*/

function centerOf (str) {
  let middleIndex = str.length / 2;
  if (str.length % 2 === 1) {
    return str.charAt(middleIndex);
  } else {
    return str.slice((middleIndex - 1), (middleIndex + 1));
  }
}


centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"