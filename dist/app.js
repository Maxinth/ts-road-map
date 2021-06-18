"use strict";
/**
 * Mastering typeScript
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var firstArray = [1, 2, 3];
var secondArray = [3, 4, 5];
var thirdArray = __spreadArray(__spreadArray([], firstArray), secondArray);
console.log("third array = " + thirdArray);
