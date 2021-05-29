declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare type Employee = {
    company: string;
    dept: string;
};
declare let bob: Person & Employee;
declare let dataItems: (Person & Employee)[];
