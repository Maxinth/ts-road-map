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
declare class IdNameClass implements IDerivedFromBase {
    name: string;
    id: number;
}
