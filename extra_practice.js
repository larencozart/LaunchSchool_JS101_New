/*
PEDAC
===================================
- Solves two-layer problem
- Reduces mental load


P - [Understanding the] Problem
===================================
- Explore the requirements
- Ask questions, clarify technical terms
- Summarise problem


E - Examples / Test Cases
===================================
- Note explicit and implicit rules
- Note edge cases, gotchas
- Ensure you are solving the right problem


D - Data
===================================
- Inputs and outputs
- Data structures: Arrays, Objects or even Strings


A - Algorithm
===================================
- Summarise high level strategy
- Write step-by-step instructions
- Look for potential sub-processes
- Language agnostic, keep options open
- Run test cases through algorithm
- Algorithm that looks like code - stop and think


C - Code
===================================
- Translate algorithm into code
- Test frequently (every 2-3 lines)
- Hack and slash - stop and think
*/

/*
Unique String Characters
Given two strings, return the characters that are not common in the two strings.

P
Create a function that takes two strings, and return a string containing the characters that are different from each other in each string.

E
- Always get two strings
- Never empty input strings
- Input strings always lower case
- If there are no distinct characters, return an empty string
- The output is ordered by the characters as they appear in the first string and then as they appear in the second string

D
- Input: two strings
- Output: one string
- Data structure: No, we do not need an array or object. We can work exclusively with strings.

A
High-level
- Iterate over each character in the first string and see if characters are in the second string, and then vice versa.

- Create a variable that is an empty string 
- Loop over each input string
- Compare each character in each input string (at a certain index)
- If they are not, add that character to a new string
- Return the new string
*/



/*

/* 
Michelle
- Create a function named `uniqueStringCharacters` that takes in two params: two strings.
- Create a local variable within the function called  `uniqueCharacters` and initialize it to an empty string.
- Iterate over each character in the first string. (This could be extracted as a subprocess since we are going to perform the same operation on the second string.)
  - Within that `for loop` add another `for loop` to iterate over the characters of the second string. Compare the current character from the outer loop with each character of the inner loop with a strict equality operator.
  - If they are equal, continue with another iteration of the loop. Else, use `+=` to reassign the `uniqueCharacters` string to add the value of the current character to the current value of `uniqueCharacters`.
- Perform the same operation on string two.
- Return `uniqueCharacters` string.
*/




/* Robert
- Declare a variable `resultStr` and intialize to empty string
- Loop over `str1` 
  - If current char is not in `str2` 
    - Append char to `resultStr`
- Loop over 'str2'
  - If current char is not in `str1`
    - Append char to `resultStr`
- Return `resultStr`
*/

/*
- Detailed
  - Create empty string for output
  - Iterate through each char in first string
    - If char is not in second string, append char to output
  - Iterate through each char in second string
    - If char is not in first string, append char to output
  - Return output
*/

/*Hamdi

Algorithm:
- CREATE a function `uniqueStringCharacters` that takes two parameters, which are two strings
- CREATE a variable `uniqueStringCharacters` and initialize to an empty string
- ITERATE over the characters in the first string and see if they are NOT the same as the characters in the second string
- If the characters are NOT the same, add that character in the first string to `uniqueStringCharacters` string,
- ITERATE over the characters in the second string and see if they are NOT the same as the characters in the first string
- If the characters are NOT the same, add that character in the second string to `uniqueStringCharacters` string,
-  RETURN `uniqueStringCharacters` string

*/

// let uniqueStringCharacters = (str1, str2) => {
//   let uniqueStringCharacters = '';
//   for (let idx = 0; idx < str1.length; idx += 1) {
//     if (!str2.includes(str1[idx])) {
//       uniqueStringCharacters = uniqueStringCharacters.concat(str1[idx]);
//     }
//   }
//   for (let idx = 0; idx < str2.length; idx += 1) {
//     if (!str1.includes(str2[idx])) {
//       uniqueStringCharacters = uniqueStringCharacters.concat(str2[idx]);
//     }
//   }
//   // console.log(uniqueStringCharacters);

//   return uniqueStringCharacters;
// }


let uniqueStringCharacters = (str1, str2) => {
  let uniqueChars = '';
  for (let idx = 0; idx < str1.length; idx += 1) {
    if (!str2.includes(str1[idx])) {
      uniqueChars = uniqueChars.concat(str1[idx]);
    }
  }
  for (let idx = 0; idx < str2.length; idx += 1) {
    if (!str1.includes(str2[idx])) {
      uniqueChars = uniqueChars.concat(str2[idx]);
    }
  }

  return uniqueChars;
};

// console.log(uniqueStringCharacters("xyab","xzca") === "ybzc"); // true
// console.log(uniqueStringCharacters("a","z") === "az"); // true
// console.log(uniqueStringCharacters("abcd","de") === "abce"); // true
// console.log(uniqueStringCharacters("abc","abba") === "c"); // true
// console.log(uniqueStringCharacters("xyz","zxy") === ""); // true