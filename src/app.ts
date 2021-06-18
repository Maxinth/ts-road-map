/**
 * Mastering typeScript
 *
 */

/*

git add . && git commit -m " " && clear

git add . && git commit -m " " && clear


*/

type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericValues = 1 | 20 | 65535;

function withLiteral(input: AllowedStringValues | AllowedNumericValues): void {
  console.log(`called with: ${input}`);
}

withLiteral("one");
withLiteral("two");
withLiteral("three");
withLiteral("four"); // not allowed
withLiteral(1);
withLiteral(20);
withLiteral(2); // also not allowed
withLiteral(65535);
