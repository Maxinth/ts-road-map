/**
 * Mastering typeScript
 */

// using definite assignment assertion syntax to enforce that location of globalString
var globalString!: string;

setGlobalString("this string is set");

console.log(`globalString = ${globalString}`);

function setGlobalString(val: string) {
  globalString = val;
}

// console.log(`globalString = ${globalString}`);
