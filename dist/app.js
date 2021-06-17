"use strict";
/**
 * Mastering typeScript
 */
var globalString;
setGlobalString("this string is set");
// using definite assignment assertion syntax to enforce that location of globalString
console.log("globalString = " + globalString);
function setGlobalString(val) {
    globalString = val;
}
// console.log(`globalString = ${globalString}`);
