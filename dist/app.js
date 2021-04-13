// working with tuples
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`price for ${product} : $${price.toFixed(2)}`);
}
// using enum and number values
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 20] = "Gloves";
    Product[Product["Umbrella"] = 21] = "Umbrella";
})(Product || (Product = {}));
let productValue = 0;
let productName = Product[productValue];
console.log(`Value : ${productValue}, Name: ${productName}`);
