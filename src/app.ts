/**
 *
 * Mastering typeScript
 * GENERICS
 */

/*

git add . && git commit -m " " && clear
git add . && git commit -m " " && clear








*/

function printGeneric<T>(value: T) {
  console.log(`typeof T is : ${typeof value}`);
  console.log(`value is : ${value}`);
}
