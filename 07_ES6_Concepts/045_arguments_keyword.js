

function add(a, b) {
    console.log(arguments)
    // stores all arguments in form of object in an array and can be used
    // even if function parameters are just 2 arguments can be of any numbers

    return a + b
}

console.log(add(2, 3, 5, 7, 3, 4))








// Question: add all the values of function arguments and return the sum
function addition(a, b) {

    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }

    return sum
}

console.log(addition(1, 2, 2, 1, 2))







// Question: Subtraction using arrow function

const subtract = () => {
    let diff = 0
    for (let i = 0; i < arguments.length; i++) {
        diff += arguments[i]
    }

    return diff
}