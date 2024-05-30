// Higher order functions
// - takes function as an argument
// - returns function as a value

function parent() {
    const a = 10
    function child() {
        console.log('I am a child of age ' + a)
    }

    return child
}

const callParent = parent()
console.dir(callParent)


// when we return child function in the parent function,
// and use some parent function variables in the child function
// - then along with the returning child function the variables it used are also returned

// closure - function with its lexical variable








// Another example
function grandParent() {
    function parent() {
        const a = 10;
        function child() {
            console.log('I am a child of age ' + a)
        }

        return child   // Return the child function here
    }

    return parent() // Return the result of calling parent()
}

const grandVariable = grandParent  // this is grandParent() -> parent() -> child  - stored in the variable

grandVariable()   // this will return the console of child function











// MDN Example

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    return displayName;
}

let c = init();
c()


// Note: either the return function 'displayName'   or RHS of c 'init' should have round brackets to call the displayName function  - both cannot have it



// A catch 

function init() {
    var name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    name = 'yash Chavan'
    return displayName;
}

let c1 = init();
c1()

// closure is a bundle of the function and the references of the variables not its value
// - so if I change name value later, it will print latest name value as closure is of name reference

// - whenever we are returning a function, its parent function variables are not destroyed, hence they are stored in the form of closure









// Complex Example

function x() {
    let a = 1
    console.log(a)
    function y() {
        let a = 2
        console.log(a)
        function z() {
            let a = 3
            console.log(a)
        }
        z()
    }
    y()
}

x()

// output of this will be 1 2 3 




function returnFunction() {
    function x() {
        let a = 1
        console.log(a)
        function y() {
            // let a = 2
            console.log(a)
            function z() {
                // let a = 3
                console.log(a)
            }
            z()
        }
        a = 999
        y()
    }

    return x
}

let a = returnFunction()
a()

// output of this will be 1 999 999
// - this is because we updated a before calling y

// Note - even nested functions can make closures
