// Asserting to an unexpected type

function calculateTax(amount: number, format: boolean): string | number {
  const calcAmount = amount * 1.2;
  return format ? `$${calcAmount.toFixed(2)} ` : calcAmount;
}

let taxNumber: number = calculateTax(500, false) as number;
let taxString: string = calculateTax(100, true) as string;

/*
the boolean type specified in taxBoolean doesn't exist in the types calculateTax returns
(string | number), however it can be asserted on the the value of calculateTax by first 
asserting to it as any and then as boolean

*/
let taxBoolean: boolean = (calculateTax(100, false) as any) as boolean;

console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
console.log("taxBoolean = ", taxBoolean);
