
console.log(username)
var username = 'Yash'

// The above code will not give any error and output will be undefined

// What is Hoisting ?
//  - if we are accessing the variable before its declaration and it does not give error then it means that the variable is hoisted - all var variables are hoisted

// - in const and let also we have hoisting but it puts it into Temporal Dead Zone
// (Temporal Dead Zone - where a variable is inaccessible until it is completely initialized)

// - function in javascript is hoisted Properly    
hi()
function hi() {
    console.log('Hi')
}







// creating a function like a variable

// sayHi() this will give error - as it is const so acts as a variable - all properties of variable

// If we make var function then it will have undefined value like the variables

const sayHi = function () {    // this is also called as anonymous function
    console.log('Hello')
}

// sayHi() function called successfully








// Types of Function Definition
// 1. Function Declaration
// 2. Function Expression

// IIFE: In this we create anonymous function, and call it right there
// (immediately invoked function expression)