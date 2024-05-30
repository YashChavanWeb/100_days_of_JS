// set timeout and interval functions are web api part and browser has it

setTimeout('console.log(true)')
setTimeout('console.log("Yash Chavan")')
// it treats the string parameter as a code and creates a new file for writing it behind the scenes
// each setTimeout function has its different file








// use of set timeout - after how much milliseconds a particular code should run - delaying the code

setTimeout('console.log("After 2 seconds print this")', 2000)

setTimeout(`
console.log("Hello")
console.log('I am Yash')`, 2000)    // for multiple lines of string we use backticks








// The return value of the setTimeout Function is the id of the last time interval

// The use of this id is in clearTimeout where we can stop the set timeout from running

setTimeout(`console.log('Hi first')`, 2000)
setTimeout(`console.log('Hi second')`, 4000)
setTimeout(`console.log('Hi last')`, 10000)

clearTimeout(7)     // this 7 is the id of the 'Hi last' set timeout which can stop it

// A better way to do this is
const timer1 = setTimeout(`console.log('Hi -1 ')`, 1000)
const timer2 = setTimeout(`console.log('Hi -2')`, 2000)
const timer3 = setTimeout(`console.log('Hi -3')`, 3000)

clearTimeout(timer3)








// Using setTimeout as a Higher order function

const printHello = setTimeout(hello, 1000)   // for this it will not create a new file when we pass a function

function hello() {
    console.log('Hello Everyone')
}

// const printHello = setTimeout(hello(), 1000)   // this will do nothing as the return value of the function is undefined


const printHello1 = setTimeout(hello1, 1000, 21, 'Yash', 33.3)   // for this it will not create a new file when we pass a function

function hello1() {
    console.log(arguments)   // other parameters of set timeout become an array in the arguments variable
    // arguments is a predefined variable
}










// normal javascript code is synchronous code - line by line
// set timeout and interval are asynchronous code  - saves in memory and then runs

setTimeout('console.log("Hello everyone")')   // no interval so 0 seconds timer
console.log('THis is best')    // normal code

// the console code will run faster than set timeout







// setInterval function - runs the code every time after that interval

const timer4 = setInterval(`console.log('Hi -1 ')`, 1000)
clearInterval(timer1)


const timer5 = setInterval(another, 1000)

function another() {
    console.log('Hello world')
}










// Most common way to use SetTimeout
setTimeout(function () {
    console.log('Hello Everyone')
}, 1000)



