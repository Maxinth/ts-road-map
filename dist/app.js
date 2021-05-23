function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
var Product;
(function (Product) {
    Product[Product["Hat"] = 10] = "Hat";
    Product[Product["Gloves"] = 10] = "Gloves";
    Product[Product["Umbrella"] = 101] = "Umbrella";
})(Product || (Product = {}));
let productValue = Product.Hat;
let productName = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);
