
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')




// Event Bubbling:

// - when event is added for the parent element, even if we click on its child - the event is fired

// - When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors

// - his means that the event is first captured and handled by the innermost element, and then it is propagated to outer elements, eventually reaching the document object.

// - even if we click on the paragraph and it does not have any listener then too it goes on bubbling and firing the events on its parents

// - stop propagation -> we cannot go to its parent we will stop event there


window.addEventListener('click', (e) => {
    console.log('6. Window Event is clicked')
})

document.addEventListener('click', (e) => {
    console.log('5. Document Event is clicked')
})

document.body.addEventListener('click', (e) => {
    console.log('4. Body Event is clicked')
})

green.addEventListener('click', (e) => {
    console.log('3. Green Event is clicked')
})

red.addEventListener('click', (e) => {
    console.log('2. Red Event is clicked')

    e.stopPropagation()
    // with the help of this we can stop the event from bubbling
    // it will start from para -> yellow -> red and then stop and will not bubble to green 
})

yellow.addEventListener('click', (e) => {
    console.log('1. Yellow Event is clicked')
})













// Event Capturing:

// - when we give a third argument to the add Event listener then it will propagate from parent to that element

// - propagation takes place from window till that element


window.addEventListener('click', (e) => {
    console.log('6. Window Event is clicked')
}, true)

document.addEventListener('click', (e) => {
    console.log('5. Document Event is clicked')
}, true)

document.body.addEventListener('click', (e) => {
    console.log('4. Body Event is clicked')
}, true)

green.addEventListener('click', (e) => {
    console.log('3. Green Event is clicked')
}, true)

red.addEventListener('click', (e) => {
    console.log('2. Red Event is clicked')
}, true)

// yellow.addEventListener('click', (e) => {
//     console.log('1. Yellow Event is clicked')
// }, true)






yellow.addEventListener('click', (e) => {
    console.log('1. Yellow Event is clicked')
}, { capture: true, once: true })

// - with this capture is true then capturing takes place
// - once is true then event listener will work only once and then it will not work

