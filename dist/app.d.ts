/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */
interface IBaseStringOrNumber {
    id: string | number;
}
interface IDerivedFromBaseNumber extends IBaseStringOrNumber {
    id: number;
}
