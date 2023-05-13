function previewHtml() {
  const htmlInput = document.getElementById('html-input').value;
  const fontSelect = document.getElementById('font-family');
  const fontColor = document.getElementById('font-color').value;
  const tableColor = document.getElementById('table-color').value;
  const previewIframe = document.getElementById('preview-iframe');
  const previewDocument = previewIframe.contentWindow.document;
  const font = fontSelect.options[fontSelect.selectedIndex].value;
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Preview</title>
        <style>
          body {
            font-family: ${font};
            color: ${fontColor};
          }
          table {
            background-color: ${tableColor};
          }
        </style>
      </head>
      <body>${htmlInput}</body>
    </html>
  `;
  previewDocument.open();
  previewDocument.write(html);
  previewDocument.close();
}

function clearForm() {
  document.getElementById('html-input').value = '';
  document.getElementById('preview-iframe').src = '';
}
