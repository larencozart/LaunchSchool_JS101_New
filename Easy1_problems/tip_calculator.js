/* Create a simple tip calculator.
The program should prompt for a bill amount and a tip rate.
The program must compute the tip, and then log both the tip
and the total amount of the bill to the console. You can
ignore input validation and assume that the user will enter numbers. */

const RLS = require('readline-sync');

let userBillAmount = Number(RLS.question('What was the amount of your bill?:\n'));
let userTipPercentage = Number(RLS.question('What percentage would you like to tip?\n'));

function displayBillTotal (bill, tipPercentage) {
  let tip = bill * (tipPercentage / 100);
  let billTotal = bill + tip;

  console.log(`The tip is: $${tip}`);
  console.log(`The total is: $${billTotal}`);
}

displayBillTotal(userBillAmount, userTipPercentage);