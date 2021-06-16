/**
 * Mastering typeScript
 */

let list = ["123", "456", "789"];

delete list[0];

for (let i = 0; i < list.length; i++) {
  checkAndPrintElement(list[i]);
}

function checkAndPrintElement(arrElement: string | undefined): void {
  if (arrElement === undefined) {
    console.log(`invalid array element`);
  } else {
    console.log(`valid array element: ${arrElement}`);
  }
}
