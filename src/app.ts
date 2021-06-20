/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */

/*

git add . && git commit -m " " && clear







*/

class ClassWithPrivateProperty {
  #id: number;
  constructor(id: number) {
    this.#id = id;
  }

  printId(): void {
    console.log(`id passed in = ${this.#id}`);
  }
}

let es6PrivateClass = new ClassWithPrivateProperty(100);

// id which is not modified as private isn't accessible outside the ClassWithPrivateProperty class
es6PrivateClass.printId();
