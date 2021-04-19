//structural types

class Person {
  name: string;
  age: number;
}

interface Customer {
  name: string;
}
class Customer {
  name: string;
}

const customer: Customer = new Person();
