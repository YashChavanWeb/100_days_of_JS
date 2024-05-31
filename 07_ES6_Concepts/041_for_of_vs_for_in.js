// These loops are used for looping between arrays and objects

const fruits = ['Apple', 'Mango', 'Banana', 'Grapes']

// Printing using normal loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}


// Printing using for of loop
for (fruit of fruits) {
    console.log(fruit)
}   // here fruit is a variable that represents element in the array

// even after loop ends fruit variable still exists with the last array value - as it is in global
console.log(fruit)

// so to delete the variable fruit after for loop completion declare the variable with const
for (const fruit of fruits) {
    console.log(fruit)
}









// Looping on a string

const username = 'Yash Chavan'

for (letter of username) {
    console.log(letter)
}

// Note: for...of loop works only on iterable objects










// Iterating in Object
const details = {
    name: 'Yash Chavan',
    age: 20,
    gender: 'male',
    state: 'Maharashtra'
}

for (key in details) {
    // console.log(details[key])   // we can access all the values using this

    console.log(`${key}: ${details[key]}`)
}








// Another way 
const keysInDetails = Object.keys(details)
const valuesInDetails = Object.values(details)
const entriesInDetails = Object.entries(details)

console.log(keysInDetails)   // array of object keys
console.log(valuesInDetails)   // array of object values
console.log(entriesInDetails)   // arrays inside array of key and value


for (key of keysInDetails) {
    console.log(details[key])
}


