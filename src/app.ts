// working with tuples

function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`price for ${product} : $${price.toFixed(2)}`);
}

//

enum Product {
  Hat,
  Gloves,
  Umbrella,
}

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
