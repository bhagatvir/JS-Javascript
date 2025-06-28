//* Arrays part 2
//? node "02_basics/02_Arrays.js"

const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

const allHeros = marvel_heros.concat(dc_heros) // This will merge the two arrays and return a new array
//~ concat gives a new array with the data of both arrays; Works with only two values

console.log("Concat: ", allHeros);
console.log("Length of the elements: ", allHeros.length);
console.log();

const newHeros = [...marvel_heros, ...dc_heros];
//~ concat gives a new array with the data of both arrays; Works with only two or more values

console.log("Spread method: ", newHeros);
console.log("Length of the newHeros: ", newHeros.length);
console.log();

marvel_heros.push(dc_heros); //~ Push mergs the data into the existing array
//& 'Push' takes any type of data. Strings, boolean, null, number, undefined; Here it took dc_heros as a data and so the output will be an array of arrays

console.log("Push: ", marvel_heros);
console.log("Length of the elements: ", marvel_heros.length); // Also dc_heros is the in whole the 4th element of marvel_heros
console.log();
//^ Base 0; So, logically the dc_heros comes in the 3rd index

console.log(marvel_heros[4]);
console.log(marvel_heros[3][4])
console.log(marvel_heros[3][1]) // The first element of the 3rd index
console.log();

const another_array = [1, 2, 3, 4, [5, 6], 7, [6, 7, [2, 0]]]
console.log("Another Array: ", another_array);
console.log("Length of the another_array: ", another_array.length);
console.log();

const understandable_another_array = another_array.flat(Infinity)
console.log("Flat: ", understandable_another_array);
console.log("Length of the understandable_another_array: ", understandable_another_array.length);
console.log();

console.log(Array.isArray("Hello"))
console.log(Array.from("Hello"));
// console.log(Array.from({name: "Hello"}));
console.log();

const num1 = 100;
const num2 = 200;
const num3 = 300;

console.log(Array.of(num1, num2, num3)); // This will create an array with the given values
console.log(Array.of("Hello", "World")); // This will create an array with the given values