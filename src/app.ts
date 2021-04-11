// using arrays, tuples and enums

function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`price for ${product} : $${price.toFixed(2)}`);
}

// alternate array types declaration syntax, Array<number> is equivalent to number[]
let prices: Array<number> = [100, 75, 42];
let names: string[] = ["hat", "gloves", "umbrella"];

prices.forEach((price: number, index: number) =>
  writePrice(names[index], calculateTax(price))
);
