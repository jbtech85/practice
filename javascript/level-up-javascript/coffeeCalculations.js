// array reduce function

/*
  Get total
  Each person has ordered a coffee
  Each coffee $1.25
  `The total bill is ${total}`

*/

// my answer
const coffeeQty = [3, 3, 2, 4];
const coffeeCalculator = (total, qty) => {
  return total + qty
}
const coffeeTotal = (coffeeQty.reduce(coffeeCalculator));
console.log(`The total bill is $${coffeeTotal * 1.25}`);


// instructor's answer
function coffeeDate(coffeeArray) {
  let coffeeSum = coffeeArray.reduce(
    (totalCoffees, numCoffees) => (totalCoffees += numCoffees) // I tried it with + and with +=, and both give same result
  );
  return `The total bill is $${coffeeSum * 1.25}`;
}
console.log(coffeeDate([3, 3, 2, 4]));