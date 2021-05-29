type Person = {
  id: string;
  name: string;
  city: string;
};

type Employee = {
  id: string;
  company: string;
  dept: string;
};
let bob = {
  id: "smith",
  name: "Bob",
  city: "London",
  company: "Acme Co",
  dept: "Sales",
};

let dataItems: (Person & Employee)[] = [bob];

dataItems.forEach((item) => {
  console.log(`Person: ${item.id}, ${item.name}`);
  console.log(`Employees: ${item.id}, ${item.company}`);
});
