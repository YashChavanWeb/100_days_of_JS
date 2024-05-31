// spread operator is used to combine arrays or objects

const num1 = [1, 2, 3, 4]
const num2 = [12, 23, 34, 45]

// 1. Method 1
const jointArray = num1.concat(num2)
console.log(jointArray)

// 2. Method 2
const joinedArray = [...num1, ...num2]
console.log(joinedArray)









const user = {
    name: 'Yash Chavan',
    age: 20
}

// Combine objects
const updatedUser = { ...user, city: 'Vasai' }
console.log(updatedUser)








// Question: Join 2 arrays and then log their sum

const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]

const combinedArray = [...array1, ...array2]

function add() {
    console.log(arguments)

    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }

    return sum
}


console.log(add(...combinedArray))










// Question: spread a string and perform operation

const fullname = 'Yash'


function addition() {
    console.log(arguments)

    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }

    return sum
}


console.log(addition(...fullname))
