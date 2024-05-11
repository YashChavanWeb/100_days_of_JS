// Note: Even when we create an object with a const, we can change it (add properties, etc)

// Remember: Changing a value of a variable means that it was first pointing to a address and now after changing it is pointing to a different address
// - That is why after adding / changing a value in a object its address remains same
// - So we can even change values in a const object




// The below thing is not allowed as we are entirely changing the object
// const user = {}
// user = {}





// Deleting a key in an object
const user1 = {
    name: 'YAsh',
    age: 20,
    address: 'Vasai'
}

delete user1.address
console.log(user1)







// Seal vs Freeze in Object

// To prevent user from deleting/inserting just modifying existing values the value in the object we can do this

Object.seal(user1)
delete user1.age     // this will return false as we cannot now delete the  
console.log(user1)
user1.age = 100 // but here we can add / change the existing values
console.log(user1)
user1.age = 20 // resetting the address



// To prevent user from deleting / updating / inserting or changing object in any way
Object.freeze(user1)
user1.age = 100         // even though no error     the age remains the same no change
console.log(user1)







// in Keyword
if ('age' in user1) {    // check if this key is present in the object
    console.log('Age is present in user')
} else {
    console.log('Not present in user')
}