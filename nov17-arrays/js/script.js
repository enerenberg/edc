/* js goes here */

var outputBox = document.querySelector('#output input');
var printBtn = document.getElementById('printBtn');
var pushBtn = document.getElementById('pushBtn');
var reverseBtn = document.getElementById('reverseBtn');
var popBtn = document.getElementById('popBtn');
var shiftBtn = document.getElementById('shiftBtn');
var unshiftBtn = document.getElementById('unshiftBtn');
var sortBtn = document.getElementById('sortBtn');
var joinBtn = document.getElementById('joinBtn');
var sliceBtn = document.getElementById('sliceBtn');
var spliceBtn = document.getElementById('spliceBtn');


var theArr = [];

// printBtn.addEventListener('click', printArr);
function printArr(){
	//var val = this.previousElementSibling.value;
	outputBox.value = theArr;
	//this.previousElementSibling.value = '';
}

pushBtn.addEventListener('click', pushArr);
function pushArr(){
	var val = this.previousElementSibling.value;
	theArr.push(val);
	printArr();
	this.previousElementSibling.value = '';
}

reverseBtn.addEventListener('click', reverseArr);
function reverseArr(){
	theArr.reverse();
	printArr();
}

popBtn.addEventListener('click', popArr);
function popArr(){
	var val = theArr.pop();
	printArr();
	this.previousElementSibling.value = val;
}

shiftBtn.addEventListener('click', shiftArr);
function shiftArr(){
	var val = theArr.shift();
	printArr();
	this.previousElementSibling.value = val;
}

unshiftBtn.addEventListener('click', unshiftArr);
function unshiftArr(){
	var val = this.previousElementSibling.value;
	theArr.unshift(val);
	printArr();
	this.previousElementSibling.value = '';
}

sortBtn.addEventListener('click', sortArr);
function sortArr(){
	var val = this.previousElementSibling.value;
	if(val === 'numbers'){
		theArr.sort(comparison);
		printArr();
	}else{
		theArr.sort();
		printArr();
	}
	theArr.sort();
	printArr();
}
function comparison(x, y){
	return x - y;
}

joinBtn.addEventListener('click', joinArr);
function joinArr(){
	var val = this.previousElementSibling.value;
	var str = theArr.join(val);
	outputBox.value = str;
}

sliceBtn.addEventListener('click', sliceArr);
function sliceArr(){
	var val = this.previousElementSibling.value;
	var val = val.split(',');
	var newArr = theArr.slice(val[0], val[1]);
	// console.log(theArr);
	// console.log(newArr);
	printArr();
	this.previousElementSibling.value;
	// var str = theArr.slice(val);
	//outputBox.value = theArr;
	
}

spliceBtn.addEventListener('click', spliceArr);
function spliceArr(){
	var val = this.previousElementSibling.value;
	var val = val.split(',');
	for(var i = 0; i < val.length; i++){
		var newArr = theArr.splice(val[i]);
	}
	//var newArr = theArr.splice(val[0], val[1]);
	//theArr = theArr.splice(val[0], val[1]);
	printArr();
	// var str = theArr.slice(val);
	//outputBox.value = theArr;
	//this.previousElementSibling.value;
}


