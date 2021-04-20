// Full stack react+Ts+Node
// ts - checking for structure and not name.
class Person {
  name: string;
}

const jill: { name: string } = {
  name: "tuned",
};

const person: Person = jill;
console.log(person);
