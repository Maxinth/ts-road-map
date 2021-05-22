// essential ts
function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: string | number): void {
  console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

// let prices: number[] = [100, 75, 42];
// let names: string[] = ["Hat", "Gloves", "umbrellas"];

// prices.forEach((price: number, index: number) => {
//   writePrice(names[index], calculateTax(price));
// });

let prices: (string | number)[] = [100, 75, 42, "20"];
let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];
prices.forEach((price: string | number, index) => {
  writePrice(names[index], calculateTax(price));
});
