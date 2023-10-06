/* Log all odd numbers from 1 to 99, inclusive, to the console,
with each number on a separate line. */

function displayOddNumbers (first, last) {
  for (let idx = first; idx <= last; idx += 1) {
    if (idx % 2 === 1) {
      console.log(idx);
    }
  }
}

displayOddNumbers(1, 99);