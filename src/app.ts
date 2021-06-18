/**
 * Mastering typeScript
 */

let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];

let thirdArray = [...firstArray, ...secondArray];

console.log(`third array = ${thirdArray}`);
