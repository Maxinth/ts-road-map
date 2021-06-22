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

interface IBase {
  id: number;
}

/*
 IDerivedfromBase extending Ibase means 
 it inherits the properties of Ibase - making 
 IDerivedFrom base to have to fields , the name and id fields

 */

interface IDerivedFromBase extends IBase {
  name: string;
}

/* 
for IdNameClass to implement IDerivedFromBase it MUST HAVE THE 2 FIELDS IDerived
from base has
*/
class IdNameClass implements IDerivedFromBase {
  name: string = "nameString";
}
