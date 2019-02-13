var excelSheet = document.querySelector(".main-sheet");
var grid = document.createElement("section");
grid.classList.add("sheet");

for(var i = 0; i < 2700; i++){
	var sheetInput = document.createElement("input");
	sheetInput.classList.add("text-input");
	// sheetInput.setAttibute();
	grid.appendChild(sheetInput);
}


excelSheet.appendChild(grid);
