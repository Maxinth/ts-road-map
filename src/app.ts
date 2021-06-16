/**
 * Mastering typeScript
 */

interface Obj {
  nestedProperty: {
    name: string;
  };
}
var objectA = {
  nestedProperty: {
    name: "nestedPropertyName",
  },
};

function printNestedObject(obj: Obj) {
  console.log("object.nestedProperty.name = " + obj.nestedProperty.name);
}

printNestedObject(objectA);
