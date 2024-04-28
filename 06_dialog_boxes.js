// Dialog Boxes
// 1. alert
// 2. confirm
// 3. prompt


alert('Are you sure ?')
// after clicking OK - output is undefined (basically it is its return value)

confirm('Do you want to continue')
// after clicking OK - output is true
// after clicking Cancel - output is false (its return value is boolean)

const age = prompt('Enter your age')
console.log('Your age is ' + age)
// after clicking OK - it returns the input that we enter
// if the user clicks cancel - then it returns null value

