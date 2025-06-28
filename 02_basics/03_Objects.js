//* Objects
//? node "02_basics/03_Objects.js"

//! Object Literals
const Sym = Symbol("Note1")

const JsUser = {
    name: "Bhagat",
    [Sym]: "Note2",
    "Full name": "Bhagatvir Singh", 
    age: 20,
    Location: "India",
    Email: "Bhagat@gmail.com",
    isLoggedIn: false,
    lastActivity: "Monday, Thursday"
}
console.log("User Activity: ", JsUser.lastActivity);
console.log("User Location: ", JsUser["Location"]); // Another way to access the properties of an object
/*
console.log(JsUser.Full name); 
console.log(JsUser."Full name");
~ The above two lines will give an error because the property name has a space in it.
*/
console.log("Name of the user: ", JsUser["Full name"]);

/*
console.log(JsUser.sym);
console.log(JsUser["Sym"]);

~ The above two lines will show undefined because the property name is a symbol and not a string.
& To access the symbol property, we'll to use the symbol variable.

*/
console.log("Symbol: ", JsUser[Sym]);
console.log();

JsUser.age = 18; // This will update the age property of the object
// Object.freeze(JsUser); // Because the object is frozen, we can't change the properties of the object, and so a function won't be declared, which I have to afterwards
//? This will make the object immutable, i.e. we can't change the properties of the object

JsUser.age = 13 // No changes made, print it

console.log(JsUser); // Printing the whole object
console.log();

//? Adding a function

JsUser.greeting = function(){
return "Hello! Js user"; // console.log("Hello! Js user");
//^ By using console.log, it'll print undefined also, which I don't want
}

console.log(JsUser.greeting());
console.log();

JsUser.warnings = function(){
return `Hello! JS User, ${this.name}. I know you live in ${this.Location}. I know your age is ${this.age}. I will find you!`;
}

console.log(JsUser.warnings());