"use strict";
/**
 * Mastering typeScript
 */
function nullishCheck(a) {
    console.log("a : " + (a !== null && a !== void 0 ? a : "undefined or null"));
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);
