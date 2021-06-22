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
r





*/
class StaticProperty {
    updateCount() {
        StaticProperty.count++;
    }
}
StaticProperty.count = 0;
let firstInstance = new StaticProperty();
console.log(`StaticProperty.count  = ${StaticProperty.count}`);
let secondInstance = new StaticProperty();
console.log(`StaticProperty.count  = ${StaticProperty.count}`);
