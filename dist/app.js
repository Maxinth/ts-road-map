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
var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(id) {
        this.id = id;
    }
    return ClassWithConstructor;
}());
var cwcInstance = new ClassWithConstructor(10);
console.log("cwcInstance = " + JSON.stringify(cwcInstance));
