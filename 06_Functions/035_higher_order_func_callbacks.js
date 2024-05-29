// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

function test(message) {
    console.log(typeof message)
    // every time the type of will change as we are passing different as variables

    console.log(message)

    // message() - calling message will give error as it is a variable parameter
}

test('Hello')
test({ name: 'Yash' })
test([1, 2, 3, 4])

console.log(test)   // gives the entire code of the function
console.dir(test)   // gives the object form of the function

//  we can also pass values in function like object as behind the scene it is object only
// test.age = 19 









function print1(message) {

    message()  // this is basically calling the output function 
}


function output() {
    console.log('We are venom')
}

print1(output)   // this becomes a higher order function as function calling inside function

//Note :  also in higher order functions, except higher order we cannot pass any other type of parameter


print1(function () {
    console.log('Anonymous Function')
})   // this becomes an anonymous function with no name

// if we pass a function as a parameter in another function then that parameter function is called callback function







// small example
x = output
x()  // this will call the output function
x.age = 10  // this will also update an age variable in output function
