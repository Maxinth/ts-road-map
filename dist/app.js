"use strict";
/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */
/*

git add . && git commit -m " " && clear






*/
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass.id = " + this.id);
    };
    return SimpleClass;
}());
var myClass = new SimpleClass();
myClass.id = 3;
myClass.print();
console.log(myClass.id);
