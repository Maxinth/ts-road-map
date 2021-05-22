function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

type San = [string, number];

let hat: San = ["Hat", 100];
let gloves: San = ["Gloves", 75];

let products: San[] = [hat, gloves];
let tupleUnion: (San | boolean)[] = [true, false, hat, ...products];

tupleUnion.forEach((elem: San | boolean) => {
  if (elem instanceof Array) {
    elem.forEach((tupleElem: string | number) => {
      if (typeof tupleElem === "string") {
        console.log(`String Value: ${tupleElem}`);
      } else {
        console.log(`Number Value: ${tupleElem}`);
      }
    });
  } else if (typeof elem === "boolean") {
    console.log(`Boolean Value: ${elem}`);
  }
});
