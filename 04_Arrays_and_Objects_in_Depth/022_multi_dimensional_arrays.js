// Multi-dimensional Arrays
// - They are in very simple words arrays inside array

const nameAndNumber = [['Yash', 29], ['Kamal', 30]]

// Accessing the elements in the multi array
console.log(nameAndNumber[0][1])   // 0th index 1st indexed element of the array

// Assigning values into the array
nameAndNumber[2] = 'Mango'
nameAndNumber[1][2] = 'Alive'

// Printing the values in multi array according to our convenience
console.log(nameAndNumber[2])    // Mango added as 2nd element in main array
console.log(nameAndNumber[1])    // print the entire array at index 1







// Practice question
const ticTacToe = [
    ['X', null, null],
    [null, null, '0'],
    ['0', null, 'X']
]

console.log(ticTacToe[1][4]) // this will not give error but give undefined as there is no such location