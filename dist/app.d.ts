declare type Lit = 1 | 2 | 3 | 4;
declare function calculatePrice(quantity: 1 | 2, price: number): number;
declare let total: number;
declare function getRandomVal(): Lit;
declare enum City {
    London = "LON",
    Paris = " PAR",
    Chicago = "CHI"
}
declare function getMixedValue(input: 1): 1;
declare function getMixedValue(input: 2 | 3): "Hello | true";
declare function getMixedValue(input: 4): City.London;
declare let first: 1;
declare let second: "Hello | true";
declare let third: City.London;
