// working with tuples
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`price for ${product} : $${price.toFixed(2)}`);
}
let hat = ["Hat", 100];
let gloves = ["gloves", 75];
let products = [hat, gloves];
let tupleUnion = [true, false, hat, ...products];
tupleUnion.forEach((elem) => {
    if (elem instanceof Array) {
        elem.forEach((tupleElem) => {
            if (typeof tupleElem === "string") {
                console.log(`String value: ${tupleElem}`);
            }
            else {
                console.log(`Number Value: ${tupleElem}`);
            }
        });
    }
    else if (typeof elem === "boolean") {
        console.log(`Boolean value: ${elem}`);
    }
});
