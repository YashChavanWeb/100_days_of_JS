
// Event delegation:
//  - instead of adding event listener to each children we add it to the parent element
//  - and then apply it on its target child


// Task:

const addCard = document.querySelector('#addCard')
const container = document.querySelector('.container')

let i = 1;
function newElement() {

    // Method 1:
    const element = document.createElement('div')
    element.classList.add('card')




    // // - we want to add a functionality to delete a card when we click on it
    // // - but if we do this, then on every card there is an event listener which increases memory

    // element.addEventListener('click', () => {
    //     element.remove()
    // })





    element.innerText = `${i}`
    container.append(element)
    i++;
}

addCard.addEventListener('click', newElement)














// so to solve the memory problem and optimize the browser we can add event listener on the parent

container.addEventListener('click', (e) => {

    //  this gives which latest element is firing the event
    console.log(e.target)

    if (e.target !== container)     // we have applied this condition so that when we click on container the button should not remove
        e.target.remove()

    // Eg: if we click on any card, so that card is firing the click event so that card element will be logged
})