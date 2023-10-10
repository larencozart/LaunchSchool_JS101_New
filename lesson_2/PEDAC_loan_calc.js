/*
Build a loan (mortgage or car) calculator

You'll need three pieces of information:
- the loan amount
- the Annual Percentage Rate (APR)
- the loan duration

From the above, you'll need to calculate the following two things:
- monthly interest rate
- loan duration in months


m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months

FORMULA
let m = p * (j / (1 - Math.pow((1 + j), (-n))));

When you write your program, don't use the single-letter variables
m, p, j, and n; use explicit names. For instance, you may want to
use loanAmount instead of p.

Try to print the payment amount as a dollar and cents amount,
e.g., $123.45 or $371.00.


Hints:

- Decide what input formats your program expects. For example, should the user
enter an interest rate of 5% as 5 or .05?
- If you're working with an Annual Percentage Rate (APR), you need to convert
it to a monthly interest rate for use in the formula.
- Be careful about the loan duration -- are you working with months or years?
- Choose variable names carefully to assist in remembering.
- Think about edge cases. There are plenty of edge cases to work with in
this problem, and each presents interesting challenges. For instance,
consider whether you want to support no-interest loans or loans that aren't
for an integer number of years.


P
====
QUESTIONS
- What is the difference between APR and monthly interest rate?
  -> monthly int rate = APR / 12;
  -> APR = monthly int rate * 12;
- What am I calculating/ returning? Monthly payment of loan
SUMMARY
- Build a program that takes a user's loan information and calculates and
  displays the user's montly payment amount

E
====
EXPLICIT REQs
- Print out message to user describing monthly payment in dollars and cents
- Ask user for loan amount, APR, and loan duration
IMPLICIT REQs
- Validate inputs as number data types
- Clarify input of loan amount (exclude $ from beginning)
- Clarify input of APR (as 5% or 0.05 or 5)
- Clarify input of loan duration (months or years)
- Handle a 0 interest loan (m = loan amount / duration in months)

D
====
INPUT: readline-sync (strings) -> convert to numbers
OUTPUT: (string) Message of monthly payment amount
DATA STRUCTURES: primitive values should work fine, array/object not needed

A
====
HIGH-LEVEL: Get and validate user loan amount, loan duration in months, and APR.
            If interest is 0, divide loan amount by loan duration in months.
            Otherwise, convert APR into monthly interest rate, and plug values
            into monthly payment formula. Print a message to the user
            regarding what the monthly payment on their loan will be.

LOW-LEVEL:
- IMPORT module to receive terminal input from user

- PRINT welcome message
- GET user loan amount - validate data
- SET variable 'loanAmount' to user input

- GET user loan duration - validate data
- SET variable 'loanDuration' to user input
- GET years or months (check unit of loan duration)

- GET user APR as % or flat number (5% or 5, not 0.05) - validate
- SET variable 'APR' to user input
  -> TRANSFORM to decimal (5 -> 0.05) APR/100

-> SET variable 'MONTHLY_INT_RATE' = apr / 12; -> turn to magic num instead

- SET variable 'monthlyPaymentAmount' as undefined or 0
- IF APR is 0
  - 'monthlyPaymentAmount' = loanAmount / loanDurationInMonths
- ELSE
  - 'monthlyPaymentAmount' =
    loanAmount * (month_int_rate / (1 - Math.pow((1 + j), (-loanDuration))));

- PRINT monthly payment message
- GET user desire for another calculation
- IF (yes)
  -LOOP to beginnning
- ELSE
  - PRINT goodbye

*/