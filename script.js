const previewButton = document.getElementById("preview-button");
const htmlInput = document.getElementById("html-input");
const previewDiv = document.getElementById("preview-div");
const fontSelect = document.getElementById("font-select");
const tableColorSelect = document.getElementById("table-color-select");

previewButton.addEventListener("click", () => {
  const html = htmlInput.value;
  const font = fontSelect.value;
  const tableColor = tableColorSelect.value;
  
  const previewHtml = `<div style="font-family: ${font};"><table style="background-color: ${tableColor};">${html}</table></div>`;
  previewDiv.innerHTML = previewHtml;
});
