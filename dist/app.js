"use strict";
/**
 * Mastering typeScript
 */
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    console.log("enum value is : " + state);
    switch (state) {
        case DoorState.Open:
            console.log("door is open");
            break;
        case DoorState.Closed:
            console.log("door is closed");
            break;
    }
}
checkDoorState(DoorState.Closed);
checkDoorState(DoorState.Open);
