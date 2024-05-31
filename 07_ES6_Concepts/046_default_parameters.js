
function multiply(a, b = 1) {
    return a * b
}

console.log(multiply(2, 3))  // output is 6 - as given parameters override default
console.log(multiply(2))   // second parameter will be by default 1 as not given

console.log(multiply(2, undefined))   // 1 will be the second value with 2
console.log(multiply(2, null))   // null will be the second value with 2 and output is 2*0 is 0

// Note:
// - falsy value is overriden on the parameter like null, '' all override to 0








function rollADie() {
    return Math.floor(Math.random() * 6) + 1
}

function rollADieOfAnySides(numberOfSides = 6) {
    return Math.floor(Math.random() * numberOfSides) + 1
}

console.log(rollADie())
console.log(rollADieOfAnySides(12))
console.log(rollADieOfAnySides())    // default value is of 6 sides








// Handling the default parameter manually

function rollADieOfAnySides(numberOfSides) {
    if (numberOfSides === undefined) numberOfSides === 6
    return Math.floor(Math.random() * numberOfSides) + 1
}
