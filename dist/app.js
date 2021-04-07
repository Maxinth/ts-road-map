var printMessage = function (msg) { return console.log("Message: " + msg); };
var message = "Hello, TypeScript";
printMessage(message);
/* 🔥 - checking if a new feature gets transpiled down into older js code */
var data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach(function (val, key) { return console.log(key + " lives in " + val); });
