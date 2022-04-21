'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

///////// Sets -  collection of unique values ////////////////////////

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);
console.log(new Set());
console.log(new Set('Max'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffSet = [...new Set(staff)];
// console.log(staffSet);
console.log(new Set(staff).size);

console.log(new Set('josephmaxwelllong').size);

//====================================================================
//Challenge 2.

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. loop over the game.score and print each playername to the console, along with goal number.

// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1} :${player}`);
// }
// // for (let score = 0; score < game.scored.length; score++) {
// //   console.log(`Goal ${score + 1}: ${game.scored[score]}`);
// // }

// // 2. use a loop to calculate the avarage odd and lof it to the console
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// console.log(average / odds.length);

// // 3.
// const entries = Object.entries(game.odds);
// for (const [team, odd] of entries) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}, ${odd}`);
// }

// 4. {BONUS}
//================================================================

// Looping Objects: Objects, Keys, Value, and Entries

//Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length}
// days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // //property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //property Entries object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   // console.log(x);
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//////////////////////////OPTIONAL CHAINING///////////////////////////
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //Examples
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   // console.log(`On ${day}, we open at ${open}`);
// }

//Optional chaining on MEthods

// console.log(restaurant.order?.(0, 1) ?? 'Method Does nto exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method Does nto exist');

// //Optional chaining on Arrays

// const users = [{ name: 'Max', email: 'gmail.com' }];
// const users = [];

// console.log(users[0]?.name ?? 'User Array empty');
// //extra work
// if (users.length > 0) console.log(users[0]?.name);
// else console.log('User Array empty');

// Enhanced Object Literals

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// //Coding Challenge 1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

//2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

//6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scores.`);
// };

// printGoals(...game.scored);

//7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

//AND assigment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2);

//

// console.log('---OR---');
// console.log(3 || 'Max');
// console.log('' || 'Max');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---AND---');
// console.log(0 && 'Max');

//SPREAD OPERATOR
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//Iterables: arrays, strings, maps, sets. NOT OBJECTS

// const str = 'Max';
// const letters = [...str, ' ', 'L.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(3, 4);
// add(3, 5, 6, 7);
// add(5, 8, 8, 8, 7, 5);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Some place',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Some place',
//   starterIndex: 3,
// });

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

//Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// const [, , nest] = nested;
// const [a, b] = nest;
// console.log(a, b);

// const [a, b, [c, d]] = nested;
// console.log(a, b, c, d);
