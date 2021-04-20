// Full stack react+Ts+Node
// functions with no return value - returns undefined
function eat(calories: number): void {
  console.log(`I ate ${calories} eggs`);
}

// even with the return before the log = function still return void(no value)
function eatMore(calories: number): void {
  return console.log(`Later, I ate ${calories} more eggs`);
}

// function returns a value - a number
function drink(cup: number): number {
  return cup;
}
eat(4);
eatMore(5);
console.log(`I drank ${drink(3)} cups of water`);

console.log(`typeof = eat function ${typeof eat(3)}`);
console.log(`typeof  eatMore with 5 as arg = ${typeof eatMore(5)} `);
console.log(`typeof drink fxn = ${typeof drink(3)} `);
