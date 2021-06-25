/**
 *
 * Mastering typeScript
 * GENERICS
 */
declare class Concatenator<T extends Array<string> | Array<number>> {
    concatenateArray(items: T): string;
}
