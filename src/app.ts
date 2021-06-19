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

class SimpleClass {
  id: number | undefined;
  print(): void {
    console.log(`SimpleClass.print()  called!`);
  }
}

const myClass = new SimpleClass();
myClass.id = 3;
myClass.print();
