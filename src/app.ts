/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */

/*

git add . && git commit -m " " && clear

r




*/

interface IBase {
  id: number;
}

interface IDerivedFromBase extends IBase {
  name: string;
}
interface IBaseStringOrNumber {
  id: string | number;
}

interface IDerivedFromBaseNumber extends IBaseStringOrNumber {
  id: number;
}

interface IMultiple extends IDerivedFromBaseNumber, IDerivedFromBase {
  description: string;
}

let multipleObject: IMultiple = {
  id: 1,
  name: "myName",
  description: "myDescription",
};
