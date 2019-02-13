var excelSheet = document.querySelector(".main-sheet");
var grid = document.createElement("section");
grid.classList.add("sheet");

var excelData = localStorage.getItem("data") || [];


for(var i = 0; i < 2700; i++){
	var sheetInput = document.createElement("input");
	sheetInput.classList.add("text-input");
	sheetInput.setAttribute("data-key", i);
	grid.appendChild(sheetInput);
}
excelSheet.appendChild(grid);

// ===================================================================
// sheet data function which is pushing an string into the main array
// ===================================================================
function sheetData(){
	var inputValue = sheetInput.value;
	excelData.push(inputValue);
	localStorage.setItem("data",inputValue);
	display(excelData);
	console.log(inputValue);
}

// ===================================================================
// enter click function
// ===================================================================
function enterClick(e){
	console.log(e);
	e.preventDefault();
	if(e.keyCode == 13){
		sheetData();
	}
}

function display(){
	// sheetInput.innerText = excelData;
	localStorage.getItem("data");
}
display(sheetData);

document.addEventListener("keyup", enterClick);

