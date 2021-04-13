// working with tuples
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`price for ${product} : $${price.toFixed(2)}`);
}
//
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 1] = "Gloves";
    Product[Product["Umbrella"] = 2] = "Umbrella";
})(Product || (Product = {}));
[Product.Hat, Product.Gloves, Product.Umbrella].forEach((val) => {
    console.log(`Number value: ${val}`);
});
/*
enum Product {
  Hat,
  Gloves,
  Umbrella,
}

is a way of writing Product = {
  0: Hat,
  1:Gloves,
  2:Umbrella
}


while accessing property values as Product.Hat, Product.Gloves,
Product.Umbrella

*/
