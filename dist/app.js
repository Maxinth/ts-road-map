// Asserting to an unexpected type
function calculateTax(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)} ` : calcAmount;
}
let taxNumber = calculateTax(500, false);
let taxString = calculateTax(100, true);
/*
the boolean type specified in taxBoolean doesn't exist in the types calculateTax returns
(string | number), however it can be asserted on the the value of calculateTax by first
asserting to it as any and then as boolean

*/
let taxBoolean = calculateTax(100, false);
console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
console.log("taxBoolean = ", taxBoolean);
