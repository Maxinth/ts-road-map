interface User {
  name: string;
  age: number;
}

function canDrive(user: User) {
  console.log("user is ", user.name);

  if (user.age >= 16) {
    console.log("allowed to drive");
  } else {
    console.log("do not allow to drive");
  }
}

const tom = {
  name: "tom",
  age: 55,
};

canDrive(tom);
