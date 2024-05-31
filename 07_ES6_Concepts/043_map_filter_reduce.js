// IN ANY CASE THE ORIGINAL ARRAY IS NOT CHANGED

// 1. Map

// Map returns an array of the return value of the function used on the array
// for each does not return any value

const months = ['January', 'February', 'March', 'April', 'May']

months.map((month, index) => {
    console.log(index + 1, month)
})

// Note: 
// - first parameter acts as the value of the array
// - second parameter acts as the index of the array
// - third parameter is the actual array on which we apply method


const returnedArrayOfMap = months.map((month) => {
    return month.toUpperCase()
})

console.log(returnedArrayOfMap)












// 2. Filter

// the return value of filter will be either the same array which we are working on,
// or a new array which is a part of that
// not a modified or different array

// the array of value that filter will return depends on the return value
// if returning value is true then it will return all array elements and if false return nothing
// so we return a value which will be true for some and false for some 


const fiveLetterMonths = months.filter((month) => {
    return month.length <= 5
})

console.log(fiveLetterMonths)



// Practice questions - 

// i) filter months with letter M in it only
const mLetterMonths = months.filter((month) => {
    return month.toLowerCase().includes('m')
})
console.log(mLetterMonths)



// ii) filter months after third index
const indexAfter3 = months.filter((month, index) => {
    return index >= 3
})
console.log(indexAfter3)



// iii) filter students of age more than 18
const students = [
    {
        name: 'Yash',
        age: 20
    },
    {
        name: 'Akshata',
        age: 15
    },
    {
        name: 'Anjali',
        age: 22
    },
    {
        name: 'Avani',
        age: 16
    },
    {
        name: 'Kamal',
        age: 23
    }
]

const adultStudents = students.filter((student) => {
    return student.age > 18
}).map((student) => {
    return student.name
})          // here we have used map on the new array created by a filter using chaining method

console.log(adultStudents)

const studentNameWithA = students.filter((student) => {
    return student.age > 18
}).map((student) => {
    return student.name
}).filter((student) => {
    return student.toLowerCase().includes('k')
})

console.log(studentNameWithA)









// 3. Reduce

// work of reduce is to reduce all the values in an array into a single value 

const numbers = [1, 1, 1, 2, 1, 1]

const addedArray = numbers.reduce((resultValue, currentValue) => {
    return resultValue + currentValue
}, 0)   // 0 is the starting value of our resultValue if it is mentioned or else array first value is first value


console.log(addedArray)

// Note:
// - accumulator keeps adding values into it
// - last value is returned every time
