// get the form elements
const form = document.querySelector("#pdf-form");
const previewBtn = form.querySelector("#preview-btn");
const downloadBtn = form.querySelector("#download-btn");
const input = form.querySelector("#input-html");
const output = form.querySelector("#output-pdf");

// add event listeners to the buttons
previewBtn.addEventListener("click", generatePDFPreview);
downloadBtn.addEventListener("click", generatePDFDownload);

// function to generate a PDF preview
function generatePDFPreview() {
  // create a new jspdf instance
  const doc = new jsPDF();

  // get the input html content
  const html = input.value;

  // create a canvas element to render the input html
  const canvas = document.createElement("canvas");

  // set the canvas dimensions to the document dimensions
  canvas.width = doc.internal.pageSize.getWidth();
  canvas.height = doc.internal.pageSize.getHeight();

  // render the input html to the canvas using html2canvas
  html2canvas(html, { canvas: canvas }).then(() => {
    // add the canvas image as a page to the PDF document
    doc.addImage(canvas.toDataURL(), "JPEG", 0, 0);

    // set the output iframe source to the PDF document data
    output.src = doc.output("datauristring");
  });
}

// function to generate a PDF download
function generatePDFDownload() {
  // create a new jspdf instance
  const doc = new jsPDF();

  // get the input html content
  const html = input.value;

  // create a canvas element to render the input html
  const canvas = document.createElement("canvas");

  // set the canvas dimensions to the document dimensions
  canvas.width = doc.internal.pageSize.getWidth();
  canvas.height = doc.internal.pageSize.getHeight();

  // render the input html to the canvas using html2canvas
  html2canvas(html, { canvas: canvas }).then(() => {
    // add the canvas image as a page to the PDF document
    doc.addImage(canvas.toDataURL(), "JPEG", 0, 0);

    // download the PDF document
    doc.save("output.pdf");
  });
}
