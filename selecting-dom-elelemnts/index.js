// Method 1: getElementById
let elementById = document.getElementById("byIdResult");
console.log("**elementById**", elementById);
elementById.textContent = "Element accessed by ID: " + elementById.id;

// Method 2: getElementsByClassName
let elementsByClassName = document.getElementsByClassName("byClassNameResult");
console.log("**elementsByClassName**", elementsByClassName);

//updating text content of the byClassNameResult element
elementsByClassName[0].textContent =
  "Elements accessed by Class Name: " + elementsByClassName.length + " found";

// Method 3: getElementsByTagName
let elementsByTagName = document.getElementsByTagName("div");
console.log("**elementsByTagName**", elementsByTagName);

//updating text content of the byTagNameResult element
document.getElementById("byTagNameResult").textContent =
  "Number of div elements: " + elementsByTagName.length;

// Method 4: querySelector and querySelectorAll
let elementsBySelector = document.querySelectorAll(".section");
console.log("**elementsBySelector**", elementsBySelector);

//updating text content of the bySelectorResult element
document.getElementById("bySelectorResult").textContent =
  "Number of elements with class 'section': " + elementsBySelector.length;
