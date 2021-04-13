// working with tuples

// defining type so it can be reused
type strNum = [string, number];

function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`price for ${product} : $${price.toFixed(2)}`);
}

let hat: strNum = ["Hat", 100];
let gloves: strNum = ["gloves", 75];

writePrice(hat[0], hat[1]);
writePrice(gloves[0], gloves[1]);
