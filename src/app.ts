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

interface IPrint {
  print(): void;
}

function printClass(a: IPrint) {
  a.print();
}
class ClassA implements IPrint {
  print(): void {
    console.log(`classA.print() called!`);
  }
}

class ClassB implements IPrint {
  print(): void {
    console.log(`classB.print() called!`);
  }
}
