"use strict";
/**
 * Mastering typeScript
 */
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
console.log("DoorState = " + JSON.stringify(DoorState));
