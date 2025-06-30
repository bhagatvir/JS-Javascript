//* Scopes
//? node "03_basics/02_Scopes.js"

const a = 100
let b = 200
var c = 300 // Functions scoped, just don't use
console.log("BEFORE c: ", c);
console.log();

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
console.log();

function one(){
    const username = "Bhagatvir Singh"
    console.log(username);

    function two(){
    const website = "https://www.example.com?name=Bhagatvir&age=20"
    console.log(website);
    console.log();
    
    }

two()
}

one() //* First one is executed, then two is executed

if (true){
    const name = "Example site: "
    if(name === "Example site: "){
        const website = "https://www.example.com?name=Bhagatvir&age=20"
        console.log(name + website);
    }
    
    console.log();
}

function addone(num){
    return num + 1;
}
console.log(addone(5))

//^ It is a hoisted function, meaning it can be called before its declaration

const addTwo = function(num){ // Another way of making functions
    return num + 2;
}
console.log(addTwo(5))
//^ It is not a hoisted function, meaning it cannot be called before its declaration

