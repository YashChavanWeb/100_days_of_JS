// 1. Destructuring of Arrays

const colors = ['red', 'blue', 'green', 'yellow']

// Method 1
// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]



// Method 2
const [color1, color2] = colors
// here we are creating 2 variables which will store the first two values of the array
console.log(color1)

// if we directly require a particular value 
const [, , color3] = colors
console.log(color3)  // this will give yellow

// best way to destructure particular value - treat like an object
const { 3: yellowColor } = colors
console.log(yellowColor)










// 2. Destructuring of Objects

const user = {
    name: 'Yash',
    age: 20,
    address: {
        city: 'Vasai',
        state: 'Maharashtra'
    }
}

// Method 1
// const name = user.name
// const city = user.address.city


// Method 2
const { name, age } = user  // variable name should be same as the key
console.log(name, age)

// if we want to change the name of the variable apart from the key 
const { name: username } = user
console.log(username)

// if we want to destructure object inside object
const { address: { city } } = user
console.log(city)

// another way - multilevel destructuring
const { address } = user
const { city: cityName } = address
console.log(cityName)










// 3. Destructuring for Functions

function intro(userObject) {
    console.log(userObject)
}

console.log(user)

// if we just require the name and age of the user

function introduction({ name, age }) {
    console.log(name, age)
}

introduction(user)

// in case of arrays

function getColors([a, b]) {
    console.log(a, b)
}

getColors(colors)







