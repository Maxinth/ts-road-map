"use strict";
/**
 * Mastering typeScript
 */
var DoorState;
(function (DoorState) {
    DoorState["OPEN"] = "Open";
    DoorState["CLOSED"] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    console.log("enum value is : " + state);
    switch (state) {
        case DoorState.OPEN:
            console.log("door is open");
            break;
        case DoorState.CLOSED:
            console.log("door is closed");
            break;
    }
}
checkDoorState(DoorState.CLOSED);
checkDoorState(DoorState.OPEN);
