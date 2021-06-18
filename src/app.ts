/**
 * Mastering typeScript
 */

let firstObj: object = { name: "nameObj name" };
let idObj: object = { id: 1 };

let obj3 = { ...firstObj, ...idObj };
console.log(`secondObj = ${JSON.stringify(obj3)}`);
console.log(obj3);
