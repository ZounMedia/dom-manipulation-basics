// Click Event
let clickButton = document.getElementById("clickButton");
console.log({ clickButton });
// clickButton.addEventListener("click", function () {
//   let clickResult = document.getElementById("clickResult");
//   clickResult.textContent = "Button clicked!";
// });

// Mouseover Event
let mouseoverDiv = document.getElementById("mouseoverDiv");
// console.log({ mouseoverDiv });
// mouseoverDiv.addEventListener("mouseover", function () {
//   let mouseoverResult = document.getElementById("mouseoverResult");
//   mouseoverResult.textContent = "Mouseover event triggered!";
// });

// Input Change Event
let inputField = document.getElementById("inputField");
// console.log(inputField);
// inputField.addEventListener("input", function () {
//   let inputChangeResult = document.getElementById("inputChangeResult");
//   inputChangeResult.textContent = "Input changed: " + inputField.value;
// });

// Form Validation and Submit Event
let sampleForm = document.getElementById("sampleForm");
// console.log({ sampleForm });
// sampleForm.addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevents form submission and page refresh
//   let formValidationResult = document.getElementById("formValidationResult");
//   let input = sampleForm.querySelector("input");

//   //checking if the input value is empty
//   if (input.value.trim() === "") {
//     //trim() removes whitespace from both ends of a string
//     formValidationResult.textContent = "Please enter a value!";
//     formValidationResult.style.color = "red";
//   } else {
//     formValidationResult.style.color = "green";
//     formValidationResult.textContent =
//       "Form submitted with value: " + input.value;
//   }
// });
