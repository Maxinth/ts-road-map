/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */
declare class ClassWithPrivateProperty {
    #private;
    constructor(id: number);
    printId(): void;
}
declare let es6PrivateClass: ClassWithPrivateProperty;
