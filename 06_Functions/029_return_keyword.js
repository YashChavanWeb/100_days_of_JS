// Note:
// 1. console.log is not the result of our function
// 2. the value returned by the function is the result of function
// 3. If we don't return anything then undefined will be returned by default
// 4. If we just write return then also it will return undefined as we have not given what to return






function addTwoNumbersOne(a, b) {
    console.log(a + b)
}

addTwoNumbersOne(5, 6)   // output will be 11 and will display





function addTwoNumbersTwo(a, b) {
    return a + b

    // return      // this will give result as undefined
}

const result = addTwoNumbersTwo(5, 6)   // return value of the function is stored in the result variable
console.log(result)   // now the value of the function will display

// Another way to call functions
addTwoNumbersTwo(5 + 3, 6 + 18)
// First the expressions as arguments will evaluate and then the function will start executing.







// Complex Recursive function
addTwoNumbersTwo(addTwoNumbersTwo(4, 10), addTwoNumbersTwo(3, 2))   // actually 14 and 5 will pass in the function