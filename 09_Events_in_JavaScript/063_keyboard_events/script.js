

// There are 3 types of keyboard events
// 1. key press - fires when we press a key
// 2. Key up - fires when we release a key
// 3. Key down - fires when we only press a key but has all the keys shift, alt, etc









// Note:
// - we can apply keyboard event on any element just that element must be in focus only then it works
// - input element is focusable element but h1 is not

// - the elements which are not focusable we can make them focusable by tabindex attribute
// - <h1 tabindex="0">Keyboard Events</h1>

// - but mostly we apply the key events on the window object









// 1. Key Press Event

const input = document.querySelector('input')

input.addEventListener('keypress', (e) => {

    // console.log(e)   // gives the event object of every letter

    console.log(e.key)    // gives the key / letter what we have typed
    // keys that don't type eg. shift are not seen here
})



const h1 = document.querySelector('h1')

h1.addEventListener('keypress', (e) => {

    console.log(e.key)
})



window.addEventListener('keypress', (e) => {

    // console.log(e)    // gives all the properties of the key press event

    console.log('Key: ', e.key)     // key value may change caps, small, diff language
    console.log('Key Code: ', e.code)     // key code remains the same

})








// 2. Key Up Event and Down

window.addEventListener('keyup', (e) => {

    // console.log(e)    // gives all the properties of the key press event

    console.log('Key: ', e.key)
    console.log('Key Code: ', e.code)

    // Note: here shift tab all the buttons will be clicked
})





window.addEventListener('keydown', (e) => {

    // console.log(e)    // gives all the properties of the key press event

    console.log('Key: ', e.key)
    console.log('Key Code: ', e.code)

    // Note: 
    // - here shift tab all the buttons will be clicked
    // - it is  quite similar to key press event
})