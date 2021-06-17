"use strict";
/**
 * Mastering typeScript
 */
var structuredObject = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject"
    }
};
function printObjectType(a) {
    console.log("a: " + JSON.stringify(a));
}
printObjectType(structuredObject);
printObjectType({});
printObjectType("");
