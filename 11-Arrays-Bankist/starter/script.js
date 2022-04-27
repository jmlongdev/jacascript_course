'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${movement}€</div>
    </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(movement => movement > 0)
    .reduce((acc, movement) => acc + movement, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(movement => movement < 0)
    .reduce((acc, movement) => acc - movement, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = movements
    .filter(movement => movement > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(interest => interest > 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}`;
};
calcDisplaySummary(account1.movements);

const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Challenge 1
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const correctDogs = dogsJulia.slice(1, 3);
  const dogs = [...correctDogs, ...dogsKate];
  dogs.forEach(function (dog, index) {
    if (dog >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dog} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);
/////////////////////////////////////////////////

// Simple Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD
//// Creates a copy, does not mutate the array ////

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// SPLICE METHOD
//// Mutates the original array ////

// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

/*
// REVERSE METHOD
//// Also mutates the array ////

let arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT METHOD
//
const letters = arr.concat(arr2);
console.log(letters);
// a matter of preference
console.log([...arr, ...arr2]);

// JOIN METHOD
console.log(letters.join(' - '));
*/

///////// The new AT Method ///////////
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
//New AT method makes it even easier
console.log(arr.at(-1));
*/

/*
////// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('-----FOREACH-----');

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
*/

//////// forEach with Maps and Sets
/*
// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

*/

// Data Transformation: MAP, FILTER, REDUCE

// MAP - returns a new array containing the results of applying an operation on all original array elements.

// FILTER - returns a new array containing the array elements that passed a specofoed test condition.

// REDUCE - boils ('reduces') all array elements down to one single value(e.g. adding all elements together)

///////////////////// The MAP METHOD /////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// const movementsUsd = movements.map(function (movements) {
//   return movements * eurToUsd;
// });

/*
//arrow function with map method
const movementsUsd = movements.map(movements =>
  Math.trunc(movements * eurToUsd)
);

console.log(movements);
console.log(movementsUsd);

const movementsUsdfor = [];

for (const mov of movements) movementsUsdfor.push(mov * eurToUsd);

console.log(movementsUsdfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
*/

//////////////////// FILTER METHOD ////////////////////////
/*
console.log(movements);

const deposits = movements.filter(movement => movement > 0);
console.log(deposits);

const withdrawals = movements.filter(movement => movement < 0);
console.log(withdrawals);
*/
// const depositsFor = [];
// for (const movement of movements) if (movement > 0) depositsFor.push(movement);
// console.log(depositsFor);

//////////////////// REDUCE METHOD /////////////////////////
/*
//accumulator is like a snowball that accumulates thee sum of the array
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Maximum value

const maximum = movements.reduce((acc, mov) => (acc > mov ? acc : mov));
console.log(maximum);
*/

/*
//Coding Challenge 3
const ages1 = [5, 2, 4, 1, 15, 8, 3]; // Julias
const ages2 = [16, 6, 10, 5, 6, 1, 4]; // Kates
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
console.log(calcAverageHumanAge(ages1));
console.log(calcAverageHumanAge(ages2));
*/

// Coding Challenge 2
/*
const data1 = [5, 2, 4, 1, 15, 8, 3]; // Julias
const data2 = [16, 6, 10, 5, 6, 1, 4]; // Kates
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  const avgAge = Math.trunc(
    adults.reduce((acc, age) => acc + age, 0) / adults.length
  );
  return avgAge;
};
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
*/
// Challenge 1
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const correctDogs = dogsJulia.slice(1, 3);
  const dogs = [...correctDogs, ...dogsKate];
  dogs.forEach(function (dog, index) {
    if (dog >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dog} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

///////////// The magic of Chaining Methods //////////////
// const eutoToUsd = 1.1;

// //PIPELINE
// const totalDepositsUSD = movements
//   .filter(movement => movement > 0)
//   .map((movement, i, arr) => {
//     // console.log(arr);
//     return movement * eurToUsd;
//   })
//   // .map(movement => movement * eurToUsd)
//   .reduce((acc, movement) => acc + movement, 0);

// console.log(totalDepositsUSD);
