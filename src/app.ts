/**
 *
 * Mastering typeScript
 * GENERICS
 */

/*

git add . && git commit -m " " && clear









*/

function printGeneric<T>(value: T) {
  console.log(`typeof T is : ${typeof value}`);
  console.log(`value is : ${value}`);
}

printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => {});
printGeneric({ id: 1 });
printGeneric(null);
