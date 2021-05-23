function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product {
  Hat,
  Gloves,
  Umbrella,
}

const enumArray = [Product.Hat, Product.Gloves, Product.Umbrella];

enumArray.forEach((val) => {
  console.log(`Number value : ${val}`);
});
