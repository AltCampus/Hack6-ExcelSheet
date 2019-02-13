
var excelSheet = document.querySelector(".main-sheet");
var grid = document.createElement("section");
grid.classList.add("sheet");

var excelData = localStorage.getItem("data") || [];


for(var i = 0; i < 2700; i++){
	var sheetInput = document.createElement("input");
	sheetInput.addEventListener('blur', handleBlur );
	sheetInput.classList.add("text-input");
	sheetInput.setAttribute("data-key", i);
	sheetInput.value = localStorage.getItem(`I${i}`) || ''; 
	grid.appendChild(sheetInput);
}
excelSheet.appendChild(grid);

// ===================================================================
// sheet data function which is pushing an string into the main array
// ===================================================================

// ===================================================================
// enter click function
// ===================================================================


excelSheet.appendChild(grid);


// name editing and storing
var fileName = document.querySelector('.fileName');

function editFileName(e){
	// console.dir(e.target);
	var edit = e.target.dataset.id;
	var parent = e.target.parentElement;
	var input = document.createElement('input');
	input.type = 'text';
	input.classList.add('editFileName')
	input.value = e.target.textContent;
	parent.replaceChild(input, e.target);
	input.focus();
	input.addEventListener('blur', (e)=> {
		let val = e.target.value;
	let parent = e.target.parentElement;
	let span = document.createElement('span');
	span.classList.add('fileName');
	span.textContent =val;
		parent.replaceChild(span, e.target);


	})
}

// focusing the element which is clicked.
var inputContainer = document.querySelector('.sheet');
// var inputElm = document.querySelectorAll('.text-input');
console.dir(inputContainer);
function handleBorder(e) {
	console.log(e.target);
	var key = e.target.dataset.key;
	if(e.target.dataset.key){
			e.target.classList.add('displayBorder');
			// e.target.focus();
	}
}

function handleBlur(e) {
	let value = e.target.value;
	e.target.classList.remove('displayBorder');
	let key = e.target.dataset.key;
	localStorage.setItem(`I${key}`,value);
}

inputContainer.addEventListener('click', handleBorder);
// file name editing and storing.
fileName.addEventListener('dblclick', editFileName);














