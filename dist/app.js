let bob = {
    id: "smith",
    name: "Bob",
    city: "London",
    company: "Acme Co",
    dept: "🔥",
};
let dataItems = [bob];
dataItems.forEach((item) => {
    console.log(`Person: ${item.id}, ${item.name}`);
    console.log(`Employees: ${item.id}, ${item.dept}`);
});
