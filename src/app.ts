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

let products: [string, number][] = [hat, gloves];
let tupleUnion: (strNum | boolean)[] = [true, false, hat, ...products];

tupleUnion.forEach((elem: strNum | boolean) => {
  if (elem instanceof Array) {
    elem.forEach((tupleElem: string | number) => {
      if (typeof tupleElem === "string") {
        console.log(`String value: ${tupleElem}`);
      } else {
        console.log(`Number Value: ${tupleElem}`);
      }
    });
  } else if (typeof elem === "boolean") {
    console.log(`Boolean value: ${elem}`);
  }
});
