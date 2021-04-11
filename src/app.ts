// using arrays, tuples and enums

function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`price for ${product} : $${price.toFixed(2)}`);
}

// alternate array types declaration syntax, Array<number> is equivalent to number[]
let prices = [100, 75, 42, "20"];
let names = ["hat", "gloves", "umbrella", "sunglasses"];

prices.forEach((price: number, index: number) =>
  writePrice(names[index], calculateTax(price))
);
