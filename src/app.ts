/**
 * Mastering typeScript
 */

let firstObj: object = { id: 1, name: "firstObj" };
let secondObj: object = { ...firstObj };

console.log(`secondObj = ${JSON.stringify(secondObj)}`);
console.log(secondObj);
