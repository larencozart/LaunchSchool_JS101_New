/*
Madlibs is a simple game where you create a story template with
"blanks" for words. You, or another player, then construct a list of
words and place them into the story, creating an often silly or funny
story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb,
and an adjective, and injects them into a story that you create.

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/

const rls = require('readline-sync');

function playMadLibs () {
  let noun = rls.question("Enter a noun: ");
  let verb = rls.question("Enter a verb: ");
  let adj = rls.question("Enter an adjective: ");
  let adverb = rls.question("Enter an adverb: ");

  let story =
  `Once a year, on Halloween night, there are seven ${noun}s that ${adverb} come to life.\n
These seven ${adj} ${noun}s like to ${verb} all night long, until Hallow's Eve finally\n
comes to an end!`;
  console.log(story);
}

playMadLibs();
