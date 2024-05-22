// Note: Refer the Visualization 




// What is call stack ?

// - it is a mechanism through which js engine tracks on which line it is executing the code

// - as it s stack so LIFO principle is used

// - after the execution of that function, it is popped out of the stack

// - function runs in the memory creation phase itself and it is executed when we call it 

// - infinite function
function introduceMe() {
    console.log('Hi this is yash chavan')
    introduceMe()
}
// the call stack will go on increasing with the same function again and again creating the same context again and again

// - due to this we get maximum stack size exceeded - stack overflow

// - calling function inside a function is called recursion