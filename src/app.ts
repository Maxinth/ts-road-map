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

function getMixedValue(): 1 | "Hello" | true | City.London {
  switch (getRandomVal()) {
    case 1:
      return 1;
    case 2:
      return "Hello";
    case 3:
      return true;
    case 4:
      return City.London;
  }
}

console.log(`Value: ${getMixedValue()}`);
