function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product {
  Hat = 10,
  Gloves = 10,
  Umbrella = 101,
}

let productValue: Product = Product.Hat;
let productName: string = Product[productValue];

console.log(`Value: ${productValue}, Name: ${productName}`);
