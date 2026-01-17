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
//
var sumArray = function (accumulator, currentValue) {
    return accumulator + currentValue;
};
var multifit = function (numberArray, binMax, binIncrease) {
    if (binIncrease === void 0) { binIncrease = false; }
    // order the array desc
    numberArray.sort(function (a, b) { return b - a; });
    // if any numbers in the array are larger than bin size, give the user a warning if binIncrease is false
    if (numberArray[0] > binMax) {
        if (binIncrease) {
            console.log("Warning: bin size increased to accomodate array");
            binMax = numberArray[0];
        }
        else {
            console.log("Error: some items in array are larger than available bin size");
            return [[]];
        }
    }
    // temp
    var bins = [[]];
    var binRow = 0;
    // before creating a new bin, do a sweep of existing bins
    var sweepCheck = false;
    numberArray.forEach(function (currentNumber) {
        console.log("binRow: ".concat(binRow, ". currentNumber: ").concat(currentNumber, ". binMax: ").concat(binMax));
        console.log(bins[binRow].reduce(sumArray, 0) + currentNumber);
        // on first loop we'll have a unique use case
        if (bins[binRow].length == 0) {
            bins[binRow].push(currentNumber);
        }
        // currentNumber will not put us over bin total
        else if ((bins[binRow].reduce(sumArray, 0) + currentNumber) <= binMax) {
            console.log('putting number into current bin');
            bins[binRow].push(currentNumber);
        }
        // current number will put us over bin total
        else {
            sweepCheck = true;
            // if we're not on bin[0], check previous bins for capacity
            for (var i = 0; i < binRow; i++) {
                if ((bins[i].reduce(sumArray, 0) + currentNumber) <= binMax) {
                    console.log('putting number into previous bin');
                    bins[i].push(currentNumber);
                    sweepCheck = false;
                    break;
                }
            }
            if (sweepCheck) {
                // create the next row
                bins.push([currentNumber]);
                // reset our sweepCheck var
                sweepCheck = false;
                binRow++;
            }
        }
    });
    return bins;
};
// console.log(multifit([1,3,5,7,2,4,6,4,2,3], 6)) // expecting an error
console.log(multifit([1, 7, 6, 3, 3, 1], 6, true)); // expecting a warning
