"use strict";
// using a definitive assignment assertion
/*
function calculateTax(amount: number, format: boolean): string | number | null {
  if (amount === 0) {
    return null;
  }
  const calcAmount = amount * 1.2;
  return format ? `$${calcAmount.toFixed(2)} ` : calcAmount;
}

// over here
let taxValue!: string | number | null;
eval("taxValue = calculateTax(100,false)");

if (taxValue !== null) {
  switch (typeof taxValue) {
    case "number":
      console.log(`Number Value: ${taxValue.toFixed(2)}`);
      break;
    case "string":
      console.log(`String Value: ${taxValue.charAt(0)}`);
      break;
  }
} else {
  console.log("Value is not a string or a number");
}

*/
//# sourceMappingURL=7-37.js.map