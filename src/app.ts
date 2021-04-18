// function calculatePrice(quantity: 1 | 2, price: number): number {
//   return quantity * price;
// }

// let total = calculatePrice(2, 19.98);
// console.log(`Price : ${total}`);

// using the type keyword

type Foot = number;
type Pound = number;

// declaring a new type that uses aliases (with optional properties)
type Patient = {
  name: string;
  height: Foot;
  weight?: Pound;
};

let patient: Patient = {
  name: "Joe smith",
  height: 0,
  // weight: 100,
};

console.log("patient = ", patient);
