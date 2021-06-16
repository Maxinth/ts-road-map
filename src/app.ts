/**
 * Mastering typeScript
 */

interface Obj {
  nestedProperty: {
    name: string;
  };
}

let objectA: Obj = {
  nestedProperty: {
    name: "nestedPropertyName",
  },
};

function printNestedObject(obj: Obj) {
  console.log("object.nestedProperty.name = " + obj.nestedProperty.name);
}

printNestedObject(objectA);
printNestedObject({});
