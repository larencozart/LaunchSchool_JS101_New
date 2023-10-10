const rls = require('readline-sync');
const msg = require('./loan_messages.json');
const MONTHS_IN_A_YEAR = 12;
const PERCENTAGE_TO_DECIMAL = 100;

const prompt = (message1, message2 = '') => {
  console.log(`> ${msg[message1]}${message2}`);
};
const getLoanAmount = () => {
  // FIX NUMBER CONVERSION ISSUE
  prompt('loanAmount');
  let loanAmount = Number(rls.question());
  while (Number.isNaN(loanAmount) || loanAmount <= 0) {
    prompt('invalidLoanAmount');
    loanAmount = Number(rls.question());
  }
  return loanAmount;
};
const getLoanDuration = () => {
  prompt('yearsOrMonths');
  let yearsOrMonths = rls.question();
  while (!['y', 'm'].includes(yearsOrMonths)) {
    prompt('invalidYearsOrMonths');
    yearsOrMonths = rls.question();
  }

  prompt('loanDuration');
  let loanDuration = Number(rls.question());
  while (Number.isNaN(loanDuration) || loanDuration <= 0) {
    prompt('invalidLoanDuration');
    loanDuration = Number(rls.question());
  }
  if (yearsOrMonths === 'y') {
    return loanDuration * MONTHS_IN_A_YEAR;
  } else {
    return loanDuration;
  }
};
const getAPR = () => {
  // CHECK EMPTY STRING SOMEHOW
  prompt('APR');
  let apr = Number(rls.question());
  while (Number.isNaN(apr) || apr < 0) {
    prompt('invalidAPR');
    apr = Number(rls.question());
  }
  let aprDecimal = apr / PERCENTAGE_TO_DECIMAL;
  return aprDecimal;
};
const getMonthlyPayment = () => {
  let monthlyPayment;

  let loanAmount = getLoanAmount();
  let loanDurationInMonths = getLoanDuration();
  let aprDecimal = getAPR();
  let monthlyIntRate = aprDecimal / MONTHS_IN_A_YEAR;

  if (aprDecimal === 0) {
    monthlyPayment = loanAmount / loanDurationInMonths;
  } else {
    monthlyPayment = loanAmount *
     (monthlyIntRate /
      (1 - Math.pow((1 + monthlyIntRate), (-loanDurationInMonths))));
  }

  return monthlyPayment.toFixed(2);
};
const displayLoanCalculator = () => {
  while (true) {
    prompt('welcome');
    let monthlyPayment = `$${getMonthlyPayment()}`;
    prompt('monthlyPayment', monthlyPayment);

    prompt('useAgain');
    let useAgain = rls.question();
    while (!['y', 'n'].includes(useAgain)) {
      prompt('invalidUseAgain');
      useAgain = rls.question();
    }
    if (useAgain === 'n') {
      prompt('goodbye');
      break;
    } else {
      console.clear();
      continue;
    }
  }
};

displayLoanCalculator();