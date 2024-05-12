// Requirement:
// we require if else because once a condition is checked then remaining conditions should not be checked. 



const inputAge = parseInt(prompt('Enter your age: ')) || 20

// ..
if ((inputAge >= 5) && (inputAge <= 15)) {
    console.log('User is a school student')
}
else if ((inputAge > 15) && (inputAge <= 25)) {
    console.log('User is a college student')
}
else if ((inputAge > 25) && (inputAge <= 55)) {
    console.log('User is a working professional')
}
else {
    console.log('User has taken retirement')
}
// ..

console.log('End of the code')



// Note: the entire above if else is a single block and only one of them will be executed.
// as soon js engine will get a true condition it will execute that and without checking other conditions go to the end

// Note: first should be always if and then we can start else if 




// we can also give truthy and falsy values instead of conditions in the if-else

if (20) {
    console.log('Yash is Student')
}   // true so the statement will print in the console





// the use of truthy and falsy values
let userName = prompt('Enter name')

// Met 1
if (!userName) {
    console.log('User has not entered the username')
    userName = 'Yash'  // by default value
}

// Met 2
if (userName) {
    console.log(`Your name is ${userName}`)
}

// Note: if user enters 0 in in the age then it is falsy value so it will not run the if statements so you can add a separate condition for that

