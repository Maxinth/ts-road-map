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

class ClassWithCtorMods {
  constructor(public id: number, private name: string) {}
}

let myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
// name is private within the class and os isn't accessible outside the class
console.log(`myClassMod.name = ${myClassMod.name}`);
