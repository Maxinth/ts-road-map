let restrictedValue: 1 | 2 | 3 = 2;

let secondVal: 1 | 100 | 10 = 1;

restrictedValue = secondVal;
secondVal = 100;
restrictedValue = secondVal;
