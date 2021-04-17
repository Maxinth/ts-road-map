// working with tuples

function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`price for ${product} : $${price.toFixed(2)}`);
}

// using enum and number values

enum OtherEnum {
  First = 10,
  Two = 20,
}

enum Product {
  Hat = OtherEnum.First + 1,
  Gloves = 20,
  Umbrella = Hat + Gloves,
}

let productValue: Product = 0;
let productName: string = Product[productValue];
console.log(`Value : ${productValue}, Name: ${productName}`);

enum City {
  London = "London",
  Paris = "Paris",
  NY = "New York",
}
console.log(`City = ${City.London}`);
console.log(`Third city = ${City.NY}`);
