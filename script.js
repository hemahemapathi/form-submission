const addToTable = document.getElementById("form");

addToTable.addEventListener("submit", function (event) {
  event.preventDefault(); 

 
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const cars = [];

  
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function (checkbox) {
    cars.push(checkbox.nextElementSibling.textContent);
  });

 
  const tableBody = document.querySelector(".table tbody");
  const newRow = tableBody.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);
  const cell7 = newRow.insertCell(6);
  const cell8 = newRow.insertCell(7);


  cell1.textContent = firstName;
  cell2.textContent = lastName;
  cell3.textContent = gender;
  cell4.textContent = address;
  cell5.textContent = pincode;
  cell6.textContent = state;
  cell7.textContent = country;
  cell8.textContent = cars.join(", ");

  document.getElementById("form").reset();
});

