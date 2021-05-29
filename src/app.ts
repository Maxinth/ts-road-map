type Product = {
  id: number; // id is number
  name: string;
  price?: number;
};

type Person = {
  id: string; // id is string
  name: string;
  city: string;
};

// union type for common types between Person and Product
// type UnionType = {
//   id: number | string;
//   name: string;
// };
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "smith", name: "Bob", city: "London" };

let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];

// predicate function
function isPerson(testObj: any): testObj is Person {
  return testObj.city !== undefined;
}
dataItems.forEach((item) => {
  if (isPerson(item)) {
    console.log(`Person : ${item.name}: ${item.city}`);
  } else {
    console.log(`Product : ${item.name}: ${item.price}`);
  }
});
