const readline = require('readline-sync');
const msg = require('./calculator_messages.json');
const userLanguage = getLanguage();

function prompt(message) {
  console.log(`=> ${message}`);
}
function getLanguage () {
  prompt(msg.en.language);
  prompt(msg.es.language);
  prompt(msg.fr.language);
  let language = readline.question();

  while (!['en', 'es', 'fr'].includes(language)) {
    prompt(msg.en.invalidLanguage);
    prompt(msg.es.invalidLanguage);
    prompt(msg.fr.invalidLanguage);
    language = readline.question();
  }
  return language;
}
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let getNumber1 = () => {
  prompt(msg[userLanguage]['num1']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(msg[userLanguage]['invalidNum']);
    number1 = readline.question();
  }
  return number1;
};
let getNumber2 = () => {
  prompt(msg[userLanguage]['num2']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(msg[userLanguage]['invalidNum']);
    number2 = readline.question();
  }
  return number2;
};
let getOperation = () => {
  prompt(msg[userLanguage]['operation']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(msg[userLanguage]['invalidOperation']);
    operation = readline.question();
  }
  return operation;
};
let calculationResult = (number1, number2, operation) => {
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  return output;
};
function displayResult () {
  let userNumber1 = getNumber1();
  let userNumber2 = getNumber2();
  let userOperation = getOperation();
  while (userNumber2 === '0' && userOperation === '4') {
    prompt(msg[userLanguage]['divideByZero']);
    userOperation = getOperation();
  }

  prompt(`${msg[userLanguage]['result']} ${calculationResult(userNumber1, userNumber2, userOperation)}`);
}


function displayCalculator () {
  while (true) {
    prompt(msg[userLanguage]['welcome']);
    displayResult();

    prompt(msg[userLanguage]['playAgain']);
    let response = readline.question();

    while (!['1', '0'].includes(response)) {
      prompt(msg[userLanguage]['invalidPlayAgain']);
      response = readline.question();
    }
    if (response === '0') {
      prompt(msg[userLanguage]['goodbye']);
      break;
    } else {
      continue;
    }
  }
}

displayCalculator();