

// 1. innerHTML - we get the entire HTML in the element 

const paragraph = document.querySelector('#paragraph')
console.log(paragraph.innerHTML)
paragraph.innerHTML = '<h4>Hello This is Yash Chavan</h4>'


// 2. innerText - we don't get the tags and all we just get the text inside the element
paragraph.innerText = 'Yash Chavan'


// 3. text content - as we have written in the code same we get with \n, etc
// Note: also extra spaces are not seen in browser but in text content we can see everything
console.log(paragraph.innerText)









// Difference:
// - display none or visibility hidden - then we don't see the text in the innerText
// - but as text content is part of code so we can see everything in textContent

// Visibility and Display
// - display none - space also is not seen the element never exists
// - visibility hidden - space is there and element exists just cannot be seen

// Note:
// visibility hidden - element is not present but can be clicked and selected
// opacity 0 and pointer events none - element cannot be selected or clicked    

