// using interfaces
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function savePerson(person: Person): void {
  console.log("Saving ", person);
}

const p = {
  firstName: "John",
  lastName: "Smith",
  age: 35,
};

savePerson(p);
