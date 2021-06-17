"use strict";
/**
 * Mastering typeScript
 */
var globalString;
setGlobalString("this string is set");
console.log("globalString = " + globalString);
function setGlobalString(val) {
    globalString = val;
}
