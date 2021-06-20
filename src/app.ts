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

class ClassWithConstructor {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
}

let cwcInstance = new ClassWithConstructor(10);

console.log(`cwcInstance = ${JSON.stringify(cwcInstance)}`);
