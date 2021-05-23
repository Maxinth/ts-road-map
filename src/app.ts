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

console.log("Product = ", Product);

/*
Product = {
  "0": "Hat",
  "1": "Gloves",
  "2": "Umbrella",
}

OR 
 Product = { Hat: 0,
  Gloves: 1,
  Umbrella: 2,
};


such that "items" Product[0] = "Hat" or Product.Hat= 0


*/
