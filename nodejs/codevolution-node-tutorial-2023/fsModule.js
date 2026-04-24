const fs = require("node:fs");

// const sampleFileContents = fs.readFileSync("./sampleFile.txt");
// console.log(sampleFileContents); // will be hex
// console.log(sampleFileContents.toString()); // string

console.log("first");

const readableFileContents = fs.readFileSync("./sampleFile.txt", "utf-8");
console.log(readableFileContents);

console.log("2nd");

fs.readFile("./sampleFile.txt", /*"utf-8",*/ (error, data) => {
  if(error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("third");


fs.writeFileSync("./greet.txt", "Heya world");

fs.writeFile("./greet.txt", "Hello Jausche", { flag: "a" }, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("File was written");
  }
});