// union type for common types between Person and Product
// type UnionType = {
//   id: number | string;
//   name: string;
// };
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "smith", name: "Bob", city: "London" };
let dataItems = [hat, gloves, umbrella, bob];
// dataItems.forEach((item) => {
//   if ("city" in item) {
//     console.log(`Person : ${item.name}: ${item.city}`);
//   } else {
//     console.log(`Product : ${item.name}: ${item.price}`);
//   }
// });
dataItems.forEach((item) => {
    if ("price" in item) {
        // console.log(`Person : ${item.name}: ${item.city}`);
        console.log(`Product : ${item.name}: ${item.price}`);
    }
    else {
        // console.log(`Product : ${item.name}: ${item.price}`);
        console.log(`Person : ${item.name}: ${item.city}`);
    }
});
