// Mathematical Operators

// Addition:  +
// Subtraction:  -
// Multiplication:  *
/* Divisor:  /  - */  console.log(8 / 0) /*- Infinity  */
// Remainder:  %
// Exponential:  **





// Properties of Math Object

// pi
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.E)






// Methods of Math Object

// sqrt function 
console.log(Math.sqrt(25))

// pow function
console.log(Math.pow(2, 5))  // 2^5

// floor function - removes the decimal part
console.log(Math.floor(22.999))  // gives 22 no matter what
console.log(Math.floor(-3.67))  // gives -4 brings to the lower one

// ceil function - moves one step further and removes decimal
console.log(Math.ceil(2.1))   // it becomes 3
console.log(Math.ceil(-2.1))   // it remains the same  i.e. -2

// round function - .5 or more then round to greater, if not remains same no
console.log(Math.round(2.3))   // 2
console.log(Math.round(2.6))  // 3
console.log(Math.round(-2.5))  // remains -2
console.log(Math.round(-2.8))  // returns -3


// random function - most frequently used
console.log(Math.random())  // gives no. between 0 and 1 - 0 is included 1 is not

// Note: if we want value between any range, eg 0 to 20 then do Math.random()*20 - 20 not included

console.log(Math.floor(Math.random() * 20))  // values between 0 and 20 no decimal





// Basic programs
const no1 = prompt('Enter the first number : ')
const no2 = prompt('Enter the second number : ')

console.log(no1 * no2)   // finds results without converting string to number (BTS)


// Note: To show any text in the webpage
document.write(no1 + no2)
