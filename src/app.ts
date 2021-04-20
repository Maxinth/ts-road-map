// Full stack react+Ts+Node

// ts - literal types

let literal: "tom" | "linda" | "jeff" | "sue" = "sue";
literal = "linda";

// literal can only be assigned ONLY any one of the four pre-defined values

// literal = 'new'
console.log(literal);

// numeric literal

function getNameByCount(num: 1 | 2 | 3 = 1): void {
  if (num === 1) {
    console.log("you are number one by default");
  }
  if (num === 2) {
    console.log("you are number two");
  }
  if (num === 3) {
    console.log("you are number three");
  }
}

getNameByCount(2);
getNameByCount(3);
getNameByCount(); // default is 1

// passing any other number apart from the literal defined in the function
// signature results in an error
