
// Task:

const addCard = document.querySelector('#addCard')
const container = document.querySelector('.container')
const h1 = document.querySelector('h1')

let i = 1;
function newElement() {

    // Method 1:
    const element = document.createElement('div')
    element.classList.add('card')

    element.innerText = `${i}`
    container.append(element)
    i++;



    // console.log(event)     // with this we come to know whether the event is fired or not
}
// Note: mouse events can be fired on any element











// 1. Click , Mouse up and Mouse Down Event

addCard.addEventListener('click', newElement)
addCard.addEventListener('mousedown', newElement)
addCard.addEventListener('mouseup', newElement)


// Difference:
// - click is not fired until we click and release the click
// - mousedown is fired when we click and no need to release
// - mouse up is fired when we release the click - similar but it has its different properties











// 2. Mouse leave/out and mouse move event

addCard.addEventListener('mouseleave', newElement)
// // when mouse enters the element nothing happens, but when it leaves then the event is fired

addCard.addEventListener('mousemove', newElement)
// when your mouse moves inside the element then the event is fired











// 3. Mouse enter and mouse over event


addCard.addEventListener('mouseenter', newElement)
// // whenever the mouse enters the area of the element event is fired

addCard.addEventListener('mouseover', newElement)
// when we go over on the element then it is fired


// Difference:
// - mouse over event is fired even if we go over the child and then go over the parent and vice versa
// - mouse enter event only is fired when we go out of the parent element and then enter inside












// 4. wheel and scroll Event

addCard.addEventListener('wheel', newElement)
document.addEventListener('scroll', newElement)


// Difference:
// - scroll event is fired when actually we scroll the element
//  - wheel event is fired when we move the wheel of the mouse










// 5. touch start, touch end and touch move event  - mobile events

addCard.addEventListener('touchstart', newElement)   // fired when you touch the element
addCard.addEventListener('touchend', newElement)    // fired when you release the element
addCard.addEventListener('touchmove', newElement)    // fired when you move finger on the element










// 6. drag event

// for this first we need to make the element draggable
// <h1 draggable="true">Event Listener</h1>

h1.addEventListener('drag', newElement)    // event is fired when we drag the element

// Note: drag event does not work in mobile devices











// 7. Pointer events  - these work for both mobile and desktop

addCard.addEventListener('pointermove', newElement)
// - pointer move works as mousemove in desktop and touch move in mobile together


addCard.addEventListener('pointerenter', newElement)
addCard.addEventListener('pointerleave', newElement)

