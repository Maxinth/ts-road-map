"use strict";
function checkDoorState(state) {
    console.log("enum value is : " + state);
    switch (state) {
        case 10 /* Open */:
            console.log("door is open");
            break;
        case 20 /* Closed */:
            console.log("door is closed");
            break;
    }
}
checkDoorState(20 /* Closed */);
checkDoorState(10 /* Open */);
