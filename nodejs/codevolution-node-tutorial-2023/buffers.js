// global feature, no need for import
const buffer = new Buffer.from("Jausche"); // defaults to UTF-8, but can pass a second param for different

buffer.write("Hiyathere");


console.log(buffer.toString()); // prints string representation
console.log(buffer); // prints hexidecimal
console.log(buffer.toJSON()); // prints UTF-8
