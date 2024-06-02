// Element Selectors

const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)    // this gives an array of all the p tags
console.log(paragraphs[1])    // we can access the elements by indexes then

const allImages = document.images
console.log(allImages)

const heading = document.getElementsByClassName('heading')
console.log(heading)   // selects all the images having the classname as heading

const cssImage = document.getElementById('cssImage')
function changeImage() {
    cssImage.src = 'https://cdn.pixabay.com/photo/2023/06/25/11/12/orange-flowers-8087066_1280.jpg'
}       // after we call this function then the image will change

// Note: This gives a HTML collection 











// Most common way of selecting elements

const cssImageClass = document.querySelector('.cssImage')   // selects Element with this class name
const cssImageId = document.querySelector('#cssImage')  // select Element with this id name
const cssImageAllClass = document.querySelectorAll('.cssImage')  // select all elements with this class name
const cssImageAllId = document.querySelectorAll('#cssImage')  // select all elements with this id name
const cssImageAll = document.querySelectorAll('[alt="Yash Chavan"')  // select all elements with this attribute
const cssImageLi = document.querySelectorAll('ul li')  // select all lis inside the ul

// Note: this gives a nodeList on which we can perform array methods









// Change all the images when the function is called
const newImages = [
    'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717308000&semt=sph',

    'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg',

    'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80'
]


const selectAllImages = document.querySelectorAll('img')

// selectAllImages[0].src = newImages[0]
// selectAllImages[1].src = newImages[1]
// selectAllImages[2].src = newImages[2]

function changeAllImages() {

    // for loop
    // for (let i = 0; i < selectAllImages.length; i++) {
    //     selectAllImages[i].src = newImages[i]
    // }

    // for each loop
    selectAllImages.forEach((image, index) => {
        image.src = newImages[index]
    })

}


// Note: document.images - will give a html collection so we cannot apply for each
// - so to overcome it we have to first convert the collection into array using
// spread operator [...document.imagese]












// using selectors by chaining

const ul = document.querySelectorAll('ul')
const cssImages = ul.querySelectorAll('#cssImages')
// it will only search this id only in ul not in entire document




