const container = document.querySelector(".container")





// Method 1


// for (let i = 1; i <= 100; i++) {

//     const imageDiv = document.createElement('div')
//     imageDiv.style.border = '2px solid white'

//     const image = document.createElement('img')
//     image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//     const p = document.createElement('p')
//     p.innerText = i

//     imageDiv.append(image, p)
//     container.append(imageDiv)      // most important step


// }










// Method 2

// for (let i = 1; i <= 100; i++) {

//     const imageDiv = document.createElement('div')
//     imageDiv.style.border = '2px solid white'

//     const alreadyAddedHTML =
//         `
//     <div>
//             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
//             <p>${i}</p>
//         </div>
//     `

//     imageDiv.innerHTML = alreadyAddedHTML    // we have to change innerHTML of the div and cannot append because it is a string

//     container.append(imageDiv)
// }










// Method 3

let myHTML = ` `

for (let i = 200; i <= 300; i++) {

    myHTML += `
    <div style="border: 2px solid white;">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
        <p>${i}</p>
    </div>
    `
}

container.innerHTML = myHTML
