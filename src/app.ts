interface Product {
  name: string;
  price?: number;
  hasFeature?(Feature): boolean;
}

enum Feature {
  WaterProof,
  Insulated,
}

let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = {
  name: "Umbrella",
  price: 30,
  hasFeature: (feature: number) => feature === Feature.WaterProof,
};

let products: Product[] = [hat, gloves, umbrella];

products.forEach((prod) =>
  // hasFeature?. = checks if hasFeature is available and invokes it if true.
  console.log(`${prod.name}: ${prod.price}
  
  Waterproof: ${prod.hasFeature?.(Feature.WaterProof)})
`)
);
