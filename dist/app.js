// using arrays, tuples and enums
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`price for ${product} : $${price.toFixed(2)}`);
}
// alternate array types declaration syntax, Array<number> is equivalent to number[]
let prices = [100, 75, 42, "20"];
let names = ["hat", "gloves", "umbrella", "sunglasses"];
prices.forEach((price, index) => writePrice(names[index], calculateTax(price)));
