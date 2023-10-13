/*
Write a function that will take a short line
of text, and write it to the console log within a box.

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+
*/

function logInABox (text) {
  let dashPadding = '-'.repeat(text.length);
  let spacePadding = ' '.repeat(text.length);

  console.log(`+-${dashPadding}-+`);
  console.log(`| ${spacePadding} |`);
  console.log(`| ${text} |`);
  console.log(`| ${spacePadding} |`);
  console.log(`+-${dashPadding}-+`);
}

logInABox('To boldly go where no one has gone before.');
logInABox('');