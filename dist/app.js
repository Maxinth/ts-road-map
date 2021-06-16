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
    var _a;
    if ((_a = obj === null || obj === void 0 ? void 0 : obj.nestedProperty) === null || _a === void 0 ? void 0 : _a.name) {
        console.log("name = " + obj.nestedProperty.name);
    }
    else {
        console.log("name was not found or undefined");
    }
}
printNestedObject(undefined);
printNestedObject({
    aProperty: "another property"
});
printNestedObject({
    nestedProperty: {
        name: null
    }
});
printNestedObject(objectA);
