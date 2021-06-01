interface Person {
    name: string;
    getDetails(): string;
}
interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}
declare class Employee implements Person {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    getDetails(): string;
}
declare class Customer implements Person, DogOwner {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    dogName: string;
    constructor(id: string, name: string, city: string, creditLimit: number, dogName: string);
    getDetails(): string;
}
declare let data: Person[];
