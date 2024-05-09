// Ternary operator is used for optimizing the syntax of if else

// Syntax: 
// condition ? if true do this : if false do this 




// Real life use Example

const userGender = 'F'  // female
console.log(`${userGender === 'F' ? 'She' : 'He'} is a college student`)

// to avoid the problem of lowercase and upper case we can do :
console.log(`${userGender.toUpperCase() === 'F' ? 'She' : 'He'} is a college student`)

// Note:
//  '0' this is a truthy value





// multiple ternary operator (optional part so don't worry)
const yash = (null ? 'Yash' : ('Chavan' ? '1' : '2'));
console.log(yash)