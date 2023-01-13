/** @format */

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log('23');
// const calcAge = age => 2037 - birthYear;

// console.log();
// console.log();

// PROBLEM
// We work for a company building a smart home thermometer. Our most recent task is this : "Given an array of temperatures of one day, calculate the temparature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute maz and min temperature
// - What's sensor error? And what to do?

// 2) Breaking up into sub-problem
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
};

calcTempAmplitude([3, 7, 4]);

// Penjelasan code:
// pertama temps[i] akan membaca indeks pertama yakni 3 dengan max 3 juga untuk sementara
// kemudian di increment menjadi indeks ke dua di mana temps[i] adalah 7 dan max adalah 3 di sini 7 beanr lebih besar dari pada 3 maka max sementara sekarang adalah 7
// Kemudian pada
