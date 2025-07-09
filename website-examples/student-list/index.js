// Get a reference to the form using its ID
const studentForm = document.getElementById("studentForm");

// Get the <tbody> where new table rows will be added
const studentTableBody = document.getElementById("studentTableBody");

// Add an event listener to handle form submission
studentForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from reloading the page

  // Get the values from the input fields
  const name = document.getElementById("name").value.trim(); // Remove extra spaces
  const age = document.getElementById("age").value.trim();
  const major = document.getElementById("major").value.trim();

  // Check if all inputs are filled in
  if (name && age && major) {
    // Create a new <tr> element (table row)
    const row = document.createElement("tr");

    // Set the inner HTML of the row with table data cells
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${major}</td>
      `;

    // Append the new row to the table body
    studentTableBody.appendChild(row);

    // Clear the form inputs after submission
    studentForm.reset();
  }
});
