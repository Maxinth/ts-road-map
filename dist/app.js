class Employee {
    constructor(name, company) {
        this.name = name;
        this.company = company;
        // no statements required
    }
    getDetails() {
        return `${this.name} works for ${this.company}`;
    }
}
class SportsProduct {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
        // no statements required
    }
}
class ProductGroup {
    constructor(...initialProducts) {
        initialProducts.forEach((p) => (this[p[0]] = p[1]));
    }
}
let group = new ProductGroup([
    "shoes",
    new SportsProduct("Shoes", "Running", 90.5),
]);
group.hat = new SportsProduct("Hat", "Skiing", 20);
let total = group.hat.price + group.boots.price;
console.log(`Total: ${total}`);
