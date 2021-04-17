function calculatePrice(quantity: 1 | 2, price: number): number {
  return quantity * price;
}

let total = calculatePrice(2, 19.98);
console.log(`Price : ${total}`);
