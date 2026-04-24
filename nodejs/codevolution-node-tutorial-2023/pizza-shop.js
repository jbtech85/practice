const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size="medium", topping="cheese") {
    this.orderNumber++;
    this.emit("order", size, topping);
  }

  displayOrderNuber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;