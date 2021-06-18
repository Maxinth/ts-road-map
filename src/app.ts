/**
 * Mastering typeScript
 */

let objPrec1: object = { id: 1, name: "obj1 name" };
let objPrec2: object = { id: 10001, desc: "obj2 description" };

let objPrec3 = { ...objPrec1, ...objPrec2 };

console.log(`objectPrec3 = ${JSON.stringify(objPrec3, null, 4)}`);
