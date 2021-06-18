"use strict";
/**
 * Mastering typeScript
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var firstObj = { id: 1, name: "firstObj" };
var secondObj = __assign({}, firstObj);
console.log("secondObj = " + JSON.stringify(secondObj));
console.log(secondObj);
