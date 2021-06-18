/**
 * Mastering typeScript
 *
 */

/*

git add . && git commit -m " " && clear

*/

function testArguments(...args: (string | number)[]) {
  for (let i in args) {
    console.log(`args[${i}] = ${args[i]}`);
  }
}

testArguments(1);
testArguments("first", "second", "third");
