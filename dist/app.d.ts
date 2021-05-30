declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
};
declare type EmployedPerson = Person & Employee;
declare function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[];
declare let people: Person[];
declare let employees: Employee[];
declare let dataItems: EmployedPerson[];
declare function writePerson(per: Person): void;
declare function writeEmployees(emp: Employee): void;
/**
 * writePerson expects an argument whose type is Person
 * writeEmployees also expects an argument whose type is Employee
 *
 * In the forEach callback, item whose type is EmployedPerson is passed in to both
 * functions
 *

Because an intersection combines features from multiple types, an object that conforms to the intersection
shape also conforms to each of the types in the intersection.
 */
