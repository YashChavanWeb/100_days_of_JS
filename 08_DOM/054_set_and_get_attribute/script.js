
// Attribute

// - attributes provide extra information about the element
// - written as:   attribute = 'value'
// - Eg: class = 'Yash'

// - not only predefined, we can also give our custom attributes in html tags
// - Eg: <h1 hello="world">Frontend Development</h1>  
// - here hello is a custom attribute


// way to select an attribute
const helloAttribute = document.querySelector('[hello="world"]')
const attribute = document.querySelector('[hello]').attributes.hello
const valueOfAttribute = document.querySelector('[hello]').attributes.hello.value

console.log(attribute)   // we get all the key value pair object form in hello attribute
console.log(valueOfAttribute)











// 1.Get Attribute Method

const getAttributeHere = document.querySelector('[hello]').getAttribute('hello')
console.log(getAttributeHere)   // here we get the value of the attribute

const getClass = document.querySelector('h1').getAttribute('class')
console.log(getClass)   // we get the classes associated with it in string format



// 2. Set Attribute

const setAttributeHere = document.querySelector('h1').setAttribute('title', 'Heading')

// Note: common attributes of HTML can be accessed directly
const idOfH1 = document.querySelector('h1').id
console.log(idOfH1)









// Task - apply css on the heading by giving it a id from DOM

const setID = document.querySelector('h1').setAttribute('id', 'heading')
// no need to console log it automatically changes the color here 