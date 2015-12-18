/* js goes here */

var blankNums = document.getElementsByClassName('num'),
	 colons = document.getElementsByClassName('colon'),
	 timerId = window.setInterval(runClock, 1000);

for(var i = 0; i < blankNums.length; i++){
	var imgNum = document.createElement('img');
	imgNum.src = 'img/num-0.png';
	blankNums[i].appendChild(imgNum);
}

for(var j = 0; j < colons.length; j++){
	var imgColon = document.createElement('img');
	imgColon.src = 'img/dots_on.png';
	colons[j].appendChild(imgColon);
}

var secDouble = document.querySelector('#second-00 img'),
	secSingle = document.querySelector('#second-0 img'),
	minDouble = document.querySelector('#minute-00 img'),
	minSingle = document.querySelector('#minute-0 img'),
	hourDouble = document.querySelector('#hour-00 img'),
	hourSingle = document.querySelector('#hour-0 img');

function runClock(){
	var thisTime = new Date();
	getSeconds(thisTime.getSeconds());
	getMinutes(thisTime.getMinutes());
	getHours(thisTime.getHours());
}

function getSeconds(x){
	var sec = x.toString();
	if(sec < 10){
		sec = '0'+sec;
	}
	// console.log(sec.split(''));
	secDouble.src = 'img/num-'+sec.split('')[0]+'.png';
	secSingle.src = 'img/num-'+sec.split('')[1]+'.png';
}
function getMinutes(y){
	var min = y.toString();
	if(min < 10){
		min = '0'+min;
	}
	minDouble.src = 'img/num-'+min.split('')[0]+'.png';
	minSingle.src = 'img/num-'+min.split('')[1]+'.png';
}

function getHours(z){
	var hour = z.toString();
	if(hour < 10){
		hour = '0'+hour;
	}
	hourDouble.src = 'img/num-'+hour.split('')[0]+'.png';
	hourSingle.src = 'img/num-'+hour.split('')[1]+'.png';
}


// var nums = document.getElementsByClassName('num'), //set array of elements
// 	cols = document.getElementsByClassName('colon'), //set array of elements
// 	timerId = window.setInterval(runClock, 1000); //set interval timer

// for(var i = 0; i < nums.length; i++){ //loop through array
// 	var num = document.createElement('img'); //create image element
// 	num.src = 'img/num-0.png'; //set default image source
// 	nums[i].appendChild(num); //append image to div
// }
// for(var j = 0; j < cols.length; j++){ //loop through array
// 	var col = document.createElement('img'); //create image element
// 	col.src = 'img/dots_on.png'; //set default image source
// 	cols[j].appendChild(col); //append image to div
// }

// var sDbl = document.querySelector('#ss-00 img'), //get image inside of id element
// 	sSgl = document.querySelector('#ss-0 img'), //get image inside of id element
// 	mDbl = document.querySelector('#mm-00 img'), //get image inside of id element
// 	mSgl = document.querySelector('#mm-0 img'), //get image inside of id element
// 	hDbl = document.querySelector('#hh-00 img'), //get image inside of id element
// 	hSgl = document.querySelector('#hh-0 img'); //get image inside of id element

// function runClock(){
// 	var d = new Date(); //create a new instance of the Date object

// 	var hh = d.getHours(); //get Date hours
// 	var mm = d.getMinutes(); //get Date minutes
// 	var ss = d.getSeconds(); //get Date seconds

// 	var h = hh; //set h to equal hh
// 	if(hh >= 12){ //if 24 hour clock
// 		h = hh - 12; //set h to hh minus 12
// 	}

// 	h = h < 10 ? '0' + h : h; //ternary operator
// 	mm = mm < 10 ? '0' + mm : mm; //ternary operator
// 	ss = ss < 10 ? '0' + ss : ss; //ternary operator

// 	h = h.toString().split(''); //convert to string and split into array
// 	mm = mm.toString().split(''); //convert to string and split into array
// 	ss = ss.toString().split(''); //convert to string and split into array

// 	sDbl.src = 'img/num-' + ss[0] + '.png'; //set source to 0th array element
// 	sSgl.src = 'img/num-' + ss[1] + '.png'; //set source to 1st array element
// 	mDbl.src = 'img/num-' + mm[0] + '.png'; //set source to 0th array element
// 	mSgl.src = 'img/num-' + mm[1] + '.png'; //set source to 1st array element
// 	hDbl.src = 'img/num-' + h[0] + '.png'; //set source to 0th array element
// 	hSgl.src = 'img/num-' + h[1] + '.png'; //set source to 1st array element
// }