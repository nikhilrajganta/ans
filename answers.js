const orders = [
  {
    id: 1,
    dishName: "Burger",
    category: "Fast Food",
    chef: "John Doe",
    ratings: [5, 4, 5],
  },
  {
    id: 2,
    dishName: "Pizza",
    category: "Italian",
    chef: "Jane Smith",
    ratings: [4, 3, 5],
  },
  {
    id: 3,
    dishName: "Sushi",
    category: "Japanese",
    chef: "Tom Brown",
    ratings: [5, 5, 4],
  },
  {
    id: 4,
    dishName: "Salad",
    category: "Healthy",
    chef: "Alice Green",
    ratings: [3, 4, 5],
  },
  {
    id: 5,
    dishName: "Pasta",
    category: "Italian",
    chef: "Gowtam Tinnanuri",
    ratings: [4, 4, 5],
  },
];

const moreOrders = [
  {
    id: 6,
    dishName: "Tacos",
    category: "Mexican",
    chef: "Carlos Ruiz",
    ratings: [4, 5, 4],
  },
  {
    id: 7,
    dishName: "Ramen",
    category: "Japanese",
    chef: "Yuki Tanaka",
    ratings: [5, 4, 5],
  },
];

// 1
// Write a function that filters out dishes with ratings below 4, then returns a string of dish names separated by commas.
// Should print: "Burger, Sushi, Pasta, Tacos, Ramen"

function getHighRatedDishes(orders) {
  const highRatedItems = orders
    .filter((order) => order.ratings.every((rating) => rating >= 4))
    .map((o) => o.dishName);
  return highRatedItems.join(",");
}

console.log(getHighRatedDishes(orders));

// 2
// Write a function that slices the first N dishes from the orders array, maps their names, and joins them into a single string.

// Should print: "Burger, Pizza, Sushi"

function getFirstNDishNames(orders, itemsNumber) {
  const getItems = orders.slice(orders, itemsNumber).map((o) => o.dishName);
  return getItems.join(",");
}
console.log(getFirstNDishNames(orders, 3));

// 3
// Write a function that merges two arrays of food orders

function mergeOrders(orders, moreOrders = []) {
  return [...orders, ...moreOrders];
}
console.log(mergeOrders(orders, moreOrders)); // Should print the merged array of orders
console.log(mergeOrders(orders)); // Should print the original array of orders

// 4
// Write a function that accepts multiple order IDs, fetches the dish names, and returns a formatted string using the rest operator, nullish coalescing, and template literals.

function getDishNamesByIds(orders, ...orderIdNumber) {
  const dishNames = orderIdNumber.map((Orderid) => {
    const order = orders.find((o) => o.id === Orderid);
    return order?.dishName ?? "Unknown Dish";
  });
  return `Selected Dishes: ${dishNames.join(", ")}`;
}

console.log(getDishNamesByIds(orders, 1, 3, 5));
// Should print: Selected Dishes: Burger, Pasta, Sushi
console.log(getDishNamesByIds(orders, 1, 6));
// Should print: Selected Dishes: Burger, Unknown Dish
console.log(getDishNamesByIds(orders, 5, 1));
// Should print: Selected Dishes: Sushi, Burger

// 6
// Write a function that calculates the total number of ratings for each chef.

function getTotalRatingsForChefs(orders) {}

console.log(getTotalRatingsForChefs(orders));
// Should print: { "John Doe": 6, "Jane Smith": 3, "Tom Brown": 3, "Alice Green": 3 }

// # 7. Refactoring `getOrderDetails`
// Improve `getOrderDetails` through several refactoring steps.

const order = {
  dish: {
    name: "Burger",
    category: "Fast Food",
  },
  quantity: 2,
  price: 5.0,
};

// 7
// function getOrderDetails(o) {
//   const dishName = o.dish.name;
//   const dishCategory = o.dish.category;
//   const orderQuantity = o.quantity;
//   const orderPrice = o.price;

//   return `${dishName} (${dishCategory}) x${orderQuantity} costs $${orderPrice}`;
// }

function getOrderDetails(order) {
  const { dish, quantity, price } = order;
  const { name, category } = dish;
  return `${name} (${category}) x${quantity} costs $${price}`;
}

console.log(getOrderDetails(order));

// 8

// Refactor `displayOrderSummary` to improve handling of missing data and enhance code clarity.

// function displayOrderSummary(orderId) {
//   const order = orders.find((o) => o.id === orderId);
//   if (
//     order &&
//     order.dish &&
//     order.dish.name &&
//     order.dish.category &&
//     order.quantity &&
//     order.price
//   ) {
//     console.log(
//       `${order.dish.name} (${order.dish.category}) x${order.quantity} costs $${order.price}`
//     );
//   } else {
//     console.log("Some order data is missing.");
//   }
// }

function displayOrderSummary(orderId) {
  const order = orders.find((o) => o.id === orderId);
  const { dishName, category, quantity, price } = order;
  return `${dishName} (${category}) x${quantity ?? 0} costs $${price ?? 0}`;
}

console.log(displayOrderSummary(1));
console.log(displayOrderSummary(2));
console.log(displayOrderSummary(3));
