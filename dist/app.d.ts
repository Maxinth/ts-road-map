declare type Lit = 1 | 2 | 3 | 4;
declare function calculatePrice(quantity: 1 | 2, price: number): number;
declare let total: number;
declare function getRandomVal(): Lit;
declare enum City {
    London = "LON",
    Paris = " PAR",
    Chicago = "CHI"
}
declare function getMixedValue(): 1 | "Hello" | true | City.London;
