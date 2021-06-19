/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */

/*

git add . && git commit -m " " && clear
git add . && git commit -m " " && clear
git add . && git commit -m " " && clear
git add . && git commit -m " " && clear
git add . && git commit -m " " && clear


*/

interface IPerson {
  id: number;
  name: string;
}

type PersonPropertyName = keyof IPerson;

function getProperty(key: PersonPropertyName, value: IPerson): void {
  console.log(`${key} = ${value[key]}`);
}

getProperty("id", {
  id: 1,
  name: "firstName",
});
getProperty("name", {
  id: 2,
  name: "SecondName",
});
getProperty("id", {
  id: 3,
  name: "thirdName",
});
