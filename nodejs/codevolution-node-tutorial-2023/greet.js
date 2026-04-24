function greet(name) {
  console.log(`Heyo ${name}`);
}

const greet2 = (name) => {
  console.log(`Hiya ${name}`);
}

// greet("Josh");
// greet2("Jausche");

const greetJausche = (greetFn) => {
  const name = "Jausche"
  greetFn(name)
}

// greetJausche(greet);
// greetJausche(greet2);


const higherOrderFunction = (callback) => {
  if(1 > 0) {
    callback(greet2);
  }

  // always log
  console.log("higherOrderFunction called");
}

higherOrderFunction(greetJausche);

// more synchronous callback examples
let numbers = [5, 6, 7, 8];
console.log(numbers.sort((a,b) => b - a));
console.log(numbers.filter(n => n % 2 === 1));
console.log(numbers.map(n => n * 3));

 