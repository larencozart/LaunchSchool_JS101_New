/*Log all even numbers from 1 to 99, inclusive,
 to the console, with each number on a separate line.*/

function displayEvenNumbers (first, last) {
  for (let idx = first; idx <= last; idx += 1) {
    if (idx % 2 === 0) {
      console.log(idx);
    }
  }
}

displayEvenNumbers(1, 99);