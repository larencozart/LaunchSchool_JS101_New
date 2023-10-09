const readline = require('readline-sync');
const msg = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let getNumber1 = () => {
  prompt(msg.num1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(msg.invalidNum);
    number1 = readline.question();
  }
  return number1;
};

let getNumber2 = () => {
  prompt(msg.num2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(msg.invalidNum);
    number2 = readline.question();
  }
  return number2;
};

let getOperation = () => {
  prompt(msg.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(msg.invalidOperation);
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

function displayCalculator () {
  while (true) {
    prompt(msg.welcome);
    prompt(`The result is: ${calculationResult(getNumber1(), getNumber2(), getOperation())}`);

    prompt(msg.playAgain);
    let response = readline.question();

    while (!['y', 'n'].includes(response)) {
      prompt(msg.invalidPlayAgain);
      response = readline.question();
    }
    if (response === 'n') {
      prompt(msg.goodbye);
      break;
    } else {
      continue;
    }
  }
}

displayCalculator();