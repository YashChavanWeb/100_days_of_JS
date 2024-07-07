// Local Storage - Basic Testing

const nameTab = document.querySelector('.nameTag');
const myName = document.querySelector('.name');


const myAge = document.querySelector('.age');
const ageTag = document.querySelector('.ageTag');


// nameTab.innerText = localStorage.myName
// nameTab.innerText = localStorage.getItem('myName')

myName.addEventListener('input', (e) => {

    // localStorage.myName = e.target.value
    localStorage.setItem('myName', e.target.value)
    nameTab.innerText = localStorage.getItem('myName')
})


myAge.addEventListener('input', (e) => {
    localStorage.setItem('myAge', e.target.value)
    ageTag.innerText = localStorage.getItem('myAge')
})











// method to set and get the local storage items

localStorage.getItem('myName')
// localStorage.setItem('myName', e.target.value)


// Note:
// 1. localStorage is a key value pair storage
// 2. localStorage.name  - if not present then gives undefined
// 3. localStorage.getItem('name') - if no present then gives null











// converting objects to strings

// const myData = {
//     name: '',
//     age: ''
// }



// Note: we can take the data of the object from the local storage and then assign it here
const myData = JSON.parse(localStorage.getItem('myData')) || {}


// to directly fetch the data from the local storage when we reload
nameTab.innerText = myData.name || 'Yash Chavan'
ageTag.innerText = myData.age || '20'



// JSON.stringify(myData)   // converts object to string
// JSON.parse('{"name":"yash chavan","age":""}')  // converts string to object back




myName.addEventListener('input', (e) => {
    myData.name = e.target.value
    // localStorage.setItem('myData', myData)   // this is wrong to do
    localStorage.setItem('myData', JSON.stringify(myData))
})

myAge.addEventListener('input', (e) => {
    myData.age = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
})









// to delete and clear the localStorage

localStorage.clear()

localStorage.removeItem('myAge')


// Note : local storage can only be accessed on the URL on which we are working on. Not on any other URL