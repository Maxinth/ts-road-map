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
products.forEach((prod) => {
    var _a;
    // hasFeature?. = checks if hasFeature is available and invokes it if true.
    return console.log(`${prod.name}: ${prod.price}
  
  Waterproof: ${(_a = prod.hasFeature) === null || _a === void 0 ? void 0 : _a.call(prod, Feature.WaterProof)})
`);
});
