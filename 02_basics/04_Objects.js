//* Objects part 2
//? node "02_basics/04_Objects.js"

//! Object constructors

const appleUser = new Object() // Singleton object
// const appleUser = {} // Non-Singleton object

appleUser.id = "830895"
appleUser.name = "Bhagatvir Singh"
appleUser.iphone = "Iphone 6s"
appleUser.net_recharge = false
appleUser.isLoggedIn = true

console.log(appleUser);
console.log();

console.log(appleUser.net_recharge);
console.log(appleUser["iphone"]);
console.log();

const androidUser = {
    id: "934585",
    isLoggedIn: true,
    phone: "Samsung A10",
    net_recharge: false,
    name: {
        username: {
            Firstname: "Vidal",
            Lastname: "Kapoor"
        } 
    }
}

console.log(androidUser);
console.log();

console.log(androidUser.phone);
console.log();

console.log(androidUser.name.username);
console.log(androidUser?.appleUser); //! This will protect it from givivng an error -'?'
console.log();

const value1 = {1: "Hello", 2: "User!"}
const value2 = {3: "How", 4: "are"}
const value3 = {5: "you", 6: "?"}

console.log(value1, value2, value3); // Wrong way
console.log();

const combinedValues = Object.assign({}, value1, value2, value3) //? (Target, source)
console.log(combinedValues);
console.log();

console.log(combinedValues === value1); //^ Reason '{}'
console.log();

const spreadValues = {...value1, ...value2, ...value3}
console.log(spreadValues);
console.log();

const Users = [
    { id: "29462",
        OS: "iOS",
        phonename: "Iphone 16e",
    },

    { id: "29463",
        OS: "Android",
        phonename: "Samsung Galaxy S24",
    },

    {
        id: "29464",
        OS: "Android",
        phonename: "Asus ROG Phone 7",
    },

    { id: "29465",
        OS: "Linux",
        devicename: "ThinkPad",
    },

    { id: "29466",
        OS: "Windows",
        devicename: "ASUS TUF GAMING F15",
    },
]
console.log(Users[0].phonename)
console.log(Users[2].OS);
console.log();

console.log(appleUser);
console.log();

console.log(Object.keys(appleUser));
console.log(Object.values(appleUser));
console.log(Object.entries(appleUser));
console.log();

console.log(androidUser.hasOwnProperty('net_recharge'));
console.log(appleUser.hasOwnProperty('Fullname'));
console.log();

const JScourse = {
    courseName: "JavaScript",
    price: "Free of cost",
    courseInstructor: "Sir!, Hitesh Choudhary"
}

// console.log(price);

const {price} = JScourse //! easier to write in console then the other one
console.log("Fees: ", price);

const {courseInstructor: Teacher} = JScourse //? Naming syntax
console.log("Mentor: ", Teacher); 
console.log();

const bar = ({company}) => {}

bar.company = "Hyper cores"
console.log("Company namme: ",bar.company);
console.log();

/*
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
} 
    ^JSON format 
*/

const myDay = new Date()
console.log(myDay.toJSON());


[
    {},
    {},
    {}
]
// ^!Array format