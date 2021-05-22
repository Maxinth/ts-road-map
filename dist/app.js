// essential ts
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
// let prices: number[] = [100, 75, 42];
// let names: string[] = ["Hat", "Gloves", "umbrellas"];
// prices.forEach((price: number, index: number) => {
//   writePrice(names[index], calculateTax(price));
// });
let prices = [100, 75, 42, "20"];
let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];
prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
