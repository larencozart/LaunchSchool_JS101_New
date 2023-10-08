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
- If they are the same, add that character to a new string
- Return the new string
*/

let uniqueStringCharacters = (str1, str2) => {
  let uniqueChars = '';
  for (let idx = 0; idx < str1.length; idx += 1) {
    if (!str2.includes(str1[idx]) && !uniqueChars.includes(str1[idx])) {
      uniqueChars = uniqueChars.concat(str1[idx]);
    }
  }
  for (let idx = 0; idx < str2.length; idx += 1) {
    if (!str1.includes(str2[idx]) && !uniqueChars.includes(str2[idx])) {
      uniqueChars = uniqueChars.concat(str2[idx]);
    }
  }

  return uniqueChars;
};


console.log(uniqueStringCharacters("xyab","xzca") === "ybzc"); // true
console.log(uniqueStringCharacters("a","z") === "az"); // true
console.log(uniqueStringCharacters("abcd","de") === "abce"); // true
console.log(uniqueStringCharacters("abc","abba") === "c"); // true
console.log(uniqueStringCharacters("xyz","zxy") === ""); // true

