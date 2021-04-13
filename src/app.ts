// working with tuples

function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`price for ${product} : $${price.toFixed(2)}`);
}

// using enum and number values

enum Product {
  Hat,
  Gloves,
  Umbrella,
}

let productValue: Product = 0;
let productName: string = Product[productValue];
console.log(`Value : ${productValue}, Name: ${productName}`);
