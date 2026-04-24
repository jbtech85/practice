const fs = require("node:fs/promises");

console.log("first");

fs.readFile("sampleFile.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


console.log("second");