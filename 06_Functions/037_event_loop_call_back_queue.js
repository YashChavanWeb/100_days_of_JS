console.log('Start of the program')

function hello() {
    console.log('Hello Everyone')
}

hello()

setTimeout(function () {
    console.log('This is anonymous function')
}, 100)

setTimeout(hello, 200)


for (let i = 1; i <= 2; i++) {
    console.log(i)
}

console.log('End of the Program')


// Note:
// - js first prints all the synchronous code and then goes to the setTimeout
// - all the other code is put in call stack but set timeout is not it is kept in other file
// - event loop is for checking between the callback queue and call stack
// - the code that does not go directly into the call stack is called as asynchronous code
