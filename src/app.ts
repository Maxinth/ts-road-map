type Person = {
  id: string;
  name: string;
  city: string;
};

class Employee {
  public readonly id: string;
  public name: string;
  #dept: string; // private field syntax for js
  public city: string;

  constructor(id: string, name: string, dept: string, city: string) {
    this.id = id;
    this.name = name;
    this.#dept = dept;
    this.city = city;
  }

  writeDept() {
    console.log(`${this.name} works in ${this.#dept} department`);
  }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");

salesEmployee.writeDept();
salesEmployee.id = "Auto"; // property is readonly and so, it can't be changed.
console.log(salesEmployee);
