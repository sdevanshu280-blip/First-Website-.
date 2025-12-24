 const form = document.querySelector("form");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const course = document.querySelector("select").value;

  if (name === "" || email === "" || course === "") {
    alert("Please fill all required fields.");
    return;
  }

  // Create a new row
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell(0);
  const courseCell = newRow.insertCell(1);
  const emailCell = newRow.insertCell(2);

  nameCell.textContent = name;
  courseCell.textContent = course;
  emailCell.textContent = email;

  form.reset();
});