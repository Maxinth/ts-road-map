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
  static count = 0;
  updateCount() {
    StaticProperty.count++;
  }
}

let firstInstance = new StaticProperty();

console.log(`StaticProperty.count  = ${StaticProperty.count}`);

let secondInstance = new StaticProperty();
console.log(`StaticProperty.count  = ${StaticProperty.count}`);
