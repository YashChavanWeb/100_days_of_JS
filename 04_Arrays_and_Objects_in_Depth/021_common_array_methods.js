// Basic Array Methods
// 1. push()
// 2. pop()
// 3. shift()
// 4. unshift()
// Note: these methods will modify the original array

// Note: pop and shift are opposites
//   push and unshift are opposites

// Note: in an array there can be multiple duplicate elements







const evenNumbers = [0, 2, 4, 6, 8]

evenNumbers.pop()    // remove elements from behind
console.log(evenNumbers)
evenNumbers.shift()    // remove elements from front
console.log(evenNumbers)

evenNumbers.push(3)    // insert elements from end
console.log(evenNumbers)
evenNumbers.unshift(3)    // insert elements from start
console.log(evenNumbers)

// Note: pop is easy as after removing element there is no change in the index
// but after shift, removing first element, all indexes shift to right








// Basic Array Methods
// 5. concat()
// 6. indexOf()
// 7. includes()
// 8. reverse()  
// 9. sort()

const animals = ['Rat', 'Cat', 'Dog']
const oddNumber = [1, 3, 5, 7]

// 5. this concat method creates and returns a new array
const newArray = animals.concat(evenNumbers)
console.log(newArray)

// we can also concat multiple arrays
const concatNewArray = evenNumbers.concat(animals, oddNumber)
console.log(concatNewArray)

// 6. this indexOf() method returns -1 if the element not present in array
console.log(evenNumbers.indexOf(4))   // this returns the index
// Note: if there are duplicate elements, then it gives index of the first encountered one

// 7. this includes() method returns true or false value result
console.log(animals.includes('Lion'))    // returns false


// 8. reverse() method will modify the original array
console.log(animals.reverse())


// 9. .sort() method will also modify the original array
console.log(evenNumbers.sort())    // it is sorted numerically only
console.log(animals.sort())   // it is sorted alphabetically only

// but here in the string, your all first letters should be capital/small only one
// else it will sort it according to its ASCII code (each letter has its own ASCII Code)









// Important Array Methods
// 10. slice()  - it does not change the original array - gives new array
// 11. splice() - it changes the original array and also creates a new array

// 10. slice( )
console.log(evenNumbers.slice())  // this does not do anything just gives original array back
console.log(evenNumbers.slice(3))   // 3 is the index from which we will get remaining sliced array
console.log(evenNumbers.slice(1, 4))   // starts from index to ends at index 4-1 = 3

// 11. splice()
animals.splice(2, 1)  // deleted this from the original array - starts at 2 and 1 is no of elements
console.log(animals)

animals.push('Lion', 'Tiger', 'Giraffe')
console.log(animals.splice(3, 1, 'Chimpanzee'))   // delete this from array and also add Monkey at that place instead
console.log(animals)  // we can add multiplee elements in ny using , in splice method









// Example using slice
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Extracting a portion of the array without modifying the original
let citrus = fruits.slice(2, 4);
console.log(citrus); // Output: ['cherry', 'date']
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

// Example using splice
let months = ['January', 'February', 'March', 'April', 'May'];

// Removing elements from the array and optionally adding new ones
let removedMonths = months.splice(2, 2, 'June', 'July');
console.log(removedMonths); // Output: ['March', 'April']
console.log(months); // Output: ['January', 'February', 'June', 'July', 'May']

















