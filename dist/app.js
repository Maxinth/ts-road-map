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





*/
var ClassWithPrivateProperty = /** @class */ (function () {
    function ClassWithPrivateProperty(id) {
        this.id = id;
    }
    return ClassWithPrivateProperty;
}());
var publicAccess = new ClassWithPrivateProperty(100);
// id which is not modified as private isn't accessible outside the ClassWithPrivateProperty class
publicAccess.id = 10;
console.log(publicAccess.id);
