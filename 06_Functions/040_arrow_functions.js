// 1. Function declaration
function square(num) {
    return num * num
}

// 2. Function Expression
const square1 = function (num) {
    return num * num
}

// 3. Arrow Function Expression
const cube = (num) => {
    // console.log(num ** 3)
    return num ** 3
}
cube(3)







// Note: 
// - even if we don't use return keyword then too it by-default returns the value
// - this is also called as implicit return or automatic return
// - if we use return keyword then it is called as explicit return
// - it is very common to set a callback function as arrow function

const addition = (number) => number + 10    // can return by default 
const subtract = number => number - 10    // if we have just one argument no need to put brackets for it







// Example of Callback Function:
setTimeout(() => {
    console.log('This is yash chavan')
}, 1000)









// Using function inside object
const details = {
    name: 'Yash',
    job: 'Developer',
    exp: 2,
    print: function () {
        console.log(`My name is ${this.name}`)
    }
}

details.print()



const testing = {
    name: 'Chavan',
    job: 'Developer',
    exp: 2,
    print: function () {

        // const that = this
        // we did this because for function inside function this becomes a window object so we saved this

        // setTimeout(function () {
        //     console.log(`My name is ${that.name}`)
        // }, 1000)


        // With arrow function 'this' problem is solved and we get this from its lexical scope  
        setTimeout(() => {
            console.log(`My name is ${this.name}`)
        }, 1000)
    }
}

testing.print()