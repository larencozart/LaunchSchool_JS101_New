const rls = require('readline-sync');
const msg = require('./loan_messages.json');
const MONTHS_IN_A_YEAR = 12;
const PERCENTAGE_TO_DECIMAL = 100;

const prompt = (message1, message2 = '') => {
  console.log(`> ${msg[message1]}${message2}`);
};

const isInvalidNumber = (number) => {
  // an elegant solution that I struggled to create on my own!
  // I refactored my code to use this lovely function from LS code.
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
};

const getLoanAmount = () => {
  prompt('loanAmount');
  let loanAmount = rls.question();
  while (isInvalidNumber(loanAmount) || Number(loanAmount) === 0) {
    prompt('invalidLoanAmount');
    loanAmount = rls.question();
  }
  return Number(loanAmount).toFixed(2);
};

const getYearOrMonths = () => {
  prompt('yearsOrMonths');
  let yearsOrMonths = rls.question();
  while (!['y', 'm'].includes(yearsOrMonths)) {
    prompt('invalidYearsOrMonths');
    yearsOrMonths = rls.question();
  }
  return yearsOrMonths;
};

const getLoanDuration = () => {
  prompt('loanDuration');
  let loanDuration = rls.question();
  while (isInvalidNumber(loanDuration) || parseInt(loanDuration, 2) === 0) {
    prompt('invalidLoanDuration');
    loanDuration = rls.question();
  }
  return Number(loanDuration);
};

const getAPR = () => {
  prompt('APR');
  let apr = rls.question();
  while (isInvalidNumber(apr)) {
    prompt('invalidAPR');
    apr = rls.question();
  }
  return Number(apr);
};

const calculateLoanDurationInMonths = () => {
  let yearsOrMonths = getYearOrMonths();
  if (yearsOrMonths === 'y') {
    return getLoanDuration() * 12;
  } else {
    return getLoanDuration();
  }
};

const calculateAprDecimal = () => {
  return getAPR() / PERCENTAGE_TO_DECIMAL;
};

const calculateMonthlyIntRate = () => {
  return calculateAprDecimal() / MONTHS_IN_A_YEAR;
};

const calculateMonthlyPayment = () => {
  let loanAmount = getLoanAmount();
  let loanDurationInMonths = calculateLoanDurationInMonths();
  let monthlyIntRate = calculateMonthlyIntRate();

  let monthlyPayment;
  // No-Interest Loan Calculation
  if (monthlyIntRate === 0) {
    monthlyPayment = loanAmount / loanDurationInMonths;
  // Interest Loan Calculation
  } else {
    monthlyPayment = loanAmount *
     (monthlyIntRate /
      (1 - Math.pow((1 + monthlyIntRate), (-loanDurationInMonths))));
  }

  return monthlyPayment.toFixed(2);
};

const displayLoanCalculator = () => {
  while (true) {
    console.clear();
    prompt('welcome');
    prompt('monthlyPayment', `$${calculateMonthlyPayment()}`);

    prompt('useAgain');
    let useAgain = rls.question().toLowerCase();
    while (!['y', 'n'].includes(useAgain)) {
      prompt('invalidUseAgain');
      useAgain = rls.question().toLowerCase();
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