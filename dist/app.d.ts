/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */
interface IPrint {
    print(): void;
}
declare function printClass(a: IPrint): void;
declare class ClassA implements IPrint {
    print(): void;
}
declare class ClassB implements IPrint {
    print(): void;
}
declare let instanceOfClassA: ClassA;
declare let instanceOfClassB: ClassB;
