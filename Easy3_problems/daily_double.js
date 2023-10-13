/*
Write a function that takes a string argument and
returns a new string that contains the value of the
original string with all consecutive duplicate characters
collapsed into a single character.
*/

// function crunch (str) {
//   let condensedStr = '';
//   for (let idx = 0; idx < str.length; idx += 1) {
//     if (str[idx] === str[idx - 1]) continue;
//     condensedStr += str[idx];
//   }
//   return condensedStr;
// }

const crunch = str => str.split('').map(i => i).join('');

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""