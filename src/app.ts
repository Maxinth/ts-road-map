/**
 * Mastering typeScript
 */
enum DoorState {
  OPEN = "Open",
  CLOSED = "Closed",
}

function checkDoorState(state: DoorState): void {
  console.log(`enum value is : ${state}`);
  switch (state) {
    case DoorState.OPEN:
      console.log(`door is open`);
      break;
    case DoorState.CLOSED:
      console.log(`door is closed`);
      break;
  }
}

checkDoorState(DoorState.CLOSED);
checkDoorState(DoorState.OPEN);
