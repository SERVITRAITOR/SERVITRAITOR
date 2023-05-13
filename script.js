function preview() {
  var text = document.getElementById("text-input").value;
  var fontFamily = document.getElementById("font-family").value;
  var backgroundColor = document.getElementById("background-color").value;
  var preview = document.getElementById("preview");
  preview.style.fontFamily = fontFamily;
  preview.style.backgroundColor = backgroundColor;
  preview.innerHTML = text
