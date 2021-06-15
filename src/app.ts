/**
 * Mastering typeScript
 */

type SorN = string | number;

function addWithTypeGuard(arg1: SorN, arg2: SorN) {
  if (typeof arg1 === "string") {
    console.log("arg1 is of type string");
    return arg1 + arg2;
  }

  if (typeof arg1 === "number" && typeof arg2 === "number") {
    console.log(`arg1 and arg2 are both numbers`);
    return arg1 + arg2;
  }

  console.log(`default case: treat both as strings`);
  return arg1.toString() + arg2.toString();
}

console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(` 1, 2 = ${addWithTypeGuard(1, 2)}`);
console.log(` 1, "2" = ${addWithTypeGuard(1, "2")}`);
