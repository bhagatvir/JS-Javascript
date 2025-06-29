//* Variables 
//? node "01_basics/01_variables.js"

console.log("Discussing Variables");

// const => permanent lock, cannot be changed
// let => can be changed accorsing to wish 
// var is similar to let but the only difference is var is function scoped, while let is block scoped

const accountId = 15729;
let accountEmail = "Justmail@email.com"
var accountPassword = "Accountking13"
accountCity = "Punjab"
let accountState; // Can be written if we don't know the current

/*
accountId = 24;  Not allowed as Id is constant


 accountEmail = "Hc@hc.emalil.com";  Allowed, these are temperary
 accountPassword = "Deathking";  Allowed, these are temperary
 accountCity = "Jaipur";  Allowed, these are temperary
*/
console.log();

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])