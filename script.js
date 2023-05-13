let form = document.getElementById("form");
let previewButton = document.getElementById("preview-button");
let resetButton = document.getElementById("reset-button");

let tableContainer = document.getElementById("table-container");
let fontPicker = document.getElementById("font-picker");
let fontColorPicker = document.getElementById("font-color-picker");
let tableColorPicker = document.getElementById("table-color-picker");

previewButton.addEventListener("click", function () {
  let tableHTML = `
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>35</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>Smith</td>
          <td>28</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Johnson</td>
          <td>42</td>
        </tr>
      </tbody>
    </table>
  `;

  tableContainer.innerHTML = tableHTML;
  tableContainer.style.backgroundColor = tableColorPicker.value;
  tableContainer.style.color = fontColorPicker.value;
  tableContainer.style.fontFamily = fontPicker.value;
});

resetButton.addEventListener("click", function () {
  form.reset();
  tableContainer.innerHTML = "";
  tableContainer.style.backgroundColor = "";
  tableContainer.style.color = "";
  tableContainer.style.fontFamily = "";
});
