/**
 * Mastering typeScript
 */

let tupleOptional: [string, boolean?];
tupleOptional = ["test", true];
tupleOptional = ["onlyString"];

let [tupleString, tupleBoolean] = tupleOptional;

console.log(`tupleString = ${tupleString}`);
console.log(`tupleBoolean = ${tupleBoolean}`);
