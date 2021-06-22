/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
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
declare let multipleObject: IMultiple;
