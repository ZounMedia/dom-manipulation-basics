// Method 1: getElementById
let elementById = document.getElementById("byIdResult");
// console.log({ elementById });
// elementById.textContent = "Element accessed by ID: " + elementById.id;

// Method 2: getElementsByClassName: returnes an array of elements found with the specified class name
let byClassNameResultTotal = document.getElementsByClassName(
  "byClassNameResultTotal"
);

// console.log({ byClassNameResultTotal });

let byClassNameResult = document.getElementsByClassName("byClassNameResult");
// console.log({ byClassNameResult });

// Method 3: getElementsByTagName
let elementsByTagName = document.getElementsByTagName("div");
// console.log({ elementsByTagName });

//updating text content of the byTagNameResult element
// document.getElementById("byTagNameResult").textContent =
//   "Number of div elements: " + elementsByTagName.length;

// Method 4: querySelector: returns one element, and querySelectorAll: finds all elements based on the css selector of the element and returns the results in an array
let elementsBySelector = document.querySelector(".section");
let elementsBySelectorAll = document.querySelectorAll(".section");
// console.log({ elementsBySelector });
// console.log(elementsBySelectorAll);

//updating text content of the bySelectorResult element
// document.getElementById("bySelectorResult").textContent =
//   "Number of elements with class 'section': " + elementsBySelectorAll.length;
