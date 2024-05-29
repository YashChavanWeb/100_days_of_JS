// 'use strict' 

function subtract() {
    const username = 'Chavan'
    const x = 7
    const y = 11
    console.log(x - y)
    console.log(username)

    const z = 100

    function child() {
        const childName = 'Yash God'

        console.log(`The child name is ${childName}`)
        console.log(z)
        // when we use a variable of the outer function inside the inner function then it a closure is created 




        // Block scope
        {
            const yash = 'yash'
        }

        // this yash variable is only accessible inside this block only not in any other child or anything
        // just if we use var then it is not accessible



    }

}






// Lexical Scope:
// Lexical scope is the ability for a function scope to access variables from the parent scope.
// Hence, the child function can access subtract variables which is its parents and grand parents but vice versa is not true

// Inner has outer access
// Outer does not have inner access







// Note:
// 1. Even var cannot be accessed be accessed outside the function block, it can be accessed only outside a block scope

// 2. If we create a variable without using any var/let/const then it directly goes into the window object and can be accessed anywhere
// Eg: Window.num
// So to avoid this we write 'use strict' at line 1 which enables strict mode





// TYPES OF SCOPES:
// 1. Block Scope - used for if else and loops
// 2. local scope - used for functions
// 3. global scope - var variables
// 4. script scope - for let and const



