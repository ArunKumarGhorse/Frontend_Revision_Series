// Premitive Data types
let name:string = "Arun "
let lastname = "Ghorse"
let age:number = 20
let isAdmine:boolean = false
console.log(name,age,isAdmine) 

// Array in Typescript
const fruits:string[]=["apple","banana","mango"];
const empId:number[] = [101,102,103]
empId.push(104);
// empId.push("104") // error

// tupple in Typescript
// order matters
const emp:[number,string,boolean] = [123,"Arun",true]
console.log(emp);

// any, unkown, void, null, undefined
let someVal:any = 1000; // any accept any type of data | any ignored compilation process 
let val: unknown = "arun101";
// cheack type before applying properties on unknown  
if(typeof val === "string"){
    val.charAt(1);
}
if(typeof val === "number"){
    val.toFixed(3);
}

// void - used genrally in case of fun 
function greet():void{
console.log("Namaste Typescript");
}

// null - explicitly give value as null
let salary : null = null;
let sal1; // undefined by default. eq to let sal1:undefined;

// enums

enum UserType{
    admin, // 0
    normal, //1
    guest //2
}
const user : UserType = UserType.guest;
console.log(user); // 2

// functions
function AddNumber(num1:number,num2:number):number{
    return num1+num2;
}

AddNumber(1,2);

// Arrow Function

const multiplyNum = (num1:number,num2:number):number=>{
    return num1*num2;
}
multiplyNum(2,3);

function greeting(name:string):string{
    return `Hi my name is ${name}`;
}
console.log(greeting("Arun"));

// Interfaces 
// interface Student{
//     name:string,
//     age:number,
//     isAdmin:boolean,
//     email?:string, // optional property
// }

// we can use type instead interface
type Student = {
    name:string,
    age:number,
    isAdmin:boolean | string ,  // UNION 
    email?:string, // optional property
}
//class with Student interface
const student:Student = {
    name:"Arun",
    age:20,
    isAdmin:true,
}
console.log(student);

type Emp = Student & { // intersection 
    empId:number
}
// intersection using interface syntax
// interface Emp1 extends Student{
//     id:number | string;
// }

const emp1:Emp = {
    name: "Arun",
    age: 20,
    isAdmin: true,
    empId: 123
}

// Generics
function IdentityString(name:string):string{
    return name;
}

function IdentityNumber(num:number):number{
    return num;
}

function Identity<T>(atri:T):T{
    return atri;
}

Identity<string>("Arun");
Identity<number>(100);

function generic<T,K>(atri1:T,atri2:K): {}{
    return {atri1,atri2};
}
generic<string,number>("Arun",101)

// classes and objects

class User{
    public name:string="";
    protected id : number | string = 100;
    private empID : number = 1;
    constructor(name:string,id:number | string, empID:number){
        this.name=name;
        this.id=id;
        this.empID=empID;
    }

    public getDetails():string{
     return `${this.id}-${this.name}-${this.empID}`;
    }
}
const user1 = new User("Arun","1001",123);
console.log(user1.getDetails());