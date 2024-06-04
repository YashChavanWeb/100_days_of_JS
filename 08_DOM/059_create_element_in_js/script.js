const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const image = document.querySelector('img')


// for (let i = 2; i <= 100; i++) {

//     const newImage = image.cloneNode()
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.appendChild(newImage)
// }










// But what if we don't have an image then what? - we will use create element

const paraTag = document.createElement('p')
paraTag.id = 'yash'   // giving id to the new created element
container.append(paraTag.innerText = 'Hello')

// Note: we can also create unknown elements using createElement method


// Task using creating an element

for (let i = 1; i <= 100; i++) {
    const imageCreated = document.createElement('img')
    imageCreated.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.append(imageCreated)
}

















