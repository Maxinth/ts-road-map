"use strict";
/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */
function printClass(a) {
    a.print();
}
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.print = function () {
        console.log("classA.print() called!");
    };
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.print = function () {
        console.log("classB.print() called!");
    };
    return ClassB;
}());
var instanceOfClassA = new ClassA();
var instanceOfClassB = new ClassB();
printClass(instanceOfClassA);
printClass(instanceOfClassB);
