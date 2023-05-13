function previewHTML() {
  var htmlCode = document.getElementById("html-code").value;
  var fontFamily = document.getElementById("font-family").value;
  var bgColor = document.getElementById("bg-color").value;
  
  document.getElementById("preview").innerHTML = htmlCode;
  document.getElementById("preview").style.fontFamily = fontFamily;
  document.getElementById("preview").style.backgroundColor = bgColor;
}
