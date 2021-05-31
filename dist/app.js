var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _dept;
class Employee {
    constructor(id, name, dept, city) {
        _dept.set(this, void 0); // private field syntax for js
        this.id = id;
        this.name = name;
        __classPrivateFieldSet(this, _dept, dept);
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${__classPrivateFieldGet(this, _dept)} department`);
    }
}
_dept = new WeakMap();
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
