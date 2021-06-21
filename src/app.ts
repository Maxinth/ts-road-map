/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */

/*

git add . && git commit -m " " && clear
git add . && git commit -m " " && clear



*/

class StaticFunction {
  static printTwo() {
    console.log("2");
  }
}

StaticFunction.printTwo();

// this fails as printTwo being a static function can only be accessed via line 22
let classInstance = new StaticFunction();
classInstance.printTwo();
