function getFinalPrice(price, discount: number) {
  return price - price / discount;
}

console.log(getFinalPrice(100, 30));
