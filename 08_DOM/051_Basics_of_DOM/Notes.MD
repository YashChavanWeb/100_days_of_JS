- HTML IS BY DEFAULT RESPONSIVE so no need to add CSS

- document is behind the scenes an object but we see it in HTML form in console
- to see in object form console.dir(document)

# parent children Relation

- document is a parent / object
  - it has child html tag
    - html has two children head and body tags
      - head has children meta x 3 and title and script
      - body has children all tags that we have used in it. Eg: p, h1, ul, etc.
        - ul has many li
          - li has b and i tag as children

Note: there can be only one parent for a child not two

- All these conversion of html tags to converting it into objects and giving all the parent children relations in the form of array is done by HTML parser
- also all the properties that we give in HTML are converted to object form in the style node

# All this is behind the scenes an object

- document.children - we get its children (html)
- document.body.children - we get children in the body

- document.body.children[0].innerHTML = "Yash Chavan" - with this we can change the text on the page
- the change takes place only on the current DOM not in the original source code

- difference in innerText and innerHTML
  - innerHTML we can change using html - .innerHTML = "<i>Yash</i>"
  - when we access innerHTML then the tags in the node are also shown

  - innerText it shows as we write in the string
  - when we access innerText only the text in the tag is shown
  
- document.body.children[n].src = "link of the image to write"

- const ptag = document.body.children[n]   - in this way we have stored that tag in a variable

