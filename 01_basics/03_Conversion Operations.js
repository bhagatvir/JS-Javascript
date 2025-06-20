//* Conversion Operations
//~ String to Number Conversion

// node "01_basics/03_Conversion Operations.js"

let score = "Bhagatvir"
console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
 "88" => 88
 "88abc" => NaN
 true => 1; false => 0
*/

//~ Number to String Conversion
let isLoggedIn = "88bc"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false
"" => false
"Bhagatvir" => true
*/

//~ Number to String Conversion
let someNumber = 88

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);