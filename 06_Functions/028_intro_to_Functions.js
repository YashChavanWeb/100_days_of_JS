function introduceYourSelf() {
    console.log('My name is yash')
    console.log('I am an upcoming Web Developer')

    return 0  // this is how we return any value of the function
}

console.log(introduceYourSelf)   // it will not run the function 
console.log(introduceYourSelf())   // it will run the function 
// also, the undefined is the return value of the function






// Note: Function can do two things:
// 1. run the code that we have written
// 2. return a value / result

// the return value will be shown in the console
console.log(introduceYourSelf())

// but it will not show if we call the function directly because we are not using it anywhere
introduceYourSelf()

// 3. 
// - we can return anything from a function: variable, boolean, string, expression, etc
// - we can also pass arguments inside a function but it will ignore it until the function will have parameters
// - the type of argument that we pass will become the type of the parameter ijn function






// Basic Terminologies
function firstFunction() { }    // function definition
function firstFunction(name) { }    // declaring parameter in function
firstFunction()     // function call 
firstFunction('Yash')     // arguments







// Practice Questions

function everyoneIntroduction(name) {
    // name is a variable declared just for the function scope
    console.log(`Hi my name is ${name} \nI am a Web Developer`)
}

everyoneIntroduction('Yash')
everyoneIntroduction('Vivek')

// Note : if we declare a parameter but we don't pass any argument then the parameter will by default take the value as undefined

// to solve this issue we can also pass a default parameters for the function

// 1. Method 1
function tempFunction(name = 'Sai') {
    console.log(name)
}
tempFunction()  // no argument is passed - output Sai
tempFunction('Yash')  // argument is passed - output Yash

// 2. Method 2
function tempFunction(name) {
    console.log(name || 'Sai')
}

















