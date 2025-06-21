//* Strings in JavaScript 

//? node "01_basics/06_Strings.js"

const name = "Gojo Satoru";
const rivalCount = 3;

console.log(name + rivalCount + " rivals.");
//^ But instead of using '+', we can use template literals:
console.log();

console.log(`Hello, his name was ${name} and he had ${rivalCount} rivals.`);
console.log();

//^ const userName = "Bhagatvir Singh" // Way one of declaring a string
const userName = new String('Bhagatvir Singh'); //* Way two of declaring a string
// Very cool if tried in browser console; Way two, not recommended

console.log(userName[(0)]);
console.log(userName.__proto__); // Try in browser console, it states all functions

console.log(userName.length);
console.log(userName.toUpperCase());
console.log();

console.log(userName.toLowerCase());
console.log(userName.charAt(0));
console.log(userName.indexOf('S')); // Returns the index of first occurrence of 'S'
console.log();

const newString = userName.substring(0, 6); // Gives the digits from index start number to end number; Also the last digit is not included
console.log(newString);
console.log(newString.length); // Gives the length of the string
console.log();

/*
const anotherString = userName.slice(2, 8) // Similar to substring but can also take negative values
console.log(anotherString); // I can't understand it yet, so I will skip it for now
*/

const trimmedString = "     Normal String     "
console.log(trimmedString);
console.log(trimmedString.trim()); // Removes the spaces from both ends of the string
console.log();

const url = "https://www.example.com?name=Bhagatvir&age=20";
let Shadow_site = "https://v1-shadow-site.tiiny.site/";
/*
console.log(url.replace(' ', '%20'))
console.log(Shadow_site.replace(' ', '-')); // The site's address is corect, so I won't use it for use now
*/

console.log(url.includes('example')); // Returns true if the string contains 'example'
console.log(Shadow_site.includes('domain'))
console.log(userName.split(' ')); // Splits the string into an array of substrings using the space as a separator
