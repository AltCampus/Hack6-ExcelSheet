
var excelSheet = document.querySelector(".main-sheet");
var grid = document.createElement("section");
grid.classList.add("sheet");

for(var i = 0; i < 2700; i++){
	var sheetInput = document.createElement("input");
	sheetInput.classList.add("text-input");
	sheetInput.setAttribute('data-key',i);
	grid.appendChild(sheetInput);
}


excelSheet.appendChild(grid);


// name editing and storing
var fileName = document.querySelector('.fileName');

function editFileName(e){
	console.dir(e.target);
	var edit = e.target.dataset.id;
	var parent = e.target.parentElement;
	var input = document.createElement('input');
	input.type = 'text';
	input.value = e.target.textContent;
	parent.replaceChild(input, e.target);
	input.focus();
	input.addEventListener('blur', ()=> {
		e.target.innerText = input.value;
	})
}

// focusing the element which is clicked.
var inputContainer = document.querySelector('.sheet');
console.dir(inputContainer);
inputContainer
// file name editing and storing.
fileName.addEventListener('dblclick', editFileName);