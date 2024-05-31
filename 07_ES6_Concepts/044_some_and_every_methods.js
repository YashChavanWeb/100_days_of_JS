// 1. some

// - some iterates through the array
// - if while iterating if it gets any one true condition then it stops and returns overall true result
// - or else returns false
// - it is used to find if any different value is present in the array as it returns true on the bug condition or else returns false - so it is basically opposite

const evenNumbers = [0, 2, 4, 6, 8, 9, 10, 12, 14, 16, 18]

const result = evenNumbers.some((num, index) => {

    if (num % 2 === 1) {
        console.log('The odd index is ' + index)
    }

    return num % 2 === 1
})

if (result) {
    console.log('There is at least one odd number')
} else {
    console.log('All are even numbers')
}










// 2. every

// - every also iterates through the array
// - but for every it checks if ALL elements satisfy the condition
// - if even one element fails the condition then it stops and returns false from the callback function
// - otherwise, if every element passes the condition then returns true from the callback function


const answer = evenNumbers.some((num, index) => {
    return num % 2 === 1
})  // loop ends at first iteration as first iteration output is false








// Difference in every and some
// - some: finds for true value and stops after getting it
// - every: finds for false value and stops after getting it