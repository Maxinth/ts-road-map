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

let mirrorShades = {
  name: "Sunglasses",
  price: 54,
  finish: "mirrored",
};

let darkShades: Items = { name: "Sunglasses", price: 54, finish: "flat" };

let products: Items[] = [hat, gloves, umbrella];

products.forEach((prod) =>
  console.log(
    `${prod.name}: ${prod.price} ` +
      `${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`
  )
);
