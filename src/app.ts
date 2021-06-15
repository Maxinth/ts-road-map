/**
 * Mastering typeScript
 */
enum DoorState {
  Open,
  Closed,
}

function checkDoorState(state: DoorState): void {
  console.log(`enum value is : ${state}`);
  switch (state) {
    case DoorState.Open:
      console.log(`door is open`);
      break;
    case DoorState.Closed:
      console.log(`door is closed`);
      break;
  }
}

checkDoorState(DoorState.Closed);
checkDoorState(DoorState.Open);
