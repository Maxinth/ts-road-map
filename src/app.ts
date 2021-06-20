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

class ClassWithPublicProperty {
  public id: number | undefined;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
console.log(publicAccess.id);
