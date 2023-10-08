/*
Write a function that takes two strings as arguments,
 determines the length of the two strings, and then
 returns the result of concatenating the shorter string,
 the longer string, and the shorter string once again.
 You may assume that the strings are of different lengths.

P - ''
E - if one string is empty, return the other string
  - return a string
  - empty string input is still valid
  - what if they are both the same? not in test cases given
D - input: 2 strings
  - output: 1 string
  - data structure: none, string methods enough
A - HIGH LEVEL: compare the strings to find the shorter string,
                and add the shorter string to the beginning and
                end of the longer string
    LOW LEVEL:
    - IF length of string1 < if length of string 2
    -    RETURN string1 + string2 + string1
    - ELSE IF length of string2 < if length of string1
    -    RETURN string2 + string1 + string2
*/

function shortLongShort (str1, str2) {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else if (str2.length < str1.length) {
    return str2 + str1 + str2;
  }
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"