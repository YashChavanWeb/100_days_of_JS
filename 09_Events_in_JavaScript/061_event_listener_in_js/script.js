
// Events

function sayHi() {
    console.log('Hello')
}


// 1. onClick attribute in html tags
// - onclick="sayHi()"
// - onclick="console.log('Heading Clicked')
// Limitation: only one time click is not possible, user can click multiple times








// 2. onclick property in Js
const h2 = document.querySelector('h2')
h2.onclick = sayHi
// h2.onclick = sayHi() this will call the function even before clicking

// Limitation: if there are two event listeners on same element, only second will be called as it overrides











// 3. add event listener
const h3 = document.querySelector('h3')
h3.addEventListener('click', sayHi)

h3.addEventListener('click', () => {
    console.log('second Hi')
})

// Note: if there are two event listeners on same element then both will be applied









// Task:

const addCard = document.querySelector('#addCard')
const container = document.querySelector('.container')

let i = 1;
function newElement() {

    // Method 1:
    const element = document.createElement('div')
    element.classList.add('card')


    // Method 2:
    // const newCard = card.cloneNode()
    // newCard.classList.remove('addCard')

    element.innerText = `${i}`
    container.append(element)
    i++;
}

addCard.addEventListener('click', newElement)




