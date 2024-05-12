// Arrays are behind the scenes objects only

// Some important points about Array
// - array is written in []
// - arrays store same category of data
// - elements in the array have order which is given by Index
// - indexing starts from 0 , length is counting the no. of elements
// - same as objects, we can insert/update/delete values in the array as we are not changing its address


// Note: type of a function is also an object but still it gives function





// Declaring the array 
const fruitsCollection = ['Apple', 'Mango', 'Banana', 'Orange']

// Accessing elements in array
console.log(fruitsCollection[2])

// Changing the values in array
fruitsCollection[1] = 'Raw Mango'
console.log(fruitsCollection[1])

// Inserting elements in array
fruitsCollection[4] = 'Water Melon'
console.log(fruitsCollection)

// Inserting elements in other way
fruitsCollection[10] = 'New fruit'
console.log(fruitsCollection)   // it will create undefined elements and then place value at 10th index





// Inserting the elements every time at the end 
fruitsCollection[fruitsCollection.length] = 'Lemons'
console.log(fruitsCollection)

// More optimized way 
fruitsCollection.push('Grapes')     // we can add multiple values in the push separated by ,
console.log(fruitsCollection)

// Removing elements in array - last element
fruitsCollection.pop()
console.log(fruitsCollection)





// Note: we can add multiple data types in a single array but it is mandatory to use just one for best practice
const randomThings = ['Yash', 21212, false, { name: 'Yash' }, [2, 3, 4]]
console.log(randomThings)






// Array is an object so can we add key value pairs here ?

// const newArray = [name: 'Yash']      -- this will give error

// But it is possible to do so
const newArray = []
newArray.firstname = 'Yash'
console.log(newArray)

// Note: the length of the array will not increase because it counts only elements not key values













