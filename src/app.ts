/**
 * Mastering typeScript
 */

function printString(a: string): void {
  console.log(a);
}

var returnedValue: string = printString(
  "This is a string"
) as unknown as string;

printString;
