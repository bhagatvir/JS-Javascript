//* Arrow
//? node "03_basics/03_Arrow.js"

const user = {
    name: "Bhagatvir Singh",
    price: 99,

    welcome_message: function(){
        console.log(`${this.name}, We welcome you`)
        console.log(this);
        
    }

}

user.welcome_message()

user.name = "Karan"
user.welcome_message()
console.log();

console.log(this); //! {}
/*
function value_this(){
   let name = "Bhagatvir Singh";
   username: "Gojo"
    console.log(this.name);
}

value_this();
*/

// const chai = function(){} //~ function
const chai = () => { //~ Arrow function

  console.log(this);
    
} 
chai()
console.log();

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(45, 66));

const addThree = (num1, num2, num3) => num1 + num2 + num3; //! Implicit return
console.log(addThree(45, 66, 99));
console.log();

const addexample = (num1, num2) => {username: "Gojo" }
console.log(addexample(45, 66));

