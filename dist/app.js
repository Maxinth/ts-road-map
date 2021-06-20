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




*/
var ClassWithPublicProperty = /** @class */ (function () {
    function ClassWithPublicProperty() {
    }
    return ClassWithPublicProperty;
}());
var publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
console.log(publicAccess.id);
