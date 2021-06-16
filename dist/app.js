"use strict";
/**
 * Mastering typeScript
 */
var list = ["123", "456", "789"];
delete list[0];
for (var i = 0; i < list.length; i++) {
    console.log("list[" + i + "]  = " + list[i]);
}
