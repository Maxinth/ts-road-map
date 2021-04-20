// Full stack react+Ts+Node
// functions with no return value
function eat(calories) {
    console.log(`I ate ${calories} eggs`);
}
// even with the return before the log = function still return void(no value)
function eatMore(calories) {
    return console.log(`Later, I ate ${calories} more eggs`);
}
// function returns a value - a number
function drink(cup) {
    return cup;
}
eat(4);
eatMore(5);
console.log(`I drank ${drink(3)} cups of water`);
