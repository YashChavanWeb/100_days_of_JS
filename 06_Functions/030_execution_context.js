// Note: Refer the Visualization



// 1. Global Execution Context - Memory Creation Phase + Code Execution Phase
// 2. Each function has its own execution context







// Global execution context   - if we use var then global , if we use const then script
const username = 'Yash'
const userAge = 20
console.log(`Name: ${name} , Age: ${age}`)

sayHi()     // this will work absolutely properly as function copy is in it 

function sayHi() {
    const a = 14, b = 12
    console.log(a, " ", b)
    console.log('Hii Everyone')
}

// Steps:

// 1. memory allocated to username and userAge and initial value as undefined

// 2. Function is created and copy of the code is stored in it
// Note: now that during memory creation phase, function is already created, so we can call the function before definition

// 3. When we are in the global execution phase, function has its own execution phase (local execution context) where a and b are undefined as per the memory creation phase and then executed in the execution phase

// 4. first both the phases of function are completed and then we come into global

// 5. actual value is given to variables in global and then statements are executed






// Function Called inside a function - what is the flow ?

function first() {
    const a1 = 14
    const b1 = 12

    second(4, 6)
}

function second(a, b) {
    return a + b
}

// Refer the diagrams for better understanding
