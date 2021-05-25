declare enum Feature {
    WaterProof = 0,
    Insulated = 1
}
interface Product {
    name: string;
    price?: number;
    hasFeature?(Feature: Feature): boolean;
}
declare let hat: {
    name: string;
    price: number;
};
declare let gloves: {
    name: string;
    price: number;
};
declare let umbrella: {
    name: string;
    price: number;
    hasFeature: (feature: Feature) => boolean;
};
declare let products: Product[];
