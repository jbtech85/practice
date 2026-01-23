/*
Prompt
The multifit algorithm is an approximation algorithm for multiway number partitioning:
https://en.wikipedia.org/wiki/Multifit_algorithm

Please implement multifit in TypeScript. You may decide how your implementation should be used.

Submission
For this exercise, your submission should be a single txt file containing your TypeScript 
implementation of the multifit algorithm. The file should also include tests for your algorithm 
using your test framework of choice. Please clearly list any software dependencies your solution/tests use.
*/


// expecting to be run in a node environment
// will need to install jest >> 
  // npm i jest @types/jest ts-jest

//
const sumArray = (accumulator: number, currentValue: number): number => {
  return accumulator + currentValue;
}

// numberArray (S)
// in declaring FFD, binMax is (c)
const firstFitDecreasing = (numberArray: number[], binMax: number): number[][] => {
  // if any numbers in the array are larger than bin size, give the user a warning if binIncrease is false
  if(numberArray[0] > binMax) {
    console.log("Error: some items in array are larger than available bin size");
    return [[]];
  }
  
  // order the array desc
  numberArray.sort((a,b) => b - a);

  const bins: number[][] = [[]];

  numberArray.forEach((currentNumber: number) => {
    let createNewBin = true;

    // find the first available bin that can hold currentNumber
    for(let i = 0; i < bins.length; i++){
      if((bins[i].reduce(sumArray, 0) + currentNumber) <= binMax){
        bins[i].push(currentNumber);
        createNewBin = false;
        break;
      }
    }

    if(createNewBin){
      bins.push([currentNumber]);
    }

  });

  return bins;
}

// numArray (S)
// maxSubset (n)
const multifit = (numArray: number[], maxSubset: number, k: number = 3): number[][] => {
  let sumS = numArray.reduce(sumArray, 0);
  let maxS = Math.max(...numArray);
  let L = Math.max((sumS / n), maxS);
  // just for readability
  let n = maxSubset; 
  let S = numArray;
  
  console.log(`${L} (L) = max(${sumS} sum(S) / ${n} n, ${maxS} max(S) )`);

  let U = Math.max((2*sumS / n), maxS);
  console.log(`${U} (U) = max(${2*sumS} 2*sum(S) / ${n} n, ${maxS} max(S) )`);

  for(let i = 0; i <= k; i++) {
    // Let C = (L+U)/2. 
    let C = (L + U)/2;
    // Run FFD on S with capacity C
    let FFD = firstFitDecreasing(S, C);
    // if FFD needs at most n bins
    if(FFD.length <= n) {
      // decrease U by letting U = C
      U = C;
    }
    // if FFD needs more than n bins,
    else {
      // increase L by letting L = C
      L = C;
    }  
  }

  // finally, run FFD with capacity U
  let subset = firstFitDecreasing(S, U);

  return subset;
}

const sampleArray = [1, 3, 5, 2, 4, 2, 1, 3, 2, 3, 3, 5];

// console.log(firstFitDescreasing(sampleArray, 7));

console.log(multifit(sampleArray, 11));

/********** Jest testing **********/

// describe('multifitSuite', () => {
//   test('reducer handles empty array', () => {
//     const emptyArray: number[] = [];
//     const summedArray = emptyArray.reduce(sumArray, 0);
//     expect(summedArray).toEqual(0);
//   });

//   test('reducer returns correct sum', () => {
//     const numArray: number[] = [2, 2, 2, 3, 3];
//     const summedArray = numArray.reduce(sumArray, 0);
//     expect(summedArray).toEqual(12);
//   });


// });