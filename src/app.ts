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
  if (obj?.nestedProperty?.name) {
    console.log("name = " + obj.nestedProperty.name);
  } else {
    console.log("name was not found or undefined");
  }
}

printNestedObject(undefined);
printNestedObject({
  aProperty: "another property",
});
printNestedObject({
  nestedProperty: {
    name: null,
  },
});
printNestedObject(objectA);
