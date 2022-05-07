// FOR SCRIPT.JS in SECTION 17

// importing module
// exports happens only in top level
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price, tq);
// addToCart('bread', 5);

console.log('Importing Module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// not good practic to mixed named and default exports
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 3);
add('apples', 5);

console.log(cart);

//===================================================================================
// =====  Top-Level await (ES2022) =====//
/*
// only workd in modules // top level await is blocking

// console.log('Start Fetching ');
// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// console.log(data.map(data => data.title));
// console.log(data);
// console.log('Something ');

const getLastPost = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
console.log('something');  

// Not very clean 
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

//===============================================================================
// ===== The Module Pattern =====//
/*
// begin weith using an iife

const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product: quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product: quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('pizzas', 2);
console.log(ShoppingCart2.cart);
*/

//================================================================================
/*
// ===== CommonJS Modules ===== //

// this would work in nodeJS

//Export
export.addToCart = function (product, quantity) {
    cart.push({ product: quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

//Import 
const { addToCart } = require('./shoppingCart.js')
*/

//================================================================================

// ===== A Brief Intro to the Command Line ===== //

// **review** //

//================================================================================

// ===== Intro to NPM ===== //

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loddedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loddedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

// =======================================================

// ===== Bundling with Parcel and NPM scripts

//this is important for development. testing
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${name}`);
  }
}

const max = new Person('Max');

console.log('Max' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('Test').then(x => console.log(x));

//polyfilling ES6 methods
import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// polyfilling async functions
import 'regenerator-runtime/runtime';

//==================================================================

// ===== REVIEW: Writing Clean and Modern JavaScript ===== //

/*                    READABLE CODE

-- Write code so that others can understand it
-- Write code so that you can understand it a year form now
--Avoid too 'clever' and overcomplicated solutions 
-- Use descripting variable names: what they contain
-- Use descriptiong funciton names: what they do
  */

/*                    GENERAL
-- Use DRY  principle (refactor your code)
-- Don't pollute the global namespace, encapsulate instead
-- Don't use var
-- USe strong type checks(=== and !==)
*/

/*                    FUNCTIONS

-- Generally, functions should do only one thing 
-- Don't use more than 3 function parameters 
-- USe default parameters wheneveer possible 
-- Generally, return same date type as received
-- USe arrow funcitons when they make code more readable 
*/

/*                  OBJECT ORIENTED PROGRAMMING

-- Use ES6 classes 
-- Encapsualte data and don't mutate it from outside the class
-- Implement method chaining
-- Do not use arrow functions as methods(in regular objects)(this keyword will be   
   undefineed)
*/

/*                AVOID NESTED CODE

-- Use early return (gaurde clauses )
-- Use ternary (conditional) or logical operators instead of if statement
-- Use multiple if statements insteead of if/else-is
-- Avoid for loops, use array methods instead
-- Avoid callback-based asynchronus APIs
*/

/*                 ASYNCHRONOUS CODE 

-- Consume promises with async/await for beest readability
-- Whenever possible, run promises in parallel (with Promise.all)
-- HAndle errors and promise rejections

*/

//==============================================================================

// ===== Delcarative and Functional JavaScript Principles ===== //
