"use strict";
/**
 * Mastering typeScript
 */
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 7] = "Open";
    DoorState[DoorState["Closed"] = 5] = "Closed";
    DoorState[DoorState["Unspecified"] = 6] = "Unspecified";
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
