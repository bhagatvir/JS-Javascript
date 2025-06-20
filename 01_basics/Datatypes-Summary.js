//* Datatypes 

//? node "01_basics/Datatypes-Summary.js"

//~ There are two types of data in JavaScript:

//! (1) Primitive Data Types
//^ Of which there are 7 types: String, Number, Boolean, BIgint, Null, Symbol, Undefined

const score = 100;
const scorevalue = 100.5;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

console.log(score);
console.log(scorevalue);
console.log(score === scorevalue);
console.log();

console.log(isLoggedIn);
console.log(outsideTemp);
console.log(userEmail); 
console.log();


console.log("Primitive Data Types:");
console.log();

console.log("Hello world: ", typeof "Hello World"); // String
console.log("42: ", typeof 42); // Number
console.log("True: ", typeof true); console.log("False: ", typeof false); // Boolean
console.log("12345678901434n: ", typeof BigInt(12345678901434n)); // BigInt
console.log("Null: ", typeof null); // Null 
console.log();


const Id = Symbol('123')
const anotherId = Symbol('123');
console.log(Id === anotherId); // false, because symbols are unique
console.log();


console.log("Symbol('id'): ", typeof Symbol('id')); // Symbol   
console.log("Undefined: ", typeof undefined); // Undefined
console.log(); 


//! (2) Non-Primitive/Reference Data Types
//^ Of which there are 3 types: Object, Function, Array 

console.log("Non-Primitive Data Types:");
console.log();

const heros = ["Superman", "Batman", "Spiderman"];
 let myobj ={
    name: "Bhagatvir",
    age: 13
}

console.log(heros); 
 
const myFunction = function() {
    console.log("Hello World");
}
console.log();

console.log(typeof heros)
console.log(typeof myobj)
console.log(typeof myFunction)