// Full stack react+Ts+Node
// ts - using intersection types
type objString = { name: string };

let unionObj: null | objString = null;
unionObj = { name: "jon" };
console.log(unionObj);
