"use strict";
/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */
function printNameOrValue(obj) {
    if ("id" in obj) {
        console.log("obj.name = " + obj.name);
    }
    if ("description" in obj) {
        console.log("obj.value = " + obj.value);
    }
}
printNameOrValue({
    id: 1,
    name: "nameValue"
});
printNameOrValue({
    description: "object description",
    value: 2
});
