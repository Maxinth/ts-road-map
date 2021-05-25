var Feature;
(function (Feature) {
    Feature[Feature["WaterProof"] = 0] = "WaterProof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
})(Feature || (Feature = {}));
let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = {
    name: "Umbrella",
    price: 30,
    hasFeature: (feature) => feature === Feature.WaterProof,
};
let products = [hat, gloves, umbrella];
products.forEach((prod) => 
// hasFeature?. = checks if hasFeature is available and invokes it if true.
console.log(`${prod.name}: ${prod.price}
  ${prod.hasFeature ? prod.hasFeature(Feature.WaterProof) : "false"}
 
`));
//  Waterproof: ${prod.hasFeature?.(Feature.WaterProof)})
