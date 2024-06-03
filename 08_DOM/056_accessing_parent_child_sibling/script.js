
const firstLink = document.querySelector('#first_link')


// 1. Accessing the Parent

console.log(firstLink.parentElement)
console.log(firstLink.parentElement.parentElement.parentElement.parentNode)   // parent node of html is a document  

// HTML element is the topmost parent level










// 2. Accessing the Children

console.log(firstLink.parentElement.parentElement.children)   // body.children technically
// this will give a HTML collection of all the children in the body tag

console.log(firstLink.parentElement.parentElement.childNodes)   // body.childNodes
// nodes will be either equal or more than the children


// Note:
// - element will always be a node
// - other things that are not element will also be node (will be discussed later)










// 3. Accessing the sibling

console.log(firstLink.nextElementSibling.nextElementSibling.nextElementSibling)
console.log(firstLink.previousElementSibling)

console.log(firstLink.nextSibling)
// this gives output of an object which has various properties which is actually a string


// The difference:
// - nextElementSibling -> gives the next element and skips the node
// - nextSibling -> gives the next node



