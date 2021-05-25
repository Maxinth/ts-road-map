enum Feature {
  WaterProof,
  Insulated,
}

interface Product {
  name: string;
  price?: number;
  hasFeature?(Feature: Feature): boolean;
}

let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = {
  name: "Umbrella",
  price: 30,
  hasFeature: (feature: Feature) => feature === Feature.WaterProof,
};

let products: Product[] = [hat, gloves, umbrella];

products.forEach((prod) =>
  // hasFeature?. = checks if hasFeature is available and invokes it if true.
  console.log(`${prod.name}: ${prod.price}
  ${prod.hasFeature ? prod.hasFeature(Feature.WaterProof) : "false"}
 
`)
);

//  Waterproof: ${prod.hasFeature?.(Feature.WaterProof)})
