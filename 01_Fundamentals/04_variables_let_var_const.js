// variables - name of a storage location
// until the webpage is running on localhost then the variable is stored in the main memory (RAM)
// Camel Case - userName, userIntro (JS)
// Snake Case - yash_chavan, god_mode  (C/C++) 
// Pascal Case - YashChavan, UserName

// Different ways to create a variable
// 1. let - to define any varaible
// 2. var 
// 3. const - to define variable that should not be changed



let username = "yash chavan"
console.log(typeof username)  // string

let isHappy = true
console.log(typeof isHappy) // boolean

// Adding of strings
let remain = "is a god"
let newuser1 = username + remain
console.log(newuser1)

let newuser2 = username + "is a god"
console.log(newuser2)

let first = "yash", last = "chavan"
let newuser3 = first + " " + last
console.log(newuser3)

let name = "Yash Chavan", age = 20
let result = name + " is " + age + " years old";
console.log(result)





const hoursInDay = 24   //note that const variable should be intialized it cannot be undefined
// Note: use const in every case, use let when necessary




// Difference between let and var
{
    var varname = "yash chetan chavan"
}
console.log(varname) // var can be accessed out of the scope as well so it is function scoped

{
    let letname = "chetan yash chavan"
}
console.log(letname)  // this will not be able to access the letname as let is block scoped




// Note:
// var does not give error if it is accessed before initializing
// let gives error if it is accessed before initializing




// Note:
// notdefined - not declared
// undefined - declared but value not assigned



// Rules for naming variables
// 1. A to Z and a to z
// 2. 0 to 9 - but can't start with a digit
// 3. only 2 special characters - underscore _ and dollar $ (can also use in start)




