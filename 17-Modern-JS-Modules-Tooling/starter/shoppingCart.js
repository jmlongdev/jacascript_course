//exporting module
console.log('Exporting Module');

/*
// Blocking Code
console.log('Start Fetch Users');

const response = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await response.json();
console.log('Finish Fetching');
*/
// Named Exports
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// Default Exports. exports only the function not the variable

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}
