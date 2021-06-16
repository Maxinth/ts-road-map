/**
 * Mastering typeScript
 */
interface Obj {
    nestedProperty: {
        name: string;
    };
}
declare let objectA: Obj;
declare function printNestedObject(obj: Obj): void;
