// using arrays, tuples and enums
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`price for ${product} : $${price.toFixed(2)}`);
}
let prices = [100, 75, 42];
let names = ["hat", "gloves", "umbrella"];
writePrice(names[0].toUpperCase(), calculateTax(prices[0]));
writePrice(names[1].toUpperCase(), calculateTax(prices[1]));
writePrice(names[2].toUpperCase(), calculateTax(prices[2]));
