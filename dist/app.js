"use strict";
/**
 * Mastering typeScript
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var objArray1 = [
    {
        id: 1,
        name: "first element"
    },
];
var objArray2 = [
    {
        id: 2,
        name: "second element"
    },
];
var objArray3 = __spreadArray(__spreadArray(__spreadArray([], objArray1), [{ id: 3, name: "third element" }]), objArray2);
console.log("objArray3 = " + JSON.stringify(objArray3, null, 4));
