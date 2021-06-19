/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */

/*

git add . && git commit -m " " && clear


git add . && git commit -m " " && clear
git add . && git commit -m " " && clear




*/

interface IOptional {
  id: number;
  name?: string;
}

let idObject: IOptional = {
  id: 2,
};

let optionalIdName: IOptional = {
  id: 2,
  name: "opitonal name",
};
