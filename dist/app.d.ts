/**
 *
 * Mastering typeScript
 * INTERFACES , CLASSES, INHERITANCE AND MODULES
 */
interface IPerson {
    id: number;
    name: string;
}
declare type PersonPropertyName = keyof IPerson;
declare function getProperty(key: PersonPropertyName, value: IPerson): void;
