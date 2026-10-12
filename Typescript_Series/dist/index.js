"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Premitive Data types
let name = "Arun ";
let lastname = "Ghorse";
let age = 20;
let isAdmine = false;
console.log(name, age, isAdmine);
// Array in Typescript
const fruits = ["apple", "banana", "mango"];
const empId = [101, 102, 103];
empId.push(104);
// empId.push("104") // error
// tupple in Typescript
// order matters
const emp = [123, "Arun", true];
console.log(emp);
// any, unkown, void, null, undefined
let someVal = 1000; // any accept any type of data | any ignored compilation process 
let val = "arun101";
// cheack type before applying properties on unknown  
if (typeof val === "string") {
    val.charAt(1);
}
if (typeof val === "number") {
    val.toFixed(3);
}
// void - used genrally in case of fun 
function greet() {
    console.log("Namaste Typescript");
}
// null - explicitly give value as null
let salary = null;
let sal1; // undefined by default. eq to let sal1:undefined;
// enums
var UserType;
(function (UserType) {
    UserType[UserType["admin"] = 0] = "admin";
    UserType[UserType["normal"] = 1] = "normal";
    UserType[UserType["guest"] = 2] = "guest"; //2
})(UserType || (UserType = {}));
const user = UserType.guest;
console.log(user); // 2
// functions
function AddNumber(num1, num2) {
    return num1 + num2;
}
AddNumber(1, 2);
// Arrow Function
const multiplyNum = (num1, num2) => {
    return num1 * num2;
};
multiplyNum(2, 3);
function greeting(name) {
    return `Hi my name is ${name}`;
}
console.log(greeting("Arun"));
//class with Student interface
const student = {
    name: "Arun",
    age: 20,
    isAdmin: true,
};
console.log(student);
// intersection using interface syntax
// interface Emp1 extends Student{
//     id:number | string;
// }
const emp1 = {
    name: "Arun",
    age: 20,
    isAdmin: true,
    empId: 123
};
// Generics
function IdentityString(name) {
    return name;
}
function IdentityNumber(num) {
    return num;
}
function Identity(atri) {
    return atri;
}
Identity("Arun");
Identity(100);
function generic(atri1, atri2) {
    return { atri1, atri2 };
}
generic("Arun", 101);
// classes and objects
class User {
    name = "";
    id = 100;
    empID = 1;
    constructor(name, id, empID) {
        this.name = name;
        this.id = id;
        this.empID = empID;
    }
    getDetails() {
        return `${this.id}-${this.name}-${this.empID}`;
    }
}
const user1 = new User("Arun", "1001", 123);
console.log(user1.getDetails());
//# sourceMappingURL=index.js.map