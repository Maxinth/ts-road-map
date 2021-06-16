/**
 * Mastering typeScript
 */

let list = ["123", "456", "789"];

delete list[0];

for (let i = 0; i < list.length; i++) {
  console.log(`list[${i}]  = ${list[i]}`);
}
