type Lit = 1 | 2 | 3 | 4;

function calculatePrice(quantity: 1 | 2, price: number): number {
  return quantity * price;
}

let total = calculatePrice(2, 19.99);

console.log(`Price: ${total}`);

function getRandomVal(): Lit {
  return (Math.floor(Math.random() * 4) + 1) as Lit;
}

enum City {
  London = "LON",
  Paris = " PAR",
  Chicago = "CHI",
}

type comboType = [string, number | true, 1 | 2 | 3 | City.London][];

function getValue(input: comboType): comboType {
  return [
    ["Apple", 100, 2],
    ["oranges", true, 3],
  ];
}

let result: comboType = getValue([["Bananas", true, 1]]);
console.log(`Result: ${result}`);
