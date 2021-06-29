/**
 *
 * Mastering typeScript
 * GENERICS
 */

/*

git add . && git commit -m " " && clear













*/
// class Concatenator<T extends Array<string> | Array<number>> {
//   public concatenateArray(items: T): string {
//     let returnString = "";
//     for (let i = 0; i < items.length; i++) {
//       returnString += i > 0 ? "," : "";
//       returnString += items[i].toString();
//     }
//     return returnString;
//   }
// }

// let concator = new Concatenator();

// let concatResult = concator.concatenateArray(["first", "second", "third"]);
// console.log(`concatResult = ${concatResult}`);

// concatResult = concator.concatenateArray([1000, 200, 3000]);
// console.log(`concatResult = ${concatResult}`);

// console.log("new ");
