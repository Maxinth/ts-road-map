/**
 * Mastering typeScript
 */

var globalString: string;

setGlobalString("this string is set");

// using definite assignment assertion syntax to enforce that location of globalString
console.log(`globalString = ${globalString!}`);

function setGlobalString(val: string) {
  globalString = val;
}

// console.log(`globalString = ${globalString}`);
