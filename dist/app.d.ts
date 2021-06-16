/**
 * Mastering typeScript
 */
interface Obj {
    nestedProperty: {
        name: string;
    };
}
declare var objectA: {
    nestedProperty: {
        name: string;
    };
};
declare function printNestedObject(obj: Obj): void;
