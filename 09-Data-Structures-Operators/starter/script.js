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

//////////////// challenge 4 /////////////////////////////////

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const splitRow = row.toLowerCase().trim().split('_');
    const [word1, word2] = splitRow;
    const output = `${word1}${word2[0].toUpperCase() + word2.slice(1)}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// btn.addEventListener('click', camelCaseWord);

////////// Working with Strings pt.3/////////////////////////

//SPLIT and JOIN
// console.log('a+very+nice+string'.split('+'));
// console.log('Max Long'.split(' '));
// const [firstName, lastName] = 'Max Long'.split(' ');
// // console.log(firstName, lastName);
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jessica ann smith davis';
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('joseph max long');

//PADDING

// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('Max'.padStart(15, '+').padEnd(20, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(12341234));
// console.log(maskCreditCard(1234123412341234));
// console.log(maskCreditCard('3456345634563456'));

//REPEAT

// const message2 = 'Bad weather... All departures delayed... ';

// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };

// planesInLine(3);
// planesInLine(5);
// planesInLine(12);
////////// Working with Strings pt.2/////////////////////////
// const airline = 'TAP Air Portugal';
// // const plane = 'A320';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix Capitalization in name
// const passenger = 'mAx'; //Max
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

const fixName = function (name) {
  const n = name;
  const nLower = n.toLowerCase();
  const nCorrect = nLower[0].toUpperCase() + nLower.slice(1);
  console.log(nCorrect);
  return nCorrect;
};
// fixName('amanDa');

// Comparing emails

// const email = 'hello@gmail.com';
// const loginEmail = '   Hello@GmAil.Com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// const normailzedEmail = loginEmail.toLowerCase().trim();
// console.log(normailzedEmail);

// console.log(email === normailzedEmail);

//replacing parts of strings

// const priceGB = '288,97#';
// const priceUS = priceGB.replace('#', '$').replace(',', '.');
// console.log(priceUS);

// const announcment = 'All passengers come to boarding door 23. Boarding door 23';
// console.log(announcment.replaceAll('door', 'gate'));

// console.log(announcment.replace(/door/g, 'gate'));

//Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new Air bus family');
// }

// PRACTICE exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allwoed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

////////// Working with Strings pt. 1/////////////////////////

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);
// //INDEX OF
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('portugal'));

// //SLICE METHOD
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// //EXTRACTING PARTS OF STRINGS
// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😂');
//   else console.log('You got lucky 😃');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('11B');
// checkMiddleSeat('3E');
// checkMiddleSeat('3A');

// console.log(new String('Max'));
// console.log(typeof new String('MAx'));
////////////////////// Challenge 3////////////////////////////

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// 1. Create an array 'events' of the different game events that happened
// console.log(gameEvents.delete(64));
// console.log(gameEvents);
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// console.log([...events]);

// 2.
// console.log(gameEvents.delete(64));
// console.log(gameEvents);

// 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// 4.

// for (const [key, value] of gameEvents)
//   key <= 45
//     ? console.log(`[FIRST HALF] ${key}: ${value}`)
//     : console.log(`[SECOND HALF] ${key}: ${value}`);

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

////////////////////////////////////////////////////////////////////////////////////

// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

//
//
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert Object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// const correctAns = Number(question.get('correct'));

// // if (answer === correctAns) {
// //   console.log(question.get(true));
// // } else {
// //   console.log(question.get(false));
// // }
// console.log(question.get(question.get('correct') === answer));

// //Convert Map to Array
// console.log([...question]);
// // console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

/////////  MAP - is a data structure that we can use to map data to keys /////

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are close :(');
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1', 'heading'));
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

///////// Sets -  collection of unique values ////////////////////////

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);
// console.log(new Set());
// console.log(new Set('Max'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // const staffSet = [...new Set(staff)];
// // console.log(staffSet);
// console.log(new Set(staff).size);

// console.log(new Set('josephmaxwelllong').size);

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
