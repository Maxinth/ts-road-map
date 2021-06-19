/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */

/*

git add . && git commit -m " " && clear
git add . && git commit -m "calling a class which doesn't implement the interface" && clear








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

class ClassC {
  print(): void {
    console.log(`classC.print() called!`);
  }
}

let instanceOfClassA = new ClassA();
let instanceOfClassB = new ClassB();
let instanceOfClassC = new ClassC();

printClass(instanceOfClassA);
printClass(instanceOfClassB);
printClass(instanceOfClassC);
