'use strict';

////// Default Parameters

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price|| 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
/////////////////////////////////////////////////////////////////

//////// How Passing Arguments Work: Value vs. Reference

// const flight = 'LH1234';
// const max = {
//   name: 'Max Long',
//   passport: 43216234564,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 43216234564) {
//     alert('Checked in');
//   } else {
//     alert('Wrong Passport ');
//   }
// };

// // checkIn(flight, max);
// // console.log(flight);
// // console.log(max);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random()) * 100000000;
// };

// newPassport(max);
// checkIn(flight, max);

/////////////////////////////////////////////////////////

//////////// First Class and Higher-Order Functions

///////First Class Functions////////
//JavaScript treats functions as first-class citizens.
//This means that functions are simply values.
//Functions are just another 'type of object.'

///////// Higher-Order Functions
//A function that recieves another function as an argument, that returns a new funciton, or both.
// //this is only possible because of first-class functions.

// /////////// Functions Accepting Callback Functions/////////

// const oneWord = function (str) {
//   return str.replaceAll(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher Ordere Function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

//JS uses callback all the time
// const high5 = function () {
//   console.log('✋');
// };
// document.body.addEventListener('click', high5);

// ['Max', 'Dexter', 'Rita'].forEach(high5);

////////// Functions Returning Funcitons ////////
// const greet = function (greeting) {
//   return function (name) {
//     console.log(``);
//   };
// };

// //same function written with arrow functions
// const greet = greeting => name => console.log(`${greeting} ${name}`);
// const greeterHey = greet('Hey');
// greeterHey('Max');
// greet('Hello')('Max');

// /////////////////// The Call and Apply Methods //////////////////////////

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, passengerName) {
//     console.log(
//       `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//       passengerName,
//     });
//   },
// };

// lufthansa.book(239, 'Max');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// //Does NOT work
// // book(23, 'Sarah Williams');

// ///// CALL Method /////
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);
// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };
// book.call(swiss, 423, 'Billy Bob');
// console.log(swiss);

// ///// APPLY Method ** not used much anymore. /////
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// // console.log(swiss);

// ///// Using Call MEthod with the spread operator /////
// book.call(swiss, ...flightData);

// /////////////// BIND method ///////////////

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Bill Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Charles Billington');
// bookEW23('Martha Jay');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// const addSalesTax = addTax.bind(null, 0.07);
// console.log(addVAT(100));
// console.log(addVAT(23));
// console.log(addSalesTax(499.99));

// // const greet = greeting => name => console.log(`${greeting} ${name}`);
// // const greeterHey = greet('Hey');
// // greeterHey('Max');
// // greet('Hello')('Max');

// const calcTaxRate = rate => value => value + value * rate;
// const calcRate = calcTaxRate(0.07);
// console.log(calcRate(100));

// Coding Challenge 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   // 1.
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question} \n ${this.options.join('\n')}\n (Write option number)`
//       )
//     );
//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     // 4.
//     this.displayResults();
//     this.displayResults('string');
//   },
//   // 3.
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// // 2.
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // 5.(Bonus)
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

////

////// Immediately Invoked Funciton Expressions (IIFE)
/*
const runOnce = function () {
  console.log('This will never run again.');
};
runOnce();

IIFE
(function () {
  console.log('This will never run again.');
  const isPrivate = 23;
})();

IIFE arrow function
(() => console.log('This will ALSO never run again.'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(isPrivate);
console.log(notPrivate);
*/

/////// Closures ///////////////
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
*/

///// More Closure Examples ///////////

/*
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-asigning f function
h();
f();
console.dir(f);
*/
/*
// Example 2
// creating a timer

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

// Challenge 2

const colorChange = (function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
