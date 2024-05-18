// Compound / Combined Assignment Operators

// 1.Addition Assignment  (+=)
// 2.Subtraction Assignment (-=)
// 3.Remainder Assignment (%=)
// 4.Multiplication Assignment (*=)
// 5.Division Assignment (/=)
// 6.Exponentiation Assignment (**=)


let num = 3
num += 3
num += 3
num += 3
num += 3
console.log(num)

// Note: Same will be for all the remaining operators

let value = 4
value %= 3      // 4%3 = 1 
value %= 2      // 1%2 = 1
console.log(value)
// here it update the value according to the remainder







// Increment and Decrement Operator

// 1. ++
// 2. --


// There are two options we can use the operator as prefix or suffix

// 1. Using the operator as suffix
let answer = 3
console.log(answer++)    // will increment but result will be earlier only
console.log(answer)     // will show the updated value

// 2. Using the operator as prefix
answer = 5
console.log(++answer)
console.log(answer)    // will increment and also update the result
console.log(answer)    // will show the updated value


// Note: The result of the increment and decrement is what matters
answer = 5
const newNumber = answer++   // here the value of newNumber will be 5 only as result is of earlier


// Same thing happens in case of decrement operator
answer = 5
const number2 = --answer   // here it will return the updated value 4 as it is prefix
console.log(number2)








// Note 
num = num + 1
num += 1
++num
// All these are same

const test = 3
// test++  // this will give error as the address of test variable is changing - so it is not allowed