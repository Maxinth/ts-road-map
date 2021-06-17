"use strict";
/**
 * Mastering typeScript
 */
// using definite assignment assertion syntax to enforce that location of globalString
var globalString;
setGlobalString("this string is set");
console.log("globalString = " + globalString);
function setGlobalString(val) {
    globalString = val;
}
// console.log(`globalString = ${globalString}`);
