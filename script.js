/** @format */

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log('23');
// const calcAge = age => 2037 - birthYear;

// console.log();
// console.log();

// PROBLEM 1
// We work for a company building a smart home thermometer. Our most recent task is this : "Given an array of temperatures of one day, calculate the temparature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperature
// - What's sensor error? And what to do?

// 2) Breaking up into sub-problem
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// calcTempAmplitude([3, 7, 4, 8]);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// Penjelasan code:
// pertama temps[i] akan membaca indeks pertama yakni 3 dengan max 3 juga untuk sementara
// kemudian di increment menjadi indeks ke dua di mana temps[i] adalah 7 dan max adalah 3 di sini 7 beanr lebih besar dari pada 3 maka max sementara sekarang adalah 7
// Kemudian pada indeks ke 3 maka perbandingannya adalah antara angka 4 dengan 7
// Sama halnya dengan max, min melakukan dengan cara yang sama

// Problem 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionally twice? NO! Just merge two arrays.

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
// CODE DI BAWAH ADALAH CARA UNTUK MENGGABUNGKAN ARRAY
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    // value: Number(prompt('Degrees celcius: ')), // PROMPT SELALU STRING
    value: 10,
  };

  // B) FIND
  console.log(measurement); // terlihat kesalahannya
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A. IDENTIFY
console.log(measureKelvin());

// USING A DEBUGGER
const calcTempAmplitudeBug = function (t1, t2) {
  // CODE DI BAWAH ADALAH CARA UNTUK MENGGABUNGKAN ARRAY
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//  A) IDENTIFY
console.log(amplitudeBug);

// Coding Challenge #1
/* Given an array of forcasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ...23°C in days ... "

Create a function 'printForecat' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, -4]

*/
