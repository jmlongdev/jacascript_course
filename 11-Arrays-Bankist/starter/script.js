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

// movements.sort((a, b) => b - a);

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index) {
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

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(movement => movement > 0)
    .reduce((acc, movement) => acc + movement, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(movement => movement < 0)
    .reduce((acc, movement) => acc - movement, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(movement => movement > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(interest => interest > 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}`;
};

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

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevents form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // the ? is used for optional chaining
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and a welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear inputfields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();

    // Updates the UI
    updateUI(currentAccount);
    console.log('LOgin');
  } else {
    alert('Wrong Password or Username');
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  } else {
    alert('Sorry Can"t give it');
  }
  inputLoanAmount.value = '';
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance > amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  } else {
    alert(`Nice try, ${currentAccount.owner.split(' ')[0]} you broke bitch`);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.pin === Number(inputClosePin.value) &&
    currentAccount.username === inputCloseUsername.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    console.log(accounts);
  }
  labelWelcome.textContent = 'Log in to get started';
  inputClosePin.value = inputCloseUsername.value = '';

  console.log('click');
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////

////////////////////////////////
//////// Challenge 1
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

////////////////////////////////
///// Challenge 4

// test data
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'too little'
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

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

///////// The FIND METHOD ////////////
// returns the first element in the array that satisfies the requirement of the method. only returns the element and not an array
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(account => account.owner === 'Jessica Davis');
console.log(account);

for (const account of accounts) {
  console.log(accounts.find(account => account.owner === 'Jessica Davis'));
}
*/

///////// The FINDINDEX METHOD ////////////////

///////////// SOME and EVERY methods //////////////
/*
console.log(movements);
//Equality
console.log(movements.includes(-130));

//SOME:  CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

const anyDeposits2 = movements.some(mov => mov > 1500);

// EVERY:
console.log(movements.every(mov => mov < 5000));

// Separate Callback

const deposit = mov => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

///////// FLAT and FLATMAP methods ///////////////////////

//Flat method doesnt require a callback function
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
// console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// chaining all the above
const overalBalance1 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance1);

//flatMap can only go one level deep. if there are nested arrays the flat method is best. ex: lines 536-537

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

*/

//////////////////// SORTING ARRAYS ////////////////////////////
/*
// .sort() mutates the string,array
const owners = ['Max', 'Amanda', 'Dexter', 'Rita'];
console.log(owners.sort());
console.log(owners);

//Numbers
console.log(movements);
// console.log(movements.sort());

// return -1 < 0 then A,B (keep order)
//return 1 > 0 then B, A (switch order)

//Ascending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   })
// );
console.log(movements.sort((a, b) => a - b));

// Descending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   })
// );
console.log(movements.sort((a, b) => b - a));

*/

///// More ways of creating and filling ARRAYS ///////////////
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);

x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//////////// 100 Random Dice rolls //////////
const dice = Array.from(
  { length: 100 },
  _ => Math.trunc(Math.random() * 6) + 1
);
console.log(dice);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    elm => Number(elm.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  // const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

*/

const summary = 'Summary: Which Array Method to use ////////////////////////';

//////////////////////////////////////
//// To Mutate the original Array ////

// Add to original: .push(end) and .unshift(start)
// Remove from original: .pop(end), .shift(start), .splice(any)
// Others: .reverse, .sort, .fill

////////////////////////////////
//// If we want A New Array ////

// Computed from original: .map(loop)
//Filtered using condition: .filter
//Portion of original: .slice
// Adding original to other: .concat
// Flattening the original: .flat and .flatMap

//////////////////////////////////////
//// If we want a new array index ////

// Based on a value: .indexOf
// Based on text condition: .findIndex

//// if we want an array element ////
//Based on test condition: .find

///////////////////////////////////
//// Know if an array includes ////
// Based on value: .includes
// Based on test condition: .some and .every

//////////////////////////////////////////////////////////////
//// when we want to transform an array into a new string ////
// Based on separator string: .join

////////////////////////////////////////////////////
//// To transform to value(reduce to one value) ////
// .reduce(acc, cur)=> acc+cur

////////////////////////////
//// To just loop array ////
//  Based on Callback: forEach (Does not create a new array. Just loops over it )

//////////////////////////////////////////////////////
///// Array Methods Practice
/*
// Exercise 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur);

console.log(bankDepositSum);
*/

/*
// Exercise 2.

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// console.log(numDeposits1000);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefised ++ operator
let a = 10;
console.log(++a);
*/
/*
// Exercise 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);
*/

/*
//Exercise 4. MUY IMPORANTE
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/
