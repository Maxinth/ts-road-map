/**
 * Mastering typeScript
 */

let objArray1 = [
  {
    id: 1,
    name: "first element",
  },
];

let objArray2 = [
  {
    id: 2,
    name: "second element",
  },
];

let objArray3 = [...objArray1, { id: 3, name: "third element" }, ...objArray2];

console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);
