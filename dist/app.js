function correlateData(peopleData, staff) {
    const defaults = { company: "None", dept: "None" };
    return peopleData.map((p) => ({
        ...p,
        ...(staff.find((e) => e.id === p.id) || { ...defaults, id: p.id }),
    }));
}
let people = [
    { id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
];
let employees = [
    { id: "bsmith", company: "Acme Co", dept: "Sales" },
    { id: "dpeters", company: "Acme Co", dept: "Development" },
];
let dataItems = correlateData(people, employees);
function writePerson(per) {
    console.log(`Person: ${per.id}, ${per.name} ${per.city}`);
}
function writeEmployees(emp) {
    console.log(`Employees: ${emp.id} ${emp.company} ${emp.dept}`);
}
dataItems.forEach((item) => {
    writePerson(item);
    writeEmployees(item);
});
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
