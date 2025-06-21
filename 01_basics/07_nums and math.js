//* Numbers and Maths in JavaScript
//? node "01_basics/07_nums and math.js"

/************************************ Numbers **********************************/ 

console.log('Numbers in javascript'.padStart(20 + 'Numbers in javascript'.length / 2, ' '));

const score = 400;
const balance = new Number(100)

console.log(score);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); // Convert to string and format to 2 decimal places
console.log();

const otherNumber = 22.8964;
console.log(otherNumber.toPrecision(2)); //^ Format to 3 significant digits; Very interesting, understands the number of significant digits
console.log();

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // Convert to string with international number system
console.log(hundreds.toLocaleString('en-IN')); // Indian number sysem
console.log();

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE) // In the browser console, write Number.  and it will show you all the properties and methods of the Number object

/************************************** Maths ************************************/ 

console.log('Maths in javascript'.padStart(20 + 'Maths in javascript'.length / 2, ' '));
console.log();

console.log(Math);
console.log(Math.PI); // Value of pi
console.log(Math.abs(-830)); // Returns Absolute positive value of a number
console.log();

console.log(Math.round(4.4)); 
console.log(Math.ceil(4.1)); 
console.log(Math.floor(4.9));
console.log();

console.log(Math.min( -10, 4, 5, 6, 7, 8, 9, 10)); // Returns the minimum value from the given numbers
console.log(Math.max(4, 5, 6, 7, 8, 9, 10)); // Returns the maximum value from the given numbers
console.log();

console.log(Math.random()); // Returns a random number between 0 and 1
console.log((Math.random() * 3) + 1); // Returns a random number between 0 and 10

console.log(Math.floor(Math.random() * 10) + 1); // Returns a random integer between 1 and 10
console.log();

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Understand through brackets 