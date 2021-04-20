// Full stack react+Ts+Node
// ts - using the any type.
let val = [22];
val = "string value";
function getVal() {
    console.log(`value here is = ${val}`);
}
getVal();
val = [];
getVal();
val.push(33);
val.push(77);
getVal();
