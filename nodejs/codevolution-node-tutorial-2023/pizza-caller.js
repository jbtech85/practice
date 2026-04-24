const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./pizza-drink");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received, baking your ${size} ${topping} pizza`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order(undefined, "pepperoni");
pizzaShop.displayOrderNuber();

pizzaShop.order("large");
pizzaShop.displayOrderNuber();