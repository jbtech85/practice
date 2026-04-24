const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size="medium", topping="cheese") => {
  console.log(`Order received, baking your ${size} ${topping} pizza`);
});

emitter.on("order-pizza", (size) => {
  if(size === "large") {
    console.log("Have a complimentary drink!");
  }
})

console.log("first"); // that one time the CLG shortcut was exactly the text I wanted
// emitter.emit("order-pizza", undefined, "pepperoni");
emitter.emit("order-pizza", "large", "pepperoni");