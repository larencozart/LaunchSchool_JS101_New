/*
Build a program that logs when the user will
retire and how many more years the user has to
work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

*/
const rls = require('readline-sync');

let age = Number(rls.question('What is your age? '));
let retirementAge = Number(rls.question('At what age would you like to retire? '));
let today = new Date();
let currentYear = today.getFullYear();
let retirementYear = currentYear + (retirementAge - age);

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${retirementAge - age} years of work to go!`);