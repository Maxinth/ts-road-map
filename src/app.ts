/**
 * Mastering typeScript
 *
 */

/*

git add . && git commit -m " " && clear
git add . && git commit -m " " && clear
git add . && git commit -m " " && clear


*/

function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any) {
  return a + b;
}

add(1, 2);
add("first", " + second");
