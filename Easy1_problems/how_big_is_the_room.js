/*Build a program that asks the user to enter the
 length and width of a room in meters, and then logs
 the area of the room to the console in both square
 meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time.
Use the readlineSync.prompt method to collect user input.*/

const RLS = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

let userUnitChoice = RLS.question('What unit of measurement would your like to use?\nEnter 1) Meters or 2) Feet\n');
let userLength = Number(RLS.question('Enter the length of the room in meters:\n'));
let userWidth = Number(RLS.question('Enter the width of the room in meters:\n'));

function displayArea (lengthInMeters, widthInMeters) {
  let areaInSquareMeters = lengthInMeters * widthInMeters;
  let areaInSquareFeet = (areaInSquareMeters * SQMETERS_TO_SQFEET).toFixed(2);

  switch (userUnitChoice) {
    case '1':
      console.log(`The area of your room is:\n ${areaInSquareMeters} square meters.`);
      break;
    case '2':
      console.log(`The area of your room is:\n ${areaInSquareFeet} square feet.`);
      break;
  }
}

displayArea(userLength, userWidth);