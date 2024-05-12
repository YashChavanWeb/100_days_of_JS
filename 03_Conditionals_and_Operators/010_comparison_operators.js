// Comparison Operators - gives either true or false

// 1. Equality Operator
console.log(7 == 10) // false

// Note: This operator does implicit (automatic) conversion                                     
console.log(7 == '7')


// 2. Strict Equality
console.log(7 === '7')     // checks the type as well as value so does not convert
// --> You have to do explicit (manual) conversion for ===
// Note: always use strict equality === symbol


// 2. Not Equal 
console.log('yash' != 'chavan')  // true


// 3. Strictly Not equal
console.log('7' !== 7)   // true


// 4. Greater and less than 
console.log(7 > 2)
console.log(5 < 21)
// Note: it also compares the strings by implicit conversion


// 5. Greater than and equal to , less than or equal to
console.log(7 >= 2)
console.log(5 <= 21)

