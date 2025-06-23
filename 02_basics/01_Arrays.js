//* Arrays
//? node "02_basics/01_Arrays.js"

const myArr = [0, 1, 2, 3, 4, 5, true, "Bhagatvir"]; // In the brackets we have the parts of the arrays, names as "Elements". They can be of strings, boolean, mix and other data types
const myHeros = ["Batman", "Superman", "Ironman"]

console.log(myArr);
console.log(myArr[0]); //^ As shown, it starts from 0, so the output will be 0
console.log(myArr[8])
console.log();

console.log(myHeros);
console.log(myHeros[2]);
console.log();

//* Array methods
const myArr2 = new Array(1, 2, 3, 4); // This is another way to create an array. It is not recommended to use this method.
console.log(myArr2);

myArr2.push(5, 6); //^ Adds an element to the end of the array.
console.log(myArr2);

myArr2.pop(); //^ Removes the last element of the array.
console.log(myArr2);

myArr2.unshift(9); //^ Adds an element to the beginning of the array.
console.log(myArr2);

myArr2.shift(); //^ Removes the first element of the array. No need to assign it to a value, if you do, it won't change anything.
console.log(myArr2);
console.log();

console.log(myArr2.includes(2)); // Checks if the element is present in the array
console.log(myArr2.indexOf(3));
console.log();

// console.log(typeof myArr);
// console.log(typeof myHeros);
// console.log(typeof myArr2);
// console.log();

const newArr = myArr2.join();

console.log(myArr2);
console.log(newArr); // It gives directly the numbers, let see what happened:
console.log(typeof newArr); //! The join() method converts the array into a string, so the type of newArr is string.
console.log();

//~ Slice and Splice

const myArr3 = [10, 92, 43, 24, 15]
console.log("Oringinal Array: ", myArr3);

const min1 = myArr3.slice(1, 3); //^ Base 0, remember so if the valud is 1, 3; then ({[0-1, 1-2, 3-2, 4-3]})

/*
Slice example:

let a = [1, 2, 3, 4];
a.slice(1, 3);  // gives [2, 3]
a is still [1, 2, 3, 4]

*/
console.log("Slice: ", min1);

const min2 = myArr3.splice(1, 3)
console.log("Splice: ", min2);  
console.log("The same array but changed with splice: ", myArr3);

/*
Splice example:

let a = [1, 2, 3, 4];
a.splice(1, 2);  // removes 2 items → [2, 3]
a is now [1, 4]

*/