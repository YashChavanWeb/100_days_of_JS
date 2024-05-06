// Nested if-else: conditional statements within other conditional statements.

// Allow more complex decision-making, multiple conditions in a hierarchical manner.

// You can add as many number of nested if else inside each other


// Example:
const userName = 'Yash Chavan';
const userAge = 20;
const userCountry = 'India';

// Check if username is provided
if (userName) {
    // Check if user is of adult age
    if (userAge >= 18) {
        // Check user's country
        if (userCountry === 'USA') {
            console.log(`${userName} is an adult in the USA.`);
        } else if (userCountry === 'India') {
            console.log(`${userName} is an adult in India.`);
        } else {
            console.log(`${userName} is an adult in an unspecified country.`);
        }
    } else {
        // User is a minor
        // Check user's country
        if (userCountry === 'USA') {
            console.log(`${userName} is a minor in the USA.`);
        } else if (userCountry === 'India') {
            console.log(`${userName} is a minor in India.`);
        } else {
            console.log(`${userName} is a minor in an unspecified country.`);
        }
    }
} else {
    // Username is missing
    console.log('Username is missing.');
}



// Note: once a condition is gone it will not check it again, even if the nested block is true because due to the outer block it has been filtered.