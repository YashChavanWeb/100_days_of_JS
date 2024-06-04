// 1. remove

// selecting the element to be removed
const newVariable = document.querySelector("body > div > img:nth-child(5)")

// removing the element
newVariable.remove()






// 2. remove Child

const parentFound = newVariable.parentElement
const anotherVariable = document.querySelector("body > div > img:nth-child(1)")

parentFound.removeChild(anotherVariable)      // first we need to get the parent only then we can remove the child



// Note:
// - after removing a particular element, it is still in the memory of the variable it is stored in
// - so we can append or use it anytime, remove means just that it is removed from the screen

// - to void this

// const newVariable = document.querySelector("body > div > img:nth-child(5)")
// newVariable.remove()
newVariable = null     // now the data is free from the memory as well


