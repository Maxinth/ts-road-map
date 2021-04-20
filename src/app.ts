// Full stack react+Ts+Node
// ts - using intersection types

let obj: { name: string } & { age: number } = {
  name: "tom",
  age: 34,
};

console.log("obj = ", obj);
