/* Using Functions */

/*

// using a  parameter with a default value
// discount is provided a default value when not supplied when calling the function - see line 13
function calculateTax(amount: number, discount: number = 0): number {
  return amount * 1.2 - (discount || 0);
}

let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);

// calling said function leaving the optional parameter out
taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);

*/
