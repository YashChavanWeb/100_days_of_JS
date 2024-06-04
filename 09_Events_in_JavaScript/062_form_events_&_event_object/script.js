
const username = document.querySelector('#username')
const paragraph = document.querySelector('p')





// 1. input event

username.addEventListener('input', (event) => {

    // - this event is accessed when we type anything in the input field


    // console.log(event)
    // here event is an event object that is passed in the addEventListener function


    // to get the value of the event object  -> .target.value
    paragraph.innerText = event.target.value


})








// 2. change event

username.addEventListener('change', (event) => {

    // - this event is accessed when I change anything in the input and then go outside input tag
    // or even if we press enter same feature we get

    paragraph.innerText = event.target.value

})










// 3. focus and blur event

username.addEventListener('blur', (event) => {

    // - this event is accessed when I click outside (blur) or click in input (focus)

    // console.log(event.type)   // show what type of event it is blur/focus/etc

    paragraph.innerText = event.target.value

})











// Note:

// - in the form if the input fields have name attributes, then after submit it will create a dynamic url combining the results in the input

// - if a form element has a button then by-default its type is submit

// - in javascript, submit event is fired on the form after clicking on the button











const form = document.querySelector('form')

console.log(form)
form.addEventListener('submit', (event) => {

    console.log(event)
    // here we actually print the event but after submit the page reloads and also it is not stored in the memory


    // TO solve this problem
    event.preventDefault()  // default behavior of form such as refresh will stop and our events will work

})












// Form Data 

const myForm = document.querySelector('form')

myForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // creating a constructor
    const myFormData = new FormData(myForm)
    console.log(myFormData)   // we get an object of the form Data with all its methods


    // iterating through all the object entries
    for (const p of myFormData.entries()) {
        console.log(p)
    }


})











// Note: Cases in which form will not submit
// - if the button is outside the form
// - if the type attribute of the form is changed to something else

// target
// - event.target -> changes based on what we click and w.r.t. which element the event is fired
// - event.currentTarget -> does not change and remains same on whom the event occured

