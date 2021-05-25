// interface Product {
//   name: string;
//   price?: number;
// }
// let hat: Product = { name: "Hat", price: 100 };
// let gloves: Product = { name: "Gloves", price: 75 };
// let umbrella = { name: "Umbrella" };
// let products: Product[] = [hat, gloves, umbrella];
// products.forEach((product: Product) => {
//   console.log(`${product.name} : ${product.price}`);
// });
let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30, waterproof: true };
let products = [hat, gloves, umbrella];
products.forEach((prod) => console.log(`${prod.name}: ${prod.price}`));
