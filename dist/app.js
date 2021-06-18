"use strict";
/**
 * Mastering typeScript
 *
 */
/*

git add . && git commit -m " " && clear

*/
function testArguments() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i in args) {
        console.log("args[" + i + "] = " + args[i]);
    }
}
testArguments(1);
testArguments("first", "second", "third");
