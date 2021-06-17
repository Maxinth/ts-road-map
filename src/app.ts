/**
 * Mastering typeScript
 */

var globalString: string;

setGlobalString("this string is set");

console.log(`globalString = ${globalString}`);

function setGlobalString(val: string) {
  globalString = val;
}
