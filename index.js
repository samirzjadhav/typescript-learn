const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

// Challenge: add utility functions "addNewPizza" that takes a pizza object and adds it to the menu

function addNewPizza(pizza) {
  menu.push(pizza);
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completedOrder(orderId) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}

addNewPizza({ name: "Cheese", price: 15 });
addNewPizza({ name: "Pepperoni", price: 10 });
addNewPizza({ name: "Spicy Sausage", price: 20 });

placeOrder("Cheese");
completedOrder(1);

console.log("Menu:", menu);
console.log("Cash in Register:", cashInRegister);
console.log("Order Queries:", orderQueue);
