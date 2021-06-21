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

class StaticProperty {
  static count = 0;
  updateCount() {
    StaticProperty.count++;
  }
}

let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();
