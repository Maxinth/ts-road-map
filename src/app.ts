interface Product {
  name: string;
  price: number;
}

let hat: Product = { name: "Hat", price: 100 };
let gloves: Product = { name: "Gloves", price: 75 };

let products: Product[] = [hat, gloves];

products.forEach((product: Product) => {
  console.log(`${product.name} : ${product.price}`);
});
