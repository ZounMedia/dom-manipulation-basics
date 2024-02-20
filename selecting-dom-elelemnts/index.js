// Method 1: getElementById
let elementById = document.getElementById("byIdResult");
// console.log("**elementById**", elementById);
// elementById.textContent = "Element accessed by ID: " + elementById.id;

// Method 2: getElementsByClassName: returnes an array of elements found with the specified class name
let byClassNameResultTotal = document.getElementsByClassName(
  "byClassNameResultTotal"
);

// console.log("**elementsByClassName**", byClassNameResultTotal);

let byClassNameResult = document.getElementsByClassName("byClassNameResult");
// console.log("**elementsByClassNameResult**", byClassNameResult);

//updating text content of the byClassNameResultTotal element (changing the first element using array index of 0)
// byClassNameResultTotal[0].textContent =
//   "Elements accessed by Class Name: " + byClassNameResult.length + " found";

//spread in the array of elements found by the query and update each conent
[...byClassNameResult].forEach(
  (element, idx) =>
    (element.textContent = `Element ${idx} text content modified`)
);

// Method 3: getElementsByTagName
let elementsByTagName = document.getElementsByTagName("div");
// console.log("**elementsByTagName**", elementsByTagName);

//updating text content of the byTagNameResult element
// document.getElementById("byTagNameResult").textContent =
//   "Number of div elements: " + elementsByTagName.length;

// Method 4: querySelector: returns one element, and querySelectorAll: finds all elements based on the css selector of the element and returns the results in an array
let elementsBySelectorAll = document.querySelectorAll(".section");
// console.log("**elementsBySelector**", elementsBySelectorAll);

//updating text content of the bySelectorResult element
// document.getElementById("bySelectorResult").textContent =
//   "Number of elements with class 'section': " + elementsBySelectorAll.length;
