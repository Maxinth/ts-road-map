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


*/

class ClassWithAccessors {
  private _id: number = 0;
  // get function
  get id(): number {
    console.log(`get id property`);
    return this._id;
  }

  set id(value: number) {
    console.log("set id property");
    this._id = value;
  }
}

let ClassInstance = new ClassWithAccessors();
ClassInstance.id = 10;
console.log(`classWithAccessor.id = ${ClassInstance.id}`);
