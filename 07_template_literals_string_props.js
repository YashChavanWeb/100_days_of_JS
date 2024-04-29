const message = 'Hello'
console.log(message[0])  // accessing the first character of the sting
console.log(message[5])  // undefined as only 5 characters with index 4

// While indexing it also counts the space
console.log('My name is Yash'[7])   // this is another way of accessing string characters





// Properties of String

// 1. Length
console.log(message.length)





// Methods in String - Without Arguments

// Note: It does not change the actual string, it returns a new string / output

// 1. Upper case , Lower case
console.log(message.toUpperCase())
console.log(message.toLowerCase())

// 2. trim
const newMessage = '           This is a Message            '
console.log(newMessage.trim())   // removes all the extra spaces before and after

// Note: chaining of methods on string
console.log(newMessage.trim().toUpperCase())

// 3. trim start , trim end
console.log(newMessage.trimStart())   // removes the extra spaces just of the start

// Note: trim just removes spaces, not any other character - like underscore / dash /etc





// Methods in String - With Arguments

const specialMessage = 'Hi, I am Yash Chavan'

// 1. includes - checks if it is there in the string
console.log(specialMessage.includes('is a'))   // returns true or false value

// 2. index of
console.log(specialMessage.indexOf('I'))   // gives the index at which the character is present
console.log(specialMessage.indexOf('I am'))   // can add multiple words - it just checks start
// Note: if the character is not present in the string then it returns -1

// 3. replace and replace all
console.log(specialMessage.replace('Hi', 'Hello'))
console.log(specialMessage.replace('Bye', 'Hello'))   // have no change as there is no Bye in the string

// Note: replace changes only the first char / word it gets not all the chars / words
console.log(specialMessage.replaceAll('a', 'A'))

// 4. concat
console.log(message.concat(', ', specialMessage))
console.log(message.concat(newMessage, specialMessage))
console.log(message + specialMessage)

// 5. pad start , pad end
const last4Digits = '1213'
console.log(last4Digits.padStart(16, '*'))   // here 16 is the max length of output not the no of stars added
console.log(last4Digits.padEnd(16, '*'))

const newVariable = '1234'
console.log(newVariable.padStart(6, "smarty"))   // 1234 is bydefault , smarty will be sm


// 6. charAt and charCodeAt
console.log('Yash Chavan'[4])
console.log('Yash Chavan'.charAt(4))
// Note: both are same ways you can use any one
console.log('yash'.charCodeAt(2));  // this will give the ascii code of s 
console.log('yash'.charCodeAt());  // 77 - ASCII code for y is given - 0 index - as no parameter given

// 7. split
const testing = 'this is yash chavan'
console.log(testing.split(' '));   // creates an array by splitting elements by a space





// String Template Literals (Backticks)

const myAccNo = '1234'
console.log(`My account no is : ${myAccNo.padStart(16, '*')}`)
const paisa = 200000
console.log(`Currently we have $${paisa} in the bank`)

// Note: Another usecase is related to functions
















