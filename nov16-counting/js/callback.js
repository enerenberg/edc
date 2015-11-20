var inputBox = document.getElementsByTagName('input')[0],
	colorBox = document.querySelector("input[type='color']"),
	submitBtn = document.getElementsByTagName('button')[0],
	htmlObj = document.querySelector("html"),
	dateObj = document.querySelector("input[type=date]");


submitBtn.addEventListener('click', function(){
	var valuE = inputBox.value;
	var coloR = colorBox.value;
	var dateobJ = dateObj.value;
	getName(valuE);
	getColor(coloR);
	myDate(dateobJ);
	// console.log(valuE);
	// console.log( getName() );
});

// inputBox.addEventListener("blur", inputGrab);
// function inputGrab(){
// 	var neuvaluE = inputBox.value;
// 	console.log(neuvaluE);
// }

function getColor(x){
	console.log(x);
	htmlObj.style.backgroundColor = x;
}

function myDate(y){
	console.log(y);
}


function getName(x){
	var resp = parseInt(x);
	if(!isNaN(resp)){
		console.log(true);
	}
}