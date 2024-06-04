
//<script src="script.js" defer></script>

// 1. no attribute - blocks the HTML until entire js is loaded and executed
// 2. defer - execution is deferred until entire HTML is loaded and then js is executed
// 3.  async - starts executing as the html keeps  on loading without html loading completion








// 1. appendChild

const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')


// append - add something to the end of a return document
container.appendChild(h1)   // it will remove that element from original place and then append it 


// to copy a particular element
h1.cloneNode()   // copies just the tag
h1.cloneNode(true)    // copies entire with the text

container.appendChild(h1.cloneNode(true))










// Task - cloning the card

container.appendChild(card.cloneNode(true))
container.appendChild(card.cloneNode(true))
container.appendChild(card.cloneNode())


for (let i = 2; i <= 20; i++) {

    let clonedNode = card.cloneNode()
    clonedNode.innerText = i
    container.appendChild(clonedNode)

    // Note: whenever working with the Nodes, we need to first store them in variables to apply properties
}


// Note:
// - we can append any element inside any Element, just it should not be the parent of that element
// - we can anything that is outside the parent element as well, just is should not be the parent element









// 2. append

container.append('Yash')
container.append(' Yash', ' is', ' God')


// container.appendChild('Yash')   // this gives error
// To overcome this issue: we will create a node and then appendChild it
const createTextNode = document.createTextNode('Chavan is the best')
container.appendChild(createTextNode)



// Note:
// - return value of append is undefined whereas that of appendChild is the element that is appended
// - in appendChild the append value should always be a node whereas in append you can even append a string
// - using append we can append multiple things whereas appendChild will append only one and ignore the rest


