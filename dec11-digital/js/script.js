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