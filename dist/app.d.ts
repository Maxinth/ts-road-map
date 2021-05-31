declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare class Employee {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    /**
     * the access control keywords makes the initialization work in
     this short and improved Class definition using ts.
  
     */
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let salesEmployee: Employee;
