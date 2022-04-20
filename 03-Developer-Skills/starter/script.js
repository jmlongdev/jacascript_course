// Remember, we're gonna use strict mode in all scripts now!
// live-server --browser=CHROME
'use strict';

// const x = 12;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2022 - birthYear;

// console.log(calcAge(1993));

// const word = prompt('Enter a word to reverse')

// function reverse(str){
//     var splitString = str.split('')
//     var reverseArray = splitString.reverse()
//     var joinArray = reverseArray.join('')
//     console.log(joinArray);
//     return joinArray

// }

// reverse(word)

// const temperatures = [3, -2, -6, -1, 'error', 9];
// const moreTemps = [13, 17, 15, 14, 9, 5];

//  1) Understanding the problem
//  - what is the temp amplitude?
//      it is the difference between the highest and lowest temp in the array
//  - how to compute the max and min temperatures?
//  - what's a sensor error? and what to do with is?
//

// 2) Breaking up into sub-problems
//  -ignore the sensor errors?
//  -find max temp in array
//  find min temp in array
// subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps1, temps2 ) {
//     const temps = temps1.concat(temps2)
// 	let max = temps[0];
// 	let min = temps[0];
// 	for (let i = 0; i < temps.length; i++) {
// 		const curTemp = temps[i];
// 		if (typeof curTemp !== 'number') continue;
// 		if (curTemp > max) max = temps[i];
// 		if (curTemp < min) min = temps[i];
// 	}
// 	console.log(max, min);
// 	return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures, moreTemps);
// console.log(amplitude);

// const measureKelvin = function () {
// 	const measurement = {
// 		type: 'temp',
// 		unit: 'celsius',
// 		value: Number(prompt('Degrees celsius:')),
// 	};
//     console.table(measurement)
// 	const kelvin = measurement.value + 273;
// 	return kelvin;
// };

// console.log(measureKelvin());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}ºC in ${i + 1} days ... `;
    }
    console.log('... '+ str);
}
printForecast(data1);

// console.log(`...${forecast[0]}C in 1 days... ${forecast[1]}C in 2 days... ${forecast[2]}C in 3 days...`);
