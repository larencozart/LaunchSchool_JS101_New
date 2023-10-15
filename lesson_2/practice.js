/*
Given a list of integers and a single sum value, return the first two values in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

console.log(sumPairs([4, 3, 2, 3, 4], 6)); // [4, 2]

P - Understand the Problem
Input: array, target num
Output: array 

E - Examples 
1, 2, 3, 4, target (6) -> [2, 4]

D - Data Structure
sumPairs([10, 5, 2, 3, 7, 5], 10)); 
// [[5, 5, 5], [3, 7, 4]] -> [3, 7, 4] -> [3, 7]

A - Algorithm / Pseudo Code
  loop through array length, 
  if current num + 2nd num !== target, 
    // for each num loop through current num plus the next number 
    if current number plus the next number = target,

    declare a variable to store target pairs that sum up to the target num
      //return the numbers with lower index val
   
    return current and next num

    return undefined (outside the scope of the function)

    

*/

// example 

//Test cases
// console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
// console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
// console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
// console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]

// loop over the array, 
  // 

function sumPairs (arr, target) {
  let allPairs = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === target) {
          let pair = [i, j] // save the pair to allPairs
          allPairs.push(pair);
      }
    }
  }
  if(allPairs.length === 0) {
    return undefined; 
  }
  

  // Find lowest second index
  // initialize lowestIndexPair to the first pair
  let lowestIndexPair = allPairs[0];

  for(let i = 1; i < allPairs.length; i++) {
    let nextPair = allPairs[i];
    let nextSecondIndex = nextPair[1];
    let lowestSecondIndex = lowestIndexPair[1];
    
    if( nextSecondIndex < lowestSecondIndex) {
      // reassign lowestIndexPair
      lowestIndexPair = nextPair;
    }
  }
  // allPairs [[1, 5], [3, 4]]
    // loop through allPairs arr,
      //check if the current array index is lower than the next one
  // undefined
  
  // lowestIndexPair = [3, 4]
  // [arr[3], arr[4]]

  return [arr[lowestIndexPair[0]], arr[lowestIndexPair[1]]];
}