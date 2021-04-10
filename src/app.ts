// Asserting to an unexpected type

function calculateTax(amount: number, format: boolean): string | number {
  const calcAmount = amount * 1.2;
  return format ? `$${calcAmount.toFixed(2)} ` : calcAmount;
}

// let taxNumber: number = calculateTax(500, false) as number;

// assertion alternative syntax
// let taxString = <string>calculateTax(100, true);
// alternatively
// let taxString = calculateTax(100, true) as string;

// console.log(`Number Value: ${taxNumber.toFixed(2)}`);
// console.log(`String Value: ${taxString.charAt(0)}`);

let taxValue = calculateTax(100, false);

// using a type guard - initial implementation using if-else block.
/*

if (typeof taxValue === "number") {
  console.log(`Number Value: ${taxValue.toFixed(2)}`);
} else if (typeof taxValue === "string") {
  console.log(`String Value: ${taxValue.charAt(0)}`);
}

*/

// type guarding in a switch statement.
switch (typeof taxValue) {
  case "number":
    console.log(`Number Value: ${taxValue.toFixed(2)}`);
    break;
  case "string":
    console.log(`String Value: ${taxValue.charAt(0)}`);
    break;
  default:
    let value: never = taxValue;
    console.log(`Unexpected type for value : ${value}`);
}

let newResult: unknown = calculateTax(200, false);
let myNumber: number = newResult as number;
console.log(`myNumber value: ${myNumber.toFixed(2)}`);
