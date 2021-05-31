class Employee {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.#dept = dept;
        this.city = city;
    }
    #dept; // private field syntax for js
    writeDept() {
        console.log(`${this.name} works in ${this.#dept} department`);
    }
}
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
salesEmployee.id = "Auto";
console.log(salesEmployee);
