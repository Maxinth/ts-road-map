// Applying Annotations to Variables
/*

function calculateTax(amount: number): number {
  return amount * 1.2;
}

let price: number = 100;
let taxAmount: number = calculateTax(price);
let halfShare: number = taxAmount / 2;

console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);

*/
// implicitly defined static types
/*

function calculateTax(amount: number) {
  return amount * 1.2;
}

let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;

console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);

*/
// using the any type
function calculateTax(amount) {
    return (amount * 1.2).toFixed(2);
}
let price = 100;
let taxAmount = calculateTax(price);
console.log(`taxAmount = ${typeof taxAmount}`);
let halfShare = taxAmount / 2;
console.log(`Price: ${price}`);
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);
