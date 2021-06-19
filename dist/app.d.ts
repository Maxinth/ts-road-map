/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */
interface IIdName {
    id: number;
    name: string;
}
interface IDescrValue {
    description: string;
    value: number;
}
declare function printNameOrValue(obj: IIdName | IDescrValue): void;
