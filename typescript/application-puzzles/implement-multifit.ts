/*
Purpose
The purpose of this task is to provide the interviewers with a code sample from the interviewee. 
The interviewers will evaluate the sample for code quality and correctness.

Prompt
The multifit algorithm is an approximation algorithm for multiway number partitioning:
https://en.wikipedia.org/wiki/Multifit_algorithm

Please implement multifit in TypeScript. We encourage you to refer to the pseudo code in the 
Wikipedia article on multifit. We will evaluate the correctness of your implementation by importing 
it into a program of our own design. You may decide how your implementation should be used.

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

const firstFitDescreasing = (numberArray: number[], binMax: number): number[][] => {
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


const multifit = (numArray: number[], makespan: number): number[][] => {
  // let L = max (sum(numArray) / makespan, Math.max(...numArray))


  // determine minimum bin size
  const minBinSize = Math.max(...numArray);
  console.log(`minBinSize: ${minBinSize}`)

  // get smallest subset possible
  const subset = firstFitDescreasing(numArray, minBinSize);
  let subsetMin = subset.length;
  
  console.log(`subsetMin: ${subsetMin}`);
  
  // largest subset is equal to array length
  let subsetMax = numArray.length;

  console.log(`subsetMax: ${subsetMax}`);

  if(subsetMin > makespan){
    console.log(`Makespan was ${makespan}, however minimum subset size was ${subsetMin}`);
    return subset;
  }




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