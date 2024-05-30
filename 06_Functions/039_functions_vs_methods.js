// Every function is not a method but every method is a function

// Function kept inside of object is called as a method - accessing using . operator

const maths = {
    addition: function addition() {
        console.log('I can add numbers')
    },

    subtract: function subtract() {
        return 3 - 1
    },


    // using ES6
    multiply(a, b) {
        return a * b
    }
}

console.log(maths.addition)   // returns the function
console.log(maths.addition())   // prints the value and so result is undefined
console.log(maths.subtract())   // returns the value so no undefined
console.log(maths.multiply(12, 2))   // passing parameters


