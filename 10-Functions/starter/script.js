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
//this is only possible because of first-class functions.

/////////// Functions Accepting Callback Functions/////////

const oneWord = function (str) {
  return str.replaceAll(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Ordere Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callback all the time
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);

['Max', 'Dexter', 'Rita'].forEach(high5);
