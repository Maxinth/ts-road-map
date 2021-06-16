"use strict";
/**
 * Mastering typeScript
 */
var list = ["123", "456", "789"];
delete list[0];
for (var i = 0; i < list.length; i++) {
    checkAndPrintElement(list[i]);
}
function checkAndPrintElement(arrElement) {
    if (arrElement === undefined) {
        console.log("invalid array element");
    }
    else {
        console.log("valid array element: " + arrElement);
    }
}
