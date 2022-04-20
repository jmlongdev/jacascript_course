// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// let country = 'USA';
// let continent = 'North America';
// let population = 2343535;


// let isIsland = false;
// let language;
// console.log(country, continent, population, isIsland)

// // store Marks height and weight in 2 variables
// const marksMass1 = 78;
// const marksHeight1 = 1.69;

// // store Johns height and weight in 2 variables 
// const johnsMass1 = 92;
// const johnsHeight1 = 1.95;

// // BMI = mass / height ** 2 = mass / (height * height)

// marksBmi1 = marksMass1 / marksHeight1 ** 2
// johnsBmi1 = johnsMass1 / johnsHeight1 ** 2

// markHigherBMI1 = marksBmi1 > johnsBmi1;

// console.log(marksBmi1, johnsBmi1)
// console.log(markHigherBMI1)


// const marksMass2 = 95;
// const marksHeight2 = 1.88;

// // store Johns height and weight in 2 variables 
// const johnsMass2 = 85;
// const johnsHeight2 = 1.76;

// // BMI = mass / height ** 2 = mass / (height * height)

// marksBmi2 = marksMass2 / marksHeight2 ** 2
// johnsBmi2 = johnsMass2 / johnsHeight2 ** 2

// markHigherBMI2 = marksBmi2 > johnsBmi2;
// console.log(marksBmi2, johnsBmi2)
// console.log(markHigherBMI2)



// const age = 13;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Can Drive 😎')
// } else {
//     const yearsLeft = 18 - age
//     console.log(`not old enough 🤣, ${yearsLeft} years to go!`)
// }




// // const marksMass = 78;
// const marksMass = 95;
// const marksHeight = 1.69;
// const marksHeight = 1.88;

// const johnsMass = 92;
// const johnsMass = 85;
// const johnsHeight = 1.95;
// const johnsHeight = 1.76;

// markBMI = marksMass / marksHeight ** 2
// johnBMI = johnsMass / johnsHeight ** 2

// let message;
// if (markBMI > johnBMI) {
//     message = `Mark's BMI(${markBMI}) is higher than John's BMI (${johnBMI})`
// } else {
//     message = `John's BMI(${johnBMI}) is higher than Mark's BMI (${markBMI})`
// }
// console.log(message)


// Coding Challenge #3

// function calculate(array) {
//     var i = 0, sum = 0, len = array.length;
//     while (i < len) {
//         sum = sum + array[i++];
//     }
//     return sum / len;
// }

// dolphinsScores = [96, 108, 89]
// dolphinsScores = [97, 112, 101]
// dolphinsScores = [97, 112, 101]

// koalasScores = [88, 91, 110]
// koalasScores = [109, 95, 123]
// koalasScores = [109, 95, 106]

// dolphinsAverageScore = calculate(dolphinsScores)
// koalasAverageScore = calculate(koalasScores)

// if (dolphinsAverageScore >= 100 && dolphinsAverageScore > koalasAverageScore) {
//     console.log(`Dolphins score: ${dolphinsAverageScore} over 100 and beat the Koalas`)
// } else if (koalasAverageScore >= 100 && dolphinsAverageScore < koalasAverageScore) {
//     console.log(`Koalas score: ${koalasAverageScore} and is over 100 and beat the Dolphins`)
// } else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100) {
//     console.log(`dolphins score is ${dolphinsAverageScore} and koalas score is ${koalasAverageScore}. Both teams tie`)
// } else {
//     console.log('No winner, no trophy')
// }

// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log(`Dolphins win with a score of ${dolphinsAverageScore}`)
// } else if (dolphinsAverageScore < koalasAverageScore) {
//     console.log(`Koalas win with a score of ${koalasAverageScore}`)
// } else {
//     console.log('Both teams tied')

// const age = 23

// const drink = age >= 18 ? 'beer 🍺' : 'soda🥤';
// console.log(`I like to drink ${drink}.`)

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${tip + bill}.`)