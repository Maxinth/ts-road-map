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

class StaticProperty {
  static count = 0;
  updateCount() {
    StaticProperty.count++;
  }
}

let firstInstance = new StaticProperty();
firstInstance.updateCount();
console.log(`StaticProperty.count  = ${StaticProperty.count}`);

let secondInstance = new StaticProperty();
// this call further updates the count value which is referenced irrespective
// of the instance of the class
secondInstance.updateCount();
console.log(`StaticProperty.count  = ${StaticProperty.count}`);
