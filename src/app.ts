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

class ClassWithReadonly {
  readonly name: string;
  constructor(_name: string) {
    this.name = _name;
  }

  // name isn't accessible and to be set only within the constructor
  setNameValue(_name: string) {
    this.name = _name;
  }
}
