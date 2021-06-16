"use strict";
/**
 * Mastering typeScript
 */
var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
};
function printNestedObject(obj) {
    console.log("object.nestedProperty.name = " + obj.nestedProperty.name);
}
printNestedObject(objectA);
