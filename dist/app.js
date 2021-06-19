"use strict";
/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */
function getProperty(key, value) {
    console.log(key + " = " + value[key]);
}
getProperty("id", {
    id: 1,
    name: "firstName"
});
getProperty("name", {
    id: 2,
    name: "SecondName"
});
getProperty("id", {
    id: 3,
    name: "thirdName"
});
