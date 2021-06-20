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
git add . && git commit -m " " && clear


*/

class ClassWithConstructor {
  id: number;
  constructor(_id: number) {
    this.id = _id;
  }
}

let cwcInstance = new ClassWithConstructor(10);

console.log(`cwcInstance = ${JSON.stringify(cwcInstance)}`);
console.log(cwcInstance);
