"use strict";
/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */
/*

git add . && git commit -m " " && clear
git add . && git commit -m " " && clear
git add . && git commit -m " " && clear
git add . && git commit -m " " && clear
git add . && git commit -m " " && clear

*/
class ClassWithAccessors {
    constructor() {
        this._id = 0;
    }
    // get function
    get id() {
        console.log(`get id property`);
        return this._id;
    }
    set id(value) {
        console.log("set id property");
        this._id = value;
    }
}
