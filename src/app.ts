// using arrays, tuples and enums

function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`price for ${product} : $${price.toFixed(2)}`);
}

let prices: number[] = [100, 75, 42];
let names: string[] = ["hat", "gloves", "umbrella"];

writePrice(names[0].toUpperCase(), calculateTax(prices[0]));
writePrice(names[1].toUpperCase(), calculateTax(prices[1]));
writePrice(names[2].toUpperCase(), calculateTax(prices[2]));
