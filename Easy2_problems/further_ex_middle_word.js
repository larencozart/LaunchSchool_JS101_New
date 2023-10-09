/*Further Exploration
Our solution ignored a couple of edge cases because we explicitly stated
that you didn't have to handle them: strings that contain just one word,
and strings that contain no words.

Suppose we need a function that retrieves the middle word of a phrase/sentence.
What edge cases need to be considered? How would you handle those edge cases
without ignoring them? Write a function that returns the middle word of a phrase
or sentence. It should handle all of the edge cases you thought of.

P
====
- what is the "middle" word? the one at the median location
- how do you get the middle word of a set of words? retrieve median index
- Write a program/function that returns the middle word from a string of text

E
====
EXPLICIT RULES
- retrieve the middle word of a phrase/sentence
IMPLICIT RULES
 - return a string value
 - handle input of string with 1 word
 - handle input of string with 2 words/ even # of words 
    -> what should i return?
    -> the two words in the middle?
    -> or a message that reads 'there is no middle word'
 - handle input of an empty string ''
 - handle input that is not a string

D
====
INPUT: (string) words/phrase/sentence
OUTPUT: (string) one word that is the middle word
DATA STRUCTURES: (array)- split string into array of words to find median word

A
====
DECLARE function with one parameter of 'string'
SET variable 'words' = an array of words from 'string'
SET varialbe 'medianIndex' = (length of array / 2 ) *rounded down*
*/

let getMiddleWord = (string) => {
  let middleWord = undefined;
  // input not a string data type
  if (typeof string !== 'string') {
    console.log('Input was not a string');
    return middleWord;
  }
  let words = string.split(' ');
  // even amount of words
  if (words.length % 2 === 0) {
    console.log('There is an even number of words. No middle word exists.');
    return middleWord;
  }
  // only 1 word or only spaces
  if (words.length === 1) {
    console.log('Input is too short to find middle word');
  }
  // find median word in array
  let middleIndex = Math.floor(words.length / 2);
  middleWord = words[middleIndex];
  return middleWord;
};

console.log(getMiddleWord());            // => undefined: Input was not a string
console.log(getMiddleWord(false));       // => undefined: Input was not a string
console.log(getMiddleWord(4));           // => undefined: Input was not a string
console.log(getMiddleWord(['1', '2']));  // => undefined: Input was not a string
console.log(getMiddleWord(''));          // => undefined: Input is too short to find middle word
console.log(getMiddleWord('hello'));     // => undefined: Input is too short to find middle word
console.log(getMiddleWord('hello there'));      // => undefined: There is an even number of words. No middle word exists.
console.log(getMiddleWord('what is up laren')); // => undefined: There is an even number of words. No middle word exists.

console.log(getMiddleWord('oh hello there')); // => 'hello'
console.log(getMiddleWord('what is going on laren')); // => 'going'