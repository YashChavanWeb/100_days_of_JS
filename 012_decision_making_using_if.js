// If condition

const userName = "Yash"
const userAge = 20

console.log(`Name: ${userName}`)
console.log(`Age: ${userAge}`)

if ((userAge >= 18) && (userAge <= 24)) {   // if true then run or else dont run
    console.log('User is a college student')
}

console.log('Program Ended')  // this code will run by default at the end as it is not bounded by any condition




// Note: If we dont put curly braces then only one line is considered by if
if (false)
    console.log('yash')   // this is if statement code
console.log('chavan')     // this is normal line of code




// Taking the inputs using prompt

const inputName = prompt('Enter your name : ')
const inputAge = parseInt(prompt('Enter your age : ')) // converting it to a number

if ((inputAge >= 5) && (inputAge <= 15)) {
    console.log('User is a school student')
}

// Note:
// the values written in prompt are strings not numbers like inputAge is a string
// the >= operators automatically convert it to numbers for checking and then checks it




// Assuming a by-default value in prompt

const definedName = prompt('Enter your name : ') || 'Yash Chavan'
const definedAge = parseInt(prompt('Enter your age : ')) || 20

console.log(`Name: ${definedName} and Age: ${definedAge}`)




// Note: Here there is a flaw
// Js engine checks all the if conditions even if one of it is true
// so we use else-if



