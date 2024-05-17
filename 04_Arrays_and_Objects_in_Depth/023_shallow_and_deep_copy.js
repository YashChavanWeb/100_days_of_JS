
// Lets understand when we copy a variable what happens exactly
let name1 = 'YAsh'        // here address of yash is given to name1
let name2 = name1         // the same address is copied to name2 as well
name2 += ' Chavan'        // here the address of name2 will change and it will point to a new address now
console.table({ name1, name2 })







// When to try to copy arrays and objects 

const fruits = ['Apple', 'Mango', 'Banana']
const newFruits = fruits     // here both fruits and newFruits are pointing to the same array
newFruits.push('Grapes')
console.log(newFruits)
console.log(fruits)
// Here both the arrays have changed when we did changes in just one array

const details = {
    name: 'Yash',
    age: 20
}
const newDetails = details   //the point is that even though there are 2 variables object is only one that is created
newDetails.isMarried = false
console.log(newDetails)
console.log(details)
// Here both the objects have changed when we did changes in just one object

// Note: we are changing the properties here not the actual variable







// The correct way to copy objects

const user1 = {
    name: 'YAsh',
    age: 20
}
const user2 = {}    // created a new object whose location is different

Object.assign(user2, user1)   // assign all the properties of user1 to user2

user2.age = 1212121
user2.address = 'Vasai'
console.table({ user2, user1 });
// Note : now here the value of user1 will not change on updating user2


// But the above is an old and lengthy method so we use Spread Operator (ES6)
const user3 = { ...user1 }
console.log(user3)







// The correct way to copy arrays - same as objects

const fruit1 = ['Apple', 'Grapes']
const fruit2 = []

Object.assign(fruit2, fruit1)    // this is the same old way to copy arrays
fruit2.push('Banana')
console.table({ fruit1, fruit2 });

const fruit3 = [...fruit1, ...fruit2]    // this is the most used way to copy arrays
console.log(fruit3)

const fruit4 = [].concat(fruit1)   // this is another way to copy array
console.log(fruit4)

const fruit5 = fruit1.slice()    // slice will copy the entire fruit1 array to fruit5 as it creates a new array







// When we use nested objects then the problem arises

const yash = {
    name: 'Yash',
    pata: {
        city: 'Vasai'
    }
}

const gaurav = { ...yash }
// this will create one different object, but there are two objects in the yash variable
// it means that the pata object address is still in the same place for both the objects
// so we have just duplicated outer object not the inside nested objects / arrays





// There are two types of copies

// 1. Shallow Copy:

// Copies only the top-level properties.
// Does not deeply clone nested objects.
// Methods: Object.assign({}, obj) or { ...obj }.


// 2. Deep Copy:

// Creates a new object and recursively copies all properties.
// Ensures that nested objects are also cloned, not referenced.
// Methods: JSON.parse(JSON.stringify(obj)) (not suitable for functions or special objects) or using libraries like lodash's _.cloneDeep(obj).


