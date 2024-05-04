// Logical Operators 

// 1. && (AND)
// 2. || (OR)
// 3. ! (NOT)


// AND
const userAge = 18
console.log((userAge > 15) && (userAge < 20))
// returns true if both are true else returns false 


// OR
const isIntern = true, isEarning = false
console.log(isIntern || isEarning)
// returns true if any one is true else returns false


// Note: && , || operator does not give true or false result, it gives truthy or falsy result

console.log(0 && 2)
// AND finds 0 as the falsy value so it does not check the second one and returns the falsy value,  as the overall result is false itself

console.log(0 || 2)
// same with OR as 0 is falsy it checks if it gets any truthy ahead and as it gets that it is returned


// Note: If AND gets a falsy then it does not check rest returns false or else check ahead
//       If OR gets a truthy then it does not check rest returns true or else check ahead




// Practice Questions - guess the output

const practice1 = '' && 'Hello'    // ''
const practice2 = '' || 'Hello'    // 'Hello'

const practice3 = 'Hello' && null    // null
const practice4 = 'Hello' || null    // 'Hello' 


const practice5 = 'Hello' && (4 + 8)    // 12
const practice6 = 'Hello' || (4 + 8)    // 'Hello' 

const practice7 = 'Hello' && console.log('Hello')    // undefined
const practice8 = undefined || console.log('Hello')    // 'Hello' 

// Note: console.log()   return value is undefined





// NOT

// Note: Just reverses the value - truthy to falsy and vice versa
console.log(!null)
console.log(!!null)


// Bitwise & and | Operators
// --> It operates on Binary






