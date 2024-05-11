// Types of Data Types in Js
// 1. Primitive (Value Types)
// 2. Non-Primitive (Reference Types)

// There is only one Non-Primitive Data type and that is OBJECT

// Objects are further divided into three categories:
// 1. Object Literals
// 2. Arrays
// 3. Functions

// Object Syntax
// variable = {key: value} - declaration
// variable.key  - accessing the value

const user = {
    name: 'Yash',
    age: 20,
    isStudent: true
}
const user2 = {
    name: 'Yash',
    age: 20,
    isStudent: true
}

console.log(user.name)
console.log(user === user2)  // even though values are same but their references/addresses are different so it is false

// Note:
// user and user2 are two objects with two diff memory locations and addresses
// name in both have the same address in memory even though it is in diff objects
console.log(user.name === user2.name)   // true


// Various ways of accessing values
const myname = "GOD"

const tempUser = {
    firstname: 'Yash',
    'lastname': 'Chavan',
    GOD: 'Bhagwan'

}

console.log(tempUser.firstname)
console.log(tempUser['lastname'])    // bracket notation is more powerful than . notation
console.log(tempUser.myname)   // this will not give error it will give undefined for the values not present in the object

console.log(tempUser.GOD)   // this will give Bhagwan as output
console.log(tempUser[myname])    // Output: Bhagwan  with the help of some another variable
console.log(tempUser['first' + 'name'])   // give output as Yash - we also can write expressions in []





// adding a new pair in the object
tempUser.age = 12  // a new pair is added into the object
tempUser['is-user'] = true  // a new pair is added into the object bracket is used for giving string as key
console.log(tempUser)



// Nested Objects

const user3 = {
    name: 'Yash',
    age: 20,
    address: {
        city: 'Bangalore',
        pinCode: '1234456',
        state: 'Karnataka'
    }
}

// Accessing the values in nested objects
console.log(user3.address.city)
user3.address.weather = 'Sunny'
console.log(user3.address.weather)


// Note: as in user3 there is another object of another memory for the address object is created
//  Address of the two objects user3 and address is different even though they are nested








