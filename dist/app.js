// using arrays, tuples and enums
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`price for ${product} : $${price.toFixed(2)}`);
}
let hatPrice = 100;
let glovesPrice = 85;
let umbrellaPrice = 42;
writePrice("Hat", calculateTax(hatPrice));
writePrice("Gloves", calculateTax(glovesPrice));
writePrice("Umbrella", calculateTax(umbrellaPrice));
