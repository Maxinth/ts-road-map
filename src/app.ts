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

hat.forEach((h: string | number) => {
  if (typeof h === "string") {
    console.log(`string: ${h}`);
  } else {
    console.log(`Number: ${h.toFixed(2)}`);
  }
});
