const rls = require('readline-sync');
const msg = require('./rps_messages.json');

const MOVES =
{ r  : "rock" ,
  p  : "paper",
  sc : "scissors",
  l  : "lizard",
  sp : "spock"
};

const WINNING_MOVES =
{ rock     : ["scissors", "lizard"],
  paper    : ["spock"   , "rock"  ],
  scissors : ["paper"   , "lizard"],
  lizard   : ["spock"   , "paper" ],
  spock    : ["scissors", "rock"  ]
};

function prompt (message) {
  console.log(`=> ${message}`);
}

function getRoundsChoice () {
  prompt(msg['rounds']);
  let maxRounds = rls.question().toLowerCase();

  while (!['3', '5'].includes(maxRounds)) {
    prompt(msg['invalidRounds']);
    maxRounds = rls.question().toLowerCase();
  }

  let winningScore;
  if (maxRounds === '3') {
    winningScore = 2;
  } else if (maxRounds === '5') {
    winningScore = 3;
  }

  return winningScore;
}

function mapUserChoice (input) {
  let mappedInput = input;
  if (Object.keys(MOVES).includes(input)) {
    mappedInput = MOVES[input];
  }

  return mappedInput;
}

function getUserChoice () {
  prompt(msg['userChoice']);
  let userChoice = rls.question().toLowerCase();

  // MAKE HELPER FUNCTION VALIDATE CHOICE
  while (!Object.keys(MOVES).includes(userChoice) &&
         !Object.values(MOVES).includes(userChoice)) {
    prompt(msg['invalidUserChoice']);
    prompt(msg['userChoice']);
    userChoice = rls.question().toLowerCase();
  }

  return mapUserChoice(userChoice);
}

console.log(getUserChoice());