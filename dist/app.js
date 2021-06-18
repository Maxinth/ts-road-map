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
var objPrec1 = { id: 1, name: "obj1 name" };
var objPrec2 = { id: 10001, desc: "obj2 description" };
var objPrec3 = __assign(__assign({}, objPrec1), objPrec2);
console.log("objectPrec3 = " + JSON.stringify(objPrec3, null, 4));
