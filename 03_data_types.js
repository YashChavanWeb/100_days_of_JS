// There are two types of data types in Js:
// 1. Primitive (Fundamental Level): 
// number
// string
// boolean
// undefined
// null
// bigint
// Symbol


// 2. Non-Primitive




// Note: To check the data type of any value
console.log(typeof 7)
console.log(typeof 'Hello')

// In js to store any type of numeric - int, decimal, negative (real nos) 
// - there is only one datatype -> number


// Another way to write a string when there is a quote in between
console.log("Hello this is 'your' Homework")
console.log(typeof "")  // its type is a string - empty string

// To also include a new line in a string we use backticks - template literal
console.log(`This is
an example`)

// To convert a string to a number - basic way
console.log(typeof +'100');  // only works for + and - not for * and /
console.log(typeof +'yash');  // NaN - not a number (number but not a valid number)

console.log('1020yash');  // NaN again as it is not that intelligent
console.log(parseInt('1020yash'));  // this is a intelligent method for converting number to string (but not fully)

// To convert a number to string
console.log(100 + '')  // converts to string

// Boolean
console.log(typeof true)
console.log(+true)  // to convert boolean to a number 
// true = 1, false = 0

// Undefined & Null
// undefined - not declared
// null - declared but value is not given
console.log(+null)  // converted to number - 0
console.log(+undefined)  // converted to a invalid number

// Note:
console.log(typeof null)   // this is a bug - its type is nothing



