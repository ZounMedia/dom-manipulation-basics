// Method 1: innerHTML
let innerHTMLResult = document.getElementById("innerHTMLResult");
innerHTMLResult.innerHTML = "<strong>Modified</strong> Content with innerHTML";

// Method 2: textContent
let textContentResult = document.getElementById("textContentResult");
textContentResult.textContent = "Modified Content with textContent";

// Method 3: setAttribute
let setAttributeResult = document.getElementById("setAttributeResult");
setAttributeResult.setAttribute("class", "modifiedClass");

// Method 4: style
let styleResult = document.getElementById("styleResult");
styleResult.style.color = "blue";
styleResult.style.fontSize = "20px";

// Method 5: classList
let classListResult = document.getElementById("classListResult");
classListResult.classList.add("newClass");
classListResult.classList.remove("originalClass");
