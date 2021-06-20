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

class ClassWithPrivateProperty {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}

let publicAccess = new ClassWithPrivateProperty(100);

// id which is not modified as private isn't accessible outside the ClassWithPrivateProperty class
publicAccess.id = 10;
console.log(publicAccess.id);
