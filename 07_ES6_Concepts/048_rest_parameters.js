// Rest parameter can be defined as a replacement for the arguments keyword
// using rest parameters we can take infinite number of parameters

// Note:
// - rest parameter should be at the end in our parameter list







// 1. Using Arguments
function add() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }

    return sum
}
console.log(add(1, 2, 3))








// 2. Using rest parameters
function addition(...nums) {

    // as nums is now an array so we can use array methods on it
    const sum = nums.reduce((a, b) => {
        return a + b
    })

    return sum

}

console.log(addition(1, 2, 3, 4))


// What if we also declare other parameters
function subtract(a, b, ...numbers) {
    console.log(numbers)
}

const subValues = [1, 2, 3, 4, 5, 6, 7, 8]
subtract(...subValues)   // a = 1, b = 2 and rest all will go in numbers and form an array









// Difference in rest parameter and spread operator

// Rest Parameter: Captures an indefinite number of arguments passed to a function and combines them into an array.
// Rest parameter is given as a parameter of the function

// Spread Operator: Expands an iterable (like an array or string) into individual elements.
// spread operator is given as an argument of the function call








// Converting arguments to an array

function justPractice() {

    // Met 1
    return [...arguments].reduce((a, b) => a + b)

    // Met 2
    // return Array.from(arguments).reduce((a, b) => a + b)

}