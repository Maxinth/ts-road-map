interface Person {
  name: string;
  getDetails(): string;
}
interface Product {
  name: string;
  price: number;
}
class Employee implements Person {
  constructor(public name: string, public company: string) {
    // no statements required
  }
  getDetails() {
    return `${this.name} works for ${this.company}`;
  }
}
class SportsProduct implements Product {
  constructor(
    public name: string,
    public category: string,
    public price: number
  ) {
    // no statements required
  }
}

class ProductGroup {
  constructor(...initialProducts: [string, Product][]) {
    initialProducts.forEach((p) => (this[p[0]] = p[1]));
  }
  [propertyName: string]: Product;
}
let group = new ProductGroup([
  "shoes",
  new SportsProduct("Shoes", "Running", 90.5),
]);
group.hat = new SportsProduct("Hat", "Skiing", 20);
let total = group.hat.price + group.boots.price;
console.log(`Total: ${total}`);
