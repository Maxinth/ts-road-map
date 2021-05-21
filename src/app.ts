// essential ts
enum Feature {
  Waterproof,
  Insulated,
}
interface Items {
  name: string;
  price?: number;
  hasFeature?(feature): boolean;
}

let hat = { name: "Hat", price: 100 };

let gloves = { name: "Gloves", price: 75 };

let umbrella = {
  name: "Umbrella",
  price: 30,
  hasFeature: (feature) => feature === Feature.Waterproof,
};
let products: Items[] = [hat, gloves, umbrella];

products.forEach((item) =>
  console.log(
    `${item.name}: ${item.price} WaterProof: ${item.hasFeature(
      Feature.Waterproof
    )}`
  )
);
