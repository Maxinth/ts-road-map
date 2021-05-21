declare enum Feature {
    Waterproof = 0,
    Insulated = 1
}
interface Items {
    name: string;
    price?: number;
    hasFeature?(feature: any): boolean;
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
    hasFeature: (feature: any) => boolean;
};
declare let mirrorShades: {
    name: string;
    price: number;
    finish: string;
};
declare let darkShades: Items;
declare let products: Items[];
