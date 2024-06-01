// BOM - Browser Object Model
// this is basically the window object which we are talking about






// 1. location - url of the website and many other helpful function

// location.reload()  reloads the page
// - if we write this in code then it will be an infinite loop

// location.href  gives the url of the page and also we can assign it
// location.href = 'yashchavan.js'  or location.href = 'https://google.com'






// 2. history - back arrow and front arrow of the web page stored total no of pages we visited
// history.length - gives the length of the no of websites we visited on this tab

// history.back() - goes to the previous page
// history.go(-1) - goes to previous page

// history.forward() - goes to the next page
// history.go(+4) - goes to 4th next page






// 3. height and width
// innerHeight - gives the inner height of webpage
// outerWidth - gives the outer width of the webpage
// - same for innerWidth and outerHeight






// 4. open and close
// opens a new tab and its return value is a window object
// open('https://google.com')  - it will redirect to same ip address /new address
// open('https://google.com', 'yashchavan')  - the name keyword will be assigned with yashchavan

// close() - we can close only those windows that we have opened using the js not by cursor








// 5. resizeBy and resizeTo     ,      moveTo and moveBy
// this only works if we have opened that window using script

// open('https://google.com', 'resizable')
// resizeTo(600, 500)

// moveTo(0,0)  // the tab moves accordingly






// 6. scrollBy and scroll

// scrollBy(0, 50)  - scrolls in y direction in pixels

// scroll() - various properties we can have like smooth etc 






// 7. print()
// - we call this to print the webpage - same as ctrl + p shortcut






// 8. document
// - DOM and BOM are not core js concepts they are a part of webapi


















