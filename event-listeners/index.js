// Click Event
var clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", function () {
  var clickResult = document.getElementById("clickResult");
  clickResult.textContent = "Button clicked!";
});

// Mouseover Event
var mouseoverDiv = document.getElementById("mouseoverDiv");
mouseoverDiv.addEventListener("mouseover", function () {
  var mouseoverResult = document.getElementById("mouseoverResult");
  mouseoverResult.textContent = "Mouseover event triggered!";
});

// Input Change Event
var inputField = document.getElementById("inputField");
inputField.addEventListener("input", function () {
  var inputChangeResult = document.getElementById("inputChangeResult");
  inputChangeResult.textContent = "Input changed: " + inputField.value;
});

// Form Validation and Submit Event
var sampleForm = document.getElementById("sampleForm");
sampleForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents form submission and page refresh
  var formValidationResult = document.getElementById("formValidationResult");
  var input = sampleForm.querySelector("input");
  if (input.value.trim() === "") {
    formValidationResult.textContent = "Please enter a value!";
  } else {
    formValidationResult.textContent =
      "Form submitted with value: " + input.value;
  }
});
