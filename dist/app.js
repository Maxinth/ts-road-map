"use strict";
/**
 *
 * Mastering typeScript
 * GENERICS
 */
/*

git add . && git commit -m " " && clear
git add . && git commit -m " " && clear
git add . && git commit -m " " && clear
git add . && git commit -m " " && clear










*/
function printGeneric(value) {
    console.log(`typeof T is : ${typeof value}`);
    console.log(`value is : ${value}`);
}
// explicitly casting the called function
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });
printGeneric(null);
