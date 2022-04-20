'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive')

// function logger(name) {
//     console.log(`My name is ${name}`)
// }

// logger('Max')

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

/* */

// This is a function declaration
// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }
// const age1 = calcAge1(1993)
// console.log(age1)

// this function doesnt have name before the parameters. These are called
// function expressions
// const calcage2 = function (birthYear) {
//     return 2022 - birthYear;
// }

// const age2 = calcage2(1993)
// console.log(age2)


// Arrow function
// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1993)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// const age4 = yearsUntilRetirement(1993, 'Max')
// console.log(age4)


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//     return juice
// }

// const fruitJuice = fruitProcessor(2, 4)
// console.log(fruitJuice)


// const calcAge = function (birthYear) {
//     return 2022 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement
//     } else {
//         console.log(`${firstName} is retired.`)
//         return -1
//     }
//     // return
// }

// console.log(yearsUntilRetirement(1993, 'Max'));
// console.log(yearsUntilRetirement(1950, 'Mo'));


// const dolphinsScores = [44, 23, 71];
// // const dolphinsScores = [85, 54, 41];
// const koalasScores = [65, 54, 49];
// // const koalasScores = [23, 34, 27];

// function sumScores(array) {
//     var i = 0, sum = 0, len = array.length;
//     while (i < len) {
//         sum = sum + array[i++];
//     }
//     return sum / len;
// }

// const scoreDolphins = sumScores(dolphinsScores);
// const scoreKoalas = sumScores(koalasScores);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     } else if (avgDolphins === avgKoalas) {
//         console.log('Teams Tied')
//     } else {
//         console.log('No team wins...')
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas)


// const friends = ['Michael', 'Peter', 'Steven'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jake';
// console.log(friends)
// friends.push('Bill')
// console.log(friends)

// // Exerciese

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     let age = calcAge(years[i])
//     ages.push(age)
// }
// console.log(ages)


// //ARRAY METHODS
// // push
// const friends = ['Michael', 'Peter', 'Steven'];
// const newLength = friends.push('Jay')
// console.log(friends)
// // returns ['Michael', 'Peter', 'Steven', 'Jay']

// // unshift
// friends.unshift('Stan')
// console.log(friends)
// // returns ['Stan', 'Michael', 'Peter', 'Steven', 'Jay']

// //pop
// friends.pop(); // Last
// console.log(friends)
// // returns ['Stan', 'Michael', 'Peter', 'Steven']

// //shift
// friends.shift()
// console.log(friends)


// const bill = 40;
// const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${tip + bill}.`)


// const bills = [100, 125, 555, 44];
// const tips = [];
// const totals = [];

// function calcTip(bills) {
//     for (let i = 0; i < bills.length; i++) {
//         const bill = bills[i];
//         const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
//         tips[i] = tip;
//         const total = tip + bill;
//         totals.push(total);
//     }
//     console.log(tips)
//     console.log(totals)
// }

// calcTip(bills)

// const max = {
//     firstName: 'Max',
//     lastName: 'Long',
//     age: 2022 - 1993,
//     job: 'Athletic Trainer',
//     friends: ['Dex', 'Rita', 'Amanda']
// };

// console.log(max.job)
// console.log(max['age'])

// const choice = prompt('Type something')

// max.location = 'USA';
// max['Github'] = 'JML.dev'

// console.log(max)

// if (max[choice]) {
//     console.log(max[choice])
// } else {
//     console.log(`${choice} does not exist in this object`)
// }

// console.log(`${max['firstName']} has ${max.friends.length} friends, and his best friend is named ${max.friends[0]}.`)

// const max = {
//     firstName: 'Max',
//     lastName: 'Long',
//     birthYear: 1993,
//     job: 'Athletic Trainer',
//     friends: ['Dex', 'Rita', 'Amanda'],
//     hasDriversLicense: true,
//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };
// console.log(max.getSummary())

// Challenge 3
// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = Math.trunc(this.mass / this.height ** 2);
//         return this.BMI
//     },
// }
// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = Math.trunc(this.mass / this.height ** 2);
//         return this.BMI
//     },
// }
// mark.calcBMI()
// john.calcBMI()
// if (mark.BMI > john.BMI) {
//     console.log(`${mark.firstName} ${mark.lastName}'s BMI(${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.BMI})`)
// } else {
//     console.log(`John's BMI(${john.BMI}) is higher than Mark's BMI (${mark.BMI})`)
// }



//Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bills) {
    for (let i = 0; i < bills.length; i++) {
        const bill = bills[i];
        const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
        tips[i] = tip;
        const total = tip + bill;
        totals.push(total);
    }
    // console.log(tips)
    console.log(totals)
}


function calcAverage(arr) {
    let sum = 0, len = arr.length
    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }
    // return sum / len;
    console.log(sum / len)
}


calcTip(bills)
calcAverage(totals)
