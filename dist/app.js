"use strict";
/**
 * Mastering typeScript
 *
 */
/*

git add . && git commit -m " " && clear

*/
var myCallback = function (text) {
    console.log("myCallback called with " + text);
};
function withCallbackArg(message, callbackFn) {
    console.log("withCallback called! , message : " + message);
    callbackFn(message.toUpperCase() + " from withCallback");
}
withCallbackArg("initial text", myCallback);
