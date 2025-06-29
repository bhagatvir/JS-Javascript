//* Functions
//? node "03_basics/01_Functions.js"
/*
//^ Normal way, complex and large
console.log("B");
console.log("H");
console.log("A");
console.log("G");
console.log("A");
console.log("T");
*/
//^ Function

function myName() {
    console.log("My name is: ");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("T");
    console.log();
}

myName; //! Reference to the function, not calling it
myName() //! Calling the function


function addingTwoNumbers(number1, number2){ // number1, number2 are parameters
    console.log(number1 + number2);
    
}

addingTwoNumbers("2", 3) //& All these console are arguements
addingTwoNumbers(undefined, 4)
addingTwoNumbers(3, "6")
addingTwoNumbers(3, null)
addingTwoNumbers(2, 3) 
console.log();

function addingTwoReturn(number1, number2){
/*
    let result = number1 + number2;
    console.log("Bhagatvir Singh");
    return result;
    console.log("This will not run because of return, as when return is called, the function exits immediately");
*/

    return number1 + number2; //& This is a single line function, it returns the sum of number1 and number2
}

const result = addingTwoReturn(2, 3);
console.log("Result is: ",result);
console.log();

function loginUserMessage(userName = "Hyper core"){ //& Default parameter value
    if(!userName){ //! meaning => userName === undefined
        return "Please enter a username"
    }
    return `${userName} just logged in`
}


console.log(loginUserMessage()); //~ No value passed means Undefined

console.log(loginUserMessage("Red shape")); //~ Value passed means it will use that value
console.log();

console.log(loginUserMessage("")); //~ Empty string means it will use the default value
console.log();

function calculateCartPrice(Value1, Value2, ...num1){ //& Rest parameter syntax, it allows us to pass any number of arguments
    return num1;
}

console.log(calculateCartPrice(100, 200, 300, 400)); // Value1 - 100, Value2 - 200, Left - num1

const user = {
    username: "Bhagatvir Singh",
    age: 13
}

function handleOject(anyobject){
 console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleOject(user); //! Passing object as an argument to the function
console.log();

handleOject({
    username: "Vidal",
    age: 14
}) 
console.log();

const newArray = [200, 400, 600]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(newArray)); //! Passing array as an argument to the function
console.log(returnSecondValue([100, 200, 300])); // Passing array as an argument to the function
