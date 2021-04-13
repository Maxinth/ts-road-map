// working with tuples
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`price for ${product} : $${price.toFixed(2)}`);
}
let hat = ["Hat", 100];
let gloves = ["gloves", 75];
hat.forEach((h) => {
    if (typeof h === "string") {
        console.log(`string: ${h}`);
    }
    else {
        console.log(`Number: ${h.toFixed(2)}`);
    }
});
