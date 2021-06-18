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
var firstObj = { name: "nameObj name" };
var idObj = { id: 1 };
var obj3 = __assign(__assign({}, firstObj), idObj);
console.log("secondObj = " + JSON.stringify(obj3));
console.log(obj3);
