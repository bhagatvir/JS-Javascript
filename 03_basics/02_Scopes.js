//* Scopes
//? node "03_basics/02_Scopes.js"

const a = 100
let b = 200
var c = 300 // Functions scoped, just don't use

if (true) {
    let a = 10
    const b = 20 
    var c = 13 // Functions scoped, just don't use
    console.log("INNER a: ", a);
    console.log("INNER b: ", b);
    console.log("INNER c: ", c);    
}

console.log();
console.log("OUTER a: ", a);
console.log("OUTER b: ", b);
console.log("OUTER c: ", c);
