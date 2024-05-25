
// In Js code runs line by line and so everything will console until we get error and then it will stop 

const username = 'Yash'
let userAge = 20
var a = 100

function add() {
    const x = 5
    const y = 6
    console.log(x + y)
    console.log(username)   // this will work fine as global scope variables can be accessed anywhere
}
function subtract() {
    const username = 'Chavan'
    const x = 7
    const y = 11
    console.log(x - y)
    console.log(username)   // now as username is defined in the function so it will be Chavan and not yash
    // Because the function looks for the closest variable in its or global scope
}





add()
subtract()
console.log('Program Ended')  // program execute successfully till here

// console.log(x + y)  // here we will get error as we are accessing variable inside of function

// Note: whenever a function is completely executed, then all the variables in its scope get destroyed