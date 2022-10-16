//Log the document variable
//Add the following code to the index.js file and reload the page in the browser.

console.log(document);

//Finding an element with querySelector()

const heading = document.querySelector("h1");
console.log(heading);

//Collections of elements with querySelectorAll()

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

/*Working with NodeList
When you logged the value returned by the 
querySelectorAll() method, it stated that it was 
a NodeList. But what exactly is a NodeList?
Node is a term used to describe an element in a 
tree structure. Sometimes, the elements in the DOM 
are referred to as nodes, because the DOM is a tree structure.
A NodeList, then, is a list of elements that match the selector.
Typically, you'll want to iterate over the list of elements found
and process them in some way. The NodeList isn't an array, but it provides several 
properties and methods that allow it to be processed like an array.
You can iterate over the NodeList using the values() method, as shown below:*/

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}

//Or you can use a simple for loop to iterate over the NodeList, like this:

for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
  console.log(element);
}

/*Supporting older browsers
Very old browsers (and Internet Explorer in particular) 
don't fully support the NodeList interface. As such, the code
above may not work as intended. If you need to support Internet Explorer, 
you can use the Array.prototype.forEach() method, like this:*/

// Get a list of descriptions
const list = document.querySelectorAll(".description-display");

// Log them to the console
Array.prototype.forEach.call(list, function (element) {
  console.log(element);
});
