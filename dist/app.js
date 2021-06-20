"use strict";
/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id;
/*

git add . && git commit -m " " && clear







*/
class ClassWithPrivateProperty {
    constructor(id) {
        _id.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
    }
    printId() {
        console.log(`id passed in = ${__classPrivateFieldGet(this, _id)}`);
    }
}
_id = new WeakMap();
let es6PrivateClass = new ClassWithPrivateProperty(100);
// id which is not modified as private isn't accessible outside the ClassWithPrivateProperty class
es6PrivateClass.printId();
