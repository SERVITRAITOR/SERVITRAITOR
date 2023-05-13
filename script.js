function preview() {
    var font = document.getElementById("font").value;
    var tableColor = document.getElementById("table-color").value;
    var previewTable = document.getElementById("preview-table");
    var fileInput = document.getElementById('html-file');
    
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        var previewText = reader.result;
        previewTable.innerHTML = previewText;
        previewTable.style.fontFamily = font;
        previewTable.style.backgroundColor = tableColor;
    }
}

function clearForm() {
    document.getElementById("form").reset();
    document.getElementById("preview-table").innerHTML = "";
}
