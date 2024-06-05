
// Event Simulators:

// events that occur on clicking we can perform using javascript
// 1. click() -> button
// 2. focus() and blur() -> input
// 3. submit() and reset() -> form 



// Task:

const addCard = document.querySelector('#addCard')
const container = document.querySelector('.container')
const h1 = document.querySelector('h1')
const input = document.querySelector('input')
const form = document.querySelector('form')

let i = 1;
function newElement() {

    // Method 1:
    const element = document.createElement('div')
    element.classList.add('card')

    element.innerText = `${i}`
    container.append(element)
    i++;
}

addCard.addEventListener('click', newElement)


// Clicking using javascript

addCard.click()

// this loop will click the button 100 times
for (let i = 2; i <= 100; i++) {
    addCard.click()
}










// 1. click() 

// use set interval to print the cards in slow motion

setInterval(() => {
    addCard.click()
}, 200)




// stop the interval after completing 100 cards
const intervalID = setInterval(() => {

    if (i >= 100) {
        clearInterval(intervalID)    // interval id of the most recent interval so we stop the interval after that
    }

    addCard.click()
}, 20)









// 2. focus() and blur

setTimeout((e) => {
    input.focus()
    console.log('Input focused')
}, 3000)


setTimeout((e) => {
    input.blur()
    console.log('Input Blurred')
}, 5000)









// 3. submit() and reset()

setTimeout((e) => {
    console.log('Form Submitted')
    form.submit()

    console.log('Form resetted')
    form.reset()

}, 5000)














