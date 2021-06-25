/**
 *
 * Mastering typeScript
 * GENERICS
 */

/*

git add . && git commit -m " " && clear
git add . && git commit -m " " && clear
git add . && git commit -m " " && clear
git add . && git commit -m " " && clear










*/

function printGeneric<T>(value: T) {
  console.log(`typeof T is : ${typeof value}`);
  console.log(`value is : ${value}`);
}

// explicitly casting the called function
printGeneric<number>(1);
printGeneric<string>("test");
printGeneric<boolean>(true);
printGeneric<Function>(() => {});
printGeneric<object>({ id: 1 });
printGeneric<null>(null);
