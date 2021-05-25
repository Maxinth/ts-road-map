interface Product {
    name: string;
    price?: number;
    hasFeature?(Feature: any): boolean;
}
declare enum Feature {
    WaterProof = 0,
    Insulated = 1
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
    hasFeature: (feature: number) => boolean;
};
declare let products: Product[];
