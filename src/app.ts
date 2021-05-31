type Person = {
  id: string;
  name: string;
  city: string;
};

class Employee {
  /**
   * the access control keywords makes the initialization work in 
   this short and improved Class definition using ts.

   */
  constructor(
    public readonly id: string,
    public name: string,
    private dept: string,
    public city: string
  ) {}

  writeDept() {
    console.log(`${this.name} works in ${this.dept} department`);
  }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");

salesEmployee.writeDept();
