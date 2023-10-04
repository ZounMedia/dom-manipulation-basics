//store button, input, and error span as variables
let input = document.querySelector("input");
const submitBtn = document.querySelector("button");
let errorText = document.querySelector("span.error-text");
const errorIcon = document.querySelector("img.error");
const form = document.querySelector("form");

//add click event listener to button
submitBtn.addEventListener("click", (event) => {
  //   console.log({ input, submitBtn, errorText, inputValue: input.value });

  //reset error text value to empty
  errorText.classList.remove("active");
  errorIcon.classList.remove("active");

  if (
    input.value.length === 0 ||
    !(input.value.includes("@") && input.value.includes(".com"))
  ) {
    errorText.classList.add("active");
    errorIcon.classList.add("active");
    form.classList.add("active");
    //prevent form from submitting
    event.preventDefault();
    return;
  }

  //reset input value to empty string after submit
  input.value = "";
});
