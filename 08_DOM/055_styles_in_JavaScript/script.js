
// using javascript we can change only inline css styles
// code in style.css cannot be changed permanently

document.querySelector('h1').style.color = 'red'
document.querySelector('h1').style.backgroundColor = 'yellow'











// Task - change all the anchor tags color to teal

const allLinks = document.querySelectorAll('a')


// for loop 
// for (let i = 0; i < allLinks.length; i++) {
//     allLinks[i].style.color = 'teal'
//     allLinks[i].style.textDecoration = 'none'
// }



// for of
for (let link of allLinks) {
    link.style.color = 'teal'
    link.style.textDecoration = 'none'

    link.style.cssText  // this gives the entire inline css written for the element 

    link.style.cssText = `
    color: blue;
    background-color: yellow;
    border: 2px solid red;
    `
}












// Another good way to change css

document.querySelector('h1').className = 'heading-css'   // this class exists in css file
// Note: we can also set the class using set Attribute method



// Issue to address

document.querySelector('h1').className = 'heading-css'
document.querySelector('h1').className = 'new-css'
// But here new css will override all the properties of heading css - remove all classes and add new-css class

// to keep both the properties together we need to do something like this 
document.querySelector('h1').className = 'heading-css new-css'










// Best way to change css

console.log(document.querySelector('h1').classList)   // gives us a list of all the classes that are added in the element



// 1. add method
document.querySelector('h1').classList.add = 'new-class'       // now this class that we have added will not override the other classes instead it will get added with the existing ones

// 2. remove method
document.querySelector('h1').classList.remove = 'new-class'

// 3. toggle method
document.querySelector('h1').classList.toggle = 'new-class'
// toggle means - if class exists - remove it,   if class does not exists - add it
// its return value is a boolean true or false












