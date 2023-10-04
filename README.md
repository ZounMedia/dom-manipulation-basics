# HTML CSS and JS DOM Manipulation Basics

This repo shows some exaples of how to select and manipulate HTML DOM elements and how to add event listeners and handlers to elements. THere are also some full webpage examples.

## DOM Manipulation Overview

The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text. JavaScript can manipulate the DOM, allowing developers to change the content, structure, and style of a webpage in real time.

## Key DOM manipulation features

- Element Selection --> DOM elements can be selected by id, class name, tag name, and via css selectors
- Element Modification --> Javascript can be used to modify element text content within an element, setting HTML attributes, modify classes and css styling, and add/remove css classes

- Element Creation and Removal --> HTML elements can be added and removed from the DOM using Javascript

- Event Handling --> Event listeners such as click, hover, keypress, scroll can be attached to html elements allowing users to interact with the webpage

## Selecting DOM elements

HTML DOM elements can be selected from the browser in a couple of different ways:

- getElementById --> used to access an element with a specific ID → let elementById = document.getElementById("byIdResult");

- getElementsByClassName --> returns a collection of elements with a specific class name → let elementsByClassName = document.getElementsByClassName("byClassNameResult");

- getElementsByTagName --> returns a collection of elements with a specific tag name → let elementsByTagName = document.getElementsByTagName("div");

- querySelector --> returns the first element that matches a specific CSS selector → let element = document.querySelector(".myClass");

- querySelectorAll --> returns all elements that match a specific CSS selector and returns them in an array → let elements = document.querySelectorAll(".myClass");

## Manipulating DOM elements

HTML DOM elements can be manipulated in the browser in a couple of different ways:

- Changing Content --> You can change the content of an element using innerHTML → element.innerHTML = "New Content";

- Changing Attributes --> element.setAttribute("attributeName", "attributeValue");

- Changing Styles --> element.style.color = "red";

- Adding and Removing Classes -->

  - Adding → element.classList.add("newClass");
  - Removing → element.classList.remove("oldClass");

- Creating New Elements --> let newElement = document.createElement("div");

- Appending and Removing Elements -->

  - Appending → parentElement.appendChild(newElement);
  - Removing → parentElement.removeChild(childElement);

- Event Handling --> element.addEventListener("click", function() { // Code to be executed when the element is clicked});

## DOM Event Listeners/Handlers

- Click Event Handler

```js
// Get the element
var button = document.getElementById("myButton");

// Define the event handler function
function handleClick() {
  alert("Button Clicked!");
}

// Attach the event handler to the click event
button.addEventListener("click", handleClick);
```

- Mouseover and Mouseout Event Handlers

```js
// Get the element
var button = document.getElementById("myButton");

// Define the event handler function
function handleClick() {
  alert("Button Clicked!");
}

// Attach the event handler to the click event
button.addEventListener("click", handleClick);
```

- Form Submission Event Handler

```js
// Get the form element
var form = document.getElementById("myForm");

// Define the event handler function
function handleSubmit(event) {
  event.preventDefault(); // Prevents the form from actually submitting

  var input = document.getElementById("textInput");
  alert("Form Submitted with value: " + input.value);
}

// Attach the event handler to the form submission event
form.addEventListener("submit", handleSubmit);
```
