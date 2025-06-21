//* Date and Time in JavaScript
//? node "01_basics/08_Date and Time-Javascript.js"

const myDate = new Date();

console.log("Current Date:", myDate);
console.log("Type of myDate:", typeof myDate);
console.log();

// Different string representations

console.log("toString():", myDate.toString());
console.log("toLocaleString():", myDate.toLocaleString());
console.log("toLocaleDateString():", myDate.toLocaleDateString());
console.log("toLocaleTimeString():", myDate.toLocaleTimeString());
console.log();

console.log("toDateString():", myDate.toDateString());
console.log("toISOString():", myDate.toISOString());
console.log();

console.log("toUTCString():", myDate.toUTCString());
console.log("toJSON():", myDate.toJSON());
console.log("toTimeString():", myDate.toTimeString());
console.log();

// Extracting specific parts
console.log("Year:", myDate.getFullYear());
console.log("Timestamp (ms since 1970-01-01):", myDate.getTime());
console.log();

let mymadeDate = new Date("05-22-2025") // Month-Date-Year
// let mymadeDate = new Date("2025-05-22"); // Year-Month-Date
// let mymadeDate = new Date(2025, 11, 25, 14, 30, 0); // Year, Month (0-11), Date, Hours, Minutes, Seconds

console.log("Custom Date: ",mymadeDate);
console.log("Date (.toDateString()): ",mymadeDate.toDateString());
console.log("Date (.toLocaleString()): ",mymadeDate.toLocaleString());
console.log(); 

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(mymadeDate.getTime());
console.log(Math.round(myTimeStamp / 1000));
console.log();

let myDate2 = new Date();

console.log(myDate2);
console.log(myDate2.getMonth() + 1); // '+ 1' Cause its starts from 0
console.log(myDate2.getDay());
console.log();

 let madeyear = myDate2.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

console.log(madeyear);

