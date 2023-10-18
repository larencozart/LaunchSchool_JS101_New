/*
Given a string that consists of some words and an assortment
of non-alphabetic characters, write a function that returns
that string with all of the non-alphabetic characters replaced
by spaces. If one or more non-alphabetic characters occur in a
row, you should only have one space in the result
(i.e., the result string should never have consecutive spaces).
*/

function cleanUp (text) {
  const ABC_CHARS = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let cleanString = '';

  for (let idx = 0; idx < text.length; idx += 1) {

    if (!ABC_CHARS.includes(text[idx]) ) {
      if (cleanString[cleanString.length - 1] === ' ') continue;
      cleanString += ' ';
    } else {
      cleanString += text[idx];
    }
  }

  return cleanString;
}

cleanUp("---what's my +*& line?");    // " what s my line "