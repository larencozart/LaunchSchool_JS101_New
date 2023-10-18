/*
Write a function that takes a year as input and returns
the century. The return value should be a string that begins
with the century number, and ends with 'st', 'nd', 'rd', or
'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years
1901 - 2000 comprise the 20th century.
*/

// eslint-disable-next-line max-lines-per-function
function century (year) {
  let century;

  if (year % 100 === 0) {
    century = Math.floor(year / 100);
  } else {
    century = Math.floor(year / 100) + 1;
  }

  let centuryStr = String(century);
  let lastDigit = centuryStr[centuryStr.length - 1];
  let lastTwoDigits = centuryStr.slice(centuryStr.length - 2);

  if (lastTwoDigits !== '11' && lastDigit === '1') {
    century = `${century}st`;
  } else if (lastTwoDigits !== '12' && lastDigit === '2') {
    century = `${century}nd`;
  } else if (lastTwoDigits !== '13' && lastDigit === '3') {
    century = `${century}rd`;
  } else {
    century = `${century}th`;
  }

  console.log(century);
  return century;
}


century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"