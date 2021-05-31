class Person {
  constructor(public id: string, public name: string, public city: string) {}
}
class Employee extends Person {
  constructor(
    public readonly id: string,
    public name: string,
    private dept: string,
    public city: string
  ) {
    super(id, name, city);
  }

  writeDept() {
    console.log(`${this.name} works in ${this.dept} department`);
  }
}

let data = [
  new Person("smith", "Bob Smith", "London"),
  new Employee("auto", "Smart Autos", "sales", "paris"),
];

data.forEach(item => {
  console.log(`Person: ${item.name}, ${item.city}`)
  if(item instanceof Employee){
    item.writeDept()
  }
})