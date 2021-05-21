// essential ts

interface Items {
  name: string;
  price?: number;
  waterproof?: boolean;
}

let hat = { name: "Hat", price: 100 };

let gloves = { name: "Gloves", price: 75 };

let umbrella = { name: "Umbrella", price: 30, waterproof: true };
let products: Items[] = [hat, gloves, umbrella];

products.forEach((item) =>
  console.log(`${item.name}: ${item.price} WaterProof: ${item.waterproof}`)
);
