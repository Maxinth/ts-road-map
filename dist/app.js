/* Using Functions */
// using a rest parameters
function calculateTax(amount, discount = 0, ...extraFees) {
    return (amount * 1.2 - discount + extraFees.reduce((total, val) => total + val));
}
let taxValue = calculateTax(100, 10, 20, 1, 30, 7);
console.log(`6 args: ${taxValue}`);
