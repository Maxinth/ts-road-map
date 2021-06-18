/**
 * Mastering typeScript
 */

let tuple1: [string, boolean];
tuple1 = ["test", true];

let [tupleString, tupleBoolean] = tuple1;

console.log(`tupleString = ${tupleString}`);
console.log(`tupleBoolean = ${tupleBoolean}`);
