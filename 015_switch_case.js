// when we are comparing numeric values / we are using many if else then we can use switch

const dayNumber = 3

switch (dayNumber) {
    case 0:
        console.log('It is Sunday')
        console.log('Hello')   // it can run multiple lines without bracket
        break
    case 1:
        console.log('It is Monday')
        break
    case 2:
        console.log('It is Tuesday')
        break
    case 3:
        console.log('It is Wednesday')
        break
    case 4:
        console.log('It is Thursday')
        break
    case 5:
        console.log('It is friday')
        break
    case 6:
        console.log('It is Saturday')
        break

    // if none of the cases match then the default case is executed
    default:
        console.log('Please enter a valid day')
    // break   there is no requirement of break here
}

// Note:
// In switch when a case matches, then all the statements after it get executed
//  so to avoid that we use break
// when we use break, it jumps out of the switch block
// the order of the cases from top to bottom does not matter case 5, case 2, ... etc







// Converting the if-else to switch case

// if ((inputAge >= 5) && (inputAge <= 15)) {
//     console.log('User is a school student')
// }
// else if ((inputAge > 15) && (inputAge <= 25)) {
//     console.log('User is a college student')
// }
// else if ((inputAge > 25) && (inputAge <= 55)) {
//     console.log('User is a working professional')
// }
// else {
//     console.log('User has taken retirement')
// }


const inputAge = 18, userName = 'Yash'
switch (true) {
    case (inputAge >= 5) && (inputAge <= 15):   // expressions give out boolean value
        console.log('User is a school student')
        break
    case (inputAge > 15) && (inputAge <= 25):
        console.log('User is a college student')
        break
    case (inputAge > 25) && (inputAge <= 55):
        console.log('User is a working professional')
        break
    default:
        console.log('User has taken retirement')

}




// Note: if the case variable matches with the switch variable then it will execute
// if there are multiple cases with the same values then it gives the first encountered case output

// Note: false is not strictly equal to null

