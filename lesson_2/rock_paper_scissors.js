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

function isValidChoice (input) {
  return Object.keys(MOVES).includes(input) ||
         Object.values(MOVES).includes(input);
}

function mapUserChoice (input) {
  let mappedInput = input;
  if (Object.keys(MOVES).includes(input)) {
    mappedInput = MOVES[input];
  }

  return mappedInput;
}

function getUserChoice () {
  prompt(msg['getUserChoice']);
  let userChoice = rls.question().toLowerCase();

  while (!isValidChoice(userChoice)) {
    prompt(msg['invalidUserChoice']);
    prompt(msg['getUserChoice']);
    userChoice = rls.question().toLowerCase();
  }

  return mapUserChoice(userChoice);
}

function getComputerChoice () {
  let randomIndex = Math.floor(Math.random() * Object.values(MOVES).length);
  let computerChoice = Object.values(MOVES)[randomIndex];

  return computerChoice;
}

function userWins (userMove, computerMove) {
  return WINNING_MOVES[userMove].includes(computerMove);
}

function computerWins (userMove, computerMove) {
  return WINNING_MOVES[computerMove].includes(userMove);
}

function findRoundWinner (userMove, computerMove) {
  let winner = "tie";

  if (userWins(userMove, computerMove)) {
    winner = "user";
  } else if (computerWins(userMove, computerMove)) {
    winner = "computer";
  }

  return winner;
}

function isGameWon (scores, winningscore) {
  return scores.user === winningscore || scores.computer === winningscore;
}

function updateScore (scores, winner) {
  switch (winner) {
    case 'user':
      scores.user += 1;
      break;
    case 'computer':
      scores.computer += 1;
      break;
    case 'tie':
      scores.tie += 1;
      break;
    default:
      console.log("ERROR IN FUNCTION updateScore");
  }
}

function displayChosenMoves (userMove, computerMove) {
  console.log(`\nYOU------- ${userMove}`);
  console.log(`COMPUTER-- ${computerMove}`);
}

function displayCurrentScore (scores) {
  console.log(`SCORE----- You: ${scores.user}, Computer: ${scores.computer}, Ties: ${scores.tie}\n`);
}

function playRound (scores) {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  let roundWinner = findRoundWinner(userChoice, computerChoice);

  updateScore(scores, roundWinner);
  displayChosenMoves(userChoice, computerChoice);
  displayCurrentScore(scores);
}

function displayWinnerMessage (scores, winCondition) {
  if (scores.user === winCondition) {
    console.log('\n' + msg['userWins']);
  } else if (scores.computer === winCondition) {
    console.log('\n' + msg['computerWins']);
  }
}

function playGame () {
  const WINNING_SCORE = 3;
  let currentScores = { user : 0, computer : 0, tie : 0 };

  while (!isGameWon(currentScores, WINNING_SCORE)) {
    playRound(currentScores);
  }

  displayWinnerMessage(currentScores, WINNING_SCORE);
}

function playAgain () {
  prompt(msg['playAgain']);
  let response = rls.question().toLowerCase();

  while (!['yes', 'y', 'no', 'n'].includes(response)) {
    prompt(msg['invalidPlayAgain']);
    prompt(msg['playAgain']);
    response = rls.question().toLowerCase();
  }

  return response[0] === 'y';
}

function runGameEngine () {
  while (true) {
    console.clear();
    prompt(msg['welcome']);
    prompt(msg['rules']);
    playGame();

    if (playAgain()) continue;
    else break;
  }

  prompt(msg['goodbye']);
}

runGameEngine();